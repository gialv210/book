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

	__webpack_require__(1605);
	module.exports = __webpack_require__(1605);


/***/ }),

/***/ 1605:
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
	  "sortAscending": "Ordenar Ascendente",
	  "sortDescending": "Ordenar Descendente",
	  "filter": "Filtro",
	  "columns": "Colunas",
	  "done": "Feito",
	  "settings": "Configura????es de Colunas",
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
	  "strikethrough": "Tachado",
	  "superscript": "Sobrescrito",
	  "subscript": "Subscrito",
	  "justifyCenter": "Centralizar",
	  "justifyLeft": "Alinhar ?? Esquerda",
	  "justifyRight": "Alinhar ?? Direita",
	  "justifyFull": "Justificar",
	  "insertUnorderedList": "Inserir Lista Aleat??ria",
	  "insertOrderedList": "Inserir Lista Ordenada",
	  "indent": "Aumentar Recuo",
	  "outdent": "Diminuir Recuo",
	  "createLink": "Adicionar Link",
	  "unlink": "Remove Hyperlink",
	  "insertImage": "Inserir Imagem",
	  "insertFile": "Inserir arquivo",
	  "insertHtml": "Inserir HTML",
	  "viewHtml": "Exibir c??digo HTML",
	  "fontName": "Fonte",
	  "fontNameInherit": "(fonte herdada)",
	  "fontSize": "Tamanho",
	  "fontSizeInherit": "(tamanho herdado)",
	  "formatBlock": "Formatar Bloco",
	  "formatting": "Formato",
	  "foreColor": "Cor",
	  "backColor": "Cor de Fundo",
	  "style": "Estilo",
	  "emptyFolder": "Pasta vazia",
	  "uploadFile": "Enviar arquivo",
	  "orderBy": "Ordenar por:",
	  "orderBySize": "Tamanho",
	  "orderByName": "Nome",
	  "invalidFileType": "O arquivo selecionado \"{0}\" n??o ?? v??lido. Os tipos de arquivo suportados s??o {1}.",
	  "deleteFile": "Tem certeza de que deseja remover \"{0}\"?",
	  "overwriteFile": "Um arquivo de nome \"{0}\" j?? existe no diret??rio atual. Deseja substitu??-lo?",
	  "directoryNotFound": "Um diret??rio com este nome n??o foi encontrado.",
	  "imageWebAddress": "Endere??o web",
	  "imageAltText": "Texto alternativo",
	  "imageWidth": "Largura (px)",
	  "imageHeight": "Altura (px)",
	  "fileWebAddress": "Endere??o Web",
	  "fileTitle": "T??tulo do arquivo",
	  "linkWebAddress": "Endere??o Web",
	  "linkText": "Texto",
	  "linkToolTip": "ToolTip",
	  "linkOpenInNewWindow": "Abrir link em nova janela",
	  "dialogUpdate": "Atualizar",
	  "dialogInsert": "Inserir",
	  "dialogButtonSeparator": "ou",
	  "dialogCancel": "Cancelar",
	  "createTable": "Criar a tabela",
	  "addColumnLeft": "Nova coluna ?? esquerda",
	  "addColumnRight": "Nova coluna ?? direita",
	  "addRowAbove": "Nova coluna acima",
	  "addRowBelow": "Nova coluna abaixo",
	  "deleteRow": "Excluir linha",
	  "deleteColumn": "Excluir coluna",
	  "dialogOk": "Ok",
	  "tableWizard": "Assistente de tabela",
	  "tableTab": "Tabela",
	  "cellTab": "C??lula",
	  "accessibilityTab": "Acessibilidade",
	  "caption": "Rubica",
	  "summary": "Resumo",
	  "width": "Largura",
	  "height": "Altura",
	  "cellSpacing": "Espa??amento da c??lula",
	  "cellPadding": "Preenchimento da c??lula",
	  "cellMargin": "Margem da c??lula",
	  "alignment": "Alinhamento",
	  "background": "Fundo",
	  "cssClass": "Classe do CSS",
	  "id": "ID",
	  "border": "Borda",
	  "borderStyle": "Estilo da borda",
	  "collapseBorders": "Colapsar bordas",
	  "wrapText": "Quebrar textp",
	  "associateCellsWithHeaders": "C??lulas associadas com cabe??alho",
	  "alignLeft": "Alinhar ?? esquerda",
	  "alignCenter": "Alinhar ao centro",
	  "alignRight": "Alinhar ?? direita",
	  "alignLeftTop": "Alinhar ?? equerda e topo",
	  "alignCenterTop": "Alinhar ao centro e topo",
	  "alignRightTop": "Alinhar ?? direita e topo",
	  "alignLeftMiddle": "Alinhar ?? esquerda e meio",
	  "alignCenterMiddle": "Alinhar ao centro e meio",
	  "alignRightMiddle": "Alinhar ?? direita e meio",
	  "alignLeftBottom": "Alinhar ?? esquerda e abaixo",
	  "alignCenterBottom": "Alinhar ao centro e abaixo",
	  "alignRightBottom": "Alinhar ?? direita e abaixo",
	  "alignRemove": "Remover alinhamento",
	  "columns": "Colunas",
	  "rows": "Linhas",
	  "selectAllCells": "Selecionar todas as c??lulas"
	});
	}

	/* FileBrowser messages */

	if (kendo.ui.FileBrowser) {
	kendo.ui.FileBrowser.prototype.options.messages =
	$.extend(true, kendo.ui.FileBrowser.prototype.options.messages,{
	  "uploadFile": "Upload",
	  "orderBy": "Organize por",
	  "orderByName": "Nome",
	  "orderBySize": "Tamanho",
	  "directoryNotFound": "O diret??rio com este nome n??o foi encontrado.",
	  "emptyFolder": "Pasta vazia",
	  "deleteFile": 'Tem certeza que deseja excluir "{0}"?',
	  "invalidFileType": "O arquivo selecionado \"{0}\" ?? inv??lido. Os tipos de arquivos suportados s??o {1}.",
	  "overwriteFile": "O arquivo com o nome \"{0}\" j?? existe no diret??rio selecionado. Deseja sobrescrever?",
	  "dropFilesHere": "Solte os arquivos aqui para fazer o Upload",
	  "search": "Procurar"
	});
	}

	/* FilterCell messages */

	if (kendo.ui.FilterCell) {
	kendo.ui.FilterCell.prototype.options.messages =
	$.extend(true, kendo.ui.FilterCell.prototype.options.messages,{
	  "isTrue": "?? verdade",
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
	    "gte": "?? maior que ou igual a",
	    "gt": "?? maior que",
	    "lte": "?? menor que ou igual a",
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
	  "info": "Exibir linhas com valores que",
	  "title": "Exibir linhas com valores que",
	  "isTrue": "?? verdade",
	  "isFalse": "?? falso",
	  "filter": "Filtrar",
	  "clear": "Limpar",
	  "and": "E",
	  "or": "Ou",
	  "selectValue": "-Selecione uma op????o-",
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
	    "gte": "?? maior que ou igual a",
	    "gt": "?? maior que",
	    "lte": "?? menor que ou igual a",
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
	  "checkAll": "Selecionar todos",
	  "clear": "Limpar",
	  "filter": "Filtrar",
	  "search": "Procurar"
	});
	}

	/* Gantt messages */

	if (kendo.ui.Gantt) {
	kendo.ui.Gantt.prototype.options.messages =
	$.extend(true, kendo.ui.Gantt.prototype.options.messages,{
	  "actions": {
	    "addChild": "Adicionar filho",
	    "append": "Adicionar tarefa",
	    "insertAfter": "Adicionar abaixo",
	    "insertBefore": "Adicionar acima",
	    "pdf": "Exportar para PDF"
	  },
	  "cancel": "Cancelar",
	  "deleteDependencyWindowTitle": "Excluir depend??ncia",
	  "deleteTaskWindowTitle": "Excluir tarefa",
	  "destroy": "Excluir",
	  "editor": {
	    "assingButton": "Atribuir",
	    "editorTitle": "Tarefa",
	    "end": "Final",
	    "percentComplete": "Completo",
	    "resources": "Recursos",
	    "resourcesEditorTitle": "Recursos",
	    "resourcesHeader": "Recursos",
	    "start": "Inicio",
	    "title": "T??tulo",
	    "unitsHeader": "Unidades"
	  },
	  "save": "Salvar",
	  "views": {
	    "day": "Dia",
	    "end": "Final",
	    "month": "M??s",
	    "start": "Inicio",
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
	    "create": "Adicionar",
	    "destroy": "Excluir",
	    "edit": "Editar",
	    "excel": "Exportar para Excel",
	    "pdf": "Exportar para PDF",
	    "save": "Salvar altera????es",
	    "select": "Selecionar",
	    "update": "Atualizar"
	  },
	  "editable": {
	    "cancelDelete": "Cancelar",
	    "confirmation": "Voc?? tem certeza que deseja excluir este registro?",
	    "confirmDelete": "Excluir"
	  },
	  "noRecords": "Nenhum registro encontrado."
	});
	}

	/* Groupable messages */

	if (kendo.ui.Groupable) {
	kendo.ui.Groupable.prototype.options.messages =
	$.extend(true, kendo.ui.Groupable.prototype.options.messages,{
	  "empty": "Arraste aqui o cabe??alho de uma coluna para agrupar por esta coluna"
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

	/* MediaPlayer messages */

	if (kendo.ui.MediaPlayer) {
	kendo.ui.MediaPlayer.prototype.options.messages =
	$.extend(true, kendo.ui.MediaPlayer.prototype.options.messages,{
	  "pause": "Pausar",
	  "play": "Iniciar",
	  "mute": "Mudo",
	  "unmute": "Ativar som",
	  "quality": "Qualidade",
	  "fullscreen": "Tela cheia"
	});
	}

	/* Pager messages */

	if (kendo.ui.Pager) {
	kendo.ui.Pager.prototype.options.messages =
	$.extend(true, kendo.ui.Pager.prototype.options.messages,{
	  "allPages": "Todos",
	  "display": "Exibindo itens {0} - {1} de {2}",
	  "empty": "Nenhum registro encontrado.",
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
	  "allPages": "Todos",
	  "display": "Exibindo itens {0} - {1} de {2}",
	  "empty": "Nenhum registro encontrado.",
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
	  "measureFields": "Soltar campos de dados aqui",
	  "columnFields": "Soltar campos de coluna aqui",
	  "rowFields": "Soltar campos de linha aqui"
	});
	}

	/* PivotFieldMenu messages */

	if (kendo.ui.PivotFieldMenu) {
	kendo.ui.PivotFieldMenu.prototype.options.messages =
	$.extend(true, kendo.ui.PivotFieldMenu.prototype.options.messages,{
	  "info": "Mostrar itens com valor que:",
	  "filterFields": "Filtro de campos",
	  "filter": "Filtro",
	  "include": "Incluir campos...",
	  "title": "Campos a incluir",
	  "clear": "Limpar",
	  "ok": "Ok",
	  "cancel": "Cancelar",
	  "operators": {
	    "contains": "Cont??m",
	    "doesnotcontain": "N??o cont??m",
	    "startswith": "Come??a com",
	    "endswith": "Termina com",
	    "eq": "?? igual ??",
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
	    "hourly": "Por hora",
	    "daily": "Diariamente",
	    "weekly": "Semanalmente",
	    "monthly": "Mensalmente",
	    "yearly": "Anualmente"
	  },
	  "hourly": {
	    "repeatEvery": "Repetir toda: ",
	    "interval": " hora(s)"
	  },
	  "daily": {
	    "repeatEvery": "Repetir todo: ",
	    "interval": " dia(s)"
	  },
	  "weekly": {
	    "interval": "semana(s)",
	    "repeatEvery": "Repetir todo: ",
	    "repeatOn": "Repetir em: "
	  },
	  "monthly": {
	    "repeatEvery": "Repetir todo: ",
	    "repeatOn": "Repetir em: ",
	    "interval": " m??s(es)",
	    "day": "Dia "
	  },
	  "yearly": {
	    "repeatEvery": "Repetir todo: ",
	    "repeatOn": "Repetir em: ",
	    "interval": " ano(s) ",
	    "of": " de "
	  },
	  "end": {
	    "label": "Fim:",
	    "mobileLabel": "Final",
	    "never": "Nunca",
	    "after": "Ap??s ",
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
	    "weekday": "dia da semana",
	    "weekend": "final de semana"
	  }
	});
	}

	/* Scheduler messages */

	if (kendo.ui.Scheduler) {
	kendo.ui.Scheduler.prototype.options.messages =
	$.extend(true, kendo.ui.Scheduler.prototype.options.messages,{
	  "allDay": "dia inteiro",
	  "date": "Data",
	  "event": "Evento",
	  "time": "Hora",
	  "showFullDay": "Dia inteiro",
	  "showWorkDay": "Hor??rio comercial",
	  "today": "Hoje",
	  "save": "Salvar",
	  "cancel": "Cancelar",
	  "destroy": "Excluir",
	  "deleteWindowTitle": "Excluir evento",
	  "ariaSlotLabel": "Selecionar de {0:t} ?? {1:t}",
	  "ariaEventLabel": "{0} em {1:D} at?? {2:t}",
	  "editable": {
	    "confirmation": "Tem certeza que deseja excluir este evento?"
	  },
	  "views": {
	    "day": "Dia",
	    "week": "Semana",
	    "workWeek": "Semana de trabalho",
	    "agenda": "Agenda",
	    "month": "M??s"
	  },
	  "recurrenceMessages": {
	    "deleteWindowTitle": "Excluir Item Recorrente",
	    "deleteWindowOccurrence": "Excluir ocorr??ncia atual",
	    "deleteWindowSeries": "Excluir s??rie",
	    "editWindowTitle": "Editar item recorrente",
	    "editWindowOccurrence": "Editar ocorr??ncia atual",
	    "editWindowSeries": "Editar s??rie",
	    "deleteRecurring": "Voc?? deseja excluir apenas este evento ou todas as ocorr??ncias?",
	    "editRecurring": "Voc?? quer editar apenas este evento ou a s??rie inteira?"
	  },
	  "editor": {
	    "title": "T??tulo",
	    "start": "In??cio",
	    "end": "Fim",
	    "allDayEvent": "Evento de dia inteiro",
	    "description": "Descri????o",
	    "repeat": "Repetir",
	    "timezone": "",
	    "startTimezone": "Fuso-hor??rio inicial",
	    "endTimezone": "Fuso-hor??rio final",
	    "separateTimezones": "Usar fuso-hor??rio diferente para o in??cio e fim",
	    "timezoneEditorTitle": "Fusos-hor??rios",
	    "timezoneEditorButton": "Fuso hor??rio",
	    "timezoneTitle": "Fuso-hor??rios",
	    "noTimezone": "Sem fuso-hor??rio",
	    "editorTitle": "Evento"
	  }
	});
	}

	/* Spreadsheet messages */

	if (kendo.spreadsheet && kendo.spreadsheet.messages.borderPalette) {
	kendo.spreadsheet.messages.borderPalette =
	$.extend(true, kendo.spreadsheet.messages.borderPalette,{
	  "allBorders": "Todas as bordas",
	  "insideBorders": "Dentro das bordas",
	  "insideHorizontalBorders": "Dentro das bordas horizontais",
	  "insideVerticalBorders": "Dentro das bordas verticais",
	  "outsideBorders": "Fora das bordas",
	  "leftBorder": "Borda esquerda",
	  "topBorder": "Borda superior",
	  "rightBorder": "Borda direta",
	  "bottomBorder": "Borda inferior",
	  "noBorders": "Sem bordas",
	  "reset": "Redefinir cor",
	  "customColor": "Cor personalizada...",
	  "apply": "Aplicar",
	  "cancel": "Cancelar"
	});
	}

	if (kendo.spreadsheet && kendo.spreadsheet.messages.dialogs) {
	kendo.spreadsheet.messages.dialogs =
	$.extend(true, kendo.spreadsheet.messages.dialogs,{
	  "apply": "Aplicar",
	  "save": "Salvar",
	  "cancel": "Cancelar",
	  "remove": "Excluir",
	  "retry": "Tentar novamente",
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
	    "title": "Fonte"
	  },
	  "fontSizeDialog": {
	    "title": "Tamanho da fonte"
	  },
	  "bordersDialog": {
	    "title": "Bordas"
	  },
	  "alignmentDialog": {
	    "title": "Alinhamento",
	    "buttons": {
	     "justtifyLeft": "Alinhar ?? esquerda",
	     "justifyCenter": "Centralizar",
	     "justifyRight": "Alinhar ?? direita",
	     "justifyFull": "Justificar",
	     "alignTop": "Alinhar no topo",
	     "alignMiddle": "Alinhar no meio",
	     "alignBottom": "Alinhar abaixo"
	    }
	  },
	  "mergeDialog": {
	    "title": "Mesclar c??ludas",
	    "buttons": {
	      "mergeCells": "Mesclar tudo",
	      "mergeHorizontally": "Mesclar horizontalmente",
	      "mergeVertically": "Mesclar verticalmente",
	      "unmerge": "Desmesclar"
	    }
	  },
	  "freezeDialog": {
	    "title": "Travar pain??is",
	    "buttons": {
	      "freezePanes": "Travar pain??is",
	      "freezeRows": "Travar linhas",
	      "freezeColumns": "Travar colunas",
	      "unfreeze": "Destravar pain??is"
	    }
	  },
	  "validationDialog": {
	    "title": "Data de validade",
	    "hintMessage": "Por favor entre com um {0} valor v??lido {1}.",
	    "hintTitle": "Valida????o {0}",
	    "criteria": {
	      "any": "Qualquer valor",
	      "number": "N??mero",
	      "text": "Texto",
	      "date": "Data",
	      "custom": "F??rmula personalizada",
	      "list": "Lista"
	    },
	    "comparers": {
	      "greaterThan": "maior que",
	      "lessThan": "menor que",
	      "between": "entre",
	      "notBetween": "n??o est?? entre",
	      "equalTo": "igual",
	      "notEqualTo": "n??o ?? igual",
	      "greaterThanOrEqualTo": "maior ou igual que",
	      "lessThanOrEqualTo": "menor ou igual que"
	    },
	    "comparerMessages": {
	      "greaterThan": "maior que {0}",
	      "lessThan": "menor que {0}",
	      "between": "entre {0} e {1}",
	      "notBetween": "n??o est?? entre {0} e {1}",
	      "equalTo": "igual ?? {0}",
	      "notEqualTo": "n??o ?? igual a {0}",
	      "greaterThanOrEqualTo": "maior ou igual ?? {0}",
	      "lessThanOrEqualTo": "menor ou igual ?? {0}",
	      "custom": "Isso satisfaz a f??rmula: {0}"
	    },
	    "labels": {
	      "criteria": "Crit??rio",
	      "comparer": "Comparar",
	      "min": "Min",
	      "max": "Max",
	      "value": "Valor",
	      "start": "Inicio",
	      "end": "Fim",
	      "onInvalidData": "Em dados inv??lidos",
	      "rejectInput": "Rejeitar entrada",
	      "showWarning": "Mostrar aviso",
	      "showHint": "Mostrar dica",
	      "hintTitle": "T??tulo da dica",
	      "hintMessage": "Mensagem de dica",
	      "ignoreBlank": "Ignorar em branco"
	    },
	    "placeholders": {
	      "typeTitle": "Escrea o t??tulo",
	      "typeMessage": "Escreva a mensagem"
	    }
	  },
	  "exportAsDialog": {
	    "title": "Exportar...",
	    "labels": {
	      "fileName": "Nome do arquivo",
	      "saveAsType": "Salvar como tipo",
	      "exportArea": "Exportar",
	      "paperSize": "Tamanho do papel",
	      "margins": "Margens",
	      "orientation": "Orienta????o",
	      "print": "Imprimir",
	      "guidelines": "Diretrizes",
	      "center": "Centralizar",
	      "horizontally": "Horizontalmente",
	      "vertically": "Verticalmente"
	    }
	  },
	  "modifyMergedDialog": {
	    "errorMessage": "N??o ?? poss??vel alterar parte de uma c??lula mesclada."
	  },
	  "useKeyboardDialog": {
	    "title": "Copiar e colar",
	    "errorMessage": "Estas a????es n??o podem ser invocadas atrav??s do menu. Use os atalhos do teclado ao inv??s disso:",
	    "labels": {
	      "forCopy": "para copia",
	      "forCut": "para recortar",
	      "forPaste": "para colar"
	    }
	  },
	  "unsupportedSelectionDialog": {
	    "errorMessage": "Essa a????o n??o pode ser realizada na sele????o m??ltipla."
	  }
	});
	}

	if (kendo.spreadsheet && kendo.spreadsheet.messages.filterMenu) {
	kendo.spreadsheet.messages.filterMenu =
	$.extend(true, kendo.spreadsheet.messages.filterMenu,{
	  "sortAscending": "Classificar de A a Z",
	  "sortDescending": "Classificar de Z a A",
	  "filterByValue": "Filtrar por valor",
	  "filterByCondition": "Filtrar pela condi????o",
	  "apply": "Aplicar",
	  "search": "Procurar",
	  "addToCurrent": "Adicionar ?? lista",
	  "clear": "Limpar",
	  "blanks": "(Vazio)",
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
	      "eq":  "?? igual a",
	      "neq": "N??o ?? igual a",
	      "lt":  "?? anterior a",
	      "gt":  "?? posterior a"
	    },
	    "number": {
	      "eq": "?? igual ??",
	      "neq": "N??o ?? igual a",
	      "gte": "?? maior ou igual ??",
	      "gt": "?? maior que",
	      "lte": "?? menor ou igual ??",
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
	  "alignment": "Alinhamento",
	  "alignmentButtons": {
	    "justtifyLeft": "Alinhar ?? esquerda",
	    "justifyCenter": "Centralizar",
	    "justifyRight": "Alinha ?? direita",
	    "justifyFull": "Justificar",
	    "alignTop": "Alinhar acima",
	    "alignMiddle": "Alinhar no meio",
	    "alignBottom": "Alinhar abaixo"
	  },
	  "backgroundColor": "Fundo",
	  "bold": "Negrito",
	  "borders": "Bordas",
	  "colorPicker": {
	    "reset": "Redefinir cor",
	    "customColor": "Cor personalizada..."
	  },
	  "copy": "Copiar",
	  "cut": "Recortar",
	  "deleteColumn": "Excluir coluna",
	  "deleteRow": "Excluir linha",
	  "excelImport": "Importar do Excel...",
	  "filter": "Filtro",
	  "fontFamily": "Fonte",
	  "fontSize": "Tamanho da fonte",
	  "format": "Formato personalizado...",
	  "formatTypes": {
	    "automatic": "Autom??tico",
	    "number": "N??mero",
	    "percent": "Porcentagem",
	    "financial": "Financeiro",
	    "currency": "Moeda",
	    "date": "Data",
	    "time": "Hora",
	    "dateTime": "Data hora",
	    "duration": "Dura????o",
	    "moreFormats": "Mais formatos..."
	  },
	  "formatDecreaseDecimal": "Diminuir decimal",
	  "formatIncreaseDecimal": "Aumentar decimal",
	  "freeze": "Travar pain??is",
	  "freezeButtons": {
	    "freezePanes": "Travar pain??is",
	    "freezeRows": "Travar linhas",
	    "freezeColumns": "Travar colunas",
	    "unfreeze": "Destravar pain??is"
	  },
	  "italic": "It??lico",
	  "merge": "Mesclar c??lulas",
	  "mergeButtons": {
	    "mergeCells": "Mesclar tudo",
	    "mergeHorizontally": "Mesclar horizontalmente",
	    "mergeVertically": "Mesclar verticalmente",
	    "unmerge": "Desmesclar"
	  },
	  "open": "Abrir...",
	  "paste": "Colar",
	  "quickAccess": {
	    "redo": "Refazer",
	    "undo": "Desfazer"
	  },
	  "saveAs": "Salvar como...",
	  "sortAsc": "Ordenar ascendente",
	  "sortDesc": "Classificar decrescente",
	  "sortButtons": {
	    "sortSheetAsc": "Classificar folha de A ?? Z",
	    "sortSheetDesc": "Classificar folha de Z ?? A",
	    "sortRangeAsc": "Ordenar intervalo de A a Z",
	    "sortRangeDesc": "Ordenar intervalo de Z a A"
	  },
	  "textColor": "Cor do texto",
	  "textWrap": "Envolver texto",
	  "underline": "Sublinhado",
	  "validation": "Data de validade..."
	});
	}

	if (kendo.spreadsheet && kendo.spreadsheet.messages.view) {
	kendo.spreadsheet.messages.view =
	$.extend(true, kendo.spreadsheet.messages.view,{
	  "errors": {
	    "shiftingNonblankCells": "N??o ?? poss??vel inserir c??lulas devido ?? possibilidade de perda de dados. Selecione outro local de inser????o ou exclua os dados do final de sua planilha.",
	    "filterRangeContainingMerges": "N??o ?? poss??vel criar um filtro dentro de um intervalo que cont??m mesclagens.",
	    "validationError": "O valor inserido viola as regras de valida????o definidas na c??lula."
	  },
	  "tabs": {
	    "home": "Principal",
	    "insert": "Inserir",
	    "data": "Dado"
	  }
	});
	}

	/* Slider messages */

	if (kendo.ui.Slider) {
	kendo.ui.Slider.prototype.options =
	$.extend(true, kendo.ui.Slider.prototype.options,{
	  "increaseButtonTitle": "Aumentar",
	  "decreaseButtonTitle": "Diminuir"
	});
	}

	/* TreeList messages */

	if (kendo.ui.TreeList) {
	kendo.ui.TreeList.prototype.options.messages =
	$.extend(true, kendo.ui.TreeList.prototype.options.messages,{
	  "noRows": "Sem resultados",
	  "loading": "Carregando...",
	  "requestFailed": "Falha na solicita????o.",
	  "retry": "Tentar novamente",
	  "commands": {
	      "edit": "Editar",
	      "update": "Atualizar",
	      "canceledit": "Cancelar",
	      "create": "Adicionar novo registo",
	      "createchild": "Adicionar registro filho",
	      "destroy": "Excluir",
	      "excel": "Exportar para Excel",
	      "pdf": "Exportar para PDF"
	  }
	});
	}

	/* TreeView messages */

	if (kendo.ui.TreeView) {
	kendo.ui.TreeView.prototype.options.messages =
	$.extend(true, kendo.ui.TreeView.prototype.options.messages,{
	  "loading": "Carregando...",
	  "requestFailed": "Requisi????o falhou.",
	  "retry": "Tentar novamente"
	});
	}

	/* Upload messages */

	if (kendo.ui.Upload) {
	kendo.ui.Upload.prototype.options.localization=
	$.extend(true, kendo.ui.Upload.prototype.options.localization,{
	  "select": "Selecionar...",
	  "cancel": "Cancelar",
	  "retry": "Tentar novamente",
	  "remove": "Remover",
	  "uploadSelectedFiles": "Enviar arquivos",
	  "dropFilesHere": "arraste arquivos aqui para enviar",
	  "statusUploading": "enviando",
	  "statusUploaded": "enviado",
	  "statusWarning": "warning",
	  "statusFailed": "falhou",
	  "headerStatusUploading": "Carregando...",
	  "headerStatusUploaded": "Pronto"
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

	/* kendo.ui.progress method */
	if (kendo.ui.progress) {
	kendo.ui.progress.messages =
	$.extend(true, kendo.ui.progress.messages, {
	    loading: "Carregando..."
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