var _ = function(){

	const p = "Priority"

    const p0 = "Routines"
    const c  = "Consider"
    const h  = "Highlight"
    const p1 = "P1 — Must do"
    const p2 = "P2 — Should do"
    const p3 = "P3 — Could do"
    const p4 = "P4 — Won't do"

	var action = new PlugIn.Action(function(selection){

    	let pTag  = tagNamed(p)
        let cTag  = pTag.tagNamed(c)
        let hTag  = pTag.tagNamed(h)
        let p1Tag = pTag.tagNamed(p1)
        let p2Tag = pTag.tagNamed(p2)
        let p3Tag = pTag.tagNamed(p3)
        let p4Tag = pTag.tagNamed(p4)

        let pTags = [hTag,p1Tag,p2Tag,p3Tag,p4Tag]

        if(selection.tasks[0]){
            selection.tasks.forEach(task => {
            	task.removeTags(pTags)
            	task.addTag(cTag)
            })
        }  

        if (selection.projects[0]){
            selection.projects.forEach(proj => {
            	proj.removeTags(pTags)
            	proj.addTag(cTag)
            })
        }        
    }); 

	action.validate = selection => {
        return selection.tasks
        .filter(task => task.tags.byName(c) == null && task.tags.byName(p0) == null)
        .length > 0 
        || 
        selection.projects
        .filter(proj => proj.tags.byName(c) == null && proj.tags.byName(p0) == null)
        .length > 0 
    };

    return action;   
}();
_;