var _ = function(){

    var action = new PlugIn.Action(function(selection, sender) {
    
        selection.projects.forEach(proj => {
            proj.nextReviewDate = proj.effectiveDeferDate
        })
    });

    action.validate = function(selection, sender) {
        // validation code
        // selection options: tasks, projects, folders, tags
        return (selection.projects.filter(proj => proj.effectiveDeferDate > (new Date())).length > 0)
    };
    
    return action;
}();

_;