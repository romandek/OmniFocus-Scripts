(() => Object.assign(
    new PlugIn.Action(selection => {

        // main :: IO ()
        const main = () => {

            const pattern = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/ig

            noteStr = selection.tasks[0].note

            regex = new RegExp(pattern)

            if (regex.test(noteStr)){

                var urls = noteStr.match(regex)

                if (urls.length > 0)
                {
                    urls.forEach(url => {

                        URL.fromString(url).open()
                    })
                }
            }
        };

        // MAIN -----------------------------------------
        return main()
        
        }), {
            validate: selection => 
                selection
                .tasks
                //.filter(task => null !== task.effectiveDeferDate)
                .length === 1 && selection.tasks[0].note != ""
        }
    )   
)();