var _ = function(){

    var action = new PlugIn.Action(selection => {

        var inputForm = new Form();

        var dayField = new Form.Field.String("dayField", null, "1", null)
        // var respectDatesCheckbox = new Form.Field.Checkbox(
        //     "shouldRespectSetDates",
        //     "Respect task due dates",
        //     false
        // )

        inputForm.addField(dayField)
        // inputForm.addField(respectDatesCheckbox)

        var formPrompt  = "Number of days to shift:"
        var buttonTitle = "OK"
        var formPromise = inputForm.show(formPrompt, buttonTitle)

        inputForm.validate = function(formObject){
            var dayFieldValue = formObject.values["dayField"]
            days = parseInt(dayFieldValue)

            return Number.isInteger(days)
        }

        formPromise.then(function(formObject){
            var dayFieldValue = formObject.values["dayField"]
            var days = parseInt(dayFieldValue)

            // var shouldRespectSetDates = formObject.values['shouldRespectSetDates']

            var defaultDeferTime = settings.objectForKey("DefaultStartTime")
            var defaultDeferTime = defaultDeferTime.split(":").map(e => { return parseInt(e)})

            var defaultDueTime = settings.objectForKey("DefaultDueTime")
            var defaultDueTime = defaultDueTime.split(":").map(e => { return parseInt(e)})

            if (selection.tasks[0]) {

                selection.tasks.forEach((task) => {

                    let deferDate = task.effectiveDeferDate || new Date();
                    let dueDate = task.effectiveDueDate;

                    if (task.effectiveDeferDate) {
                        deferDate.setHours(task.effectiveDeferDate.getHours(), task.effectiveDeferDate.getMinutes(), 0);
                    }
                    else {
                        deferDate.setHours(defaultDeferTime[0], defaultDeferTime[1], defaultDeferTime[2]);
                    }

                    if (task.effectiveDueDate) {
                        dueDate.setHours(task.effectiveDueDate.getHours(), task.effectiveDueDate.getMinutes(), 0);
                    }
                    else {
                        dueDate.setHours(defaultDueTime[0], defaultDueTime[1], defaultDueTime[2]);
                    }

                    deferDate.setDate(days + deferDate.getDate())
                    dueDate.setDate(days + dueDate.getDate())

                    if (task.containingProject.dueDate === null || deferDate <= task.containingProject.dueDate) {
                        task.deferDate = deferDate
                    }
                    else {

                        deferDate = task.effectiveDueDate;

                        deferDate.setHours(defaultDeferTime[0], defaultDeferTime[1], defaultDeferTime[2]);

                        task.deferDate = deferDate;

                        console.log("Task’s “" + task + "” proposed defer date is after the sparent's due date. Defer date set to the parent's due date")
                    }

                    if (task.containingProject.dueDate === null || dueDate <= task.containingProject.dueDate) {
                        task.dueDate = dueDate
                    }
                    else {

                        dueDate = task.effectiveDueDate;

                        dueDate.setHours(defaultDueTime[0], defaultDueTime[1], defaultDueTime[2]);

                        task.dueDate = dueDate;

                        console.log("Task’s “" + task + "” proposed due date is after the parent's due date. Due date set to the parent's due date")
                    }
                    
                });//foreach
            } //tasks

            if (selection.projects[0]) {

                selection.projects.forEach((proj) => {

                    let deferDate = proj.effectiveDeferDate || new Date();
                    let dueDate = proj.effectiveDueDate;

                    if (proj.effectiveDeferDate) {
                        deferDate.setHours(proj.effectiveDeferDate.getHours(), proj.effectiveDeferDate.getMinutes(), 0);
                    }
                    else {
                        deferDate.setHours(defaultDeferTime[0], defaultDeferTime[1], defaultDeferTime[2]);
                    }

                    if (proj.effectiveDueDate) {
                        dueDate.setHours(proj.effectiveDueDate.getHours(), proj.effectiveDueDate.getMinutes(), 0);
                    }
                    else {
                        dueDate.setHours(defaultDueTime[0], defaultDueTime[1], defaultDueTime[2]);
                    }

                    deferDate.setDate(days + deferDate.getDate())
                    dueDate.setDate(days + dueDate.getDate())

                    proj.dueDate = dueDate

                    if (deferDate <= proj.dueDate) {
                        proj.deferDate = deferDate
                    }
                    else {

                        deferDate = proj.effectiveDueDate;

                        deferDate.setHours(defaultDeferTime[0], defaultDeferTime[1], defaultDeferTime[2]);

                        proj.deferDate = deferDate;

                        console.log("Project’s “" + proj + "” proposed defer date is after the sparent's due date. Defer date set to the parent's due date")
                    }

                });//foreach
            } //projects

            cleanUp();
            
        }) //promise
    
    });

    action.validate = selection => {
        return selection.tasks
        .filter(task => null !== task.dueDate)
        .length > 0
        ||
        selection.projects
        .filter(proj => null !== proj.dueDate)
        .length > 0
    }

    return action;
}();

_;