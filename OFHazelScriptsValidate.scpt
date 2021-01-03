JsOsaDAS1.001.00bplist00�Vscript_Xvar app = Application.currentApplication()
app.includeStandardAdditions = true

var path = Path("/Users/romandek/Library/Mobile Documents/iCloud~com~omnigroup~OmniFocus/Documents/hazelValidations.json");
var key  = "";
var diff = 0;

var now = new Date();
var lastModifiedTimestamp = 0;

var currentTimestamp = Math.round(now.getTime() / 1e3);

function readFile(file) {
    // Convert the file to a string
    var fileString = file.toString()

    // Read the file and return its contents
    return app.read(Path(fileString))
}

function canRun(key) {
    var jsonString = readFile(path)

    var jsonObj = JSON.parse(jsonString)

    lastModifiedTimestamp = jsonObj[key];
	
	var absDiff = Math.abs(lastModifiedTimestamp - currentTimestamp)
	
	console.log(absDiff)

	return (absDiff >= diff)
}

function hazelMatchFile(theFile, inputAttributes){

	key = inputAttributes[0];
	diff = inputAttributes[1]; 
	
	var ret = canRun(key);
	
	//console.log(ret)
	
	var modifiedDate = new Date(lastModifiedTimestamp * 1e3);
	
	return {
		hazelPassesScript: ret,
		hazelOutputAttributes: [
			now,
			modifiedDate
		]
	};
}                              njscr  ��ޭ