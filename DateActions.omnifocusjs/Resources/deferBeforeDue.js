var _ = function(){
    var action = new PlugIn.Action(selection => {            

        var inputForm = new Form();

        var dayField = new Form.Field.String("dayField", null, "7", null)

        inputForm.addField(dayField)

        var formPrompt  = "Number of days to subtract from due date:"
        var buttonTitle = "OK"
        var formPromise = inputForm.show(formPrompt, buttonTitle)

        inputForm.validate = function(formObject){
            var dayFieldValue = formObject.values["dayField"]
            days = parseInt(dayFieldValue)

            return Number.isInteger(days)
        }

        var days = 0

        var result = selection.tasks

        formPromise.then(function(formObject){
            var dayFieldValue = formObject.values["dayField"]
            days = parseInt(dayFieldValue)

            //var defaultTime = settings.objectForKey("DefaultStartTime")
            //var time = defaultTime.split(":")

            if(selection.tasks[0])
            {   
                selection.tasks.forEach(task => {

                    var deferDate = task.effectiveDueDate;
                          
                    deferDate.setDate(-days + deferDate.getDate())

                    //deferDate.setHours(parseInt(time[0]))
                    //deferDate.setMinutes(parseInt(time[1]))
                    //deferDate.setSeconds(parseInt(time[2]))
                    
                    task.deferDate = deferDate;
                })
            }

            if(selection.projects[0])
            {   
                selection.projects.forEach(proj => {

                    var deferDate = proj.effectiveDueDate;
                          
                    deferDate.setDate(-days + deferDate.getDate())

                    //deferDate.setHours(parseInt(time[0]))
                    //deferDate.setMinutes(parseInt(time[1]))
                    //deferDate.setSeconds(parseInt(time[2]))
                    
                    proj.deferDate = deferDate;
                })
            }

            cleanUp();
        })
    });
        
    action.validate = selection => {
        return selection.tasks
        .filter(task => null != task.effectiveDueDate && (null == task.effectiveDeferDate || null != task.deferDate)).length > 0
        ||
        selection.projects
        .filter(task => null != task.effectiveDueDate && (null == task.effectiveDeferDate || null != task.deferDate)).length > 0
    }   

    return action; 
}();

_;