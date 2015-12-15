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
/******/ ([
/* 0 */
/***/ function(module, exports) {

	window.ScreenCap = {
		start(callback) {
			setInterval(function () {
				var object = {
					html: dumpHtmlText(document.documentElement),
					css: dumpCssText(document.documentElement)
				};

				callback(object);
			}, 1000 / 10);
		}
	};

	function dumpHtmlText(element) {
		return element.innerHTML;
	}

	// http://stackoverflow.com/questions/15000163/how-to-get-all-css-of-element
	function dumpCssText(element) {
		var s = '';
		var o = getComputedStyle(element);
		for (var i = 0; i < o.length; i++) {
			s += o[i] + ':' + o.getPropertyValue(o[i]) + ';';
		}
		return s;
	}

/***/ }
/******/ ]);