var _ = function(){

	const p = "Priority"

    const p0 = "Routines"
    const h  = "Highlight"

	var action = new PlugIn.Action(function(selection){

    	let pTag  = tagNamed(p)
        let hTag  = pTag.tagNamed(h)

        let pTags = [hTag]

        if(selection.tasks[0]){
            selection.tasks.forEach(task => {
            	task.removeTags(pTags)
            	task.addTag(hTag)
            })
        }  

        if (selection.projects[0]){
            selection.projects.forEach(proj => {
            	proj.removeTags(pTags)
            	proj.addTag(hTag)
            })
        }        
    }); 

	action.validate = selection => {
        return selection.tasks
        .filter(task => task.tags.byName(h) == null && task.tags.byName(p0) == null)
        .length > 0 
        || 
        selection.projects
        .filter(proj => proj.tags.byName(h) == null && proj.tags.byName(p0) == null)
        .length > 0 
    };

    return action;   
}();
_;