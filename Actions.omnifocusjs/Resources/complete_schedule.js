(() => {
	let action = new PlugIn.Action(function(selection) {
		let duplicatedTasks = new Array()
		selection.tasks.forEach(function(task){
			insertionLocation = task.after
			if(insertionLocation === null){insertionLocation = inbox.ending}
			dupTasks = duplicateTasks([task], insertionLocation);
			//dupTasks[0].name = "Waiting on reply: " + task.name;
			duplicatedTasks.push(dupTasks[0].id.primaryKey);
			task.markComplete();
		});

		dupTasks.forEach(task => {

			var maxDate = task.containingProject.effectiveDueDate

			// set new due date
			if (task.dueDate != null) {
				var dueDate   = task.dueDate;

				dueDate.setDate(1 + dueDate.getDate());

				if (maxDate == null || (maxDate != null && dueDate <= maxDate)){
					task.dueDate = dueDate;
				}				
			}

			// set new defer date
			var deferDate = new Date();

			deferDate.setDate(1 + deferDate.getDate());

			if (maxDate == null || (maxDate != null && deferDate <= maxDate)) {
				task.deferDate = deferDate;
			}			

			//TODO if the defer date bigger than due date, complete the task and don't schedule next?

		});

		//idStr = duplicatedTasks.join(",")
		//URL.fromString("omnifocus:///task/" + idStr).open()
    });

    
	action.validate = function(selection){
		return (selection.tasks.length >= 1)
	};
        
	return action;
})();