var of = Application.currentApplication();
//var of = Application("Omnifocus");
var brave = Application("Brave Browser");

of.includeStandardAdditions = true;

var document = of.defaultDocument;
var window = document.documentWindows[0];
var selected = window.content.selectedTrees.value();

var task = selected[0];

var pattern = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?гхрсту]))/ig

var noteParagraphs = task.note.paragraphs()

for(i=0; i<noteParagraphs.length; i++){

	var link = task.note.paragraphs[i].style.attributes["link"].value()
	
	var regex = new RegExp(pattern)

	if (regex.test(link)){

		var urls = link.match(regex)

    	if (urls.length > 0)
    	{
    		urls.forEach(urlStr => {

        		var window = brave.windows[0]
				tab = window.tabs.push(new brave.Tab({url: urlStr}))
			
     		})
     	}
	}
}