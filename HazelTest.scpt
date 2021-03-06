JsOsaDAS1.001.00bplist00�Vscript_�var app = Application.currentApplication();
	app.includeStandardAdditions = true;

	var key  = "";
	var diff = 0;
	var path = Path("/Users/romandek/Downloads/results.txt");

function readFile(file) {
    // Convert the file to a string
    var fileString = file.toString();

    // Read the file and return its contents
    return app.read(Path(fileString));
}

function writeFile(text, file, overwriteExistingContent) {
    try {
        // Convert the file to a string
        var fileString = file.toString();
        // Open the file for writing
        var openedFile = app.openForAccess(Path(fileString), {
            writePermission: true
        });
        // Clear the file if content should be overwritten
        if (overwriteExistingContent) {
            app.setEof(openedFile, {
                to: 0
            });
        }
        // Write the new content to the file
        app.write(text, {
            to: openedFile,
            startingAt: app.getEof(openedFile)
        });
        // Close the file
        app.closeAccess(openedFile);
        // Return a boolean indicating that writing was successful
        return true;
    } catch (error) {
        try {
            // Close the file
            app.closeAccess(file);
        } catch (error) {
            // Report the error is closing failed
            console.log(`Couldn't close file: ${error}`);
        }
        // Return a boolean indicating that writing was successful
        return false;
    }
}

function update(key, obj) {
    
	var jsonString = readFile(path);

    //var jsonObj = JSON.parse(jsonString);

    //var lastRunTimestamp = jsonObj[key];
	
	//var now = new Date();
	
	//var currentTimestamp = Math.round(now.getTime() / 1e3);

	//jsonObj[key] = currentTimestamp;
	
	obj.forEach(o => {
		jsonString += JSON.stringify(typeof(o)) + "\n";
	})

    writeFile(jsonString, path, true);
}

function hazelProcessFile(theFile, inputAttributes){

	update(key, inputAttributes);
	
	return true
}                              �jscr  ��ޭ