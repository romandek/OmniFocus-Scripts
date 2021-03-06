var _ = function(){

    var action = new PlugIn.Action(selection => {

        var inputForm = new Form();

        var dayField = new Form.Field.String("dayField", null, "7", null);
        var respectDatesCheckbox = new Form.Field.Checkbox(
            "shouldRespectSetDates",
            "Respect task defer date",
            false
        );

        inputForm.addField(dayField);
        inputForm.addField(respectDatesCheckbox);

        var formPrompt  = "Number of days to add:";
        var buttonTitle = "OK";
        var formPromise = inputForm.show(formPrompt, buttonTitle);

        inputForm.validate = function(formObject){
            var dayFieldValue = formObject.values["dayField"];
            days = parseInt(dayFieldValue);

            return Number.isInteger(days);
        }

        formPromise.then(function(formObject){
            var dayFieldValue = formObject.values["dayField"];
            var days = parseInt(dayFieldValue);

            var shouldRespectSetDates = formObject.values['shouldRespectSetDates'];

            //var dateNow = new Date()
            var defaultStartTime = settings.objectForKey("DefaultStartTime");
            var time = defaultStartTime.split(":").map(e => { return parseInt(e)});

            if (selection.tasks[0]) {

                selection.tasks.forEach((task) => {

                    taskDate = new Date();

                    if (task.effectiveDeferDate) {
                        taskDate.setHours(task.effectiveDeferDate.getHours(), task.effectiveDeferDate.getMinutes(), 0);
                    }
                    else {
                        taskDate.setHours(time[0], time[1], time[2]);
                    }

                    taskDate.setDate(days + taskDate.getDate());

                    if (task.effectiveDueDate === null || taskDate <= task.effectiveDueDate) {
                        task.deferDate = taskDate;
                    }
                    else {

                        taskDate = task.effectiveDueDate;

                        taskDate.setHours(time[0], time[1], time[2]);

                        task.deferDate = taskDate;

                        console.log("Task’s “" + task + "” proposed defer date is after the task's due date. Defer date set to morning default defer time on the due date");
                    }
                    
                });
            } //tasks

            if (selection.projects[0]) {

                selection.projects.forEach((proj) => {

                    projDate = new Date();

                    if (proj.effectiveDeferDate) {
                        projDate.setHours(proj.effectiveDeferDate.getHours(), proj.effectiveDeferDate.getMinutes(), 0);
                    }
                    else {

                        projDate = new Date();
                        projDate.setHours(time[0], time[1], time[2]);
                    }

                    projDate.setDate(days + projDate.getDate());

                    if (proj.effectiveDueDate === null || projDate <= proj.effectiveDueDate) {
                        proj.deferDate = projDate;
                    }
                    else {

                        projDate = proj.effectiveDueDate;

                        projDate.setHours(time[0], time[1], time[2]);

                        proj.deferDate = projDate;

                        console.log("Project’s “" + proj + "” proposed defer date is after the project’s due date. Defer date set to morning default defer time on the due date");
                    }
                });
            } //projects

            cleanUp();
        }) //promise
    });

    action.validate = selection => {
        return selection.tasks
        //.filter(task => null !== task.deferDate)
        .length > 0
        ||
        selection.projects
        //.filter(task => null !== task.deferDate)
        .length > 0;
    } 

    return action;
        
}();

_;

    