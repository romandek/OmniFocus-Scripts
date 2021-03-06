JsOsaDAS1.001.00bplist00�Vscript_.function hazelProcessFile(theFile, inputAttributes){

	var app = Application("OmniFocus")
	app.includeStandardAdditions = true

	var doc = app.defaultDocument;
	
	doc.willAutosave = false;

	var projects = doc.flattenedProjects

	var mediaProj   = projects.whose({name: "Media"})[0]
	var emailProj = projects.whose({name: "Email"})[0]

	var inboxTasks = doc.inboxTasks.whose({effectivelyCompleted: false, effectivelyDropped: false});

	inboxTasks().forEach(task => {
		var name = task.name()
		var note = task.note()
	
		if (name.startsWith("-- ") && name.includes(" ::")){
			
			newTask = doc.parseTasksInto({withTransportText: task.name().slice(3), asSingleTask: true})
			
			newTask[0].note = note;
		
			if (newTask.length > 0){ 
				task.delete()
			}
		}
	});
	
	doc.willAutosave = true;

	doc.compact();
}                              Djscr  ��ޭ