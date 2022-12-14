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

	__webpack_require__(1610);
	module.exports = __webpack_require__(1610);


/***/ }),

/***/ 1610:
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
	  "apply": "Apliko",
	  "cancel": "Anulo",
	  "noColor": "pa ngjyr??",
	  "clearColor": "Pastro ngjyr??n"
	});
	}

	/* ColorPicker messages */

	if (kendo.ui.ColorPicker) {
	kendo.ui.ColorPicker.prototype.options.messages =
	$.extend(true, kendo.ui.ColorPicker.prototype.options.messages,{
	  "apply": "Apliko",
	  "cancel": "Anulo",
	  "noColor": "pa ngjyr??",
	  "clearColor": "Pastro ngjyr??n"
	});
	}

	/* ColumnMenu messages */

	if (kendo.ui.ColumnMenu) {
	kendo.ui.ColumnMenu.prototype.options.messages =
	$.extend(true, kendo.ui.ColumnMenu.prototype.options.messages,{
	  "sortAscending": "Rendit duke rritur vler??n",
	  "sortDescending": "Rendit duke e zvog??luar vler??n",
	  "filter": "Filtro",
	  "columns": "Kolona",
	  "done": "P??rfundo",
	  "settings": "Cil??simet e kolon??s",
	  "lock": "Mbylle",
	  "unlock": "Hape"
	});
	}

	/* Editor messages */

	if (kendo.ui.Editor) {
	kendo.ui.Editor.prototype.options.messages =
	$.extend(true, kendo.ui.Editor.prototype.options.messages,{
	  "bold": "Bold",
	  "italic": "Italic",
	  "underline": "N??nviz??",
	  "strikethrough": "I mesvij??zuar",
	  "superscript": "Superscript",
	  "subscript": "N??nscript",
	  "justifyCenter": "Teksti n?? qend??r",
	  "justifyLeft": "Radhit tekstin majtas",
	  "justifyRight": "Radhit tekstin djathtas",
	  "justifyFull": "Justifiko",
	  "insertUnorderedList": "Vendosni list?? t?? pa renditur",
	  "insertOrderedList": "Vendosni list?? t?? renditur",
	  "indent": "Porosit",
	  "outdent": "Nxjerrje",
	  "createLink": "Vendosi hyperlink",
	  "unlink": "Fshini hyperlink",
	  "insertImage": "Vendosni fotografi",
	  "insertFile": "Vendosni fajl",
	  "insertHtml": "Vendosni HTML",
	  "viewHtml": "Shiko HTML",
	  "fontName": "Zgjedh llojin e shkronjave",
	  "fontNameInherit": "(font i trash??guar)",
	  "fontSize": "Zgjedh madh??sin?? e fontit",
	  "fontSizeInherit": "(madh??si e trash??guar)",
	  "formatBlock": "Formati",
	  "formatting": "Formati",
	  "foreColor": "Ngjyra",
	  "backColor": "Ngjyra e prapavis??",
	  "style": "Stilet",
	  "emptyFolder": "Folder i zbraz??t",
	  "uploadFile": "Ngarko",
	  "overflowAnchor": "M?? shum?? vegla",
	  "orderBy": "Organizoni nga:",
	  "orderBySize": "Madh??sia",
	  "orderByName": "Emri",
	  "invalidFileType": "Fajli i zgjedhur \"{0}\" nuk ??sht?? i vlefsh??m. Llojet e fajleve t?? mb??shtetur jan?? {1}.",
	  "deleteFile": 'Jeni t?? sigurt?? q?? doni t?? fshini "{0}"?',
	  "overwriteFile": 'Fajli me emrin "{0}" tashm?? ekziston n?? dosjen aktuale. D??shironi ta mbishkruani?',
	  "directoryNotFound": "Dosje me k??t?? em??r nuk ??sht?? gjetur.",
	  "imageWebAddress": "Web adresa",
	  "imageAltText": "Tekst tjet??r",
	  "imageWidth": "Gj??r??sia (px)",
	  "imageHeight": "Lart??sia (px)",
	  "fileWebAddress": "Web adresa",
	  "fileTitle": "Titulli",
	  "linkWebAddress": "Web adresa",
	  "linkText": "Teksti",
	  "linkToolTip": "Ndihmes??",
	  "linkOpenInNewWindow": "Hape linkun n?? dritare t?? re",
	  "dialogUpdate": "P??rdit??so",
	  "dialogInsert": "Vendos",
	  "dialogButtonSeparator": "ose",
	  "dialogCancel": "Anulo",
	  "cleanFormatting": "Pastro formatin",
	  "createTable": "Krijo tabel??",
	  "addColumnLeft": "Shto kolon?? n?? t?? majt??",
	  "addColumnRight": "Shto kolon?? n?? t?? djatht??",
	  "addRowAbove": "Shto rresht lart??",
	  "addRowBelow": "Shto rresht posht??",
	  "deleteRow": "Fshij reshtin",
	  "deleteColumn": "Fshij kolon??n",
	  "dialogOk": "Ok",
	  "tableWizard": "Tabela Wizard",
	  "tableTab": "Tabela",
	  "cellTab": "Qeliz??",
	  "accessibilityTab": "Qasja",
	  "caption": "Titulli",
	  "summary": "P??rmledhja",
	  "width": "Gj??r??sia",
	  "height": "Lart??sia",
	  "units": "Nj??sit??",
	  "cellSpacing": "Ndarja e qeliz??s",
	  "cellPadding": "Mbushja e qelizave",
	  "cellMargin": "Margjina e qeliz??s",
	  "alignment": "Radhitja",
	  "background": "Prapavia",
	  "cssClass": "CSS Klasa",
	  "id": "ID",
	  "border": "Kufiri",
	  "borderStyle": "Stili i Kufirit",
	  "collapseBorders": "Mbylli kufijt??",
	  "wrapText": "P??rfundo tekstin",
	  "associateCellsWithHeaders": "Nd??rlidhni qelizat me titujt",
	  "alignLeft": "Radhit majtas",
	  "alignCenter": "Radhit n?? mes",
	  "alignRight": "Radhit djathtas",
	  "alignLeftTop": "Radhit majtas lart??",
	  "alignCenterTop": "Radhit n?? mes lart??",
	  "alignRightTop": "Radhit djathtas lart??",
	  "alignLeftMiddle": "Radhit majtas n?? mes",
	  "alignCenterMiddle": "Radhit n?? mes n?? mes",
	  "alignRightMiddle": "Radhit djathtas n?? mes",
	  "alignLeftBottom": "Radhit majtas posht??",
	  "alignCenterBottom": "Radhit n?? mes posht??",
	  "alignRightBottom": "Radhit djathtas posht??",
	  "alignRemove": "Fshij Radhitjen",
	  "columns": "Kolonat",
	  "rows": "Rreshtat",
	  "selectAllCells": "Zgjedh t?? gjitha qelizat"
	});
	}

	/* FileBrowser messages */

	if (kendo.ui.FileBrowser) {
	kendo.ui.FileBrowser.prototype.options.messages =
	$.extend(true, kendo.ui.FileBrowser.prototype.options.messages,{
	  "uploadFile": "Ngarko",
	  "orderBy": "Organizoni nga",
	  "orderByName": "Emri",
	  "orderBySize": "Madh??sia",
	  "directoryNotFound": "Nj?? dosje me k??t?? em??r nuk u gjet.",
	  "emptyFolder": "Folder i zbraz??t",
	  "deleteFile": 'Jeni t?? sigurt se doni t?? fshini "{0}"?',
	  "invalidFileType": "Fajli i selektuar \"{0}\" nuk ??sht?? i vlefsh??m. Llojet e fajleve t?? mb??shtetur jan?? {1}.",
	  "overwriteFile": "Fajli me emrin \"{0}\" tashm?? ekziston n?? dosjen aktuale. D??shironi t'a mbishkruani?",
	  "dropFilesHere": "l??shoni fajlet k??tu p??r t'i ngarkuar",
	  "search": "K??rko"
	});
	}

	/* FilterCell messages */

	if (kendo.ui.FilterCell) {
	kendo.ui.FilterCell.prototype.options.messages =
	$.extend(true, kendo.ui.FilterCell.prototype.options.messages,{
	  "isTrue": "??sht?? e v??rtet??",
	  "isFalse": "??sht?? e pav??rtet??",
	  "filter": "Filtro",
	  "clear": "Pastro",
	  "operator": "Operator"
	});
	}

	/* FilterCell operators */

	if (kendo.ui.FilterCell) {
	kendo.ui.FilterCell.prototype.options.operators =
	$.extend(true, kendo.ui.FilterCell.prototype.options.operators,{
	  "string": {
	    "eq": "??sht?? e barabart?? me",
	    "neq": "Nuk ??sht?? e barabart?? me",
	    "startswith": "Fillon me",
	    "contains": "P??rmban",
	    "doesnotcontain": "Nuk p??rmban",
	    "endswith": "P??rfundon me",
	    "isnull": "??sht?? zero",
	    "isnotnull": "Nuk ??sht?? zero",
	    "isempty": "??sht?? e zbraz??t",
	    "isnotempty": "Nuk ??sht?? e zbraz??t"
	  },
	  "number": {
	    "eq": "??sht?? e barabart?? me",
	    "neq": "Nuk ??sht?? e barabart?? me",
	    "gte": "??sht?? m?? e madhe ose e barabart?? me",
	    "gt": "??sht?? m?? e madhe se",
	    "lte": "??sht?? m?? e vog??l ose e barabart?? me",
	    "lt": "??sht?? me e vog??l se",
	    "isnull": "??sht?? zero",
	    "isnotnull": "Nuk ??sht?? zero"
	  },
	  "date": {
	    "eq": "??sht?? e barabart?? me",
	    "neq": "Nuk ??sht?? e barabart?? me",
	    "gte": "??sht?? pas ose e barabart?? me",
	    "gt": "??sht?? pas",
	    "lte": "??sht?? para ose e barabart?? me",
	    "lt": "??sht?? para",
	    "isnull": "??sht?? zero",
	    "isnotnull": "Nuk ??sht?? zero"
	  },
	  "enums": {
	    "eq": "??sht?? e barabart?? me",
	    "neq": "Nuk ??sht?? e barabart?? me",
	    "isnull": "??sht?? zero",
	    "isnotnull": "Nuk ??sht?? zero"
	  }
	});
	}

	/* FilterMenu messages */

	if (kendo.ui.FilterMenu) {
	kendo.ui.FilterMenu.prototype.options.messages =
	$.extend(true, kendo.ui.FilterMenu.prototype.options.messages,{
	  "info": "Trego artikujt me vler?? q??:",
	  "title": "Trego artikujt me vler?? q??",
	  "isTrue": "??sht?? e v??rtet??",
	  "isFalse": "??sht?? e pav??rtet??",
	  "filter": "Filtro",
	  "clear": "Pastro",
	  "and": "Dhe",
	  "or": "Ose",
	  "selectValue": "-Zgjidhni vler??n-",
	  "operator": "Operatori",
	  "value": "Vlera",
	  "cancel": "Anulo"
	});
	}

	/* FilterMenu operator messages */

	if (kendo.ui.FilterMenu) {
	kendo.ui.FilterMenu.prototype.options.operators =
	$.extend(true, kendo.ui.FilterMenu.prototype.options.operators,{
	  "string": {
	    "eq": "??sht?? e barabart?? me",
	    "neq": "Nuk ??sht?? e barabart?? me",
	    "startswith": "Fillon me",
	    "contains": "P??rmban",
	    "doesnotcontain": "Nuk p??rmban",
	    "endswith": "P??rfundon me",
	    "isnull": "??sht?? zero",
	    "isnotnull": "Nuk ??sht?? zero",
	    "isempty": "??sht?? e zbraz??t",
	    "isnotempty": "Nuk ??sht?? e zbraz??t"
	  },
	  "number": {
	    "eq": "??sht?? e barabart?? me",
	    "neq": "Nuk ??sht?? e barabart?? me",
	    "gte": "??sht?? m?? e madhe ose e barabart?? me",
	    "gt": "??sht?? m?? e madhe se",
	    "lte": "??sht?? m?? e vog??l ose e barabart?? me",
	    "lt": "??sht?? m?? e vog??l se",
	    "isnull": "??sht?? zero",
	    "isnotnull": "Nuk ??sht?? zero"
	  },
	  "date": {
	    "eq": "??sht?? e barabart?? me",
	    "neq": "Nuk ??sht?? e barabart?? me",
	    "gte": "Is after or equal to",
	    "gt": "Is after",
	    "lte": "Is before or equal to",
	    "lt": "Is before",
	    "isnull": "??sht?? zero",
	    "isnotnull": "Nuk ??sht?? zero"
	  },
	  "enums": {
	    "eq": "??sht?? e barabart?? me",
	    "neq": "Nuk ??sht?? e barabart?? me",
	    "isnull": "??sht?? zero",
	    "isnotnull": "Nuk ??sht?? zero"
	  }
	});
	}

	/* FilterMultiCheck messages */

	if (kendo.ui.FilterMultiCheck) {
	kendo.ui.FilterMultiCheck.prototype.options.messages =
	$.extend(true, kendo.ui.FilterMultiCheck.prototype.options.messages,{
	  "checkAll": "Selekto t?? gjitha",
	  "clear": "Pastro",
	  "filter": "Filtro",
	  "search": "K??rko"
	});
	}

	/* Gantt messages */

	if (kendo.ui.Gantt) {
	kendo.ui.Gantt.prototype.options.messages =
	$.extend(true, kendo.ui.Gantt.prototype.options.messages,{
	  "actions": {
	    "addChild": "Shto f??mij??",
	    "append": "Shto detyr??",
	    "insertAfter": "Shto posht??",
	    "insertBefore": "Shto lart??",
	    "pdf": "Eksporto n?? PDF"
	  },
	  "cancel": "Anulo",
	  "deleteDependencyWindowTitle": "Fshij var??sin??",
	  "deleteTaskWindowTitle": "Fshij detyr??n",
	  "destroy": "Fshij",
	  "editor": {
	    "assingButton": "Cakto",
	    "editorTitle": "Detyr??",
	    "end": "P??rfundo",
	    "percentComplete": "Kompleto",
	    "resources": "Burimet",
	    "resourcesEditorTitle": "Burimet",
	    "resourcesHeader": "Burimet",
	    "start": "Filo",
	    "title": "Titulli",
	    "unitsHeader": "Nj??sit??"
	  },
	  "save": "Ruaj",
	  "views": {
	    "day": "Dita",
	    "end": "P??rfundo",
	    "month": "Muaji",
	    "start": "Fillo",
	    "week": "Java",
	    "year": "Viti"
	  }
	});
	}

	/* Grid messages */

	if (kendo.ui.Grid) {
	kendo.ui.Grid.prototype.options.messages =
	$.extend(true, kendo.ui.Grid.prototype.options.messages,{
	  "commands": {
	    "cancel": "Anulo ndryshimet",
	    "canceledit": "Anulo",
	    "create": "Shto t?? dh??n?? t?? re",
	    "destroy": "Fshij",
	    "edit": "Redakto",
	    "excel": "Eksporto n?? Excel",
	    "pdf": "Eksporto n?? PDF",
	    "save": "Ruaj ndryshimet",
	    "select": "Zgjedh",
	    "update": "P??rdit??so"
	  },
	  "editable": {
	    "cancelDelete": "Anulo",
	    "confirmation": "Je i sigurt q?? d??shiron ta fshish k??t?? t?? dh??n???",
	    "confirmDelete": "Fshij"
	  },
	  "noRecords": "Nuk ka t?? dh??na n?? dispozicion.",
	  "expandCollapseColumnHeader": ""
	});
	}

	/* TreeList messages */

	if (kendo.ui.TreeList) {
	kendo.ui.TreeList.prototype.options.messages =
	$.extend(true, kendo.ui.TreeList.prototype.options.messages,{
	    "noRows": "Nuk ka t?? dh??na p??r t?? shfaqur",
	    "loading": "Duke ngarkuar...",
	    "requestFailed": "K??rkesa d??shtoi.",
	    "retry": "Provo s??rish",
	    "commands": {
	        "edit": "Redakto",
	        "update": "P??rdit??so",
	        "canceledit": "Anulo",
	        "create": "Shto t?? dh??n?? t?? re",
	        "createchild": "Shto t?? dh??n?? f??mij??",
	        "destroy": "Fshij",
	        "excel": "Eksporto n?? Excel",
	        "pdf": "Eksporto n?? PDF"
	    }
	});
	}

	/* Groupable messages */

	if (kendo.ui.Groupable) {
	kendo.ui.Groupable.prototype.options.messages =
	$.extend(true, kendo.ui.Groupable.prototype.options.messages,{
	  "empty": "T??rheq titullin e kolon??s dhe l??sho at?? k??tu p??r t?? grupuar nga ajo kolon??"
	});
	}

	/* NumericTextBox messages */

	if (kendo.ui.NumericTextBox) {
	kendo.ui.NumericTextBox.prototype.options =
	$.extend(true, kendo.ui.NumericTextBox.prototype.options,{
	  "upArrowText": "Rrit vler??n",
	  "downArrowText": "Zvog??lo vler??n"
	});
	}

	/* MediaPlayer messages */

	if (kendo.ui.MediaPlayer) {
	kendo.ui.MediaPlayer.prototype.options.messages =
	$.extend(true, kendo.ui.MediaPlayer.prototype.options.messages,{
	  "pause": "Pauzo",
	  "play": "Luaj",
	  "mute": "Pa z??",
	  "unmute": "Aktivizo z??rin",
	  "quality": "Kualiteti",
	  "fullscreen": "Ekran i plot??"
	});
	}

	/* Pager messages */

	if (kendo.ui.Pager) {
	kendo.ui.Pager.prototype.options.messages =
	$.extend(true, kendo.ui.Pager.prototype.options.messages,{
	  "allPages": "T?? gjitha",
	  "display": "{0} - {1} prej {2} artikujve",
	  "empty": "Nuk ka artikuj p??r t?? shfaqur",
	  "page": "Faqe",
	  "of": "of {0}",
	  "itemsPerPage": "artikuj p??r faqe",
	  "first": "Shkoni n?? faqen e par??",
	  "previous": "Shkoni n?? faqen e m??parshme",
	  "next": "Shkoni n?? faqen e ardhshme",
	  "last": "Shkoni n?? faqen e fundit",
	  "refresh": "Rifresko",
	  "morePages": "M?? shum?? faqe"
	});
	}

	/* TreeListPager messages */

	if (kendo.ui.TreeListPager) {
	kendo.ui.TreeListPager.prototype.options.messages =
	$.extend(true, kendo.ui.TreeListPager.prototype.options.messages,{
	  "allPages": "T?? gjitha",
	  "display": "{0} - {1} prej {2} artikujve",
	  "empty": "Nuk ka artikuj p??r t?? shfaqur",
	  "page": "Faqe",
	  "of": "of {0}",
	  "itemsPerPage": "artikuj p??r faqe",
	  "first": "Shkoni n?? faqen e par??",
	  "previous": "Shkoni n?? faqen e m??parshme",
	  "next": "Shkoni n?? faqen e ardhshme",
	  "last": "Shkoni n?? faqen e fundit",
	  "refresh": "Rifresko",
	  "morePages": "M?? shum?? faqe"
	});
	}

	/* PivotGrid messages */

	if (kendo.ui.PivotGrid) {
	kendo.ui.PivotGrid.prototype.options.messages =
	$.extend(true, kendo.ui.PivotGrid.prototype.options.messages,{
	  "measureFields": "L??sho fushat me t?? dh??na k??tu",
	  "columnFields": "L??sho fushat e kolonave k??tu",
	  "rowFields": "L??sho fushat e reshtave k??tu"
	});
	}

	/* PivotFieldMenu messages */

	if (kendo.ui.PivotFieldMenu) {
	kendo.ui.PivotFieldMenu.prototype.options.messages =
	$.extend(true, kendo.ui.PivotFieldMenu.prototype.options.messages,{
	  "info": "Trego artikujt me vlerat t?? cilat:",
	  "filterFields": "Filtri i fushave",
	  "filter": "Filtro",
	  "include": "P??rfshij Fushat...",
	  "title": "Fushat p??r t'i p??rfshir??",
	  "clear": "Pastro",
	  "ok": "Ok",
	  "cancel": "Anulo",
	  "operators": {
	    "contains": "P??rmban??",
	    "doesnotcontain": "Nuk p??rmban??",
	    "startswith": "Fillon me",
	    "endswith": "P??rfundon me",
	    "eq": "??sht?? e barabart?? me",
	    "neq": "Nuk ??sht?? e barabart?? me"
	  }
	});
	}

	/* RecurrenceEditor messages */

	if (kendo.ui.RecurrenceEditor) {
	kendo.ui.RecurrenceEditor.prototype.options.messages =
	$.extend(true, kendo.ui.RecurrenceEditor.prototype.options.messages,{
	  "frequencies": {
	    "never": "Asnj??her??",
	    "hourly": "??do or??",
	    "daily": "??do dit??",
	    "weekly": "??do jav??",
	    "monthly": "??do muaj",
	    "yearly": "??do vit"
	  },
	  "hourly": {
	    "repeatEvery": "P??rs??riteni ??do: ",
	    "interval": " or??"
	  },
	  "daily": {
	    "repeatEvery": "P??rs??riteni ??do: ",
	    "interval": " dit??"
	  },
	  "weekly": {
	    "interval": " jav??",
	    "repeatEvery": "P??rs??riteni ??do: ",
	    "repeatOn": "P??rs??riteni n??: "
	  },
	  "monthly": {
	    "repeatEvery": "P??rs??riteni ??do: ",
	    "repeatOn": "P??rs??riteni n??: ",
	    "interval": " muaj",
	    "day": "Dit?? "
	  },
	  "yearly": {
	    "repeatEvery": "P??rs??riteni ??do: ",
	    "repeatOn": "P??rs??riteni n??: ",
	    "interval": " vit",
	    "of": " t?? "
	  },
	  "end": {
	    "label": "P??rfundoj:",
	    "mobileLabel": "P??fundon",
	    "never": "Asnj??her??",
	    "after": "Pas ",
	    "occurrence": " dukuri(t??)",
	    "on": "N?? "
	  },
	  "offsetPositions": {
	    "first": "e para",
	    "second": "e dyta",
	    "third": "e treta",
	    "fourth": "e kat??rta",
	    "last": "e fundit"
	  },
	  "weekdays": {
	    "day": "dit??",
	    "weekday": "dit?? jave",
	    "weekend": "dit?? e fundjav??s"
	  }
	});
	}

	/* Scheduler messages */

	if (kendo.ui.Scheduler) {
	kendo.ui.Scheduler.prototype.options.messages =
	$.extend(true, kendo.ui.Scheduler.prototype.options.messages,{
	  "allDay": "t??r?? dit??n",
	  "date": "Data",
	  "event": "Ngjarje",
	  "time": "Koha",
	  "showFullDay": "Trego dit??n e plot??",
	  "showWorkDay": "Trego or??t e biznesit",
	  "today": "Sot",
	  "save": "Ruaj",
	  "cancel": "Anulo",
	  "destroy": "Fshij",
	  "deleteWindowTitle": "Fshij ngjarjen",
	  "ariaSlotLabel": "Zgjedhur prej {0:t} deri {1:t}",
	  "ariaEventLabel": "{0} n?? {1:D} me {2:t}",
	  "editable": {
	    "confirmation": "Je i sigurt q?? d??shiron ta fshish k??t?? ngjarje?"
	  },
	  "views": {
	    "day": "Dit??",
	    "week": "Jav??",
	    "workWeek": "Jav?? punuese",
	    "agenda": "Rendi dit??s",
	    "month": "Muaj"
	  },
	  "recurrenceMessages": {
	    "deleteWindowTitle": "Fshije artikullin e p??rs??ritur",
	    "deleteWindowOccurrence": "Fshije dukurin e tanishme",
	    "deleteWindowSeries": "Fshini serin??",
	    "editWindowTitle": "Redakto artikullin e p??rs??ritur",
	    "editWindowOccurrence": "Redakto dukurin e tanishme",
	    "editWindowSeries": "Redakto serin??",
	    "deleteRecurring": "Doni t?? fshini vet??m k??t?? dukuri apo t?? gjith?? serin???",
	    "editRecurring": "Doni t?? redaktoni vet??m k??t?? dukuri apo t?? gjith?? serin???"
	  },
	  "editor": {
	    "title": "Titulli",
	    "start": "Fillimi",
	    "end": "P??rfundimi",
	    "allDayEvent": "Ngjarja gjith?? dit??s",
	    "description": "P??rshkrimi",
	    "repeat": "P??rs??rit",
	    "timezone": " ",
	    "startTimezone": "Fillo zon??n kohore",
	    "endTimezone": "P??rfundo zon??n kohore",
	    "separateTimezones": "P??rdorni zona t?? ndara kohore t?? fillimit dhe p??rfundimit",
	    "timezoneEditorTitle": "Zonat kohore",
	    "timezoneEditorButton": "Zona kohore",
	    "timezoneTitle": "Zonat kohore",
	    "noTimezone": "Nuk ka zon?? kohore",
	    "editorTitle": "Ngjarje"
	  }
	});
	}

	/* Spreadsheet messages */

	if (kendo.spreadsheet && kendo.spreadsheet.messages.borderPalette) {
	kendo.spreadsheet.messages.borderPalette =
	$.extend(true, kendo.spreadsheet.messages.borderPalette,{
	  "allBorders": "T?? gjitha kufijt??",
	  "insideBorders": "Kufijt?? e brendsh??m",
	  "insideHorizontalBorders": "Kufijt?? e brendsh??m horizontal",
	  "insideVerticalBorders": "Kufijt?? e brendsh??m vertikal",
	  "outsideBorders": "Kufijt?? e jashtme",
	  "leftBorder": "Kufiri i majt??",
	  "topBorder": "Kufiri lart??",
	  "rightBorder": "Kufiri i djatht??",
	  "bottomBorder": "Kufiri posht??",
	  "noBorders": "Pa kufi",
	  "reset": "Rivendosni ngjyr??n",
	  "customColor": "Ngjyra e personalizuar...",
	  "apply": "Apliko",
	  "cancel": "Anulo"
	});
	}

	if (kendo.spreadsheet && kendo.spreadsheet.messages.dialogs) {
	kendo.spreadsheet.messages.dialogs =
	$.extend(true, kendo.spreadsheet.messages.dialogs,{
	  "apply": "Apliko",
	  "save": "Ruaj",
	  "cancel": "Anulo",
	  "remove": "Fshije",
	  "retry": "Provo s??rish",
	  "revert": "Ktheni",
	  "okText": "OK",
	  "formatCellsDialog": {
	    "title": "Formato",
	    "categories": {
	      "number": "Numri",
	      "currency": "Valuta",
	      "date": "Data"
	      }
	  },
	  "fontFamilyDialog": {
	    "title": "Fonti"
	  },
	  "fontSizeDialog": {
	    "title": "Madh??sia e fontit"
	  },
	  "bordersDialog": {
	    "title": "Kufijt??"
	  },
	  "alignmentDialog": {
	    "title": "Radhitja",
	    "buttons": {
	     "justtifyLeft": "Radhit majtas",
	     "justifyCenter": "Qend??r",
	     "justifyRight": "Radhit djathtas",
	     "justifyFull": "Justifiko",
	     "alignTop": "Radhit lart??",
	     "alignMiddle": "Radhit n?? mes",
	     "alignBottom": "Radhit posht??"
	    }
	  },
	  "mergeDialog": {
	    "title": "Bashko qelizat",
	    "buttons": {
	      "mergeCells": "Bashko t?? gjitha",
	      "mergeHorizontally": "Bashko horizontalisht",
	      "mergeVertically": "Bashko vertikalisht",
	      "unmerge": "Mos bashko"
	    }
	  },
	  "freezeDialog": {
	    "title": "Ngrirje e panel??ve",
	    "buttons": {
	      "freezePanes": "Ngrirje e panel??ve",
	      "freezeRows": "Ngrirje e rreshtave",
	      "freezeColumns": "Ngrirje e kolonave",
	      "unfreeze": "Zbllokim i panel??ve"
	    }
	  },
	  "confirmationDialog": {
	    "text": "Je i sigurt q?? d??shiron ta heq??sh k??t?? flet???",
	    "title": "Heq flet??n"
	  },
	  "validationDialog": {
	    "title": "Vlefshm??ria e t?? dh??nave",
	    "hintMessage": "Ju lutemi vendosni t?? vlefshme {0} vler??n {1}.",
	    "hintTitle": "Vlefshm??ria {0}",
	    "criteria": {
	      "any": "??do vler??",
	      "number": "Numri",
	      "text": "Teksti",
	      "date": "Data",
	      "custom": "Formula e personalizuar",
	      "list": "Lista"
	    },
	    "comparers": {
	      "greaterThan": "m?? e madhe se",
	      "lessThan": "m?? e vog??l se",
	      "between": "nd??rmjet",
	      "notBetween": "jo nd??rmjet",
	      "equalTo": "e barabart?? me",
	      "notEqualTo": "jo e barabart?? me",
	      "greaterThanOrEqualTo": "m?? e madhe ose e barabart?? me",
	      "lessThanOrEqualTo": "m?? e vog??l ose e barabart?? me"
	    },
	    "comparerMessages": {
	      "greaterThan": "m?? e madhe se {0}",
	      "lessThan": "m?? e vog??l se {0}",
	      "between": "nd??rmjet {0} dhe {1}",
	      "notBetween": "jo nd??rmjet {0} dhe {1}",
	      "equalTo": "e barabart?? me {0}",
	      "notEqualTo": "jo e barabart?? me {0}",
	      "greaterThanOrEqualTo": "m?? e madhe ose e barabart?? me {0}",
	      "lessThanOrEqualTo": "m?? e vog??l ose e barabart?? me {0}",
	      "custom": "kjo plot??son formul??n: {0}"
	    },
	    "labels": {
	      "criteria": "Kriteri",
	      "comparer": "Krahasimi",
	      "min": "Min",
	      "max": "Max",
	      "value": "Vlera",
	      "start": "Fillo",
	      "end": "P??rfundo",
	      "onInvalidData": "P??r t?? dh??nat e pavlefshme",
	      "rejectInput": "Refuzo hyrjen",
	      "showWarning": "Trego paralajm??rim",
	      "showHint": "Trego ndihm??",
	      "hintTitle": "Titulli ndihm??s",
	      "hintMessage": "Porosia ndihm??se",
	      "ignoreBlank": "Refuzo bosh"
	    },
	    "placeholders": {
	      "typeTitle": "Sh??no titullin",
	      "typeMessage": "Sh??no porosin??"
	    }
	  },
	  "exportAsDialog": {
	    "title": "Eksporto...",
	    "labels": {
	      "fileName": "Emri i fajlit",
	      "saveAsType": "Ruaj si tip",
	      "exportArea": "Eksporto",
	      "paperSize": "Madh??sia e letr??s",
	      "margins": "Mbulesat",
	      "orientation": "Orientimi",
	      "print": "Printo",
	      "guidelines": "udh??zime",
	      "center": "Qend??r",
	      "horizontally": "Horizontalisht",
	      "vertically": "Vertikalisht"
	    }
	  },
	  "modifyMergedDialog": {
	    "errorMessage": "Nuk mund t?? ndryshoj?? pjes?? t?? nj?? qelize t?? bashkuar."
	  },
	  "useKeyboardDialog": {
	    "title": "Kopjimi dhe ngjitja",
	    "errorMessage": "K??to veprime nuk mund t?? thirren p??rmes menus??. Ju lutemi p??rdorni shkurtesat e tastier??s n?? vend:",
	    "labels": {
	      "forCopy": "p??r kopjim",
	      "forCut": "p??r prerje",
	      "forPaste": "p??r ngjitje"
	    }
	  },
	  "unsupportedSelectionDialog": {
	    "errorMessage": "Ky veprim nuk mund t?? kryhet n?? p??rzgjedhje t?? shum??fisht??."
	  }
	});
	}

	if (kendo.spreadsheet && kendo.spreadsheet.messages.filterMenu) {
	kendo.spreadsheet.messages.filterMenu =
	$.extend(true, kendo.spreadsheet.messages.filterMenu,{
	  "sortAscending": "Rendit vargjet prej A te Z",
	  "sortDescending": "Rendit vargjet prej Z te A",
	  "filterByValue": "Filtro sipas vler??s",
	  "filterByCondition": "Filtro sipas kushteve",
	  "apply": "Apliko",
	  "search": "K??rko",
	  "addToCurrent": "Shtoni n?? p??rzgjedhjen aktuale",
	  "clear": "Pastro",
	  "blanks": "(Boshll??qe)",
	  "operatorNone": "Asnj??",
	  "and": "DHE",
	  "or": "OSE",
	  "operators": {
	    "string": {
	      "contains": "Teksti p??rmban",
	      "doesnotcontain": "Teksti nuk p??rmban",
	      "startswith": "Teksti fillon me",
	      "endswith": "Teksti p??rfundon me"
	    },
	    "date": {
	      "eq":  "Data ??sht??",
	      "neq": "Data nuk ??sht??",
	      "lt":  "Data ??sht?? para",
	      "gt":  "Data ??sht?? pas"
	    },
	    "number": {
	      "eq": "??sht?? e barabart?? me",
	      "neq": "Nuk ??sht?? e barabart?? me",
	      "gte": "??sht?? m?? e madhe ose e barabart?? me",
	      "gt": "??sht?? m?? e madhe se",
	      "lte": "??sht?? m?? e vog??l ose e barabart?? me",
	      "lt": "??sht?? m?? e vog??l se"
	    }
	  }
	});
	}

	if (kendo.spreadsheet && kendo.spreadsheet.messages.colorPicker) {
	kendo.spreadsheet.messages.colorPicker =
	$.extend(true, kendo.spreadsheet.messages.colorPicker,{
	  "reset": "Rivendosni ngjyr??n",
	  "customColor": "Ngjyra e personalizuar...",
	  "apply": "Apliko",
	  "cancel": "Anulo"
	});
	}

	if (kendo.spreadsheet && kendo.spreadsheet.messages.toolbar) {
	kendo.spreadsheet.messages.toolbar =
	$.extend(true, kendo.spreadsheet.messages.toolbar,{
	  "addColumnLeft": "Shto kolon?? majtas",
	  "addColumnRight": "Shto kolon?? djathtas",
	  "addRowAbove": "Shto rresht lart??",
	  "addRowBelow": "Shto rresht posht??",
	  "alignment": "Radhitja",
	  "alignmentButtons": {
	    "justtifyLeft": "Radhit majtas",
	    "justifyCenter": "Qend??r",
	    "justifyRight": "Radhit djathtas",
	    "justifyFull": "Justifiko",
	    "alignTop": "Radhit lart??",
	    "alignMiddle": "Radhit n?? mes",
	    "alignBottom": "Radhit posht??"
	  },
	  "backgroundColor": "Prapavia",
	  "bold": "Bold",
	  "borders": "Kufijt??",
	  "colorPicker": {
	    "reset": "Rivendosni ngjyr??",
	    "customColor": "Ngjyra e personalizuar..."
	  },
	  "copy": "Kopjo",
	  "cut": "Prej",
	  "deleteColumn": "Fshij kolon??n",
	  "deleteRow": "Fshij rreshtin",
	  "excelImport": "Import prej Excel...",
	  "filter": "Filtro",
	  "fontFamily": "Fonti",
	  "fontSize": "Madh??sia e fontit",
	  "format": "Formati i personalizuar...",
	  "formatTypes": {
	    "automatic": "Automatik",
	    "number": "Numri",
	    "percent": "Perqindja",
	    "financial": "Financiar",
	    "currency": "Valuta",
	    "date": "Data",
	    "time": "Koha",
	    "dateTime": "Data koha",
	    "duration": "Koh??zgjatja",
	    "moreFormats": "M?? shum?? formate..."
	  },
	  "formatDecreaseDecimal": "Zbrit decimalin",
	  "formatIncreaseDecimal": "Ngrit decimalin",
	  "freeze": "Ngrirje e panel??ve",
	  "freezeButtons": {
	    "freezePanes": "Ngrirje e panel??ve",
	    "freezeRows": "Ngrirje e rreshtave",
	    "freezeColumns": "Ngrirje e kolonave",
	    "unfreeze": "Zbllokim i panel??ve"
	  },
	  "italic": "Italic",
	  "merge": "Bashko qelizat",
	  "mergeButtons": {
	    "mergeCells": "Bashko t?? gjitha",
	    "mergeHorizontally": "Bashko horizontalisht",
	    "mergeVertically": "Bashko vertikalisht",
	    "unmerge": "Mos bashko"
	  },
	  "open": "Hape...",
	  "paste": "Ngjite",
	  "quickAccess": {
	    "redo": "Rib??j",
	    "undo": "Kthe"
	  },
	  "saveAs": "Ruaj si...",
	  "sortAsc": "Sorto (rrit??se)",
	  "sortDesc": "Sorto (rr??n??se)",
	  "sortButtons": {
	    "sortSheetAsc": "Sorto faqen prej A te Z",
	    "sortSheetDesc": "Sorto faqen prej Z te A",
	    "sortRangeAsc": "Sorto vargun prej A te Z",
	    "sortRangeDesc": "Sorto vargun prej Z te A"
	  },
	  "textColor": "Ngjyra e tekstit",
	  "textWrap": "P??rfundo tekstin",
	  "underline": "N??nviz??",
	  "validation": "Vlefshm??ria e t?? dh??nave..."
	});
	}

	if (kendo.spreadsheet && kendo.spreadsheet.messages.view) {
	kendo.spreadsheet.messages.view =
	$.extend(true, kendo.spreadsheet.messages.view,{
	  "errors": {
	    "shiftingNonblankCells": "Nuk mund t?? futen qeliza p??r shkak t?? humbjes s?? t?? dh??nave. P??rzgjidhni nj?? lokacion tjet??r ose fshini t?? dh??nat nga fundi i flet??s.",
	    "filterRangeContainingMerges": "Nuk mund t?? krijoj?? nj?? filt??r brenda nj?? vargu q?? p??rmban shkrirje",
	    "validationError": "Vlera q?? keni futur shkel rregullat e validimit t?? vendosura n?? qeliz??."
	  },
	  "tabs": {
	    "home": "Ballina",
	    "insert": "Vendos",
	    "data": "T?? dh??na"
	  }
	});
	}

	/* Slider messages */

	if (kendo.ui.Slider) {
	kendo.ui.Slider.prototype.options =
	$.extend(true, kendo.ui.Slider.prototype.options,{
	  "increaseButtonTitle": "Ngrit",
	  "decreaseButtonTitle": "Zbrit"
	});
	}

	/* ListBox messaages */

	if (kendo.ui.ListBox) {
	kendo.ui.ListBox.prototype.options.messages =
	$.extend(true, kendo.ui.ListBox.prototype.options.messages,{
	  "tools": {
	    "remove": "Fshij",
	    "moveUp": "Zhvendos lart??",
	    "moveDown": "Zhvendos posht??",
	    "transferTo": "Transfero N??",
	    "transferFrom": "Transfero Prej",
	    "transferAllTo": "Transfero T?? Gjitha N??",
	    "transferAllFrom": "Transfero T?? Gjitha Prej"
	  }
	});
	}

	/* TreeList messages */

	if (kendo.ui.TreeList) {
	kendo.ui.TreeList.prototype.options.messages =
	$.extend(true, kendo.ui.TreeList.prototype.options.messages,{
	  "noRows": "Nuk ka t?? dh??na p??r tu shfaqur",
	  "loading": "Duke ngarkuar...",
	  "requestFailed": "K??rkesa d??shtoi.",
	  "retry": "Provo s??rish",
	  "commands": {
	      "edit": "redaktoni",
	      "update": "P??rdit??so",
	      "canceledit": "Anulo",
	      "create": "Shto t?? dh??n?? t?? re",
	      "createchild": "Shto t?? dh??n?? f??mij??",
	      "destroy": "Fshij",
	      "excel": "Eksporto n?? Excel",
	      "pdf": "Exporto n?? PDF"
	  }
	});
	}

	/* TreeView messages */

	if (kendo.ui.TreeView) {
	kendo.ui.TreeView.prototype.options.messages =
	$.extend(true, kendo.ui.TreeView.prototype.options.messages,{
	  "loading": "Duke ngarkuar...",
	  "requestFailed": "K??rkesa d??shtoi.",
	  "retry": "Provo s??rish"
	});
	}

	/* Upload messages */

	if (kendo.ui.Upload) {
	kendo.ui.Upload.prototype.options.localization=
	$.extend(true, kendo.ui.Upload.prototype.options.localization,{
	  "select": "Zgjedh fajlet...",
	  "cancel": "Anulo",
	  "retry": "Provo s??rish",
	  "remove": "Fshij",
	  "clearSelectedFiles": "Pastro",
	  "uploadSelectedFiles": "Ngarko fajlet",
	  "dropFilesHere": "l??shoni fajlet k??tu p??r t'i ngarkuar",
	  "statusUploading": "duke ngarkuar",
	  "statusUploaded": "e ngarkuar",
	  "statusWarning": "paralajm??rim",
	  "statusFailed": "d??shtoi",
	  "headerStatusUploading": "Duke ngarkuar...",
	  "headerStatusUploaded": "P??rfundo",
	  "invalidMaxFileSize": "Madh??sia e fajlit ??sht?? shum?? e madhe.",
	  "invalidMinFileSize": "Madh??sia e fajlit ??sht?? shum?? e vog??l.",
	  "invalidFileExtension": "Lloji i fajlit nuk lejohet."
	});
	}

	/* Validator messages */

	if (kendo.ui.Validator) {
	kendo.ui.Validator.prototype.options.messages =
	$.extend(true, kendo.ui.Validator.prototype.options.messages,{
	  "required": "{0} nevojitet",
	  "pattern": "{0} nuk ??sht?? e vlefshme",
	  "min": "{0} duhet t?? jet?? m?? e madhe ose e barabart?? me {1}",
	  "max": "{0} duhet t?? jet?? m?? e vog??l ose e barabart?? me {1}",
	  "step": "{0} nuk ??sht?? e vlefshme",
	  "email": "{0} emaili nuk ??sht?? i vlefsh??m",
	  "url": "{0} URL-ja nuk ??sht?? e vlefshme",
	  "date": "{0} data nuk ??sht?? e vlefshme",
	  "dateCompare": "Data e p??rfundimit duhet t?? jet?? m?? e madhe ose e barabart?? me dat??n e fillimit"
	});
	}

	/* kendo.ui.progress method */
	if (kendo.ui.progress) {
	kendo.ui.progress.messages =
	$.extend(true, kendo.ui.progress.messages, {
	    loading: "Duke ngarkuar..."
	});
	}

	/* Dialog */

	if (kendo.ui.Dialog) {
	kendo.ui.Dialog.prototype.options.messages =
	$.extend(true, kendo.ui.Dialog.prototype.options.localization, {
	  "close": "Mbylle"
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
	  "cancel": "Anulo"
	});
	}

	/* Prompt */
	if (kendo.ui.Prompt) {
	kendo.ui.Prompt.prototype.options.messages =
	$.extend(true, kendo.ui.Prompt.prototype.options.localization, {
	  "okText": "OK",
	  "cancel": "Anulo"
	});
	}

	/* DateInput */
	if (kendo.ui.DateInput) {
	  kendo.ui.DateInput.prototype.options.messages =
	    $.extend(true, kendo.ui.DateInput.prototype.options.messages, {
	      "year": "viti",
	      "month": "muaji",
	      "day": "dita",
	      "weekday": "dita e jav??s",
	      "hour": "or??t",
	      "minute": "minutat",
	      "second": "sekondat",
	      "dayperiod": "AM/PM"
	    });
	}

	})(window.kendo.jQuery);

/***/ })

/******/ });