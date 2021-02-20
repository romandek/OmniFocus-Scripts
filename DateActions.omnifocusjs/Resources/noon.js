var _ = function(){

    var action = new PlugIn.Action(selection => {

        if (selection.tasks[0]) {

            selection.tasks.forEach((task) => {

                let taskDate = task.effectiveDeferDate

                if (taskDate == null) { taskDate = new Date(); }

                taskDate.setHours(12,0,0,0)

                if (task.effectiveDueDate === null || taskDate <= task.effectiveDueDate) {
                    task.deferDate = taskDate;
                }
                else {
                    console.log("Task’s “" + task + "” proposed defer date is after the task's due date. Defer date set to morning default defer time on the due date");
                }
            });
        } 

        if (selection.projects[0]) {

            selection.projects.forEach((proj) => {

                let projDate = proj.effectiveDeferDate

                if (projDate == null) { projDate = new Date(); }

                projDate.setHours(12,0,0,0)

                if (proj.effectiveDueDate === null || projDate <= proj.effectiveDueDate) {
                    proj.deferDate = projDate;
                }
                else {
                    console.log("Project’s “" + proj + "” proposed defer date is after the project’s due date. Defer date set to morning default defer time on the due date");
                }
            });
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

    