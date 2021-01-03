var _ = function(){

	const p = "Priority"

    const p0 = "Routines"
    const p1 = "P1 — Must do"
    const p2 = "P2 — Should do"
    const p3 = "P3 — Could do"
    const p4 = "P4 — Won't do"

	var action = new PlugIn.Action(function(selection){

    	let pTag = tagNamed(p)
        let p1Tag = pTag.tagNamed(p1)
        let p2Tag = pTag.tagNamed(p2)
        let p3Tag = pTag.tagNamed(p3)
        let p4Tag = pTag.tagNamed(p4)

        let pTags = [p1Tag, p2Tag, p3Tag, p4Tag]

        if(selection.tasks[0]){
            selection.tasks.forEach(task => {
            	task.removeTags(pTags)
            	task.addTag(p1Tag)
            })
        }  

        if (selection.projects[0]){
            selection.projects.forEach(task => {
            	task.removeTags(pTags)
            	task.addTag(p1Tag)
            })
        }        
    }); 

	action.validate = selection => {
        return selection.tasks
        .filter(task => task.tags.byName(p1) == null && task.tags.byName(p0) == null)
        .length > 0 
        || 
        selection.projects
        .filter(task => task.tags.byName(p1) == null && task.tags.byName(p0) == null)
        .length > 0 
    };

    return action;   
}();
_;