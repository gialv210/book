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

	__webpack_require__(811);
	module.exports = __webpack_require__(811);


/***/ }),

/***/ 811:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["tr-CY"] = {
	        name: "tr-CY",
	        numberFormat: {
	            pattern: ["-n"],
	            decimals: 2,
	            ",": ".",
	            ".": ",",
	            groupSize: [3],
	            percent: {
	                pattern: ["-%n","%n"],
	                decimals: 2,
	                ",": ".",
	                ".": ",",
	                groupSize: [3],
	                symbol: "%"
	            },
	            currency: {
	                name: "Euro",
	                abbr: "EUR",
	                pattern: ["-$n","$n"],
	                decimals: 2,
	                ",": ".",
	                ".": ",",
	                groupSize: [3],
	                symbol: "???"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["Pazar","Pazartesi","Sal??","??ar??amba","Per??embe","Cuma","Cumartesi"],
	                    namesAbbr: ["Paz","Pzt","Sal","??ar","Per","Cum","Cmt"],
	                    namesShort: ["Pa","Pt","Sa","??a","Pe","Cu","Ct"]
	                },
	                months: {
	                    names: ["Ocak","??ubat","Mart","Nisan","May??s","Haziran","Temmuz","A??ustos","Eyl??l","Ekim","Kas??m","Aral??k"],
	                    namesAbbr: ["Oca","??ub","Mar","Nis","May","Haz","Tem","A??u","Eyl","Eki","Kas","Ara"]
	                },
	                AM: ["????","????","????"],
	                PM: ["??S","??s","??S"],
	                patterns: {
	                    d: "d.MM.yyyy",
	                    D: "d MMMM yyyy dddd",
	                    F: "d MMMM yyyy dddd h:mm:ss tt",
	                    g: "d.MM.yyyy h:mm tt",
	                    G: "d.MM.yyyy h:mm:ss tt",
	                    m: "d MMMM",
	                    M: "d MMMM",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "h:mm tt",
	                    T: "h:mm:ss tt",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "MMMM yyyy",
	                    Y: "MMMM yyyy"
	                },
	                "/": ".",
	                ":": ":",
	                firstDay: 1
	            }
	        }
	    }
	})(this);


/***/ })

/******/ });