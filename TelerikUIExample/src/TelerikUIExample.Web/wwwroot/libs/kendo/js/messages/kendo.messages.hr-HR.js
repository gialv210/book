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

	__webpack_require__(1594);
	module.exports = __webpack_require__(1594);


/***/ }),

/***/ 1594:
/***/ (function(module, exports) {

	(function ($, undefined) {

	if (kendo.spreadsheet && kendo.spreadsheet.messages.borderPalette) {
	kendo.spreadsheet.messages.borderPalette =
	$.extend(true, kendo.spreadsheet.messages.borderPalette,{
	  "allBorders": "Sve granice",
	  "insideBorders": "Unutarnje granice",
	  "insideHorizontalBorders": "Unutar horizontalnih granica",
	  "insideVerticalBorders": "Unutar vertikalnih granica",
	  "outsideBorders": "Izvan granica",
	  "leftBorder": "Lijeva granica",
	  "topBorder": "Gornja granica",
	  "rightBorder": "Desna granica",
	  "bottomBorder": "Donja granica",
	  "noBorders": "Nema granice",
	  "reset": "Poni??ti boju",
	  "customColor": "Boja po narud??bi...",
	  "apply": "Prijavite se",
	  "cancel": "Otkazati"
	});
	}

	if (kendo.spreadsheet && kendo.spreadsheet.messages.dialogs) {
	kendo.spreadsheet.messages.dialogs =
	$.extend(true, kendo.spreadsheet.messages.dialogs,{
	  "apply": "Prijavite se",
	  "save": "U??tedjeti",
	  "cancel": "Otkazati",
	  "remove": "Ukloniti",
	  "retry": "Poku??ajte ponovo",
	  "revert": "Vrati se",
	  "okText": "u redu",
	  "formatCellsDialog": {
	    "title": "Format",
	    "categories": {
	      "number": "Broj",
	      "currency": "Valuta",
	      "date": "Datum"
	    }
	  },
	  "fontFamilyDialog": {
	    "title": "Font"
	  },
	  "fontSizeDialog": {
	    "title": "Veli??ina fonta"
	  },
	  "bordersDialog": {
	    "title": "Granice"
	  },
	  "alignmentDialog": {
	    "title": "Poravnanje",
	    "buttons": {
	      "justtifyLeft": "Poravnajte lijevo",
	      "justifyCenter": "Centar",
	      "justifyRight": "Poravnajte desno",
	      "justifyFull": "Opravdati",
	      "alignTop": "Poravnajte vrh",
	      "alignMiddle": "Poravnajte sredinu",
	      "alignBottom": "Poravnajte dno"
	    }
	  },
	  "mergeDialog": {
	    "title": "Spajanje ??elija",
	    "buttons": {
	      "mergeCells": "Spoji sve",
	      "mergeHorizontally": "Spojite vodoravno",
	      "mergeVertically": "Spoji se okomito",
	      "unmerge": "Poni??ti spajanje"
	    }
	  },
	  "freezeDialog": {
	    "title": "Zamrznite okna",
	    "buttons": {
	      "freezePanes": "Zamrznite okna",
	      "freezeRows": "Zamrznite redove",
	      "freezeColumns": "Zamrznite stupce",
	      "unfreeze": "Odmrznite okna"
	    }
	  },
	  "confirmationDialog": {
	    "text": "Jeste li sigurni da ??elite ukloniti ovaj list?",
	    "title": "Uklonite list"
	  },
	  "validationDialog": {
	    "title": "Provjera valjanosti podataka",
	    "hintMessage": "Unesite valjanu {0} vrijednost {1}.",
	    "hintTitle": "Validacija {0}",
	    "criteria": {
	      "any": "Bilo koja vrijednost",
	      "number": "Broj",
	      "text": "Tekst",
	      "date": "Datum",
	      "custom": "Prilago??ena formula",
	      "list": "Popis"
	    },
	    "comparers": {
	      "greaterThan": "ve??i od",
	      "lessThan": "manje od",
	      "between": "izme??u",
	      "notBetween": "ne izme??u",
	      "equalTo": "jednak",
	      "notEqualTo": "nije jednako",
	      "greaterThanOrEqualTo": "ve??i ili jednak",
	      "lessThanOrEqualTo": "manje ili jednako"
	    },
	    "comparerMessages": {
	      "greaterThan": "ve??i od {0}",
	      "lessThan": "manje od {0}",
	      "between": "izme??u {0} i {1}",
	      "notBetween": "ne izme??u {0} i {1}",
	      "equalTo": "jednako {0}",
	      "notEqualTo": "nije jednako {0}",
	      "greaterThanOrEqualTo": "ve??i ili jednak {0}",
	      "lessThanOrEqualTo": "manje od ili jednako {0}",
	      "custom": "koji zadovoljava formulu: {0}"
	    },
	    "labels": {
	      "criteria": "Kriteriji",
	      "comparer": "Usporednik",
	      "min": "Min",
	      "max": "Maks",
	      "value": "Vrijednost",
	      "start": "Po??etak",
	      "end": "Kraj",
	      "onInvalidData": "O neva??e??im podacima",
	      "rejectInput": "Odbijte unos",
	      "showWarning": "Prika??i upozorenje",
	      "showHint": "Poka??i savjet",
	      "hintTitle": "Naslov savjeta",
	      "hintMessage": "Poruka savjeta",
	      "ignoreBlank": "Zanemarite prazno"
	    },
	    "placeholders": {
	      "typeTitle": "Upi??ite naslov",
	      "typeMessage": "Upi??ite poruku"
	    }
	  },
	  "exportAsDialog": {
	    "title": "Izvoz...",
	    "labels": {
	      "fileName": "Naziv datoteke",
	      "saveAsType": "Spremi kao vrstu",
	      "exportArea": "Izvoz",
	      "paperSize": "Veli??ina papira",
	      "margins": "Margine",
	      "orientation": "Orijentacija",
	      "print": "Ispis",
	      "guidelines": "Smjernice",
	      "center": "Centar",
	      "horizontally": "Horizontalno",
	      "vertically": "Okomito"
	    }
	  },
	  "modifyMergedDialog": {
	    "errorMessage": "Nije mogu??e promijeniti dio spojene ??elije."
	  },
	  "useKeyboardDialog": {
	    "title": "Kopiranje i lijepljenje",
	    "errorMessage": "Ove radnje nije mogu??e pozvati putem izbornika. Umjesto toga upotrijebite tipkovni??ke pre??ace:",
	    "labels": {
	      "forCopy": "za kopiju",
	      "forCut": "za rez",
	      "forPaste": "za pastu"
	    }
	  },
	  "unsupportedSelectionDialog": {
	    "errorMessage": "Ta se radnja ne mo??e izvesti na vi??estrukom odabiru."
	  },
	  "insertCommentDialog": {
	    "title": "Umetnite komentar",
	    "labels": {
	      "comment": "Komentar",
	      "removeComment": "Ukloni komentar"
	    }
	  },
	  "insertImageDialog": {
	    "title": "Umetnite sliku",
	    "info": "Povucite sliku ovdje ili kliknite za odabir",
	    "typeError": "Odaberite JPEG, PNG ili GIF sliku"
	  }
	});
	}

	if (kendo.spreadsheet && kendo.spreadsheet.messages.filterMenu) {
	kendo.spreadsheet.messages.filterMenu =
	$.extend(true, kendo.spreadsheet.messages.filterMenu,{
	  "sortAscending": "Razvrstaj raspon od A do Z",
	  "sortDescending": "Razvrstaj raspon od Z do A",
	  "filterByValue": "Filtrirajte prema vrijednosti",
	  "filterByCondition": "Filtrirajte prema stanju",
	  "apply": "Prijavite se",
	  "search": "tra??i",
	  "addToCurrent": "Dodaj trenutnom odabiru",
	  "clear": "??isto",
	  "blanks": "(praznine)",
	  "operatorNone": "Nijedan",
	  "and": "I",
	  "or": "ILI",
	  "operators": {
	    "string": {
	      "contains": "Tekst sadr??i",
	      "doesnotcontain": "Tekst ne sadr??i",
	      "startswith": "Tekst po??inje sa",
	      "endswith": "Tekst zavr??ava sa"
	    },
	    "date": {
	      "eq": "Datum je",
	      "neq": "Datum nije",
	      "lt": "Datum je prije",
	      "gt": "Datum je poslije"
	    },
	    "number": {
	      "eq": "Jednako je",
	      "neq": "Nije jednako",
	      "gte": "Je ve??i ili jednak",
	      "gt": "Je ve??i od",
	      "lte": "Je manje ili jednako",
	      "lt": "Je manje od"
	    }
	  }
	});
	}

	if (kendo.spreadsheet && kendo.spreadsheet.messages.colorPicker) {
	kendo.spreadsheet.messages.colorPicker =
	$.extend(true, kendo.spreadsheet.messages.colorPicker,{
	  "reset": "Poni??ti boju",
	  "customColor": "Boja po narud??bi...",
	  "apply": "Prijavite se",
	  "cancel": "Otkazati"
	});
	}

	if (kendo.spreadsheet && kendo.spreadsheet.messages.toolbar) {
	kendo.spreadsheet.messages.toolbar =
	$.extend(true, kendo.spreadsheet.messages.toolbar,{
	  "addColumnLeft": "Dodaj stupac lijevo",
	  "addColumnRight": "Dodaj stupac desno",
	  "addRowAbove": "Dodajte red iznad",
	  "addRowBelow": "Dodajte red ispod",
	  "alignment": "Poravnanje",
	  "alignmentButtons": {
	    "justtifyLeft": "Poravnajte lijevo",
	    "justifyCenter": "Centar",
	    "justifyRight": "Poravnajte desno",
	    "justifyFull": "Opravdati",
	    "alignTop": "Poravnajte vrh",
	    "alignMiddle": "Poravnajte sredinu",
	    "alignBottom": "Poravnajte dno"
	  },
	  "backgroundColor": "Pozadina",
	  "bold": "Podebljano",
	  "borders": "Granice",
	  "colorPicker": {
	    "reset": "Poni??ti boju",
	    "customColor": "Boja po narud??bi..."
	  },
	  "copy": "Kopirati",
	  "cut": "Izrezati",
	  "deleteColumn": "Izbri??i stupac",
	  "deleteRow": "Izbri??i red",
	  "excelImport": "Uvezi iz Excela...",
	  "filter": "filtar",
	  "fontFamily": "Font",
	  "fontSize": "Veli??ina fonta",
	  "format": "Prilago??eni format...",
	  "formatTypes": {
	    "automatic": "Automatski",
	    "number": "Broj",
	    "percent": "postotak",
	    "financial": "Financijski",
	    "currency": "Valuta",
	    "date": "Datum",
	    "time": "Vrijeme",
	    "dateTime": "Datum vrijeme",
	    "duration": "Trajanje",
	    "moreFormats": "Vi??e formata..."
	  },
	  "formatDecreaseDecimal": "Smanji decimalni broj",
	  "formatIncreaseDecimal": "Pove??aj decimalni broj",
	  "freeze": "Zamrznite okna",
	  "freezeButtons": {
	    "freezePanes": "Zamrznite okna",
	    "freezeRows": "Zamrznite redove",
	    "freezeColumns": "Zamrznite stupce",
	    "unfreeze": "Odmrznite okna"
	  },
	  "insertComment": "Umetnite komentar",
	  "insertImage": "Umetnite sliku",
	  "italic": "Kurziv",
	  "merge": "Spajanje ??elija",
	  "mergeButtons": {
	    "mergeCells": "Spoji sve",
	    "mergeHorizontally": "Spojite vodoravno",
	    "mergeVertically": "Spoji se okomito",
	    "unmerge": "Poni??ti spajanje"
	  },
	  "open": "Otvorena...",
	  "paste": "Zalijepiti",
	  "quickAccess": {
	    "redo": "Ponovi",
	    "undo": "Poni??ti"
	  },
	  "saveAs": "Spremi kao...",
	  "sortAsc": "Poredaj uzlazno",
	  "sortDesc": "Poredaj silazno",
	  "sortButtons": {
	    "sortSheetAsc": "Razvrstaj list od A do Z",
	    "sortSheetDesc": "Razvrstaj list od Z do A",
	    "sortRangeAsc": "Razvrstaj raspon od A do Z",
	    "sortRangeDesc": "Razvrstaj raspon od Z do A"
	  },
	  "textColor": "Boja teksta",
	  "textWrap": "Prelamanje teksta",
	  "underline": "Naglasiti",
	  "validation": "Provjera valjanosti podataka..."
	});
	}

	if (kendo.spreadsheet && kendo.spreadsheet.messages.view) {
	kendo.spreadsheet.messages.view =
	$.extend(true, kendo.spreadsheet.messages.view,{
	  "errors": {
	    "shiftingNonblankCells": "Nije mogu??e umetnuti ??elije zbog mogu??nosti gubitka podataka. Odaberite drugo mjesto za umetanje ili izbri??ite podatke s kraja radnog lista.",
	    "filterRangeContainingMerges": "Nije mogu??e izraditi filtar unutar raspona koji sadr??i spajanja",    
	    "validationError": "Vrijednost koju ste unijeli kr??i pravila provjere postavljena u ??eliji."
	  },
	  "tabs": {
	    "home": "Dom",
	    "insert": "Umetnuti",
	    "data": "Podaci"
	  }
	});
	}

	})(window.kendo.jQuery);


/***/ })

/******/ });