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

	__webpack_require__(629);
	module.exports = __webpack_require__(629);


/***/ }),

/***/ 629:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["nus-SS"] = {
	        name: "nus-SS",
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
	                name: "South Sudanese Pound",
	                abbr: "SSP",
	                pattern: ["-$n","$n"],
	                decimals: 2,
	                ",": ",",
	                ".": ".",
	                groupSize: [3],
	                symbol: "??"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["C???? ku??th","Jiec la??t","R??w l??tni","Di????k l??tni","??uaan l??tni","Dhieec l??tni","B??k??l l??tni"],
	                    namesAbbr: ["C????","Jiec","R??w","Di????k","??uaan","Dhieec","B??k??l"],
	                    namesShort: ["C????","Jiec","R??w","Di????k","??uaan","Dhieec","B??k??l"]
	                },
	                months: {
	                    names: ["Tiop thar p??t","P??t","Du??????????","Guak","Du??t","Kornyoot","Pay yie??tni","Tho??o??r","T????r","Laath","Kur","Tio??p in di??i??t"],
	                    namesAbbr: ["Tiop","P??t","Du????????","Guak","Du??","Kor","Pay","Thoo","T????","Laa","Kur","Tid"]
	                },
	                AM: ["RW","rw","RW"],
	                PM: ["T??","t??","T??"],
	                patterns: {
	                    d: "d/MM/yyyy",
	                    D: "dddd d MMMM yyyy",
	                    F: "dddd d MMMM yyyy h:mm:ss tt",
	                    g: "d/MM/yyyy h:mm tt",
	                    G: "d/MM/yyyy h:mm:ss tt",
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
	                firstDay: 1
	            }
	        }
	    }
	})(this);


/***/ })

/******/ });