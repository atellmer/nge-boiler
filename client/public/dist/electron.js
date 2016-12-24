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
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\r\nvar electron_1 = __webpack_require__(326);\r\nvar path_1 = __webpack_require__(327);\r\nvar url_1 = __webpack_require__(328);\r\nvar environment_1 = __webpack_require__(85);\r\nvar mainWindow;\r\nvar createWindow = function () {\r\n    mainWindow = new electron_1.BrowserWindow({\r\n        width: 800,\r\n        height: 600\r\n    });\r\n    mainWindow.loadURL(url_1.format({\r\n        pathname: environment_1.environment.development ? 'localhost:3000' : path_1.join(__dirname, 'index.html'),\r\n        protocol: environment_1.environment.development ? 'http:' : 'file:',\r\n        slashes: true\r\n    }));\r\n    mainWindow.on('closed', function () {\r\n        mainWindow = null;\r\n    });\r\n};\r\nelectron_1.app.on('ready', createWindow);\r\nelectron_1.app.on('window-all-closed', function () {\r\n    if (process.platform !== 'darwin') {\r\n        electron_1.app.quit();\r\n    }\r\n});\r\nelectron_1.app.on('activate', function () {\r\n    if (mainWindow === null) {\r\n        createWindow();\r\n    }\r\n});\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/main/index.ts\n// module id = 0\n// module chunks = 3\n//# sourceURL=webpack:///./client/app/main/index.ts?");

/***/ },

/***/ 85:
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\r\nexports.environment = {\r\n    production:  false ? true : false,\r\n    development:  true ? true : false\r\n};\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/app/environment/index.ts\n// module id = 85\n// module chunks = 1 3\n//# sourceURL=webpack:///./client/app/environment/index.ts?");

/***/ },

/***/ 326:
/***/ function(module, exports) {

	eval("module.exports = require(\"electron\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"electron\"\n// module id = 326\n// module chunks = 3\n//# sourceURL=webpack:///external_%22electron%22?");

/***/ },

/***/ 327:
/***/ function(module, exports) {

	eval("module.exports = require(\"path\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"path\"\n// module id = 327\n// module chunks = 3\n//# sourceURL=webpack:///external_%22path%22?");

/***/ },

/***/ 328:
/***/ function(module, exports) {

	eval("module.exports = require(\"url\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"url\"\n// module id = 328\n// module chunks = 3\n//# sourceURL=webpack:///external_%22url%22?");

/***/ }

/******/ });