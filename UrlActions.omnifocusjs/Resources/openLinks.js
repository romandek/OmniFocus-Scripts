var _ = function(){

    const pattern = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/ig

    regex = new RegExp(pattern)

    var action = new PlugIn.Action(selection => {

        noteStr = selection.tasks[0].note            

        var urls = noteStr.match(regex)

        urls.forEach(url => {

            URL.fromString(url).open()
        })      
    });

    action.validate = selection => {
        if (selection.tasks.length === 1 && selection.tasks[0].note != "") {

            noteStr = selection.tasks[0].note            

            var urls = noteStr.match(regex)

            if (urls != null){
                if (urls.length > 0){
                    return true
                }
                else {
                    return false
                }
            }
            else {
                return false
            }
        }
        else {
            return false
        }
    }

    return action;

}();
_;