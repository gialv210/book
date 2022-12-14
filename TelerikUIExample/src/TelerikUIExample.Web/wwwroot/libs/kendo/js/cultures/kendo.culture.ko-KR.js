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

	__webpack_require__(495);
	module.exports = __webpack_require__(495);


/***/ }),

/***/ 495:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["ko-KR"] = {
	        name: "ko-KR",
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
	                name: "South Korean Won",
	                abbr: "KRW",
	                pattern: ["-$n","$n"],
	                decimals: 0,
	                ",": ",",
	                ".": ".",
	                groupSize: [3],
	                symbol: "???"
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
	                    d: "yyyy-MM-dd",
	                    D: "yyyy'???' M'???' d'???' dddd",
	                    F: "yyyy'???' M'???' d'???' dddd tt h:mm:ss",
	                    g: "yyyy-MM-dd tt h:mm",
	                    G: "yyyy-MM-dd tt h:mm:ss",
	                    m: "M??? d???",
	                    M: "M??? d???",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "tt h:mm",
	                    T: "tt h:mm:ss",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "yyyy'???' M'???'",
	                    Y: "yyyy'???' M'???'"
	                },
	                "/": "-",
	                ":": ":",
	                firstDay: 0
	            }
	        }
	    }
	})(this);


/***/ })

/******/ });