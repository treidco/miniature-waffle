var Core = ( function(window, undefined) {

    console.log("Initialising Core");

    //initialise 'constants'
    var MODULE_PATH = "js/modules/";
    var LIB_PATH = "js/lib/";
    var JS_SUFFIX = ".js";

    var TAG_SCRIPT = "script";

    //Application modules
    var modules = [
        "renderer"
        ];

    //Application libraries
    var libraries = [
        "markdown"
    ];

    //loads a js script from the provided path
    function loadScript(path){
        var script = document.createElement(TAG_SCRIPT);
        script.src = path;
        document.head.appendChild(script);
    }

    function init(){
        //load defined libraries
        libraries.forEach(function(library) {
            loadScript(LIB_PATH + library + JS_SUFFIX);
        });

        //load defined modules
        modules.forEach(function(module) {
            loadScript(MODULE_PATH + module + JS_SUFFIX);
        });

        Renderer.initRenderer();

    }



    return {
        initApp: init
    };

})(window);