var _ = function(){

    var action = new PlugIn.Action(selection => {

        var inputForm = new Form();

        var dayField = new Form.Field.String("dayField", null, "7", null)
        var respectDatesCheckbox = new Form.Field.Checkbox(
            "shouldRespectSetDates",
            "Respect task due dates",
            false
        )

        inputForm.addField(dayField)
        inputForm.addField(respectDatesCheckbox)

        var formPrompt  = "Number of days to add:"
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

            var shouldRespectSetDates = formObject.values['shouldRespectSetDates']

            var defaultDueTime = settings.objectForKey("DefaultDueTime")
            var time = defaultDueTime.split(":").map(e => { return parseInt(e)})

            if (selection.tasks[0]) {

                selection.tasks.forEach((task) => {

                    let taskDate = shouldRespectSetDates ? task.effectiveDueDate : (new Date())

                    if (taskDate == null) {
                        taskDate = new Date()
                    }

                    taskDate.setDate(days + taskDate.getDate())

                    taskDate.setHours(time[0])
                    taskDate.setMinutes(time[1])
                    taskDate.setSeconds(time[2])

                    if (task.containingProject.dueDate === null || taskDate <= task.containingProject.dueDate) {
                        task.dueDate = taskDate
                    }
                    else {

                        taskDate = task.containingProject.dueDate

                        taskDate.setHours(time[0])
                        taskDate.setMinutes(time[1])
                        taskDate.setSeconds(time[2])

                        task.dueDate = taskDate

                        console.log("Task’s “" + task + "” proposed due date is after the parent's due date. Due date set to the parent's due date")
                    }
                    
                });
            } 

            if (selection.projects[0]) {

                selection.projects.forEach((proj) => {

                    let projDate = shouldRespectSetDates ? proj.effectiveDueDate : (new Date())

                    if (projDate == null) {
                        projDate = new Date()
                    }

                    projDate.setDate(days + projDate.getDate())

                    projDate.setHours(time[0])
                    projDate.setMinutes(time[1])
                    projDate.setSeconds(time[2])

                    proj.dueDate = projDate
                });
            }
        })
    
    });

    action.validate = selection => {
        return selection.tasks
        //.filter(task => null !== task.dueDate)
        .length > 0
        ||
        selection.projects
        //.filter(task => null !== task.dueDate)
        .length > 0
    }

    return action;
}();

_;