/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_vue-cli-plugin-electron-builder@1.0.0-rc.10@vue-cli-plugin-electron-builder/lib/createProtocol.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/_vue-cli-plugin-electron-builder@1.0.0-rc.10@vue-cli-plugin-electron-builder/lib/createProtocol.js ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url */ \"url\");\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (scheme => {\n  electron__WEBPACK_IMPORTED_MODULE_0__[\"protocol\"].registerBufferProtocol(\n    scheme,\n    (request, respond) => {\n      let pathName = new url__WEBPACK_IMPORTED_MODULE_3__[\"URL\"](request.url).pathname\n      pathName = decodeURI(pathName) // Needed in case URL contains spaces\n\n      Object(fs__WEBPACK_IMPORTED_MODULE_2__[\"readFile\"])(path__WEBPACK_IMPORTED_MODULE_1__[\"join\"](__dirname, pathName), (error, data) => {\n        if (error) {\n          console.error(`Failed to register ${scheme} protocol`, error)\n        }\n        let extension = path__WEBPACK_IMPORTED_MODULE_1__[\"extname\"](pathName).toLowerCase()\n        let mimeType = ''\n\n        if (extension === '.js') {\n          mimeType = 'text/javascript'\n        } else if (extension === '.html') {\n          mimeType = 'text/html'\n        } else if (extension === '.css') {\n          mimeType = 'text/css'\n        } else if (extension === '.svg' || extension === '.svgz') {\n          mimeType = 'image/svg+xml'\n        } else if (extension === '.json') {\n          mimeType = 'application/json'\n        }\n\n        respond({ mimeType, data })\n      })\n    },\n    error => {\n      if (error) {\n        console.error(`Failed to register ${scheme} protocol`, error)\n      }\n    }\n  )\n});\n\n\n//# sourceURL=webpack:///./node_modules/_vue-cli-plugin-electron-builder@1.0.0-rc.10@vue-cli-plugin-electron-builder/lib/createProtocol.js?");

/***/ }),

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url */ \"url\");\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var vue_cli_plugin_electron_builder_lib_createProtocol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-cli-plugin-electron-builder/lib/createProtocol.js */ \"./node_modules/_vue-cli-plugin-electron-builder@1.0.0-rc.10@vue-cli-plugin-electron-builder/lib/createProtocol.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst isDevelopment = \"development\" !== 'production'\r\n\r\n// global reference to mainWindow (necessary to prevent window from being garbage collected)\r\nlet mainWindow\r\n\r\n// Standard scheme must be registered before the app is ready\r\nelectron__WEBPACK_IMPORTED_MODULE_0__[\"protocol\"].registerStandardSchemes(['app'], { secure: true })\r\nfunction createMainWindow() {\r\n  const window = new electron__WEBPACK_IMPORTED_MODULE_0__[\"BrowserWindow\"]({\r\n    width: 800,\r\n    height: 600,\r\n    transparent: true,\r\n    frame: false,\r\n  })\r\n  // 点击穿透窗口\r\n  // window.setIgnoreMouseEvents(true)\r\n\r\n  if (isDevelopment) {\r\n    // Load the url of the dev server if in development mode\r\n    window.loadURL(\"http://localhost:8080\")\r\n    // if (!process.env.IS_TEST) window.webContents.openDevTools();\r\n  } else {\r\n    Object(vue_cli_plugin_electron_builder_lib_createProtocol_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('app')\r\n    //   Load the index.html when not in development\r\n    window.loadURL(\r\n      Object(url__WEBPACK_IMPORTED_MODULE_2__[\"format\"])({\r\n        pathname: path__WEBPACK_IMPORTED_MODULE_1___default.a.join(__dirname, 'index.html'),\r\n        protocol: 'file',\r\n        slashes: true\r\n      })\r\n    );\r\n  }\r\n\r\n  window.on('closed', () => {\r\n    mainWindow = null\r\n  })\r\n\r\n  window.webContents.on('devtools-opened', () => {\r\n    window.focus()\r\n    setImmediate(() => {\r\n      window.focus()\r\n    })\r\n  })\r\n\r\n  return window\r\n}\r\n\r\n// quit application when all windows are closed\r\nelectron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].on('window-all-closed', () => {\r\n  // on macOS it is common for applications to stay open until the user explicitly quits\r\n  if (process.platform !== 'darwin') {\r\n    electron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].quit()\r\n  }\r\n})\r\n\r\nelectron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].on('activate', () => {\r\n  // on macOS it is common to re-create a window even after all windows have been closed\r\n  if (mainWindow === null) {\r\n    mainWindow = createMainWindow()\r\n  }\r\n})\r\n\r\n// create main BrowserWindow when electron is ready\r\nelectron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].on('ready', () => {\r\n  mainWindow = createMainWindow();\r\n})\r\n\n\n//# sourceURL=webpack:///./server.js?");

/***/ }),

/***/ 0:
/*!*************************!*\
  !*** multi ./server.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! D:\\Code\\github\\electron-vue\\server.js */\"./server.js\");\n\n\n//# sourceURL=webpack:///multi_./server.js?");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"electron\");\n\n//# sourceURL=webpack:///external_%22electron%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"url\");\n\n//# sourceURL=webpack:///external_%22url%22?");

/***/ })

/******/ });