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

	__webpack_require__(456);
	module.exports = __webpack_require__(456);


/***/ }),

/***/ 456:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["ja"] = {
	        name: "ja",
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
	                name: "",
	                abbr: "",
	                pattern: ["-$n","$n"],
	                decimals: 0,
	                ",": ",",
	                ".": ".",
	                groupSize: [3],
	                symbol: "??"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["?????????","?????????","?????????","?????????","?????????","?????????","?????????"],
	                    namesAbbr: ["???","???","???","???","???","???","???"],
	                    namesShort: ["???","???","???","???","???","???","???"]
	                },
	                months: {
	                    names: ["1???","2???","3???","4???","5???","6???","7???","8???","9???","10???","11???","12???"],
	                    namesAbbr: ["1","2","3","4","5","6","7","8","9","10","11","12"]
	                },
	                AM: ["??????","??????","??????"],
	                PM: ["??????","??????","??????"],
	                patterns: {
	                    d: "yyyy/MM/dd",
	                    D: "yyyy'???'M'???'d'???'",
	                    F: "yyyy'???'M'???'d'???' H:mm:ss",
	                    g: "yyyy/MM/dd H:mm",
	                    G: "yyyy/MM/dd H:mm:ss",
	                    m: "M???d???",
	                    M: "M???d???",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "H:mm",
	                    T: "H:mm:ss",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "yyyy'???'M'???'",
	                    Y: "yyyy'???'M'???'"
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