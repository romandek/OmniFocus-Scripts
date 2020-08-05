var _ = function(){
    var action = new PlugIn.Action(selection => {

        if(selection.tasks[0]){
            selection.tasks.forEach(task => {
                task.drop(false)
            })  
        }

        if(selection.projects[0]){
            selection.projects.forEach(proj => {
                proj.dropDate = new Date()
            })  
        }
    }); 

    action.validate = selection => {
        return selection.tasks.length > 0 || selection.projects.length > 0
    }

    return action;

}();
_;