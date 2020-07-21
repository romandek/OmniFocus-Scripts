var _ = function(){

    var action = new PlugIn.Action(selection => {

        var cal = Calendar.current
        var dc = new DateComponents()
        dc.day = 1
        
        var currentDueDate = new Date()
        var defaultDueTime = settings.objectForKey("DefaultDueTime")
        var time = defaultDueTime.split(":")

        currentDueDate.setHours(parseInt(time[0]))
        currentDueDate.setMinutes(parseInt(time[1]))
        currentDueDate.setSeconds(parseInt(time[2]))

        var targetDate = cal.dateByAddingDateComponents(currentDueDate,dc)

        if(selection.tasks[0])
        {
            selection.tasks.forEach(task => task.dueDate = targetDate)
        } 

        if(selection.projects[0]) {
            selection.projects.forEach(proj => proj.dueDate = targetDate)
        }
    
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