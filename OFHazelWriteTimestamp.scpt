JsOsaDAS1.001.00bplist00�Vscript_/var app = Application.currentApplication();
    app.includeStandardAdditions = true;

var path = Path("/Users/romandek/Library/Mobile Documents/iCloud~com~omnigroup~OmniFocus/Documents/hazelValidations.json");

function readFile(file) {
    var fileString = file.toString();

    return app.read(Path(fileString));
}

function writeFile(text, file, overwriteExistingContent) {
    try {
        // Convert the file to a string
        var fileString = file.toString();
        // Open the file for writing
        var openedFile = app.openForAccess(Path(fileString), {
            writePermission: true
        })
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

function update(key, lastModified) {
    var jsonString = readFile(path);

    var jsonObj = JSON.parse(jsonString);

    var lastRunTimestamp = jsonObj[key];
		
	var currentTimestamp = Math.round(lastModified.getTime() / 1e3);

	jsonObj[key] = currentTimestamp;

    jsonString = JSON.stringify(jsonObj);

    writeFile(jsonString, path, true);
}

function hazelProcessFile(theFile, inputAttributes){

    var key  = inputAttributes[0];
	
	var lastModified  = inputAttributes[1];

    try {
        
        update(key, lastModified);
        return true;
    }
    catch(err){
        console.log(err.message);
        return false;
    }   
}                              E jscr  ��ޭ