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

	__webpack_require__(523);
	module.exports = __webpack_require__(523);


/***/ }),

/***/ 523:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["lag"] = {
	        name: "lag",
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
	                pattern: ["-$ n","$ n"],
	                decimals: 2,
	                ",": ",",
	                ".": ".",
	                groupSize: [3],
	                symbol: "TSh"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["Jumap??iri","Jumat??tu","Juma??ne","Jumat??ano","Alam??isi","Ijum??a","Jumam??osi"],
	                    namesAbbr: ["P??ili","T??atu","??ne","T??ano","Alh","Ijm","M??osi"],
	                    namesShort: ["P??ili","T??atu","??ne","T??ano","Alh","Ijm","M??osi"]
	                },
	                months: {
	                    names: ["K??f??ngat??","K??naan??","K??keenda","Kwiikumi","Kwiinyamb??la","Kwiidwaata","K??m????nch??","K??v????r??","K??saat??","Kwiinyi","K??saano","K??sasat??"],
	                    namesAbbr: ["F??ngat??","Naan??","Keenda","Ik??mi","Inyambala","Idwaata","M????nch??","V????r??","Saat??","Inyi","Saano","Sasat??"]
	                },
	                AM: ["TOO","too","TOO"],
	                PM: ["MUU","muu","MUU"],
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