(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["calculator"] = factory();
	else
		root["calculator"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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

	eval("\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Calculator = (function () {\n  function Calculator() {\n    _classCallCheck(this, Calculator);\n  }\n\n  _createClass(Calculator, [{\n    key: \"add\",\n    value: function add(op1, op2) {\n      return op1 + op2;\n    }\n  }, {\n    key: \"sub\",\n    value: function sub(op1, op2) {\n      return op1 - op2;\n    }\n  }, {\n    key: \"mul\",\n    value: function mul(op1, op2) {\n      return op1 * op2;\n    }\n  }, {\n    key: \"div\",\n    value: function div(op1, op2) {\n      return op1 / op2;\n    }\n  }]);\n\n  return Calculator;\n})();\n\nexports[\"default\"] = Calculator;\nmodule.exports = exports[\"default\"];//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vQzovVXNlcnMvTWVsdmluL0Rlc2t0b3AvZXM2LWthcm1hLWphc21pbmUtd2VicGFjay1ib2lsZXJwbGF0ZS9zcmMvQ2FsY3VsYXRvci5qcz8yZTk1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTSxVQUFVO1dBQVYsVUFBVTswQkFBVixVQUFVOzs7ZUFBVixVQUFVOztXQUNYLGFBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRTtBQUNaLGFBQU8sR0FBRyxHQUFHLEdBQUcsQ0FBQztLQUNsQjs7O1dBRUUsYUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFFO0FBQ1osYUFBTyxHQUFHLEdBQUcsR0FBRyxDQUFDO0tBQ2xCOzs7V0FFRSxhQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUU7QUFDWixhQUFPLEdBQUcsR0FBRyxHQUFHLENBQUM7S0FDbEI7OztXQUVFLGFBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRTtBQUNaLGFBQU8sR0FBRyxHQUFHLEdBQUcsQ0FBQztLQUNsQjs7O1NBZkcsVUFBVTs7O3FCQWtCRCxVQUFVIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDYWxjdWxhdG9yIHtcbiAgYWRkKG9wMSwgb3AyKSB7XG4gICAgcmV0dXJuIG9wMSArIG9wMjtcbiAgfVxuXG4gIHN1YihvcDEsIG9wMikge1xuICAgIHJldHVybiBvcDEgLSBvcDI7XG4gIH1cblxuICBtdWwob3AxLCBvcDIpIHtcbiAgICByZXR1cm4gb3AxICogb3AyO1xuICB9XG5cbiAgZGl2KG9wMSwgb3AyKSB7XG4gICAgcmV0dXJuIG9wMSAvIG9wMjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYWxjdWxhdG9yO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovVXNlcnMvTWVsdmluL0Rlc2t0b3AvZXM2LWthcm1hLWphc21pbmUtd2VicGFjay1ib2lsZXJwbGF0ZS9zcmMvQ2FsY3VsYXRvci5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ])
});
;