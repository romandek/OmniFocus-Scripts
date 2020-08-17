var _ = function(){

    var action = new PlugIn.Action(selection => {

        var days = 1;

        //var dateNow = new Date()
        var defaultStartTime = settings.objectForKey("DefaultStartTime")
        var time = defaultStartTime.split(":").map(e => { return parseInt(e)})

        if (selection.tasks[0]) {

            selection.tasks.forEach((task) => {

                let taskDate = new Date();

                taskDate.setDate(days + taskDate.getDate());

                taskDate.setHours(time[0]);
                taskDate.setMinutes(time[1]);
                taskDate.setSeconds(time[2]);

                if (task.effectiveDueDate === null || taskDate <= task.effectiveDueDate) {
                    task.deferDate = taskDate;
                }
                else {

                    taskDate = task.effectiveDueDate;

                    taskDate.setHours(time[0]);
                    taskDate.setMinutes(time[1]);
                    taskDate.setSeconds(time[2]);

                    task.deferDate = taskDate;

                    console.log("Task’s “" + task + "” proposed defer date is after the task's due date. Defer date set to morning default defer time on the due date");
                }
            });
        } 

        if (selection.projects[0]) {

            selection.projects.forEach((proj) => {

                let projDate = new Date();

                projDate.setDate(days + projDate.getDate());

                projDate.setHours(time[0]);
                projDate.setMinutes(time[1]);
                projDate.setSeconds(time[2]);

                if (proj.effectiveDueDate === null || projDate <= proj.effectiveDueDate) {
                    proj.deferDate = projDate;
                }
                else {

                    projDate = proj.effectiveDueDate;

                    projDate.setHours(time[0]);
                    projDate.setMinutes(time[1]);
                    projDate.setSeconds(time[2]);

                    proj.deferDate = projDate;

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

    