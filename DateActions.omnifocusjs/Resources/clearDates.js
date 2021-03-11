var _ = function(){

    var action = new PlugIn.Action(selection => {

        if(selection.tasks[0])
        {
            selection.tasks.forEach(task => {
                task.dueDate = null
                task.deferDate = null
            })
        } 

        if(selection.projects[0]) {
            selection.projects.forEach(proj => {
                proj.dueDate = null
                proj.dueDate = null
            })
        }

        cleanUp();
    
    });

    action.validate = selection => {
        return selection.tasks
        //.filter(task => null !== task.deferDate)
        .length > 0
        ||
        selection.projects
        //.filter(task => null !== task.deferDate)
        .length > 0
    }

    return action;
}();

_;