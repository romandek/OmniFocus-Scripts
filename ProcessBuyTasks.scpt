JsOsaDAS1.001.00bplist00�Vscript_kfunction processBuyTasks(){

// JXA execution code
    var app = Application("OmniFocus")
    app.includeStandardAdditions = true

    var doc = app.defaultDocument;
	
	doc.willAutosave = false;

    var shopping  = "Shopping";
	var expense   = "Expense"
	
	var shoppingTag  = doc.flattenedTags.byName(shopping);
	var expenseTag   = doc.flattenedTags.byName(expense);
	
	var buyTags = [shoppingTag, expenseTag];

    var t0 = new Date().getTime()
		
    var qualifiedTasks = doc.flattenedTasks.whose({
		_and : [
			{ effectivelyCompleted: false }, 
			{ effectivelyDropped: false },
			{ name: { "_contains": "buy " } },
			{ inInbox: false },
		],
	})();
	
	console.log(qualifiedTasks.length);
	
	var i = 0;
	Progress.description = 'Running Priority reassignment';
	Progress.totalUnitCount = qualifiedTasks.length;
	Progress.completedUnitCount = i;
	
    //var t1 = new Date().getTime()
    //console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")

    var t0 = new Date().getTime()

    var today = new Date();
        today.setHours(18,0,0);

    qualifiedTasks.forEach(task => {
		
		i += 1;
		
		Progress.additionalDescription = "Processing task " + i + " of " + qualifiedTasks.length;

        app.add(buyTags, { to: task.tags });
		
		Progress.completedUnitCount = i;
		
		return task;
        
    });
	
	doc.willAutosave = true;

    var t1 = new Date().getTime()
    console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")

}

function hazelProcessFile(theFile, inputAttributes){
    
	try {
	
    	processBuyTasks();
		return true;
	}
	catch(err){
	
		console.log(err.message);
		return false;
	}
}                              � jscr  ��ޭ