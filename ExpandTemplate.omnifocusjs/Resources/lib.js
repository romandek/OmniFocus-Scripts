var _ = function() {
	var lib = new PlugIn.Library(new Version("0.1"));

	const DateKind = {
		DEFER: 1,
		DUE: 2
	}

	// Find variables in text (thanks to Thomas Kern)
	lib.findVariables = (text, variablesFound) => {
		substrings = text.match(/\$\{[^\}]*\}/gm);
		if (substrings != null) {
			for (var i = 0; i < substrings.length; i++) {
				var variable = substrings[i];
				if (!variablesFound.includes(variable)) {
					console.log("Found variable " + variable);
					variablesFound.push(variable);
				}
			}
		}
	};

	// Find all the variables used in the template
	lib.findVariablesInTemplate = (template) => {
		// Find the variables used in the template
		var templateVariables = [];
		template.task.apply((task) => {
			lib.findVariables(task.name, templateVariables);
			lib.findVariables(task.note, templateVariables)
		});

		return templateVariables;
	};

	// Replace variables in the string with those from the form
	lib.replaceVariables = (text, variables) => {
		var result = text;
		for (var variable in variables) {
			var value = variables[variable];
			result = result.replace(new RegExp('\\' + variable, 'g'), value);
		}

		return result;
	};

	// Replace any variables in the task title or note
	lib.replaceVariableInTask = (task, variables) => {
		//console.log('Processing Task ' + task.name);
		task.name = lib.replaceVariables(task.name, variables);
		task.note = lib.replaceVariables(task.note, variables);
	};

	lib.GetDefaultValueForVariable = (variable) => {
		switch (variable) {
			case '${Date}' : {
				var options = {
					weekday: 'short',
					year: 'numeric',
					month: 'short',
					day: 'numeric'
				};
				return new Date().toLocaleDateString('en-UK', options);
			}
			case '${Time}' : {
				var options = {
					hour: '2-digit',
					minute: '2-digit',
					hour12: false
				};
				return new Date().toLocaleTimeString('en-UK', options);
			}
			default:
				return null;
		}
	}

	lib.setDefaultTime = (kind, date) => {

		var result = date;

		switch(kind) {
			case DateKind.DEFER:
				var time = settings.objectForKey("DefaultStartTime").split(":").map(e => { return parseInt(e)});
				break;

			case DateKind.DUE:
				var time = settings.objectForKey("DefaultDueTime").split(":").map(e => { return parseInt(e)});
				break;
		}

		result.setHours(time[0], time[1], time[2]);

		return result;
	}

	lib.dateDelta = (date1, date2) => {
		let ret = 0;

		let msPerDay = 8.64e7;

		// Copy dates so don't mess them up
		let d1 = date1;
		let d2 = date2;

		if (d1 != null && d2 != null) {
			// Set to noon - avoid DST errors
			d1.setHours(12,0,0);
			d2.setHours(12,0,0);

			ret = Math.round( (d2 - d1) / msPerDay );
		}

		return ret;
	}

	lib.dateShift = (date, delta = 0) => {
		let ret = date; 

		let msPerDay = 8.64e7;

		if (delta !== 0){
			ret = new Date(date - (delta * msPerDay));
		}

		return ret; 
	}

	// Adjust dates from template
	lib.adjustDates = (_task, _deadline, _origDue) => {

		var newDueDate   = new Date(_deadline);
		var newDeferDate = new Date(); 

		if (_task.dueDate != null) {

			var origDueDelta   = lib.dateDelta(_task.dueDate, _origDue);
			var origDeferDelta = lib.dateDelta(_task.deferDate, _task.dueDate);

			if (origDueDelta !== 0) {
				newDueDate = lib.dateShift(newDueDate, origDueDelta);
			}

			if (origDeferDelta !== 0) {
				newDeferDate = lib.dateShift(newDueDate, origDeferDelta);
			}
			else {
				newDeferDate = lib.dateShift(newDueDate);
			}

			_task.deferDate = lib.setDefaultTime(DateKind.DEFER, newDeferDate);
			_task.dueDate = lib.setDefaultTime(DateKind.DUE, newDueDate);
		} 
		else if (_task.deferDate != null) {

			var origDeferDelta = lib.dateDelta(_task.deferDate, _origDue);

			newDeferDate = new Date(_task.effectiveDueDate);

			if (origDeferDelta !== 0)
			{
				newDeferDate = lib.dateShift(newDeferDate, origDeferDelta);	
			}	

			_task.deferDate = lib.setDefaultTime(DateKind.DEFER, newDeferDate);	
		}
	}

	// Process the template
	lib.expandTemplate = (template, form) => {
		console.log('Processing Template ' + template.name);
		// Duplicate the template project
		var project = duplicateSections([template], template.before)[0];

		// Make it active
		project.status = Project.Status.Active;

		// Replace any variables in the project
		project.task.apply((task) => {
			lib.replaceVariableInTask(task, form.values);
		});
		
		let origProjDue = project.dueDate;

		// Update task dates 
		project.task.apply((task) => {
			lib.adjustDates(task, form.values['deadline'], origProjDue);
		});

		// Open the new project
		var url = URL.fromString('omnifocus:///task/' + encodeURIComponent(project.name));
		url.call(reply => {});
	};

	lib.expand = (template) => {
		var templateVariables = lib.findVariablesInTemplate(template);
		if (templateVariables.length == 0) {
			throw new Error("Project is not a template, add a ${Variable} to the title or note");
		}

		// Open a form to collect values for variables in the template
		var inputForm = new Form();

		var dc = new DateComponents(); dc.day = 7;
        var cal = Calendar.current;
        var time = settings.objectForKey("DefaultDueTime").split(":").map(e => { return parseInt(e)})
        var defaultDeadline = cal.dateByAddingDateComponents(new Date(), dc);        
            defaultDeadline = lib.setDefaultTime(DateKind.DUE, defaultDeadline);


        var deadlineField = new Form.Field.Date(
            "deadline",
            "Deadline",
            defaultDeadline/*,
            new Formatter.Date.withStyle(Formatter.Date.Style.Short)*/
        )

        inputForm.addField(deadlineField);

		for (var i = 0; i < templateVariables.length; i++) {
			var variable = templateVariables[i];
			var defaultValue = lib.GetDefaultValueForVariable(variable);
			inputForm.addField(new Form.Field.String(variable, variable, defaultValue), i);
		}
		var formPrompt = "Provide values for the template";
		var buttonTitle = "OK";
		inputForm.show(formPrompt, buttonTitle).then(
			(form) => lib.expandTemplate(template, form),
			(error) => console.log(error));
	};

	return lib;
}();
_;
