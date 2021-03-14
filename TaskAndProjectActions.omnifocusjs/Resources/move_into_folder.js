(() => {
	var action = new PlugIn.Action(function(selection, sender){
		// selection options: tasks, projects, folders, tags
		
		// CONSTRUCT THE FORM
		var inputForm = new Form()

		var folderIds = [];
		var folderStrings = [];

		//flattenedFolders.forEach(f => {
		//	folderIds.push(f.id.primaryKey);
		//	folderStrings.push(f.name);
		//})

		library.apply(item => {
			if (item instanceof Folder){
				folderIds.push(item.id.primaryKey);
				folderStrings.push(item.name);
			} 
		})

		//create the dropdown
		foldersField = new Form.Field.Option(
			"folderId",
			"Folder",
			folderIds,
			folderStrings);
		
		// ADD THE ELEMENTS TO THE FORM
		inputForm.addField(foldersField)
		//inputForm.addField(checkSwitchField)
		
		// GET THE NAMES OF ALL FOLDERS
		//var folderNames = new Array() 
		//library.apply(item => {
		//	if (item instanceof Folder){folderNames.push(item.name)} 
		//})
		
		// DIALOG PROMPT AND OK BUTTON TITLE
		let formPrompt = "Select a folder: "
		let buttonTitle = "Continue"
		
		// DISPLAY THE FORM DIALOG
		formPromise = inputForm.show(formPrompt, buttonTitle)
		
		// VALIDATE FORM CONTENT
		inputForm.validate = function(formObject){
			// EXTRACT VALUES FROM THE FORM’S VALUES OBJECT
			var folderId = formObject.values['folderId']
			return folderId !== "";
		}
		
		// PERFORM PROCESSES USING FORM DATA
		formPromise.then(function(formObject){
			folderId = formObject.values['folderId']
			
			folder = Folder.byIdentifier(folderId);

			moveSections(selection.projects, folder);
			
			// SHOW THE FOLDER
			//fldID = folder.id.primaryKey
			urlStr = "omnifocus:///folder/" + folderId
			URL.fromString(urlStr).open()
		})
		
		// PROCESS FORM CANCELLATION
		formPromise.catch(function(error){
			console.log("form cancelled", error)
		})
		
	});

	action.validate = function(selection, sender){
		// selection options: tasks, projects, folders, tags
		return (selection.projects.length > 0)
	};
	
	return action;
})();