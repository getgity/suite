var URLMap = require("jack").URLMap;

exports.app = require("geoexplorer").app;

exports.development = function(app) {
    
    return require("jack/contentlength").ContentLength(
        URLMap({
            "/": app,
            "/geoexplorer/script/": require("autoloader").App("../build/jsbuild.cfg")
        })
    );

};
