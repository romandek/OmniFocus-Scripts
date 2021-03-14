(() => {
	var action = new PlugIn.Action(function(selection, sender){
		// selection options: tasks, projects, folders, tags
		
		// CONSTRUCT THE FORM
		var inputForm = new Form()
		
		// CREATE FORM ELEMENTS: TEXT INPUT
		textField = new Form.Field.String("groupName", null, null)
		
		// CREATE FORM ELEMENT: OPTION MENU
		popupMenu = new Form.Field.Option(
			"actionType", 
			"Action Type", 
			[0, 1], 
			["Parallel","Sequential"], 
			0
		)
		
		// ADD THE ELEMENTS TO THE FORM
		inputForm.addField(textField)
		inputForm.addField(popupMenu)
		
		// DIALOG PROMPT AND OK BUTTON TITLE
		let formPrompt = "Provide name and type for new top-level action group:"
		let buttonTitle = "Continue"
		
		// DISPLAY THE FORM DIALOG
		formPromise = inputForm.show(formPrompt, buttonTitle)
		
		// VALIDATE FORM CONTENT
		inputForm.validate = function(formObject){
			// EXTRACT VALUES FROM THE FORM’S VALUES OBJECT
			textValue = formObject.values['groupName']
			return ((textValue) ? true:false)
		}
		
		// PERFORM PROCESSES USING FORM DATA
		formPromise.then(function(formObject){
			textValue = formObject.values['groupName']
			menuItemIndex = formObject.values['actionType']
			
			taskGroup = new Task(textValue, selection.tasks[selection.tasks.length-1].before)
			moveTasks(selection.tasks, taskGroup)
			
			// SET THE PROJECT TYPE
			if (menuItemIndex === 1){
				taskGroup.sequential = true
			}
			
			// SHOW THE ACTION
			taskID = taskGroup.id.primaryKey
			urlStr = "omnifocus:///task/" + taskID
			URL.fromString(urlStr).open()
		})
		
		// PROCESS FORM CANCELLATION
		formPromise.catch(function(err){
			console.log("form cancelled", err.message)
		})
		
	});

	action.validate = function(selection, sender){
		// selection options: tasks, projects, folders, tags
		return (selection.tasks.length > 0)
	};
	
	return action;
})();