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

    //Registered Modules
    var registeredModules = [];

    function register(name, module){
        console.log("Registering: " + name);
        registeredModules.push(module);
    }

    function getRegisteredModules(){
        return registeredModules;
    }

    //loads a js script from the provided path
    function loadScript(path){
        var script = document.createElement(TAG_SCRIPT);
        script.src = path;
        document.head.appendChild(script);
    }

    function init(){
        console.log("Core: init()");
        registeredModules.forEach(function(module){
            if(module.hasOwnProperty("init")){
                module.init();
            }
        });

    }

    //load defined libraries
    libraries.forEach(function(library) {
        console.trace("Registering Libraries");
        loadScript(LIB_PATH + library + JS_SUFFIX);
    });

    //load defined modules
    modules.forEach(function(module) {
        console.trace("Registering Modules");
        loadScript(MODULE_PATH + module + JS_SUFFIX);
    });

    console.log("Exposing named functions");
    return {
        initApp: init,
        register: register,
        registeredModules: getRegisteredModules
    };

})(window);