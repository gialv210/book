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

	__webpack_require__(458);
	module.exports = __webpack_require__(458);


/***/ }),

/***/ 458:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["jgo"] = {
	        name: "jgo",
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
	                name: "",
	                abbr: "",
	                pattern: ["-$ n","$ n"],
	                decimals: 0,
	                ",": ".",
	                ".": ",",
	                groupSize: [3],
	                symbol: "FCFA"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["S????ndi","M????ndi","??pta M????ndi","W????n??s??d??","T????s??d??","F??l??y??d??","S??sid??"],
	                    namesAbbr: ["S????ndi","M????ndi","??pta M????ndi","W????n??s??d??","T????s??d??","F??l??y??d??","S??sid??"],
	                    namesShort: ["S????ndi","M????ndi","??pta M????ndi","W????n??s??d??","T????s??d??","F??l??y??d??","S??sid??"]
	                },
	                months: {
	                    names: ["Ndu??mbi Sa??","P??sa?? P????p??","P??sa?? P????t??t","P??sa?? P????n????kwa","P??sa?? Pataa","P??sa?? P????n????nt??k??","P??sa?? Saamb??","P??sa?? P????n????f??m","P??sa?? P????n????pf???????","P??sa?? N??g????m","P??sa?? Nts????pm????","P??sa?? Nts????pp??"],
	                    namesAbbr: ["Ndu??mbi Sa??","P??sa?? P????p??","P??sa?? P????t??t","P??sa?? P????n????kwa","P??sa?? Pataa","P??sa?? P????n????nt??k??","P??sa?? Saamb??","P??sa?? P????n????f??m","P??sa?? P????n????pf???????","P??sa?? N??g????m","P??sa?? Nts????pm????","P??sa?? Nts????pp??"]
	                },
	                AM: ["mba???mba???","mba???mba???","MBA???MBA???"],
	                PM: ["??ka mb????t nji","??ka mb????t nji","??KA MB????T NJI"],
	                patterns: {
	                    d: "yyyy-MM-dd",
	                    D: "dddd, yyyy MMMM dd",
	                    F: "dddd, yyyy MMMM dd HH:mm:ss",
	                    g: "yyyy-MM-dd HH:mm",
	                    G: "yyyy-MM-dd HH:mm:ss",
	                    m: "MMMM d",
	                    M: "MMMM d",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "HH:mm",
	                    T: "HH:mm:ss",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "yyyy MMMM",
	                    Y: "yyyy MMMM"
	                },
	                "/": "-",
	                ":": ":",
	                firstDay: 1
	            }
	        }
	    }
	})(this);


/***/ })

/******/ });