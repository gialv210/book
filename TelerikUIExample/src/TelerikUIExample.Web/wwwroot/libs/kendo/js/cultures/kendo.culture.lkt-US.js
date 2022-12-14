module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(530);
	module.exports = __webpack_require__(530);


/***/ }),

/***/ 530:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["lkt-US"] = {
	        name: "lkt-US",
	        numberFormat: {
	            pattern: ["-n"],
	            decimals: 2,
	            ",": ",",
	            ".": ".",
	            groupSize: [3],
	            percent: {
	                pattern: ["-n%","n%"],
	                decimals: 2,
	                ",": ",",
	                ".": ".",
	                groupSize: [3],
	                symbol: "%"
	            },
	            currency: {
	                name: "US Dollar",
	                abbr: "USD",
	                pattern: ["-$ n","$ n"],
	                decimals: 2,
	                ",": ",",
	                ".": ".",
	                groupSize: [3],
	                symbol: "$"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["A??p??tuwak??a??","A??p??tuwa????i","A??p??tunu??pa","A??p??tuyamni","A??p??tutopa","A??p??tuzapta??","Ow????gyu??a??api"],
	                    namesAbbr: ["A??p??tuwak??a??","A??p??tuwa????i","A??p??tunu??pa","A??p??tuyamni","A??p??tutopa","A??p??tuzapta??","Ow????gyu??a??api"],
	                    namesShort: ["A??p??tuwak??a??","A??p??tuwa????i","A??p??tunu??pa","A??p??tuyamni","A??p??tutopa","A??p??tuzapta??","Ow????gyu??a??api"]
	                },
	                months: {
	                    names: ["Wi??the??ika W??","Thiy????eyu??ka W??","I??t??wi??hayaza?? W??","P??e????t??o W??","??ha??w??pet??o W??","W??pazuk??a-wa??t?? W??","??ha??p????sapa W??","Was??t??u?? W??","??ha??w??pe??i W??","??ha??w??pe-kasn?? W??","Wan??yetu W??","T??ah??kap??u?? W??"],
	                    namesAbbr: ["Wi??the??ika W??","Thiy????eyu??ka W??","I??t??wi??hayaza?? W??","P??e????t??o W??","??ha??w??pet??o W??","W??pazuk??a-wa??t?? W??","??ha??p????sapa W??","Was??t??u?? W??","??ha??w??pe??i W??","??ha??w??pe-kasn?? W??","Wan??yetu W??","T??ah??kap??u?? W??"]
	                },
	                AM: ["AM","am","AM"],
	                PM: ["PM","pm","PM"],
	                patterns: {
	                    d: "M/d/yyyy",
	                    D: "dddd, MMMM d, yyyy",
	                    F: "dddd, MMMM d, yyyy h:mm:ss tt",
	                    g: "M/d/yyyy h:mm tt",
	                    G: "M/d/yyyy h:mm:ss tt",
	                    m: "MMMM d",
	                    M: "MMMM d",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "h:mm tt",
	                    T: "h:mm:ss tt",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "yyyy MMMM",
	                    Y: "yyyy MMMM"
	                },
	                "/": "/",
	                ":": ":",
	                firstDay: 0
	            }
	        }
	    }
	})(this);


/***/ })

/******/ });