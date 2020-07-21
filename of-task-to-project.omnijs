/*{
	"type": "action",
	"targets": ["omnifocus"],
	"author": "Rosemary Orchard",
	"identifier": "com.omni-automation.of.task-to-project",
	"version": "1.0",
	"description": "This action will create a new project duplicating the attributes of the selected task. The script will delete the selected task after the project has been created.",
	"label": "Task to Project",
	"shortLabel": "Task to Project"
}*/
(() => {
	var action = new PlugIn.Action(function(selection, sender){
		// action code
		// selection options: tasks, projects, folders, tags
		var task = selection.tasks[0]
		
		// store the task properties and objects
		var taskTitle = task.name
		var childrenWillComplete = task.completedByChildren
		var taskIsSequential = task.sequential
		var taskShouldUseFloatZone = task.shouldUseFloatingTimeZone
		var taskDeferDate = task.deferDate
		var taskDueDate = task.dueDate
		var taskEstimatedMinutes = task.estimatedMinutes
		var taskFlagged = task.flagged
		var taskNote = task.note
		var taskRRule = task.repetitionRule
		var taskAttachments = task.attachments
		var taskLinkedFileURLs = task.linkedFileURLs
		var taskNotifications = task.notifications
		var taskChildren = task.children
		var taskTags = task.tags
		
		// create the project
		var project = new Project(taskTitle)
		
		// apply properties
		project.task.sequential = taskIsSequential
		if (taskDueDate){project.task.dueDate = taskDueDate}
		if (taskDeferDate){project.task.deferDate = taskDeferDate}
		if (taskDueDate || taskDeferDate){
			project.task.shouldUseFloatingTimeZone = taskShouldUseFloatZone
		}
		if (taskChildren != []){
			project.task.completedByChildren = childrenWillComplete
		}
		project.task.note = taskNote
		if (taskRRule){project.task.repetitionRule = taskRRule}
		
		// apply tags
		if (taskTags != []){project.task.addTags(taskTags)}
		
		// add objects
		if (taskNotifications){
			taskNotifications.forEach(notif => {
				var notifKind = notif.kind
				if (notifKind === Task.Notification.Kind.Absolute){
					project.task.addNotification(notif.absoluteFireDate)
				}
				if (notifKind === Task.Notification.Kind.DueRelative){
					project.task.addNotification(notif.relativeFireOffset)
				}
			})
		}
		if (taskAttachments){
			taskAttachments.forEach(attachment => {
				project.task.addAttachment(attachment)
			})
		}
		if (taskLinkedFileURLs){
			taskLinkedFileURLs.forEach(fileURL => {
				project.task.addLinkedFileURL(fileURL)
			})
		}
		
		// move sub-tasks
		if (taskChildren.length > 0){moveTasks(taskChildren, project)}
		
		// delete the task
		deleteObject(task)
		
		// show the project
		document.windows[0].perspective = Perspective.BuiltIn.Projects
		document.windows[0].selectObjects([project])
		
	});

	action.validate = function(selection, sender){
		// validation code
		// selection options: tasks, projects, folders, tags
		return (selection.tasks.length === 1)
	};
	
	return action;
})();