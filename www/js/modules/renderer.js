var Renderer = ( function(window, undefined) {

    console.log("Initialising Renderer");

    //constants
    var MD_PATH = "markdown/";
    var MD_SUFFIX = ".md";

    //list md to import, could be improved no doubt
    var files = [
        "test"
    ];

    var md = {};

    files.forEach(function(fileName){
        var mdFile = MD_PATH + fileName + MD_SUFFIX;
        getFile(mdFile, fileName);
    });


    function getFile(mdFile, name){
        var file = new XMLHttpRequest();
        file.open("GET", mdFile, true);
        file.onreadystatechange = function(){
            if(file.readyState = 4){
                if(file.status == 200 || file.status == 0){
                    md[name] = window.markdown.toHTML(file.responseText);
                }
            }
        };
        file.send();
    }

    function init(){
        var content = getItem("test");
        var contentElement = document.getElementById("content");
        contentElement.innerHTML = content;
    }


    function getTitles(){
        return Object.keys(md);
    }

    function getItem(name){
        if(md.hasOwnProperty(name)){
            var item = md[name];
            return item;
        } else {
            console.error("No such item");
        }
    }

    return {
        titles: getTitles,
        item: getItem,
        initRenderer: init
    };

})(window);