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

	__webpack_require__(532);
	module.exports = __webpack_require__(532);


/***/ }),

/***/ 532:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["ln-AO"] = {
	        name: "ln-AO",
	        numberFormat: {
	            pattern: ["-n"],
	            decimals: 2,
	            ",": ".",
	            ".": ",",
	            groupSize: [3],
	            percent: {
	                pattern: ["-n%","n%"],
	                decimals: 2,
	                ",": ".",
	                ".": ",",
	                groupSize: [3],
	                symbol: "%"
	            },
	            currency: {
	                name: "Angolan Kwanza",
	                abbr: "AOA",
	                pattern: ["-n $","n $"],
	                decimals: 2,
	                ",": ".",
	                ".": ",",
	                groupSize: [3],
	                symbol: "Kz"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["eyenga","mok??l?? mwa yambo","mok??l?? mwa m??bal??","mok??l?? mwa m??s??to","mok??l?? ya m??n??i","mok??l?? ya m??t??no","mp????s??"],
	                    namesAbbr: ["eye","ybo","mbl","mst","min","mtn","mps"],
	                    namesShort: ["eye","ybo","mbl","mst","min","mtn","mps"]
	                },
	                months: {
	                    names: ["s??nz?? ya yambo","s??nz?? ya m??bal??","s??nz?? ya m??s??to","s??nz?? ya m??nei","s??nz?? ya m??t??no","s??nz?? ya mot??b??","s??nz?? ya nsambo","s??nz?? ya mwambe","s??nz?? ya libwa","s??nz?? ya z??mi","s??nz?? ya z??mi na m????k????","s??nz?? ya z??mi na m??bal??"],
	                    namesAbbr: ["yan","fbl","msi","apl","mai","yun","yul","agt","stb","??tb","nvb","dsb"]
	                },
	                AM: ["nt????ng????","nt????ng????","NT????NG????"],
	                PM: ["mp??kwa","mp??kwa","MP??KWA"],
	                patterns: {
	                    d: "d/M/yyyy",
	                    D: "dddd d MMMM yyyy",
	                    F: "dddd d MMMM yyyy HH:mm:ss",
	                    g: "d/M/yyyy HH:mm",
	                    G: "d/M/yyyy HH:mm:ss",
	                    m: "MMMM d",
	                    M: "MMMM d",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "HH:mm",
	                    T: "HH:mm:ss",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "yyyy MMMM",
	                    Y: "yyyy MMMM"
	                },
	                "/": "/",
	                ":": ":",
	                firstDay: 1
	            }
	        }
	    }
	})(this);


/***/ })

/******/ });