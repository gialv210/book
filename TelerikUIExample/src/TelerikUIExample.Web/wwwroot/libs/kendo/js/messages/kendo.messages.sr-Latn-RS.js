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

	__webpack_require__(1611);
	module.exports = __webpack_require__(1611);


/***/ }),

/***/ 1611:
/***/ (function(module, exports) {

	/**
	 * Kendo UI v2017.3.1026 (http://www.telerik.com/kendo-ui)
	 * Copyright 2017 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
	 *
	 * Kendo UI commercial licenses may be obtained at
	 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
	 * If you do not own a commercial license, this file shall be governed by the trial license terms.
















	*/

	(function ($, undefined) {
	/* FlatColorPicker messages */

	if (kendo.ui.FlatColorPicker) {
	kendo.ui.FlatColorPicker.prototype.options.messages =
	$.extend(true, kendo.ui.FlatColorPicker.prototype.options.messages,{
	  "apply": "primeniti",
	  "cancel": "otka??ite",
	  "noColor": "nema boje",
	  "clearColor": "O??isti boja"
	});
	}

	/* ColorPicker messages */

	if (kendo.ui.ColorPicker) {
	kendo.ui.ColorPicker.prototype.options.messages =
	$.extend(true, kendo.ui.ColorPicker.prototype.options.messages,{
	  "apply": "primeniti",
	  "cancel": "otka??ite",
	  "noColor": "nema boje",
	  "clearColor": "O??isti boja"
	});
	}

	/* ColumnMenu messages */

	if (kendo.ui.ColumnMenu) {
	kendo.ui.ColumnMenu.prototype.options.messages =
	$.extend(true, kendo.ui.ColumnMenu.prototype.options.messages,{
	  "sortAscending": "Sortiraj rastuc??i",
	  "sortDescending": "Sortiraj padajuc??e",
	  "filter": "Filter",
	  "columns": "Kolone",
	  "done": "Gotovo",
	  "settings": "Postavke kolone",
	  "lock": "Zaklju??aj",
	  "unlock": "Otklju??aj"
	});
	}

	/* Editor messages */

	if (kendo.ui.Editor) {
	kendo.ui.Editor.prototype.options.messages =
	$.extend(true, kendo.ui.Editor.prototype.options.messages,{
	  "bold": "Bold",
	  "italic": "Italic",
	  "underline": "Podvuc??i",
	  "strikethrough": "Prorez",
	  "superscript": "Nadznak",
	  "subscript": "Podznak",
	  "justifyCenter": "Poravnajte tekst centar",
	  "justifyLeft": "Poravnajte tekst levo",
	  "justifyRight": "Poravnajte tekst desno",
	  "justifyFull": "Poravnajte tekst do ivica",
	  "insertUnorderedList": "Umetni nesre??enu lisu",
	  "insertOrderedList": "Umetni sre??enu lisu",
	  "indent": "Uvla??enje",
	  "outdent": "Izvuci",
	  "createLink": "Ubacite hipervezu",
	  "unlink": "Ukloni hipervezu",
	  "insertImage": "Ubaci sliku",
	  "insertFile": "Ubaci fajl",
	  "insertHtml": "Ubaci HTML",
	  "viewHtml": "Pregledajte HTML",
	  "fontName": "Izaberite porodicu fontova",
	  "fontNameInherit": "(nasle??eni font)",
	  "fontSize": "Izaberite veli??inu font",
	  "fontSizeInherit": "(nasle??ena veli??ina)",
	  "formatBlock": "Format",
	  "formatting": "Format",
	  "foreColor": "Boja",
	  "backColor": "Boja pozadine",
	  "style": "Stil",
	  "emptyFolder": "Prazan direktorium",
	  "uploadFile": "Otpremiti",
	  "overflowAnchor": "Jo?? alata",
	  "orderBy": "Sortirati po:",
	  "orderBySize": "Veli??ina",
	  "orderByName": "Ime",
	  "invalidFileType": "Izabrana datoteka \"{0}\" nije va??ec??a. Podr??ani tipovi datoteka su {1}.",
	  "deleteFile": 'Dali ste sigurni da ??elite da izbri??ete "{0}"?',
	  "overwriteFile": 'Datoteka sa imenom "{0}" vec?? postoji u trenutnom direktorijumu. Da li ??elite da je prepisati?',
	  "directoryNotFound": "Direktorium sa ovim imenom nije prona??en.",
	  "imageWebAddress": "Web adresa",
	  "imageAltText": "Alternativni tekst",
	  "imageWidth": "??irina (px)",
	  "imageHeight": "Visina (px)",
	  "fileWebAddress": "Web adresa",
	  "fileTitle": "Naslov",
	  "linkWebAddress": "Web adresa",
	  "linkText": "Tekst",
	  "linkToolTip": "Oznaka",
	  "linkOpenInNewWindow": "Otvorite link u novom prozoru",
	  "dialogUpdate": "A??uriranje",
	  "dialogInsert": "Ubacite",
	  "dialogButtonSeparator": "ili",
	  "dialogCancel": "Otkazati",
	  "cleanFormatting": "??isto formatiranje",
	  "createTable": "Napravi tabelu",
	  "addColumnLeft": "Dodajte kolonu sa leve strane",
	  "addColumnRight": "Dodajte kolonu sa desne strane",
	  "addRowAbove": "Dodajte red iznad",
	  "addRowBelow": "Dodajte red ispod",
	  "deleteRow": "Obri??i red",
	  "deleteColumn": "Izbri??i kolonu",
	  "dialogOk": "Ok",
	  "tableWizard": "??arobnjak za tebele",
	  "tableTab": "Tabele",
	  "cellTab": "??elija",
	  "accessibilityTab": "Pristupa??nost",
	  "caption": "Naslov",
	  "summary": "Rezime",
	  "width": "??irina",
	  "height": "Visina",
	  "units": "Jedinice",
	  "cellSpacing": "Razmak c??elija",
	  "cellPadding": "Popunjenost c??elija",
	  "cellMargin": "Margina c??elija",
	  "alignment": "Poravnanje",
	  "background": "Pozadina",
	  "cssClass": "CSS Klasa",
	  "id": "ID",
	  "border": "Rub",
	  "borderStyle": "Stil ruba",
	  "collapseBorders": "Sakrij rub",
	  "wrapText": "Zamotaj tekst",
	  "associateCellsWithHeaders": "Udru??ene zaglavljima",
	  "alignLeft": "Poravnati levo",
	  "alignCenter": "Poravnajte centar",
	  "alignRight": "Poravnati desno",
	  "alignLeftTop": "Poravnati Levo Gore",
	  "alignCenterTop": "Poravnati Centar Gore",
	  "alignRightTop": "Poravnati Desno Gore",
	  "alignLeftMiddle": "Poravnati Levo Sredina",
	  "alignCenterMiddle": "Poravnati Centar Sredina",
	  "alignRightMiddle": "Poravnati Desno Sredina",
	  "alignLeftBottom": "Poravnati Levo Dole",
	  "alignCenterBottom": "Poravnati Centar Dole",
	  "alignRightBottom": "Poravnati Desno Dole",
	  "alignRemove": "Uklonite poravnanje",
	  "columns": "Kolone",
	  "rows": "Red",
	  "selectAllCells": "Izaberite sve c??elije"
	});
	}

	/* FileBrowser messages */

	if (kendo.ui.FileBrowser) {
	kendo.ui.FileBrowser.prototype.options.messages =
	$.extend(true, kendo.ui.FileBrowser.prototype.options.messages,{
	  "uploadFile": "Otpremiti",
	  "orderBy": "Sortirati po",
	  "orderByName": "Ime",
	  "orderBySize": "Veli??ina",
	  "directoryNotFound": "Direktorium sa ovim imenom nije prona??en.",
	  "emptyFolder": "Prazan direktorium",
	  "deleteFile": 'Dali ste sigurni da ??elite da izbri??ete "{0}"?',
	  "invalidFileType": "Izabrana datoteka \"{0}\" nije va??ec??a. Podr??ani tipovi datoteka su {1}.",
	  "overwriteFile": "Datoteka sa imenom \"{0}\" vec?? postoji u trenutnom direktorijumu. Da li ??elite da je prepisati?",
	  "dropFilesHere": "otpustite datoteku ovde za otpremanje",
	  "search": "Tra??i"
	});
	}

	/* FilterCell messages */

	if (kendo.ui.FilterCell) {
	kendo.ui.FilterCell.prototype.options.messages =
	$.extend(true, kendo.ui.FilterCell.prototype.options.messages,{
	  "isTrue": "ta??no",
	  "isFalse": "neta??no",
	  "filter": "Filter",
	  "clear": "Jasno",
	  "operator": "Operator"
	});
	}

	/* FilterCell operators */

	if (kendo.ui.FilterCell) {
	kendo.ui.FilterCell.prototype.options.operators =
	$.extend(true, kendo.ui.FilterCell.prototype.options.operators,{
	  "string": {
	    "eq": "Jednako na",
	    "neq": "Nije jednako na",
	    "startswith": "Po??inje sa",
	    "contains": "Sadr??i",
	    "doesnotcontain": "Ne sadr??i",
	    "endswith": "Zavr??ava sa",
	    "isnull": "Nikakva vrednost",
	    "isnotnull": "Ima vrednost",
	    "isempty": "Prazno",
	    "isnotempty": "Nije prazno"
	  },
	  "number": {
	    "eq": "Je jednako na",
	    "neq": "Nije jednako na",
	    "gte": "Je vi??e ili jednako na",
	    "gt": "Je vec??i od",
	    "lte": "Je manje ili jednako na",
	    "lt": "Je manje od",
	    "isnull": "Nikakva vrednost",
	    "isnotnull": "Ima vrednost"
	  },
	  "date": {
	    "eq": "Je jednako na",
	    "neq": "Nije jednako na",
	    "gte": "Je nakon ili jednako na",
	    "gt": "Je nakon",
	    "lte": "Pre ili jednako na",
	    "lt": "Je pre nego",
	    "isnull": "Nikakva vrednost",
	    "isnotnull": "Ima vrednost"
	  },
	  "enums": {
	    "eq": "Je jednako na",
	    "neq": "Nije jednako na",
	    "isnull": "Nikakva vrednost",
	    "isnotnull": "Ima vrednost"
	  }
	});
	}

	/* FilterMenu messages */

	if (kendo.ui.FilterMenu) {
	kendo.ui.FilterMenu.prototype.options.messages =
	$.extend(true, kendo.ui.FilterMenu.prototype.options.messages,{
	  "info": "Poka??ite stavke s vrijednosnim koi imaju:",
	  "title": "Poka??ite stavke s vrijednosnim koi imaju",
	  "isTrue": "je ta??no",
	  "isFalse": "nije ta??no",
	  "filter": "filter",
	  "clear": "O??isti",
	  "and": "I",
	  "or": "Ili",
	  "selectValue": "-Izaberite vrednost-",
	  "operator": "Operator",
	  "value": "Vrednost",
	  "cancel": "Otkazati"
	});
	}

	/* FilterMenu operator messages */

	if (kendo.ui.FilterMenu) {
	kendo.ui.FilterMenu.prototype.options.operators =
	$.extend(true, kendo.ui.FilterMenu.prototype.options.operators,{
	  "string": {
	    "eq": "Je jednako na",
	    "neq": "Nije jednako na",
	    "startswith": "Po??inje sa",
	    "contains": "Sadr??i",
	    "doesnotcontain": "Ne sadr??i",
	    "endswith": "Zavr??ava sa",
	    "isnull": "Nikakva vrednost",
	    "isnotnull": "Ima vrednost",
	    "isempty": "Prazno",
	    "isnotempty": "Nije prazno"
	  },
	  "number": {
	    "eq": "Je jednako na",
	    "neq": "Nije jednako na",
	    "gte": "Je vec??i od ili jednak na",
	    "gt": "Je vec??i od",
	    "lte": "Je manje ili jednako od",
	    "lt": "Je manje od",
	    "isnull": "Nikakva vrednost",
	    "isnotnull": "Ima vrednost"
	  },
	  "date": {
	    "eq": "Je jednako na",
	    "neq": "Nije jednako na",
	    "gte": "Je nakon ili jednako na",
	    "gt": "Je nakon",
	    "lte": "Je Pre ili jednako na",
	    "lt": "Je Pre",
	    "isnull": "Nikakva vrednost",
	    "isnotnull": "Ima vrednost"
	  },
	  "enums": {
	    "eq": "Je jednako na",
	    "neq": "Nije jednako na",
	    "isnull": "Nikakva vrednost",
	    "isnotnull": "Ima vrednost"
	  }
	});
	}

	/* FilterMultiCheck messages */

	if (kendo.ui.FilterMultiCheck) {
	kendo.ui.FilterMultiCheck.prototype.options.messages =
	$.extend(true, kendo.ui.FilterMultiCheck.prototype.options.messages,{
	  "checkAll": "Izaberi sve",
	  "clear": "O??isti",
	  "filter": "Filter",
	  "search": "Tra??i"
	});
	}

	/* Gantt messages */

	if (kendo.ui.Gantt) {
	kendo.ui.Gantt.prototype.options.messages =
	$.extend(true, kendo.ui.Gantt.prototype.options.messages,{
	  "actions": {
	    "addChild": "Dodaj Dete",
	    "append": "Dodaj Zadatak",
	    "insertAfter": "Dodaj Ispod",
	    "insertBefore": "Dodaj Gore",
	    "pdf": "Izvozi u PDF"
	  },
	  "cancel": "Otkazati",
	  "deleteDependencyWindowTitle": "Obri??i zavisnost",
	  "deleteTaskWindowTitle": "Obri??ite zadatak",
	  "destroy": "Izbri??i",
	  "editor": {
	    "assingButton": "Dodeli",
	    "editorTitle": "Zadatak",
	    "end": "Kraj",
	    "percentComplete": "Zavr??en",
	    "resources": "Resursi",
	    "resourcesEditorTitle": "Resursi",
	    "resourcesHeader": "Resursi",
	    "start": "Start",
	    "title": "Naslov",
	    "unitsHeader": "Jedinice"
	  },
	  "save": "Sa??uvaj",
	  "views": {
	    "day": "Den",
	    "end": "Kraj",
	    "month": "Mesec",
	    "start": "Start",
	    "week": "Nedelja",
	    "year": "Godina"
	  }
	});
	}

	/* Grid messages */

	if (kendo.ui.Grid) {
	kendo.ui.Grid.prototype.options.messages =
	$.extend(true, kendo.ui.Grid.prototype.options.messages,{
	  "commands": {
	    "cancel": "Otka??i promene",
	    "canceledit": "Otkazati",
	    "create": "Dodajte novi zapis",
	    "destroy": "Izbri??i",
	    "edit": "Izmeni",
	    "excel": "Izvozite u Excel",
	    "pdf": "Izvozi u PDF",
	    "save": "Sa??uvaj promene",
	    "select": "Izaberite",
	    "update": "A??uriraj"
	  },
	  "editable": {
	    "cancelDelete": "Otkazati",
	    "confirmation": "Da li ste sigurni da ??elite izbrisati ovaj zapis?",
	    "confirmDelete": "Izbri??i"
	  },
	  "noRecords": "Nema stavki.",
	  "expandCollapseColumnHeader": ""
	});
	}

	/* TreeList messages */

	if (kendo.ui.TreeList) {
	kendo.ui.TreeList.prototype.options.messages =
	$.extend(true, kendo.ui.TreeList.prototype.options.messages,{
	    "noRows": "Nema podataka za prikaz",
	    "loading": "U??itavanje...",
	    "requestFailed": "Zahtev nije uspeo.",
	    "retry": "Poku??aj ponovo",
	    "commands": {
	        "edit": "Izmeni",
	        "update": "A??uriraj",
	        "canceledit": "Otkazati",
	        "create": "Dodajte novi zapis",
	        "createchild": "Dodadite detalj zapis",
	        "destroy": "Izbri??i",
	        "excel": "Izvozi u Excel",
	        "pdf": "Izvozi u PDF"
	    }
	});
	}

	/* Groupable messages */

	if (kendo.ui.Groupable) {
	kendo.ui.Groupable.prototype.options.messages =
	$.extend(true, kendo.ui.Groupable.prototype.options.messages,{
	  "empty": "Prevucite zaglavlje kolone i pustite je ovde da se grupiraju do kolonom"
	});
	}

	/* NumericTextBox messages */

	if (kendo.ui.NumericTextBox) {
	kendo.ui.NumericTextBox.prototype.options =
	$.extend(true, kendo.ui.NumericTextBox.prototype.options,{
	  "upArrowText": "Povec??ajte vrednost",
	  "downArrowText": "Smanji vrednost"
	});
	}

	/* MediaPlayer messages */

	if (kendo.ui.MediaPlayer) {
	kendo.ui.MediaPlayer.prototype.options.messages =
	$.extend(true, kendo.ui.MediaPlayer.prototype.options.messages,{
	  "pause": "Pauza",
	  "play": "Reprodukovati",
	  "mute": "Isklju??ite glas",
	  "unmute": "Uklju??ite glas",
	  "quality": "Kvalitet",
	  "fullscreen": "Ceo ekran"
	});
	}

	/* Pager messages */

	if (kendo.ui.Pager) {
	kendo.ui.Pager.prototype.options.messages =
	$.extend(true, kendo.ui.Pager.prototype.options.messages,{
	  "allPages": "Sve",
	  "display": "{0} - {1} od {2} stavke",
	  "empty": "Nema stavki za prikaz",
	  "page": "Strana",
	  "of": "od {0}",
	  "itemsPerPage": "Predmeti po stranici",
	  "first": "Idite na prvu stranicu",
	  "previous": "Idite na prethodnu stranicu",
	  "next": "Idite na sledec??u stranicu",
	  "last": "Idite na poslednju stranicu",
	  "refresh": "Osvje??i",
	  "morePages": "Vi??e stranica"
	});
	}

	/* TreeListPager messages */

	if (kendo.ui.TreeListPager) {
	kendo.ui.TreeListPager.prototype.options.messages =
	$.extend(true, kendo.ui.TreeListPager.prototype.options.messages,{
	  "allPages": "Sve",
	  "display": "{0} - {1} od {2} stavke",
	  "empty": "Nema stavki za prikaz",
	  "page": "Strana",
	  "of": "od {0}",
	  "itemsPerPage": "Predmeti po stranici",
	  "first": "Idite na prvu stranicu",
	  "previous": "Idite na prethodnu stranicu",
	  "next": "Idite na sledec??u stranicu",
	  "last": "Idite na poslednju stranicu",
	  "refresh": "Osvje??i",
	  "morePages": "Vi??e stranica"
	});
	}

	/* PivotGrid messages */

	if (kendo.ui.PivotGrid) {
	kendo.ui.PivotGrid.prototype.options.messages =
	$.extend(true, kendo.ui.PivotGrid.prototype.options.messages,{
	  "measureFields": "Spustite polja podataka ovde",
	  "columnFields": "Spustite kolona podataka ovde",
	  "rowFields": "Spustite red podataka ovde"
	});
	}

	/* PivotFieldMenu messages */

	if (kendo.ui.PivotFieldMenu) {
	kendo.ui.PivotFieldMenu.prototype.options.messages =
	$.extend(true, kendo.ui.PivotFieldMenu.prototype.options.messages,{
	  "info": "Poka??ite stavke s vrijednosnim koji:",
	  "filterFields": "Filter polja",
	  "filter": "Filter",
	  "include": "Uklju??i polja...",
	  "title": "Polja za uklju??ivanje",
	  "clear": "O??isti",
	  "ok": "Ok",
	  "cancel": "Otkazati",
	  "operators": {
	    "contains": "Sadr??i",
	    "doesnotcontain": "Ne sadr??i",
	    "startswith": "Po??inje sa",
	    "endswith": "Zavr??ava sa",
	    "eq": "Je jednako na",
	    "neq": "Nije jednako na"
	  }
	});
	}

	/* RecurrenceEditor messages */

	if (kendo.ui.RecurrenceEditor) {
	kendo.ui.RecurrenceEditor.prototype.options.messages =
	$.extend(true, kendo.ui.RecurrenceEditor.prototype.options.messages,{
	  "frequencies": {
	    "never": "Nikad",
	    "hourly": "Po satu",
	    "daily": "Dnevno",
	    "weekly": "Nedeljno",
	    "monthly": "Mese??no",
	    "yearly": "Godi??nje"
	  },
	  "hourly": {
	    "repeatEvery": "Ponovite svako: ",
	    "interval": " sat(i)"
	  },
	  "daily": {
	    "repeatEvery": "Ponovite svako: ",
	    "interval": " dan/ovi"
	  },
	  "weekly": {
	    "interval": " nedelja(ma)",
	    "repeatEvery": "Ponovite svako: ",
	    "repeatOn": "Ponoviti na: "
	  },
	  "monthly": {
	    "repeatEvery": "Ponovite svako: ",
	    "repeatOn": "Ponoviti na: ",
	    "interval": " mesec/i",
	    "day": "Day "
	  },
	  "yearly": {
	    "repeatEvery": "Ponovite svako: ",
	    "repeatOn": "Ponoviti na: ",
	    "interval": " godina(e)",
	    "of": " od "
	  },
	  "end": {
	    "label": "Kraj:",
	    "mobileLabel": "Zavr??ava",
	    "never": "Nikad",
	    "after": "Posle",
	    "occurrence": " pojava",
	    "on": "na "
	  },
	  "offsetPositions": {
	    "first": "prvi",
	    "second": "drugi",
	    "third": "trec??i",
	    "fourth": "??etvrti",
	    "last": "poslednji"
	  },
	  "weekdays": {
	    "day": "den",
	    "weekday": "radni dan",
	    "weekend": "vikend"
	  }
	});
	}

	/* Scheduler messages */

	if (kendo.ui.Scheduler) {
	kendo.ui.Scheduler.prototype.options.messages =
	$.extend(true, kendo.ui.Scheduler.prototype.options.messages,{
	  "allDay": "ceo dan",
	  "date": "Data",
	  "event": "Doga??aj",
	  "time": "Vreme",
	  "showFullDay": "Prika??i ceo dan",
	  "showWorkDay": "Prika??i radno vreme",
	  "today": "Danas",
	  "save": "Za??uvaj",
	  "cancel": "Otkazati",
	  "destroy": "Izbri??i",
	  "deleteWindowTitle": "Obri??i doga??aj",
	  "ariaSlotLabel": "Izabrano od {0:t} do {1:t}",
	  "ariaEventLabel": "{0} na {1:D} u {2:t}",
	  "editable": {
	    "confirmation": "Da li ste sigurni da ??elite izbrisati ovaj doga??aj?"
	  },
	  "views": {
	    "day": "Dan",
	    "week": "Nedelja",
	    "workWeek": "Radna nedelja",
	    "agenda": "Agenda",
	    "month": "Mesec"
	  },
	  "recurrenceMessages": {
	    "deleteWindowTitle": "Izbri??ite ponavljajuc??u stavku",
	    "deleteWindowOccurrence": "Obri??ite trenutnu doga??aj",
	    "deleteWindowSeries": "Izbri??ite seriju",
	    "editWindowTitle": "Edit Recurring Item",
	    "editWindowOccurrence": "Izmeni ponavljajuc??u stavku",
	    "editWindowSeries": "Izmeni seriju",
	    "deleteRecurring": "Da li ??elite da izbri??ete samo pojavu ovog doga??aja ili ??itavu seriju?",
	    "editRecurring": "??elite li urediti samo pojavu doga??aja ili ??itavu seriju?"
	  },
	  "editor": {
	    "title": "Naslov",
	    "start": "Start",
	    "end": "Kraj",
	    "allDayEvent": "Celodnevni doga??aj",
	    "description": "Opis",
	    "repeat": "Ponovi",
	    "timezone": " ",
	    "startTimezone": "Zapo??nite vremensku zonu",
	    "endTimezone": "Kraj vremenske zone",
	    "separateTimezones": "Koristite odvojene po??etne i krajnje vremenske zone",
	    "timezoneEditorTitle": "Vremenske zone",
	    "timezoneEditorButton": "Vremenske zone",
	    "timezoneTitle": "Vremenske zone",
	    "noTimezone": "Bez vremenske zone",
	    "editorTitle": "Doga??aj"
	  }
	});
	}

	/* Spreadsheet messages */

	if (kendo.spreadsheet && kendo.spreadsheet.messages.borderPalette) {
	kendo.spreadsheet.messages.borderPalette =
	$.extend(true, kendo.spreadsheet.messages.borderPalette,{
	  "allBorders": "Sve ivice",
	  "insideBorders": "Unutra??nji rubovi",
	  "insideHorizontalBorders": "Unutar horizontalnih ivica",
	  "insideVerticalBorders": "Unutar vertikalnih ivica",
	  "outsideBorders": "Van ivica",
	  "leftBorder": "Lev rub",
	  "topBorder": "Gorni rub",
	  "rightBorder": "Desen rub",
	  "bottomBorder": "Donji rub",
	  "noBorders": "Nema ivice",
	  "reset": "Resetovanje boje",
	  "customColor": "Prilago??ena boja...",
	  "apply": "Primeniti",
	  "cancel": "Otkazati"
	});
	}

	if (kendo.spreadsheet && kendo.spreadsheet.messages.dialogs) {
	kendo.spreadsheet.messages.dialogs =
	$.extend(true, kendo.spreadsheet.messages.dialogs,{
	  "apply": "Primeniti",
	  "save": "Sa??uvati",
	  "cancel": "Otkazati",
	  "remove": "Ukloni",
	  "retry": "Ponovo",
	  "revert": "Vratiti ",
	  "okText": "OK",
	  "formatCellsDialog": {
	    "title": "Format",
	    "categories": {
	      "number": "Broj",
	      "currency": "Valuta",
	      "date": "Data"
	      }
	  },
	  "fontFamilyDialog": {
	    "title": "Font"
	  },
	  "fontSizeDialog": {
	    "title": "Veli??ina na font"
	  },
	  "bordersDialog": {
	    "title": "Ivice"
	  },
	  "alignmentDialog": {
	    "title": "Poravnanje",
	    "buttons": {
	     "justtifyLeft": "Poravnati levo",
	     "justifyCenter": "Centar",
	     "justifyRight": "Poravnati desno",
	     "justifyFull": "Poravnajte tekst do ivica",
	     "alignTop": "Poravnati gore",
	     "alignMiddle": "Poravnati sredina",
	     "alignBottom": "Poravnati dole"
	    }
	  },
	  "mergeDialog": {
	    "title": "Spajati c??elije",
	    "buttons": {
	      "mergeCells": "Spoji svi",
	      "mergeHorizontally": "Spoji horizontalno",
	      "mergeVertically": "Spoji vertikalno",
	      "unmerge": "Odvoj"
	    }
	  },
	  "freezeDialog": {
	    "title": "Zamrznuti paneli",
	    "buttons": {
	      "freezePanes": "Zamrznuti paneli",
	      "freezeRows": "Zamrznuti redovi",
	      "freezeColumns": "Zamrznuti koloni",
	      "unfreeze": "Odzra??ite panele"
	    }
	  },
	  "confirmationDialog": {
	    "text": "Da li ste sigurni da ??elite ukloniti ovaj list?",
	    "title": "Odstranite list"
	  },
	  "validationDialog": {
	    "title": "Validacija podataka",
	    "hintMessage": "Molimo unesite va??ec??u{0} vrednost {1}.",
	    "hintTitle": "Validacija {0}",
	    "criteria": {
	      "any": "Svaka vrijednost",
	      "number": "Broj",
	      "text": "Tekst",
	      "date": "Data",
	      "custom": "Prilago??ena Formula",
	      "list": "Lista"
	    },
	    "comparers": {
	      "greaterThan": "vec??e od",
	      "lessThan": "manje od",
	      "between": "izme??u",
	      "notBetween": "nije izme??u",
	      "equalTo": "jednako na",
	      "notEqualTo": "nije jednako na",
	      "greaterThanOrEqualTo": "vi??e ili jednako na",
	      "lessThanOrEqualTo": "manje ili jednako na"
	    },
	    "comparerMessages": {
	      "greaterThan": "vec??e od {0}",
	      "lessThan": "manje od {0}",
	      "between": "izme??u {0} i {1}",
	      "notBetween": "nije izme??u {0} i {1}",
	      "equalTo": "jednako na {0}",
	      "notEqualTo": "nije jednako na {0}",
	      "greaterThanOrEqualTo": "vi??e ili jednako na {0}",
	      "lessThanOrEqualTo": "manje ili jednako na {0}",
	      "custom": "koja zadovoljava formulu: {0}"
	    },
	    "labels": {
	      "criteria": "Kriterijum",
	      "comparer": "Uporedite",
	      "min": "Min",
	      "max": "Max",
	      "value": "Vrednost`",
	      "start": "Start",
	      "end": "Kraj",
	      "onInvalidData": "O neva??ec??im podacima",
	      "rejectInput": "Odbijte upis",
	      "showWarning": "Prika??i upozorenje",
	      "showHint": "Poka??i savet",
	      "hintTitle": "Naslov savet",
	      "hintMessage": "Savet poruka",
	      "ignoreBlank": "Ignoriraj prazno"
	    },
	    "placeholders": {
	      "typeTitle": "Unesite naslov",
	      "typeMessage": "Unesite poruka"
	    }
	  },
	  "exportAsDialog": {
	    "title": "Izvoz...",
	    "labels": {
	      "fileName": "Ime na datoteka",
	      "saveAsType": "Sa??uvaj kao tip",
	      "exportArea": "Izvoz",
	      "paperSize": "Veli??ina papira",
	      "margins": "Margine",
	      "orientation": "Orijentacija",
	      "print": "??tampaj",
	      "guidelines": "Smernice",
	      "center": "Centar",
	      "horizontally": "Horizontalno",
	      "vertically": "Vertikalno"
	    }
	  },
	  "modifyMergedDialog": {
	    "errorMessage": "Ne mogu da menjam deo spojene c??elije."
	  },
	  "useKeyboardDialog": {
	    "title": "Kopiranje i umetanje",

	    "errorMessage": "Ove akcije se ne mogu pozivati preko menija. Umjesto toga koristite pre??ice na tastaturi:",
	    "labels": {
	      "forCopy": "za kopiranje",
	      "forCut": "za rez",
	      "forPaste": "za umetanje"
	    }
	  },
	  "unsupportedSelectionDialog": {
	    "errorMessage": "Ta akcija se ne mo??e izvoditi na vi??e izbora."
	  }
	});
	}

	if (kendo.spreadsheet && kendo.spreadsheet.messages.filterMenu) {
	kendo.spreadsheet.messages.filterMenu =
	$.extend(true, kendo.spreadsheet.messages.filterMenu,{
	  "sortAscending": "Sortirajte opseg od A do Z",
	  "sortDescending": "Sortirajte opseg od Z do A",
	  "filterByValue": "Filter po vrednosti",
	  "filterByCondition": "Filtriraj po stanju",
	  "apply": "Primeniti",
	  "search": "Tra??i",
	  "addToCurrent": "Dodaj trenutni izbor",
	  "clear": "O??isti",
	  "blanks": "(Prazno)",
	  "operatorNone": "Ni??ta",
	  "and": "I",
	  "or": "ILI",
	  "operators": {
	    "string": {
	      "contains": "Tekst sadr??i",
	      "doesnotcontain": "Tekst ne sadr??i",
	      "startswith": "Tekst po??inje sa",
	      "endswith": "Tekst se zavr??ava"
	    },
	    "date": {
	      "eq":  "Datum je",
	      "neq": "Datum nije",
	      "lt":  "Datum je pre",
	      "gt":  "Datum je posle"
	    },
	    "number": {
	      "eq": "Je jednako na",
	      "neq": "Nije jednako na",
	      "gte": "Je vec??i od ili jednak na",
	      "gt": "Je vec??i od",
	      "lte": "Je manje ili jednako na",
	      "lt": "Is less than"
	    }
	  }
	});
	}

	if (kendo.spreadsheet && kendo.spreadsheet.messages.colorPicker) {
	kendo.spreadsheet.messages.colorPicker =
	$.extend(true, kendo.spreadsheet.messages.colorPicker,{
	  "reset": "Resetovanje boje",
	  "customColor": "Prilago??ena boja...",
	  "apply": "Primeniti",
	  "cancel": "Otkazati"
	});
	}

	if (kendo.spreadsheet && kendo.spreadsheet.messages.toolbar) {
	kendo.spreadsheet.messages.toolbar =
	$.extend(true, kendo.spreadsheet.messages.toolbar,{
	  "addColumnLeft": "Dodajte kolonu levo",
	  "addColumnRight": "Dodajte kolonu desno",
	  "addRowAbove": "Dodajte kolonu gore",
	  "addRowBelow": "Dodajte kolonu dole",
	  "alignment": "Poravnanje",
	  "alignmentButtons": {
	    "justtifyLeft": "Poravnati levo",
	    "justifyCenter": "Centar",
	    "justifyRight": "Poravnati desno",
	    "justifyFull": "Poravnajte tekst do ivica",
	    "alignTop": "Poravnati gore",
	    "alignMiddle": "Poravnati sredina",
	    "alignBottom": "Poravnati dole"
	  },
	  "backgroundColor": "Pozadina",
	  "bold": "Bold",
	  "borders": "Ivica",
	  "colorPicker": {
	    "reset": "Resetovanje boja",
	    "customColor": "Prilago??ena boja..."
	  },
	  "copy": "Kopiraj",
	  "cut": "Rez",
	  "deleteColumn": "Izbri??i kolonu",
	  "deleteRow": "Izbri??i red",
	  "excelImport": "Import od Excel...",
	  "filter": "Filter",
	  "fontFamily": "Font",
	  "fontSize": "Font veli??ina",
	  "format": "Prilago??en format...",
	  "formatTypes": {
	    "automatic": "Automatski",
	    "number": "Broj",
	    "percent": "Procent",
	    "financial": "Finansijski",
	    "currency": "Valuta",
	    "date": "Datum",
	    "time": "Vreme",
	    "dateTime": "Datum vreme",
	    "duration": "Trajanje",
	    "moreFormats": "Vi??e formata..."
	  },
	  "formatDecreaseDecimal": "Smanji decimala",
	  "formatIncreaseDecimal": "Povec??ati decimala",
	  "freeze": "Zamrznuti paneli",
	  "freezeButtons": {
	    "freezePanes": "Zamrznuti paneli",
	    "freezeRows": "Zamrznuti red",
	    "freezeColumns": "Zamrzne kolone",
	    "unfreeze": "Odzra??ite panele"
	  },
	  "italic": "Italic",
	  "merge": "Spajati c??elije",
	  "mergeButtons": {
	    "mergeCells": "Spoji svi",
	    "mergeHorizontally": "Spoji horizontalno",
	    "mergeVertically": "Spoji verticalno",
	    "unmerge": "Razdoji"
	  },
	  "open": "Otvori...",
	  "paste": "Umetni",
	  "quickAccess": {
	    "redo": "Ponovo",
	    "undo": "Poni??titi"
	  },
	  "saveAs": "Save As...",
	  "sortAsc": "Sortiraj rastuc??e",
	  "sortDesc": "Sortiraj silazno",
	  "sortButtons": {
	    "sortSheetAsc": "Sortiraj listu A do Z",
	    "sortSheetDesc": "Sortiraj listu Z do A",
	    "sortRangeAsc": "Sortirajte opseg A do Z",
	    "sortRangeDesc": "Sortirajte opseg Z do A"
	  },
	  "textColor": "Boja teksta",
	  "textWrap": "Prelomiti tekst",
	  "underline": "Podvuc??i",
	  "validation": "Validacija podataka..."
	});
	}

	if (kendo.spreadsheet && kendo.spreadsheet.messages.view) {
	kendo.spreadsheet.messages.view =
	$.extend(true, kendo.spreadsheet.messages.view,{
	  "errors": {
	    "shiftingNonblankCells": "Ne mogu ulo??iti c??elije zbog moguc??nosti gubitka podataka. Izaberite drugu lokaciju za ubacivanje ili izbri??ite podatke sa kraja radnog lista.",
	    "filterRangeContainingMerges": "Ne mogu napraviti filter unutar opsega koji sadr??i spoj",
	    "validationError": "Vrednost koju unesete kr??i pravila validacije postavljena na c??eliji."
	  },
	  "tabs": {
	    "home": "Doma",
	    "insert": "Ubaci",
	    "data": "Podatci"
	  }
	});
	}

	/* Slider messages */

	if (kendo.ui.Slider) {
	kendo.ui.Slider.prototype.options =
	$.extend(true, kendo.ui.Slider.prototype.options,{
	  "increaseButtonTitle": "Povec??ajte",
	  "decreaseButtonTitle": "Smanjite"
	});
	}

	/* ListBox messaages */

	if (kendo.ui.ListBox) {
	kendo.ui.ListBox.prototype.options.messages =
	$.extend(true, kendo.ui.ListBox.prototype.options.messages,{
	  "tools": {
	    "remove": "Izbri??i",
	    "moveUp": "Pomeri Gore",
	    "moveDown": "Pomeri Dole",
	    "transferTo": "Prenos Do",
	    "transferFrom": "Prenos Od",
	    "transferAllTo": "Prenosi Sve Do",
	    "transferAllFrom": "Prenosi Sve Od"
	  }
	});
	}

	/* TreeList messages */

	if (kendo.ui.TreeList) {
	kendo.ui.TreeList.prototype.options.messages =
	$.extend(true, kendo.ui.TreeList.prototype.options.messages,{
	  "noRows": "Nema podataka za prikaz",
	  "loading": "U??itavanje...",
	  "requestFailed": "Zahtev nije uspeo.",
	  "retry": "Poku??aj ponovo",
	  "commands": {
	      "edit": "Izmeni",
	      "update": "A??uriraj",
	      "canceledit": "Otkazati",
	      "create": "Dodajte novi zapis",
	      "createchild": "Dodadite detalj zapis",
	      "destroy": "Izbri??i",
	      "excel": "Export u Excel",
	      "pdf": "Export u PDF"
	  }
	});
	}

	/* TreeView messages */

	if (kendo.ui.TreeView) {
	kendo.ui.TreeView.prototype.options.messages =
	$.extend(true, kendo.ui.TreeView.prototype.options.messages,{
	  "loading": "U??itavanje...",
	  "requestFailed": "Zahtev nije uspeo.",
	  "retry": "Ponovo"
	});
	}

	/* Upload messages */

	if (kendo.ui.Upload) {
	kendo.ui.Upload.prototype.options.localization=
	$.extend(true, kendo.ui.Upload.prototype.options.localization,{
	  "select": "Izaberite datoteke...",
	  "cancel": "Otkazati",
	  "retry": "Ponovo",
	  "remove": "Ukloni",
	  "clearSelectedFiles": "O??isti",
	  "uploadSelectedFiles": "Otpremiti datoteka",
	  "dropFilesHere": "Ispustite datoteke ovde da biste ih otpremili",
	  "statusUploading": "otpremiti",
	  "statusUploaded": "zavrsio otpremiti",
	  "statusWarning": "upozorenje",
	  "statusFailed": "nije uspeo",
	  "headerStatusUploading": "otpremiti...",
	  "headerStatusUploaded": "Gotovo",
	  "invalidMaxFileSize": "Veli??ina datoteke je prevelika.",
	  "invalidMinFileSize": "Veli??ina datoteke je premala.",
	  "invalidFileExtension": "Tip datoteke nije dozvoljen."
	});
	}

	/* Validator messages */

	if (kendo.ui.Validator) {
	kendo.ui.Validator.prototype.options.messages =
	$.extend(true, kendo.ui.Validator.prototype.options.messages,{
	  "required": "{0} je potrebno",
	  "pattern": "{0} nije va??ec??a",
	  "min": "{0} treba da bude vec??a ili jednaka {1}",
	  "max": "{0} treba da bude manji ili jednak {1}",
	  "step": "{0} nije va??ec??a",
	  "email": "{0} nije va??ec??i e-mail",
	  "url": "{0} nije va??ec??i URL URL",
	  "date": "{0} nije va??ec??i datum",
	  "dateCompare": "Krajnji datum mora biti vec??i ili jednak po??etnom datumu"
	});
	}

	/* kendo.ui.progress method */
	if (kendo.ui.progress) {
	kendo.ui.progress.messages =
	$.extend(true, kendo.ui.progress.messages, {
	    loading: "U??itavanje..."
	});
	}

	/* Dialog */

	if (kendo.ui.Dialog) {
	kendo.ui.Dialog.prototype.options.messages =
	$.extend(true, kendo.ui.Dialog.prototype.options.localization, {
	  "close": "Otkazati"
	});
	}

	/* Calendar */
	if (kendo.ui.Calendar) {
	kendo.ui.Calendar.prototype.options.messages =
	$.extend(true, kendo.ui.Calendar.prototype.options.messages, {
	  "weekColumnHeader": ""
	});
	}

	/* Alert */

	if (kendo.ui.Alert) {
	kendo.ui.Alert.prototype.options.messages =
	$.extend(true, kendo.ui.Alert.prototype.options.localization, {
	  "okText": "OK"
	});
	}

	/* Confirm */

	if (kendo.ui.Confirm) {
	kendo.ui.Confirm.prototype.options.messages =
	$.extend(true, kendo.ui.Confirm.prototype.options.localization, {
	  "okText": "OK",
	  "cancel": "Otkazati"
	});
	}

	/* Prompt */
	if (kendo.ui.Prompt) {
	kendo.ui.Prompt.prototype.options.messages =
	$.extend(true, kendo.ui.Prompt.prototype.options.localization, {
	  "okText": "OK",
	  "cancel": "Otkazati"
	});
	}

	/* DateInput */
	if (kendo.ui.DateInput) {
	  kendo.ui.DateInput.prototype.options.messages =
	    $.extend(true, kendo.ui.DateInput.prototype.options.messages, {
	      "year": "godina",
	      "month": "mesec",
	      "day": "den",
	      "weekday": "dan u nedelji",
	      "hour": "sati",
	      "minute": "minuta",
	      "second": "sekunde",
	      "dayperiod": "AM/PM"
	    });
	}

	})(window.kendo.jQuery);

/***/ })

/******/ });