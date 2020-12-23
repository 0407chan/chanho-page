webpackHotUpdate_N_E("pages/hello-world",{

/***/ "./pages/hello-world/index.tsx":
/*!*************************************!*\
  !*** ./pages/hello-world/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _jsxFileName = \"/Users/chanho/Desktop/chris/hello-world/pages/hello-world/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nvar IMAGE_SOURCE = '/image/godchanho.gif';\nvar loveMonday1 = '/image/love-monday.png';\nvar loveMonday2 = '/image/love-monday2.png';\nvar NIGHT_BACKGROUND_COLOR = 'rgb(23, 24, 41)';\nvar DAY_BACKGROUND_COLOR = 'rgb(203, 205, 249)';\nvar Container = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"hello-world__Container\",\n  componentId: \"pore7s-0\"\n})([\"display:flex;width:100vw;height:100vh;flex-direction:column;align-items:center;background-color:\", \";.header{display:flex;justify-content:flex-end;align-items:center;padding:20px;width:100%;min-height:60px;.switch{position:relative;display:inline-block;width:60px;height:30px;}.switch input{opacity:0;width:0;height:0;}.slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;-webkit-transition:0.4s;transition:0.4s;}.slider:before{position:absolute;content:'';height:24px;width:24px;left:5px;bottom:3px;background-color:white;-webkit-transition:0.4s;transition:0.4s;}input:checked + .slider{background-color:#2196f3;}input:focus + .slider{box-shadow:0 0 1px #2196f3;}input:checked + .slider:before{-webkit-transform:translateX(26px);-ms-transform:translateX(26px);transform:translateX(26px);}.slider.round{border-radius:34px;}.slider.round:before{border-radius:50%;}}.body{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100%;.text-header{margin:20px 0px;font-size:30px;color:white;}.text{margin:10px 0px;font-size:15px;color:white;}.img-wrapper{display:flex;flex-direction:row;justify-content:center;margin:20px 0px;width:100%;}}\"], function (props) {\n  return props.isNight ? NIGHT_BACKGROUND_COLOR : DAY_BACKGROUND_COLOR;\n});\n_c = Container;\nvar ReflectImage = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"hello-world__ReflectImage\",\n  componentId: \"pore7s-1\"\n})([\"margin:0px 20px;border-radius:10px;box-shadow:0px 2px 16px rgba(0,0,0,0.8),0px 2px 8px rgba(255,255,255,0.5);background-image:url('\", \"');background-size:cover;background-repeat:no-repeat;width:200px;height:200px;position:relative;transition:transform 200ms ease,box-shadow 200ms ease;&:hover{transform:scale(1.03);box-shadow:0px 2px 16px rgba(0,0,0,0.8),0px 2px 16px rgba(255,255,255,0.7);}&::after{content:'';background-image:inherit;width:inherit;height:40%;background-size:100%;background-repeat:no-repeat;position:absolute;bottom:-60%;transform:scaleY(-1);background-position:bottom;}&::before{content:'';width:inherit;height:42%;position:absolute;bottom:-60%;background:linear-gradient( to bottom,rgba(23,24,41,0.3),\", \" );z-index:1;}\"], function (props) {\n  return props.image;\n}, BACKGROUND_COLOR);\n_c2 = ReflectImage;\nfunction Home() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true),\n      isNight = _useState[0],\n      setisNight = _useState[1];\n\n  var toggleDayNight = function toggleDayNight() {\n    setisNight(!isNight);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n    isNight: isNight,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Create Next App\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 177,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 178,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 176,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"header\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        className: \"switch\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"checkbox\",\n          checked: isNight,\n          onChange: function onChange() {\n            return toggleDayNight();\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 183,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          className: \"slider round\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 188,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 182,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 181,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"body\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"text-header\",\n        children: \"\\uC548\\uB155\\uD558\\uC138\\uC694 \\uC774\\uCC2C\\uD638\\uC785\\uB2C8\\uB2E4\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 192,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"text\",\n        children: \"\\uD504\\uB860\\uD2B8\\uC5D4\\uB4DC \\uAC1C\\uBC1C\\uC790\\uC785\\uB2C8\\uB2E4.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 193,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"text\",\n        children: \"ReactJs\\uC640 nextJs\\uB97C \\uC774\\uC6A9\\uD55C \\uD398\\uC774\\uC9C0\\uC785\\uB2C8\\uB2E4. next\\uC9C4\\uC9DC \\uCD5C\\uACE0\\uB124\\uC694.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 194,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"text\",\n        children: \"react\\uC4F0\\uC2DC\\uB294\\uBD84\\uB4E4\\uC740 \\uBB34\\uC870\\uAC74 next \\uC4F0\\uB294\\uAC78 \\uCD94\\uCC9C\\uD569\\uB2C8\\uB2E4.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 197,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"text\",\n        children: \"\\uC544\\uB798 \\uC0AC\\uC9C4\\uC740 \\uC81C \\uD504\\uB85C\\uD544\\uACFC \\uAD00\\uB828 \\uC5C6\\uC2B5\\uB2C8\\uB2E4.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 200,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"img-wrapper\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ReflectImage, {\n          image: IMAGE_SOURCE\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 202,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ReflectImage, {\n          image: loveMonday1\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 203,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ReflectImage, {\n          image: loveMonday2\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 204,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 201,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 191,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 175,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"I4+gbXVhV4I3cNErRh1WNpNRjZQ=\");\n\n_c3 = Home;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"ReflectImage\");\n$RefreshReg$(_c3, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaGVsbG8td29ybGQvaW5kZXgudHN4P2FhMjAiXSwibmFtZXMiOlsiSU1BR0VfU09VUkNFIiwibG92ZU1vbmRheTEiLCJsb3ZlTW9uZGF5MiIsIk5JR0hUX0JBQ0tHUk9VTkRfQ09MT1IiLCJEQVlfQkFDS0dST1VORF9DT0xPUiIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwiaXNOaWdodCIsIlJlZmxlY3RJbWFnZSIsImltYWdlIiwiQkFDS0dST1VORF9DT0xPUiIsIkhvbWUiLCJ1c2VTdGF0ZSIsInNldGlzTmlnaHQiLCJ0b2dnbGVEYXlOaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUcsc0JBQXJCO0FBQ0EsSUFBTUMsV0FBVyxHQUFHLHdCQUFwQjtBQUNBLElBQU1DLFdBQVcsR0FBRyx5QkFBcEI7QUFDQSxJQUFNQyxzQkFBc0IsR0FBRyxpQkFBL0I7QUFDQSxJQUFNQyxvQkFBb0IsR0FBRyxvQkFBN0I7QUFLQSxJQUFNQyxTQUFTLGdCQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHVzQ0FNTyxVQUFDQyxLQUFEO0FBQUEsU0FDbEJBLEtBQUssQ0FBQ0MsT0FBTixHQUFnQk4sc0JBQWhCLEdBQXlDQyxvQkFEdkI7QUFBQSxDQU5QLENBQWY7S0FBTUMsUztBQTZHTixJQUFNSyxZQUFZLGdCQUFHSix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDZ1QkFLUyxVQUFDQyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDRyxLQUFqQjtBQUFBLENBTFQsRUF3Q1ZDLGdCQXhDVSxDQUFsQjtNQUFNRixZO0FBNkNTLFNBQVNHLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSxrQkFDQ0Msc0RBQVEsQ0FBQyxJQUFELENBRFQ7QUFBQSxNQUN0QkwsT0FEc0I7QUFBQSxNQUNiTSxVQURhOztBQUU3QixNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0JELGNBQVUsQ0FBQyxDQUFDTixPQUFGLENBQVY7QUFDRCxHQUZEOztBQUdBLHNCQUNFLHFFQUFDLFNBQUQ7QUFBVyxXQUFPLEVBQUVBLE9BQXBCO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUU7QUFBSyxlQUFTLEVBQUMsUUFBZjtBQUFBLDZCQUNFO0FBQU8saUJBQVMsRUFBQyxRQUFqQjtBQUFBLGdDQUNFO0FBQ0UsY0FBSSxFQUFDLFVBRFA7QUFFRSxpQkFBTyxFQUFFQSxPQUZYO0FBR0Usa0JBQVEsRUFBRTtBQUFBLG1CQUFNTyxjQUFjLEVBQXBCO0FBQUE7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBTUU7QUFBTSxtQkFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBZ0JFO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFNRTtBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GLGVBU0U7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FURixlQVVFO0FBQUssaUJBQVMsRUFBQyxhQUFmO0FBQUEsZ0NBQ0UscUVBQUMsWUFBRDtBQUFjLGVBQUssRUFBRWhCO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRSxxRUFBQyxZQUFEO0FBQWMsZUFBSyxFQUFFQztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBR0UscUVBQUMsWUFBRDtBQUFjLGVBQUssRUFBRUM7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtQ0Q7O0dBeEN1QlcsSTs7TUFBQUEsSSIsImZpbGUiOiIuL3BhZ2VzL2hlbGxvLXdvcmxkL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5jb25zdCBJTUFHRV9TT1VSQ0UgPSAnL2ltYWdlL2dvZGNoYW5oby5naWYnXG5jb25zdCBsb3ZlTW9uZGF5MSA9ICcvaW1hZ2UvbG92ZS1tb25kYXkucG5nJ1xuY29uc3QgbG92ZU1vbmRheTIgPSAnL2ltYWdlL2xvdmUtbW9uZGF5Mi5wbmcnXG5jb25zdCBOSUdIVF9CQUNLR1JPVU5EX0NPTE9SID0gJ3JnYigyMywgMjQsIDQxKSdcbmNvbnN0IERBWV9CQUNLR1JPVU5EX0NPTE9SID0gJ3JnYigyMDMsIDIwNSwgMjQ5KSdcblxudHlwZSBDb250YWluZXJQcm9wcyA9IHtcbiAgaXNOaWdodDogYm9vbGVhblxufVxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdjxDb250YWluZXJQcm9wcz5gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+XG4gICAgcHJvcHMuaXNOaWdodCA/IE5JR0hUX0JBQ0tHUk9VTkRfQ09MT1IgOiBEQVlfQkFDS0dST1VORF9DT0xPUn07XG5cbiAgLmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xuXG4gICAgLnN3aXRjaCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogNjBweDtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG5cbiAgICAuc3dpdGNoIGlucHV0IHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB3aWR0aDogMDtcbiAgICAgIGhlaWdodDogMDtcbiAgICB9XG5cbiAgICAuc2xpZGVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XG4gICAgICB0cmFuc2l0aW9uOiAwLjRzO1xuICAgIH1cblxuICAgIC5zbGlkZXI6YmVmb3JlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICBsZWZ0OiA1cHg7XG4gICAgICBib3R0b206IDNweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICAgICAgdHJhbnNpdGlvbjogMC40cztcbiAgICB9XG5cbiAgICBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xuICAgIH1cblxuICAgIGlucHV0OmZvY3VzICsgLnNsaWRlciB7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2ZjM7XG4gICAgfVxuXG4gICAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgICB9XG5cbiAgICAvKiBSb3VuZGVkIHNsaWRlcnMgKi9cbiAgICAuc2xpZGVyLnJvdW5kIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XG4gICAgfVxuXG4gICAgLnNsaWRlci5yb3VuZDpiZWZvcmUge1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIH1cbiAgfVxuXG4gIC5ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLnRleHQtaGVhZGVyIHtcbiAgICAgIG1hcmdpbjogMjBweCAwcHg7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIC50ZXh0IHtcbiAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgLmltZy13cmFwcGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBtYXJnaW46IDIwcHggMHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5gXG5cbnR5cGUgUmVmbGVjdEltYWdlUHJvcHMgPSB7XG4gIGltYWdlOiBzdHJpbmdcbn1cbmNvbnN0IFJlZmxlY3RJbWFnZSA9IHN0eWxlZC5kaXY8UmVmbGVjdEltYWdlUHJvcHM+YFxuICBtYXJnaW46IDBweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwcHggMnB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjgpLFxuICAgIDBweCAycHggOHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCckeyhwcm9wcykgPT4gcHJvcHMuaW1hZ2V9Jyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMgZWFzZSwgYm94LXNoYWRvdyAyMDBtcyBlYXNlO1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC44KSxcbiAgICAgIDBweCAycHggMTZweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gIH1cbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGluaGVyaXQ7XG4gICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgaGVpZ2h0OiA0MCU7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTYwJTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgtMSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xuICB9XG5cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICB3aWR0aDogaW5oZXJpdDtcbiAgICBoZWlnaHQ6IDQyJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtNjAlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIHRvIGJvdHRvbSxcbiAgICAgIHJnYmEoMjMsIDI0LCA0MSwgMC4zKSxcbiAgICAgICR7QkFDS0dST1VORF9DT0xPUn1cbiAgICApO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbmBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtpc05pZ2h0LCBzZXRpc05pZ2h0XSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IHRvZ2dsZURheU5pZ2h0ID0gKCkgPT4ge1xuICAgIHNldGlzTmlnaHQoIWlzTmlnaHQpXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGlzTmlnaHQ9e2lzTmlnaHR9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzd2l0Y2hcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICBjaGVja2VkPXtpc05pZ2h0fVxuICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRvZ2dsZURheU5pZ2h0KCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbGlkZXIgcm91bmRcIj48L3NwYW4+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtaGVhZGVyXCI+7JWI64WV7ZWY7IS47JqUIOydtOywrO2YuOyeheuLiOuLpDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj7tlITroaDtirjsl5Trk5wg6rCc67Cc7J6Q7J6F64uI64ukLjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cbiAgICAgICAgICBSZWFjdEpz7JmAIG5leHRKc+ulvCDsnbTsmqntlZwg7Y6Y7J207KeA7J6F64uI64ukLiBuZXh07KeE7KecIOy1nOqzoOuEpOyalC5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICAgIHJlYWN07JOw7Iuc64qU67aE65Ok7J2AIOustOyhsOqxtCBuZXh0IOyTsOuKlOqxuCDstpTsspztlanri4jri6QuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj7slYTrnpgg7IKs7KeE7J2AIOygnCDtlITroZztlYTqs7wg6rSA66CoIOyXhuyKteuLiOuLpC48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctd3JhcHBlclwiPlxuICAgICAgICAgIDxSZWZsZWN0SW1hZ2UgaW1hZ2U9e0lNQUdFX1NPVVJDRX0+PC9SZWZsZWN0SW1hZ2U+XG4gICAgICAgICAgPFJlZmxlY3RJbWFnZSBpbWFnZT17bG92ZU1vbmRheTF9PjwvUmVmbGVjdEltYWdlPlxuICAgICAgICAgIDxSZWZsZWN0SW1hZ2UgaW1hZ2U9e2xvdmVNb25kYXkyfT48L1JlZmxlY3RJbWFnZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/hello-world/index.tsx\n");

/***/ })

})