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

	__webpack_require__(1606);
	module.exports = __webpack_require__(1606);


/***/ }),

/***/ 1606:
/***/ (function(module, exports) {

	(function ($, undefined) {
	/* FlatColorPicker messages */

	if (kendo.ui.FlatColorPicker) {
	kendo.ui.FlatColorPicker.prototype.options.messages =
	$.extend(true, kendo.ui.FlatColorPicker.prototype.options.messages,{
	  "apply": "Aplicar",
	  "cancel": "Cancelar"
	});
	}

	/* ColorPicker messages */

	if (kendo.ui.ColorPicker) {
	kendo.ui.ColorPicker.prototype.options.messages =
	$.extend(true, kendo.ui.ColorPicker.prototype.options.messages,{
	  "apply": "Aplicar",
	  "cancel": "Cancelar"
	});
	}

	/* ColumnMenu messages */

	if (kendo.ui.ColumnMenu) {
	kendo.ui.ColumnMenu.prototype.options.messages =
	$.extend(true, kendo.ui.ColumnMenu.prototype.options.messages,{
	  "sortAscending": "Ordena????o Ascendente",
	  "sortDescending": "Ordena????o Descendente",
	  "filter": "Filtro",
	  "columns": "Colunas",
	  "done": "Feito",
	  "settings": "Defini????es da Coluna",
	  "lock": "Trancar",
	  "unlock": "Destrancar"
	});
	}

	/* Editor messages */

	if (kendo.ui.Editor) {
	kendo.ui.Editor.prototype.options.messages =
	$.extend(true, kendo.ui.Editor.prototype.options.messages,{
	  "bold": "Negrito",
	  "italic": "It??lico",
	  "underline": "Sublinhado",
	  "strikethrough": "Rasurado",
	  "superscript": "Superior ?? linha",
	  "subscript": "Inferior ?? linha",
	  "justifyCenter": "Centrar texto",
	  "justifyLeft": "Alinhar texto ?? esquerda",
	  "justifyRight": "Alinhar texto ?? direita",
	  "justifyFull": "Justificar",
	  "insertUnorderedList": "Inserir lista de marcas",
	  "insertOrderedList": "Inserir lista numerada",
	  "indent": "Aumentar avan??o",
	  "outdent": "Diminuir avan??o",
	  "createLink": "Inserir liga????o",
	  "unlink": "Remover liga????o",
	  "insertImage": "Inserir imagem",
	  "insertFile": "Inserir ficheiro",
	  "insertHtml": "Inserir HTML",
	  "viewHtml": "Ver HTML",
	  "fontName": "Selecionar tipo de letra",
	  "fontNameInherit": "(tipo de letra herdado)",
	  "fontSize": "Selecionar tamanho da letra",
	  "fontSizeInherit": "(tamanho herdado)",
	  "formatBlock": "Formatar",
	  "formatting": "Formatar",
	  "foreColor": "Cor",
	  "backColor": "Cor do fundo",
	  "style": "Estilos",
	  "emptyFolder": "Pasta Vazia",
	  "uploadFile": "Submeter",
	  "orderBy": "Ordenar por:",
	  "orderBySize": "Tamanho",
	  "orderByName": "Nome",
	  "invalidFileType": "O ficheiro selecionado \"{0}\" n??o ?? v??lido. Tipos suportados s??o {1}.",
	  "deleteFile": 'Tem a certeza que quer eliminar "{0}"?',
	  "overwriteFile": 'Um ficheiro com o nome "{0}" j?? existe na pasta atual. Quer substitu??-lo?',
	  "directoryNotFound": "N??o foi encontrada nenhuma pasta com este nome.",
	  "imageWebAddress": "Endere??o Web",
	  "imageAltText": "Texto alternativo",
	  "imageWidth": "Largura (px)",
	  "imageHeight": "Altura (px)",
	  "fileWebAddress": "Endere??o Web",
	  "fileTitle": "T??tulo",
	  "linkWebAddress": "Endere??o Web",
	  "linkText": "Texto",
	  "linkToolTip": "ToolTip",
	  "linkOpenInNewWindow": "Abrir liga????o numa nova janela",
	  "dialogUpdate": "Atualizar",
	  "dialogInsert": "Inserir",
	  "dialogButtonSeparator": "ou",
	  "dialogCancel": "Cancelar",
	  "createTable": "Criar tabela",
	  "addColumnLeft": "Adicionar coluna ?? esquerda",
	  "addColumnRight": "Adicionar coluna ?? direita",
	  "addRowAbove": "Adicionar linha acima",
	  "addRowBelow": "Adicionar linha abaixo",
	  "deleteRow": "Eliminar linha",
	  "deleteColumn": "Eliminar coluna"
	});
	}

	/* FileBrowser messages */

	if (kendo.ui.FileBrowser) {
	kendo.ui.FileBrowser.prototype.options.messages =
	$.extend(true, kendo.ui.FileBrowser.prototype.options.messages,{
	  "uploadFile": "Submeter",
	  "orderBy": "Ordenar por",
	  "orderByName": "Nome",
	  "orderBySize": "Tamanho",
	  "directoryNotFound": "N??o foi encontrada nenhuma pasta com este nome.",
	  "emptyFolder": "Pasta Vazia",
	  "deleteFile": 'Tem a certeza que quer eliminar "{0}"?',
	  "invalidFileType": "O ficheiro selecionado \"{0}\" n??o ?? v??lido. Tipos suportados s??o {1}.",
	  "overwriteFile": "Um ficheiro com o nome \"{0}\" j?? existe nesta pasta. Quer substitu??-lo?",
	  "dropFilesHere": "Largue um ficheiro aqui para o submeter",
	  "search": "Pesquisar"
	});
	}

	/* FilterCell messages */

	if (kendo.ui.FilterCell) {
	kendo.ui.FilterCell.prototype.options.messages =
	$.extend(true, kendo.ui.FilterCell.prototype.options.messages,{
	  "isTrue": "?? verdadeiro",
	  "isFalse": "?? falso",
	  "filter": "Filtrar",
	  "clear": "Limpar",
	  "operator": "Operador"
	});
	}

	/* FilterCell operators */

	if (kendo.ui.FilterCell) {
	kendo.ui.FilterCell.prototype.options.operators =
	$.extend(true, kendo.ui.FilterCell.prototype.options.operators,{
	  "string": {
	    "eq": "?? igual a",
	    "neq": "N??o ?? igual a",
	    "startswith": "Come??a com",
	    "contains": "Cont??m",
	    "doesnotcontain": "N??o cont??m",
	    "endswith": "Termina com",
	    "isnull": "?? nulo",
	    "isnotnull": "?? n??o nulo",
	    "isempty": "?? vazio",
	    "isnotempty": "?? n??o vazio"
	  },
	  "number": {
	    "eq": "?? igual a",
	    "neq": "N??o ?? igual a",
	    "gte": "?? maior ou igual a",
	    "gt": "?? maior que",
	    "lte": "?? menor ou igual a",
	    "lt": "?? menor que",
	    "isnull": "?? nulo",
	    "isnotnull": "?? n??o nulo"
	  },
	  "date": {
	    "eq": "?? igual a",
	    "neq": "N??o ?? igual a",
	    "gte": "?? posterior ou igual a",
	    "gt": "?? posterior a",
	    "lte": "?? anterior ou igual a",
	    "lt": "?? anterior a",
	    "isnull": "?? nulo",
	    "isnotnull": "?? n??o nulo"
	  },
	  "enums": {
	    "eq": "?? igual a",
	    "neq": "N??o ?? igual a",
	    "isnull": "?? nulo",
	    "isnotnull": "?? n??o nulo"
	  }
	});
	}

	/* FilterMenu messages */

	if (kendo.ui.FilterMenu) {
	kendo.ui.FilterMenu.prototype.options.messages =
	$.extend(true, kendo.ui.FilterMenu.prototype.options.messages,{
	  "info": "Mostrar itens com valor que:",
	  "title": "Mostrar itens com valor que",
	  "isTrue": "?? verdadeiro",
	  "isFalse": "?? falso",
	  "filter": "Filtrar",
	  "clear": "Limpar",
	  "and": "E",
	  "or": "OU",
	  "selectValue": "-Selecionar valor-",
	  "operator": "Operador",
	  "value": "Valor",
	  "cancel": "Cancelar"
	});
	}

	/* FilterMenu operator messages */

	if (kendo.ui.FilterMenu) {
	kendo.ui.FilterMenu.prototype.options.operators =
	$.extend(true, kendo.ui.FilterMenu.prototype.options.operators,{
	  "string": {
	    "eq": "?? igual a",
	    "neq": "N??o ?? igual a",
	    "startswith": "Come??a com",
	    "contains": "Cont??m",
	    "doesnotcontain": "N??o cont??m",
	    "endswith": "Termina com",
	    "isnull": "?? nulo",
	    "isnotnull": "?? n??o nulo",
	    "isempty": "?? vazio",
	    "isnotempty": "?? n??o vazio"
	  },
	  "number": {
	    "eq": "?? igual a",
	    "neq": "N??o ?? igual a",
	    "gte": "?? maior ou igual a",
	    "gt": "?? maior que",
	    "lte": "?? menor ou igual a",
	    "lt": "?? menor que",
	    "isnull": "?? nulo",
	    "isnotnull": "?? n??o nulo"
	  },
	  "date": {
	    "eq": "?? igual a",
	    "neq": "N??o ?? igual a",
	    "gte": "?? posterior ou igual a",
	    "gt": "?? posterior a",
	    "lte": "?? anterior ou igual a",
	    "lt": "?? anterior a",
	    "isnull": "?? nulo",
	    "isnotnull": "?? n??o nulo"
	  },
	  "enums": {
	    "eq": "?? igual a",
	    "neq": "N??o ?? igual a",
	    "isnull": "?? nulo",
	    "isnotnull": "?? n??o nulo"
	  }
	});
	}

	/* FilterMultiCheck messages */

	if (kendo.ui.FilterMultiCheck) {
	kendo.ui.FilterMultiCheck.prototype.options.messages =
	$.extend(true, kendo.ui.FilterMultiCheck.prototype.options.messages,{
	  "checkAll": "Selecionar Tudo",
	  "clear": "Limpar",
	  "filter": "Filtrar",
	  "search": "Pesquisar"
	});
	}

	/* Gantt messages */

	if (kendo.ui.Gantt) {
	kendo.ui.Gantt.prototype.options.messages =
	$.extend(true, kendo.ui.Gantt.prototype.options.messages,{
	  "actions": {
	    "addChild": "Adicionar Descendente",
	    "append": "Adicionar Tarefa",
	    "insertAfter": "Adicionar Abaixo",
	    "insertBefore": "Adicionar Acima",
	    "pdf": "Exportar para PDF"
	  },
	  "cancel": "Cancelar",
	  "deleteDependencyWindowTitle": "Eliminar depend??ncia",
	  "deleteTaskWindowTitle": "Eliminar tarefa",
	  "destroy": "Eliminar",
	  "editor": {
	    "assingButton": "Atribuir",
	    "editorTitle": "Tarefa",
	    "end": "Fim",
	    "percentComplete": "Completo",
	    "resources": "Recursos",
	    "resourcesEditorTitle": "Recursos",
	    "resourcesHeader": "Recursos",
	    "start": "In??cio",
	    "title": "T??tulo",
	    "unitsHeader": "Unidades"
	  },
	  "save": "Guardar",
	  "views": {
	    "day": "Dia",
	    "end": "Fim",
	    "month": "M??s",
	    "start": "In??cio",
	    "week": "Semana",
	    "year": "Ano"
	  }
	});
	}

	/* Grid messages */

	if (kendo.ui.Grid) {
	kendo.ui.Grid.prototype.options.messages =
	$.extend(true, kendo.ui.Grid.prototype.options.messages,{
	  "commands": {
	    "cancel": "Cancelar altera????es",
	    "canceledit": "Cancelar",
	    "create": "Adicionar novo registo",
	    "destroy": "Eliminar",
	    "edit": "Editar",
	    "excel": "Exportar para Excel",
	    "pdf": "Exportar para PDF",
	    "save": "Guardar altera????es",
	    "select": "Selecionar",
	    "update": "Atualizar"
	  },
	  "editable": {
	    "cancelDelete": "Cancelar",
	    "confirmation": "Tem a certeza que pretende eliminar este registo?",
	    "confirmDelete": "Eliminar"
	  },
	  "noRecords": "Nenhum registo dispon??vel."
	});
	}

	/* Groupable messages */

	if (kendo.ui.Groupable) {
	kendo.ui.Groupable.prototype.options.messages =
	$.extend(true, kendo.ui.Groupable.prototype.options.messages,{
	  "empty": "Arraste uma coluna para este espa??o para agrupar pelo valor da mesma"
	});
	}

	/* NumericTextBox messages */

	if (kendo.ui.NumericTextBox) {
	kendo.ui.NumericTextBox.prototype.options =
	$.extend(true, kendo.ui.NumericTextBox.prototype.options,{
	  "upArrowText": "Aumentar valor",
	  "downArrowText": "Diminuir valor"
	});
	}

	/* Pager messages */

	if (kendo.ui.Pager) {
	kendo.ui.Pager.prototype.options.messages =
	$.extend(true, kendo.ui.Pager.prototype.options.messages,{
	  "allPages": "Tudo",
	  "display": "Registos {0} - {1} de {2}",
	  "empty": "Sem registos para apresentar.",
	  "page": "P??gina",
	  "of": "de {0}",
	  "itemsPerPage": "itens por p??gina",
	  "first": "Ir para a primeira p??gina",
	  "previous": "Ir para a p??gina anterior",
	  "next": "Ir para a pr??xima p??gina",
	  "last": "Ir para a ??ltima p??gina",
	  "refresh": "Atualizar",
	  "morePages": "Mais p??ginas"
	});
	}

	/* TreeListPager messages */

	if (kendo.ui.TreeListPager) {
	kendo.ui.TreeListPager.prototype.options.messages =
	$.extend(true, kendo.ui.TreeListPager.prototype.options.messages,{
	  "allPages": "Tudo",
	  "display": "Registos {0} - {1} de {2}",
	  "empty": "Sem registos para apresentar.",
	  "page": "P??gina",
	  "of": "de {0}",
	  "itemsPerPage": "itens por p??gina",
	  "first": "Ir para a primeira p??gina",
	  "previous": "Ir para a p??gina anterior",
	  "next": "Ir para a pr??xima p??gina",
	  "last": "Ir para a ??ltima p??gina",
	  "refresh": "Atualizar",
	  "morePages": "Mais p??ginas"
	});
	}

	/* PivotGrid messages */

	if (kendo.ui.PivotGrid) {
	kendo.ui.PivotGrid.prototype.options.messages =
	$.extend(true, kendo.ui.PivotGrid.prototype.options.messages,{
	  "measureFields": "Largue campos de dados aqui",
	  "columnFields": "Largue campos de colunas aqui",
	  "rowFields": "Largue campos de linhas aqui"
	});
	}

	/* PivotFieldMenu messages */

	if (kendo.ui.PivotFieldMenu) {
	kendo.ui.PivotFieldMenu.prototype.options.messages =
	$.extend(true, kendo.ui.PivotFieldMenu.prototype.options.messages,{
	  "info": "mostrar itens com valor que:",
	  "filterFields": "Filtro de Campos",
	  "filter": "Filtrar",
	  "include": "Incluir Campos...",
	  "title": "Campos a incluir",
	  "clear": "Limpar",
	  "ok": "Ok",
	  "cancel": "Cancelar",
	  "operators": {
	    "contains": "Cont??m",
	    "doesnotcontain": "N??o cont??m",
	    "startswith": "Come??a com",
	    "endswith": "Termina com",
	    "eq": "?? igual a",
	    "neq": "N??o ?? igual a"
	  }
	});
	}

	/* RecurrenceEditor messages */

	if (kendo.ui.RecurrenceEditor) {
	kendo.ui.RecurrenceEditor.prototype.options.messages =
	$.extend(true, kendo.ui.RecurrenceEditor.prototype.options.messages,{
	  "frequencies": {
	    "never": "Nunca",
	    "hourly": "A cada hora",
	    "daily": "Diariamente",
	    "weekly": "Semanalmente",
	    "monthly": "Mensalmente",
	    "yearly": "Anualmente"
	  },
	  "hourly": {
	    "repeatEvery": "Repetir a cada: ",
	    "interval": " hora(s)"
	  },
	  "daily": {
	    "repeatEvery": "Repetir a cada: ",
	    "interval": " dia(s)"
	  },
	  "weekly": {
	    "interval": " semana(s)",
	    "repeatEvery": "Repetir a cada: ",
	    "repeatOn": "Repetir em: "
	  },
	  "monthly": {
	    "repeatEvery": "Repetir a cada: ",
	    "repeatOn": "Repetir em: ",
	    "interval": " m??s(es)",
	    "day": "Dia "
	  },
	  "yearly": {
	    "repeatEvery": "Repetir a cada: ",
	    "repeatOn": "Repetir em: ",
	    "interval": " ano(s)",
	    "of": " de "
	  },
	  "end": {
	    "label": "Fim:",
	    "mobileLabel": "Fim",
	    "never": "Nunca",
	    "after": "Depois",
	    "occurrence": " ocorr??ncia(s)",
	    "on": "Em "
	  },
	  "offsetPositions": {
	    "first": "primeiro",
	    "second": "segundo",
	    "third": "terceiro",
	    "fourth": "quarto",
	    "last": "??ltimo"
	  },
	  "weekdays": {
	    "day": "dia",
	    "weekday": "semana",
	    "weekend": "fim de semana"
	  }
	});
	}

	/* Scheduler messages */

	if (kendo.ui.Scheduler) {
	kendo.ui.Scheduler.prototype.options.messages =
	$.extend(true, kendo.ui.Scheduler.prototype.options.messages,{
	  "allDay": "todo o dia",
	  "date": "Data",
	  "event": "Evento",
	  "time": "Hora",
	  "showFullDay": "Mostrar dia completo",
	  "showWorkDay": "Mostrar hor??rio de trabalho",
	  "today": "Hoje",
	  "save": "Guardar",
	  "cancel": "Cancelar",
	  "destroy": "Eliminar",
	  "deleteWindowTitle": "Eliminar evento",
	  "ariaSlotLabel": "Selecionado entre {0:t} e {1:t}",
	  "ariaEventLabel": "{0} em {1:D} ??s {2:t}",
	  "editable": {
	    "confirmation": "Tem a certeza que quer eliminar este evento?"
	  },
	  "views": {
	    "day": "Dia",
	    "week": "Semana",
	    "workWeek": "Semana de Trabalho",
	    "agenda": "Agenda",
	    "month": "M??s"
	  },
	  "recurrenceMessages": {
	    "deleteWindowTitle": "Eliminar item recorrente",
	    "deleteWindowOccurrence": "Eliminar ocorr??ncia atual",
	    "deleteWindowSeries": "Eliminar s??rie de ocorr??ncias",
	    "editWindowTitle": "Editar Item Recorrente",
	    "editWindowOccurrence": "Editar ocorr??ncia atual",
	    "editWindowSeries": "Editar s??rie de ocorr??ncias",
	    "deleteRecurring": "Quer eliminar s?? esta ocorr??ncia ou toda a s??rie de ocorr??ncias?",
	    "editRecurring": "Quer editar s?? esta ocorr??ncia ou toda a s??rie de ocorr??ncias?"
	  },
	  "editor": {
	    "title": "Titulo",
	    "start": "In??cio",
	    "end": "Fim",
	    "allDayEvent": "Evento todo o dia",
	    "description": "Descri????o",
	    "repeat": "Repeti????o",
	    "timezone": " ",
	    "startTimezone": "In??cio do fuso hor??rio",
	    "endTimezone": "Fim do fuso hor??rio",
	    "separateTimezones": "Usar fusos hor??rios de in??cio e fim separados",
	    "timezoneEditorTitle": "Fusos Hor??rios",
	    "timezoneEditorButton": "Fuso hor??rio",
	    "timezoneTitle": "Fusos Hor??rios",
	    "noTimezone": "Sem fuso hor??rio",
	    "editorTitle": "Evento"
	  }
	});
	}

	/* Spreadsheet messages */

	if (kendo.spreadsheet && kendo.spreadsheet.messages.borderPalette) {
	kendo.spreadsheet.messages.borderPalette =
	$.extend(true, kendo.spreadsheet.messages.borderPalette,{
	  "allBorders": "Todas as bordas",
	  "insideBorders": "Bordas interiores",
	  "insideHorizontalBorders": "Bordas interiores horizontais",
	  "insideVerticalBorders": "Bordas interiores verticais",
	  "outsideBorders": "Bordas exteriores",
	  "leftBorder": "Borda esquerda",
	  "topBorder": "Borda superior",
	  "rightBorder": "Borda direita",
	  "bottomBorder": "Borda inferior",
	  "noBorders": "Sem bordas",
	  "reset": "Reiniciar cor",
	  "customColor": "Personalizar cor...",
	  "apply": "Aplicar",
	  "cancel": "Cancelar"
	});
	}

	if (kendo.spreadsheet && kendo.spreadsheet.messages.dialogs) {
	kendo.spreadsheet.messages.dialogs =
	$.extend(true, kendo.spreadsheet.messages.dialogs,{
	  "apply": "Aplicar",
	  "save": "Guardar",
	  "cancel": "Cancelar",
	  "remove": "Remover",
	  "retry": "Tentar Novamente",
	  "revert": "Reverter",
	  "okText": "OK",
	  "formatCellsDialog": {
	    "title": "Formatar",
	    "categories": {
	      "number": "N??mero",
	      "currency": "Moeda",
	      "date": "Data"
	      }
	  },
	  "fontFamilyDialog": {
	    "title": "Tipo de Letra"
	  },
	  "fontSizeDialog": {
	    "title": "Tamanho da Letra"
	  },
	  "bordersDialog": {
	    "title": "Bordas"
	  },
	  "alignmentDialog": {
	    "title": "Alinhamento de texto",
	    "buttons": {
	     "justtifyLeft": "Alinhar ?? esquerda",
	     "justifyCenter": "Centro",
	     "justifyRight": "Alinhar ?? direita",
	     "justifyFull": "Justificar",
	     "alignTop": "Alinhar ao topo",
	     "alignMiddle": "Alinhar ao centro",
	     "alignBottom": "Alinhar ao fundo"
	    }
	  },
	  "mergeDialog": {
	    "title": "Unir C??lulas",
	    "buttons": {
	      "mergeCells": "Unir tudo",
	      "mergeHorizontally": "Unir horizontalmente",
	      "mergeVertically": "Unir verticalmente",
	      "unmerge": "Desunir"
	    }
	  },
	  "freezeDialog": {
	    "title": "Congelar pain??is",
	    "buttons": {
	      "freezePanes": "Congelar pain??is",
	      "freezeRows": "Congelar linhas",
	      "freezeColumns": "Congelar colunas",
	      "unfreeze": "Descongelar pain??is"
	    }
	  },
	  "validationDialog": {
	    "title": "Valida????o de Dados",
	    "hintMessage": "Por favor indique um valor {1} v??lido {0}.",
	    "hintTitle": "Valida????o {0}",
	    "criteria": {
	      "any": "Qualquer valor",
	      "number": "N??mero",
	      "text": "Texto",
	      "date": "Data",
	      "custom": "Personalizar F??rmula",
	      "list": "Lista"
	    },
	    "comparers": {
	      "greaterThan": "maior que",
	      "lessThan": "menor que",
	      "between": "entre",
	      "notBetween": "n??o entre",
	      "equalTo": "igual a",
	      "notEqualTo": "n??o igual a",
	      "greaterThanOrEqualTo": "maior que ou igual a",
	      "lessThanOrEqualTo": "menor que ou igual a"
	    },
	    "comparerMessages": {
	      "greaterThan": "maior que {0}",
	      "lessThan": "menor que {0}",
	      "between": "entre {0} e {1}",
	      "notBetween": "n??o entre {0} e {1}",
	      "equalTo": "igual a {0}",
	      "notEqualTo": "n??o igual a {0}",
	      "greaterThanOrEqualTo": "maior que ou igual a {0}",
	      "lessThanOrEqualTo": "menor que ou igual a {0}",
	      "custom": "que satisfa??a a f??rmula: {0}"
	    },
	    "labels": {
	      "criteria": "Crit??rio",
	      "comparer": "Comparador",
	      "min": "Min",
	      "max": "Max",
	      "value": "Valor",
	      "start": "Inicio",
	      "end": "Fim",
	      "onInvalidData": "Quando dados inv??lidos",
	      "rejectInput": "Rejeitar entrada",
	      "showWarning": "Mostrar aviso",
	      "showHint": "Mostrar dica",
	      "hintTitle": "T??tulo da dica",
	      "hintMessage": "Mensagem da dica",
	      "ignoreBlank": "Ignorar brancos"
	    },
	    "placeholders": {
	      "typeTitle": "Digite o t??tulo",
	      "typeMessage": "Digite a mensagem"
	    }
	  },
	  "exportAsDialog": {
	    "title": "Exportar...",
	    "labels": {
	      "fileName": "Nome do ficheiro",
	      "saveAsType": "Guardar como tipo",
	      "exportArea": "Exportar",
	      "paperSize": "Dimens??o do papel",
	      "margins": "Margens",
	      "orientation": "Orienta????o",
	      "print": "Imprimir",
	      "guidelines": "Guias",
	      "center": "Centrar",
	      "horizontally": "Horizontalmente",
	      "vertically": "Verticalmente"
	    }
	  },
	  "modifyMergedDialog": {
	    "errorMessage": "N??o pode fazer parte de uma c??lula unida."
	  },
	  "useKeyboardDialog": {
	    "title": "Copiar e colar",
	    "errorMessage": "Estas a????es n??o podem ser invocadas pelo menu. Por favor use antes os atalhos do teclado:",
	    "labels": {
	      "forCopy": "para copiar",
	      "forCut": "para cortar",
	      "forPaste": "para colar"
	    }
	  },
	  "unsupportedSelectionDialog": {
	    "errorMessage": "Esta a????o n??o pode ser efectuada em sele????es m??ltiplas."
	  }
	});
	}

	if (kendo.spreadsheet && kendo.spreadsheet.messages.filterMenu) {
	kendo.spreadsheet.messages.filterMenu =
	$.extend(true, kendo.spreadsheet.messages.filterMenu,{
	  "sortAscending": "Ordenar intervalo de A a Z",
	  "sortDescending": "Ordenar intervalo de Z a A",
	  "filterByValue": "Filtrar por valor",
	  "filterByCondition": "Filtrar por condi????o",
	  "apply": "Aplicar",
	  "search": "Pesquisar",
	  "addToCurrent": "Adicionar ?? sele????o atual",
	  "clear": "Limpar",
	  "blanks": "(Brancos)",
	  "operatorNone": "Nenhum",
	  "and": "E",
	  "or": "OU",
	  "operators": {
	    "string": {
	      "contains": "Texto cont??m",
	      "doesnotcontain": "Texto n??o cont??m",
	      "startswith": "Texto come??a com",
	      "endswith": "Texto termina com"
	    },
	    "date": {
	      "eq":  "Data ??",
	      "neq": "Data n??o ??",
	      "lt":  "Data ?? anterior",
	      "gt":  "Data ?? posterior"
	    },
	    "number": {
	      "eq": "?? igual a",
	      "neq": "N??o ?? igual a",
	      "gte": "?? maior que ou igual a",
	      "gt": "?? maior que",
	      "lte": "?? menor que ou igual a",
	      "lt": "?? menor que"
	    }
	  }
	});
	}

	if (kendo.spreadsheet && kendo.spreadsheet.messages.toolbar) {
	kendo.spreadsheet.messages.toolbar =
	$.extend(true, kendo.spreadsheet.messages.toolbar,{
	  "addColumnLeft": "Adicionar coluna ?? esquerda",
	  "addColumnRight": "Adicionar coluna ?? direita",
	  "addRowAbove": "Adicionar linha acima",
	  "addRowBelow": "Adicionar linha abaixo",
	  "alignment": "Alinhmento",
	  "alignmentButtons": {
	    "justtifyLeft": "Alinhar ?? esquerda",
	    "justifyCenter": "Centrar",
	    "justifyRight": "Alinhar ?? direita",
	    "justifyFull": "Justificar",
	    "alignTop": "Alinhar ao topo",
	    "alignMiddle": "Alinhar ao meio",
	    "alignBottom": "Alinhar ao fundo"
	  },
	  "backgroundColor": "Fundo",
	  "bold": "Negrito",
	  "borders": "Bordas",
	  "colorPicker": {
	    "reset": "Rep??r cor",
	    "customColor": "Personalizar cor..."
	  },
	  "copy": "Copiar",
	  "cut": "Cortar",
	  "deleteColumn": "Eliminar coluna",
	  "deleteRow": "Eliminar linha",
	  "excelImport": "Importar de Excel...",
	  "filter": "Filtrar",
	  "fontFamily": "Tipo de letra",
	  "fontSize": "Tamanho da letra",
	  "format": "Personalizar formata????o...",
	  "formatTypes": {
	    "automatic": "Autom??tico",
	    "number": "N??mero",
	    "percent": "Percentagem",
	    "financial": "Financeiro",
	    "currency": "Moeda",
	    "date": "Data",
	    "time": "Hora",
	    "dateTime": "Data e hora",
	    "duration": "Dura????o",
	    "moreFormats": "Mais formatos..."
	  },
	  "formatDecreaseDecimal": "Decrementar decimais",
	  "formatIncreaseDecimal": "Incrementar decimais",
	  "freeze": "Congelar pain??is",
	  "freezeButtons": {
	    "freezePanes": "Congelar paineis",
	    "freezeRows": "Congelar linhas",
	    "freezeColumns": "Congelar colunas",
	    "unfreeze": "Descongelar pain??is"
	  },
	  "italic": "It??lico",
	  "merge": "Unir c??lulas",
	  "mergeButtons": {
	    "mergeCells": "Unir tudo",
	    "mergeHorizontally": "Unir horizontalmente",
	    "mergeVertically": "Unir verticalmente",
	    "unmerge": "Desunir"
	  },
	  "open": "Abrir...",
	  "paste": "Colar",
	  "quickAccess": {
	    "redo": "Refazer",
	    "undo": "Desfazer"
	  },
	  "saveAs": "Guardar como...",
	  "sortAsc": "Ordena????o ascendente",
	  "sortDesc": "Ordena????o descendente",
	  "sortButtons": {
	    "sortSheetAsc": "Ordenar folha de A a Z",
	    "sortSheetDesc": "Ordenar folha de Z a A",
	    "sortRangeAsc": "Ordenar folha de A a Z",
	    "sortRangeDesc": "Ordenar folha de Z a A"
	  },
	  "textColor": "Cor do Texto",
	  "textWrap": "Quebrar texto",
	  "underline": "Sublinhado",
	  "validation": "Valida????o de dados..."
	});
	}

	if (kendo.spreadsheet && kendo.spreadsheet.messages.view) {
	kendo.spreadsheet.messages.view =
	$.extend(true, kendo.spreadsheet.messages.view,{
	  "errors": {
	    "shiftingNonblankCells": "N??o ?? poss??vel inserir c??lulas devido a poss??vel perda de dados. Escolha outra localiza????o para inserir ou elimine os dados do final da sua folha de dados.",
	    "filterRangeContainingMerges": "N??o ?? poss??vel criar um filtro dentro de um intervalo contendo uni??es",
	    "validationError": "O valor que indicou viola as regras de valida????o definidas na c??lula."
	  },
	  "tabs": {
	    "home": "In??cio",
	    "insert": "Inserir",
	    "data": "Dados"
	  }
	});
	}

	/* Slider messages */

	if (kendo.ui.Slider) {
	kendo.ui.Slider.prototype.options =
	$.extend(true, kendo.ui.Slider.prototype.options,{
	  "increaseButtonTitle": "Incrementar",
	  "decreaseButtonTitle": "Decrementar"
	});
	}

	/* TreeList messages */

	if (kendo.ui.TreeList) {
	kendo.ui.TreeList.prototype.options.messages =
	$.extend(true, kendo.ui.TreeList.prototype.options.messages,{
	  "noRows": "Sem registos para mostrar",
	  "loading": "A carregar...",
	  "requestFailed": "Pedido falhado.",
	  "retry": "Repetir",
	  "commands": {
	      "edit": "Editar",
	      "update": "Atualizar",
	      "canceledit": "Cancelar",
	      "create": "Adicionar novo registo",
	      "createchild": "Adicionar registo descendente",
	      "destroy": "Eliminar",
	      "excel": "Exportar para Excel",
	      "pdf": "Exportar para PDF"
	  }
	});
	}

	/* TreeView messages */

	if (kendo.ui.TreeView) {
	kendo.ui.TreeView.prototype.options.messages =
	$.extend(true, kendo.ui.TreeView.prototype.options.messages,{
	  "loading": "A carregar...",
	  "requestFailed": "O pedido falhou.",
	  "retry": "Repetir"
	});
	}

	/* Upload messages */

	if (kendo.ui.Upload) {
	kendo.ui.Upload.prototype.options.localization=
	$.extend(true, kendo.ui.Upload.prototype.options.localization,{
	  "select": "Selecionar ficheiros...",
	  "cancel": "Cancelar",
	  "retry": "Repetir",
	  "remove": "Remover",
	  "uploadSelectedFiles": "Submeter ficheiros",
	  "dropFilesHere": "largue ficheiros aqui para submeter",
	  "statusUploading": "a enviar",
	  "statusUploaded": "submetido",
	  "statusWarning": "aviso",
	  "statusFailed": "falhou",
	  "headerStatusUploading": "Enviando...",
	  "headerStatusUploaded": "Feito"
	});
	}

	/* Validator messages */

	if (kendo.ui.Validator) {
	kendo.ui.Validator.prototype.options.messages =
	$.extend(true, kendo.ui.Validator.prototype.options.messages,{
	  "required": "{0} ?? obrigat??rio",
	  "pattern": "{0} n??o ?? v??lido",
	  "min": "{0} deve ser maior ou igual a {1}",
	  "max": "{0} deve ser menor ou igual a {1}",
	  "step": "{0} n??o ?? v??lido",
	  "email": "{0} n??o ?? um email v??lido",
	  "url": "{0} n??o ?? um endere??o web v??lido",
	  "date": "{0} n??o ?? uma data v??lida",
	  "dateCompare": "A data final deve ser posterior ?? data inicial"
	});
	}

	/* Dialog */

	if (kendo.ui.Dialog) {
	kendo.ui.Dialog.prototype.options.messages =
	$.extend(true, kendo.ui.Dialog.prototype.options.localization, {
	  "close": "Fechar"
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
	  "cancel": "Cancelar"
	});
	}

	/* Prompt */
	if (kendo.ui.Prompt) {
	kendo.ui.Prompt.prototype.options.messages =
	$.extend(true, kendo.ui.Prompt.prototype.options.localization, {
	  "okText": "OK",
	  "cancel": "Cancelar"
	});
	}

	})(window.kendo.jQuery);


/***/ })

/******/ });