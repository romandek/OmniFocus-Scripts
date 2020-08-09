(() => {
	var action = new PlugIn.Action(function(selection, sender){
		// action code
		// selection options: tasks, projects, folders, tags

		var timesField = new Form.Field.String(
			"timesField", 
			null, 
			"7", 
			null
		)

		inputForm = new Form()
		inputForm.addField(timesField)
		formPrompt = "Enter how many duplicates to create:"
		buttonTitle = "Duplicate"
		formPromise = inputForm.show(formPrompt, buttonTitle)

		inputForm.validate = function(formObject){
			timesInput = formObject.values["timesField"]

			var times = parseInt(timesInput)

			return Number.isInteger(times)
		}

		formPromise.then(function(formObject){
			var timesInput = formObject.values["timesField"]
			selection.tasks.forEach(function(task){

				insertionLocation = task.containingProject === null ? inbox.ending : task.containingProject;

				var i;
				for(i=0; i < timesInput; i++) {
					
					dupTasks = duplicateTasks([task], insertionLocation)
					//dupTask = dupTasks[0]
					//duplicatedTasks.push(dupTask.id.primaryKey)
				}
				
			})
			//idStr = duplicatedTasks.join(",")
			//URL.fromString("omnifocus:///task/" + idStr).open()
		})

		formPromise.catch(function(error){
			console.log("form cancelled", error.message)
		})		
		
	});

	action.validate = function(selection, sender){
		return (selection.tasks.length > 0)
	};
	
	return action;
})();