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

	__webpack_require__(869);
	module.exports = __webpack_require__(869);


/***/ }),

/***/ 869:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["yo-BJ"] = {
	        name: "yo-BJ",
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
	                name: "West African CFA Franc",
	                abbr: "XOF",
	                pattern: ["-$n","$n"],
	                decimals: 0,
	                ",": ",",
	                ".": ".",
	                groupSize: [3],
	                symbol: "CFA"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["??j???? ????k??","??j???? Aj??","??j???? ??s????gun","??j????r??","??j????b??","??j???? ??t??","??j???? ??b??m????ta"],
	                    namesAbbr: ["????k??","Aj??","??s????gun","??j????r??","??j????b??","??t??","??b??m????ta"],
	                    namesShort: ["????k??","Aj??","??s????gun","??j????r??","??j????b??","??t??","??b??m????ta"]
	                },
	                months: {
	                    names: ["Osh?? Sh????r????","Osh?? ??r??l??","Osh?? ??r????n??","Osh?? ??gb??","Osh?? ????bibi","Osh?? ??k??du","Osh?? Ag??m??","Osh?? ??g??n","Osh?? Owewe","Osh?? ????w??r??","Osh?? B??l??","Osh?? ????p????"],
	                    namesAbbr: ["Sh????r????","??r??l??","??r????n??","??gb??","????bibi","??k??du","Ag??m??","??g??n","Owewe","????w??r??","B??l??","????p????"]
	                },
	                AM: ["????r????","????r????","????R????"],
	                PM: ["????s??n","????s??n","????S??N"],
	                patterns: {
	                    d: "dd/MM/yyyy",
	                    D: "dddd, d MMMM yyyy",
	                    F: "dddd, d MMMM yyyy HH:mm:ss",
	                    g: "dd/MM/yyyy HH:mm",
	                    G: "dd/MM/yyyy HH:mm:ss",
	                    m: "MMMM d",
	                    M: "MMMM d",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "HH:mm",
	                    T: "HH:mm:ss",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "MMMM yyyy",
	                    Y: "MMMM yyyy"
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