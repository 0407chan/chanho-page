webpackHotUpdate_N_E("pages/hello-world",{

/***/ "./pages/hello-world/index.tsx":
/*!*************************************!*\
  !*** ./pages/hello-world/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _jsxFileName = \"/Users/chanho/Desktop/chris/hello-world/pages/hello-world/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nvar IMAGE_SOURCE = '/image/godchanho.gif';\nvar loveMonday1 = '/image/love-monday.png';\nvar loveMonday2 = '/image/love-monday2.png';\nvar NIGHT_BACKGROUND_COLOR = 'rgb(23, 24, 41)';\nvar DAY_BACKGROUND_COLOR = 'rgb(203, 205, 249)';\nvar Container = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"hello-world__Container\",\n  componentId: \"pore7s-0\"\n})([\"display:flex;width:100vw;height:100vh;flex-direction:column;align-items:center;transition:background-color 200ms ease;background-color:\", \";.header{display:flex;justify-content:flex-end;align-items:center;padding:20px;width:100%;min-height:60px;.switch{position:relative;display:inline-block;width:60px;height:30px;}.switch input{opacity:0;width:0;height:0;}.slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;-webkit-transition:0.4s;transition:0.4s;}.slider:before{position:absolute;content:'';height:24px;width:24px;left:5px;bottom:3px;background-color:white;-webkit-transition:0.4s;transition:0.4s;}input:checked + .slider{background-color:#2196f3;}input:focus + .slider{box-shadow:0 0 1px #2196f3;}input:checked + .slider:before{-webkit-transform:translateX(26px);-ms-transform:translateX(26px);transform:translateX(26px);}.slider.round{border-radius:34px;}.slider.round:before{border-radius:50%;}}.body{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100%;.text-header{margin:20px 0px;font-size:30px;transition:color 200ms ease;color:\", \";}.text{margin:10px 0px;font-size:15px;transition:color 200ms ease;color:\", \";}.img-wrapper{display:flex;flex-direction:row;justify-content:center;margin:20px 0px;width:100%;}}\"], function (props) {\n  return props.isNight ? NIGHT_BACKGROUND_COLOR : DAY_BACKGROUND_COLOR;\n}, function (props) {\n  return props.isNight ? '#ffffff' : NIGHT_BACKGROUND_COLOR;\n}, function (props) {\n  return props.isNight ? '#ffffff' : NIGHT_BACKGROUND_COLOR;\n});\n_c = Container;\nvar ReflectImage = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"hello-world__ReflectImage\",\n  componentId: \"pore7s-1\"\n})([\"margin:0px 20px;border-radius:10px;box-shadow:0px 2px 16px rgba(0,0,0,0.8),0px 2px 8px rgba(255,255,255,0.5);background-image:url('\", \"');background-size:cover;background-repeat:no-repeat;width:200px;height:200px;position:relative;transition:transform 200ms ease,box-shadow 200ms ease;&:hover{transform:scale(1.03);box-shadow:0px 2px 16px rgba(0,0,0,0.8),0px 2px 16px rgba(255,255,255,0.7);}&::after{content:'';background-image:inherit;width:inherit;height:40%;background-size:100%;background-repeat:no-repeat;position:absolute;bottom:-60%;transform:scaleY(-1);background-position:bottom;}&::before{content:'';width:inherit;height:42%;position:absolute;bottom:-60%;background:linear-gradient( to bottom,rgba(23,24,41,0.3),\", \" );z-index:1;}\"], function (props) {\n  return props.image;\n}, function (props) {\n  return props.isNight ? NIGHT_BACKGROUND_COLOR : DAY_BACKGROUND_COLOR;\n});\n_c2 = ReflectImage;\nfunction Home() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true),\n      isNight = _useState[0],\n      setisNight = _useState[1];\n\n  var toggleDayNight = function toggleDayNight() {\n    setisNight(!isNight);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n    isNight: isNight,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Create Next App\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 183,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 184,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 182,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"header\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        className: \"switch\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"checkbox\",\n          checked: isNight,\n          onChange: function onChange() {\n            return toggleDayNight();\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 189,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          className: \"slider round\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 194,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 188,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 187,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"body\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"text-header\",\n        children: \"\\uC548\\uB155\\uD558\\uC138\\uC694 \\uC774\\uCC2C\\uD638\\uC785\\uB2C8\\uB2E4\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 198,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"text\",\n        children: \"\\uD504\\uB860\\uD2B8\\uC5D4\\uB4DC \\uAC1C\\uBC1C\\uC790\\uC785\\uB2C8\\uB2E4.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 199,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"text\",\n        children: \"ReactJs\\uC640 nextJs\\uB97C \\uC774\\uC6A9\\uD55C \\uD398\\uC774\\uC9C0\\uC785\\uB2C8\\uB2E4. next\\uC9C4\\uC9DC \\uCD5C\\uACE0\\uB124\\uC694.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 200,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"text\",\n        children: \"react\\uC4F0\\uC2DC\\uB294\\uBD84\\uB4E4\\uC740 \\uBB34\\uC870\\uAC74 next \\uC4F0\\uB294\\uAC78 \\uCD94\\uCC9C\\uD569\\uB2C8\\uB2E4.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 203,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"text\",\n        children: \"\\uC544\\uB798 \\uC0AC\\uC9C4\\uC740 \\uC81C \\uD504\\uB85C\\uD544\\uACFC \\uAD00\\uB828 \\uC5C6\\uC2B5\\uB2C8\\uB2E4.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 206,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"img-wrapper\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ReflectImage, {\n          image: IMAGE_SOURCE,\n          isNight: isNight\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 208,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ReflectImage, {\n          image: loveMonday1,\n          isNight: isNight\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 209,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ReflectImage, {\n          image: loveMonday2,\n          isNight: isNight\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 210,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 207,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 197,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 181,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"I4+gbXVhV4I3cNErRh1WNpNRjZQ=\");\n\n_c3 = Home;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"ReflectImage\");\n$RefreshReg$(_c3, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaGVsbG8td29ybGQvaW5kZXgudHN4P2FhMjAiXSwibmFtZXMiOlsiSU1BR0VfU09VUkNFIiwibG92ZU1vbmRheTEiLCJsb3ZlTW9uZGF5MiIsIk5JR0hUX0JBQ0tHUk9VTkRfQ09MT1IiLCJEQVlfQkFDS0dST1VORF9DT0xPUiIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwiaXNOaWdodCIsIlJlZmxlY3RJbWFnZSIsImltYWdlIiwiSG9tZSIsInVzZVN0YXRlIiwic2V0aXNOaWdodCIsInRvZ2dsZURheU5pZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBLElBQU1BLFlBQVksR0FBRyxzQkFBckI7QUFDQSxJQUFNQyxXQUFXLEdBQUcsd0JBQXBCO0FBQ0EsSUFBTUMsV0FBVyxHQUFHLHlCQUFwQjtBQUNBLElBQU1DLHNCQUFzQixHQUFHLGlCQUEvQjtBQUNBLElBQU1DLG9CQUFvQixHQUFHLG9CQUE3QjtBQUtBLElBQU1DLFNBQVMsZ0JBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsb3lDQVFPLFVBQUNDLEtBQUQ7QUFBQSxTQUNsQkEsS0FBSyxDQUFDQyxPQUFOLEdBQWdCTixzQkFBaEIsR0FBeUNDLG9CQUR2QjtBQUFBLENBUlAsRUEyRkEsVUFBQ0ksS0FBRDtBQUFBLFNBQVlBLEtBQUssQ0FBQ0MsT0FBTixHQUFnQixTQUFoQixHQUE0Qk4sc0JBQXhDO0FBQUEsQ0EzRkEsRUFpR0EsVUFBQ0ssS0FBRDtBQUFBLFNBQVlBLEtBQUssQ0FBQ0MsT0FBTixHQUFnQixTQUFoQixHQUE0Qk4sc0JBQXhDO0FBQUEsQ0FqR0EsQ0FBZjtLQUFNRSxTO0FBa0hOLElBQU1LLFlBQVksZ0JBQUdKLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNnVCQUtTLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNHLEtBQWpCO0FBQUEsQ0FMVCxFQXdDVixVQUFDSCxLQUFEO0FBQUEsU0FDQUEsS0FBSyxDQUFDQyxPQUFOLEdBQWdCTixzQkFBaEIsR0FBeUNDLG9CQUR6QztBQUFBLENBeENVLENBQWxCO01BQU1NLFk7QUE4Q1MsU0FBU0UsSUFBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUNDQyxzREFBUSxDQUFDLElBQUQsQ0FEVDtBQUFBLE1BQ3RCSixPQURzQjtBQUFBLE1BQ2JLLFVBRGE7O0FBRTdCLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQkQsY0FBVSxDQUFDLENBQUNMLE9BQUYsQ0FBVjtBQUNELEdBRkQ7O0FBR0Esc0JBQ0UscUVBQUMsU0FBRDtBQUFXLFdBQU8sRUFBRUEsT0FBcEI7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFNRTtBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQUEsNkJBQ0U7QUFBTyxpQkFBUyxFQUFDLFFBQWpCO0FBQUEsZ0NBQ0U7QUFDRSxjQUFJLEVBQUMsVUFEUDtBQUVFLGlCQUFPLEVBQUVBLE9BRlg7QUFHRSxrQkFBUSxFQUFFO0FBQUEsbUJBQU1NLGNBQWMsRUFBcEI7QUFBQTtBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFNRTtBQUFNLG1CQUFTLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsZUFnQkU7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0U7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixlQU1FO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkYsZUFTRTtBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGLGVBVUU7QUFBSyxpQkFBUyxFQUFDLGFBQWY7QUFBQSxnQ0FDRSxxRUFBQyxZQUFEO0FBQWMsZUFBSyxFQUFFZixZQUFyQjtBQUFtQyxpQkFBTyxFQUFFUztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUUscUVBQUMsWUFBRDtBQUFjLGVBQUssRUFBRVIsV0FBckI7QUFBa0MsaUJBQU8sRUFBRVE7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQUdFLHFFQUFDLFlBQUQ7QUFBYyxlQUFLLEVBQUVQLFdBQXJCO0FBQWtDLGlCQUFPLEVBQUVPO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUNEOztHQXhDdUJHLEk7O01BQUFBLEkiLCJmaWxlIjoiLi9wYWdlcy9oZWxsby13b3JsZC9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuY29uc3QgSU1BR0VfU09VUkNFID0gJy9pbWFnZS9nb2RjaGFuaG8uZ2lmJ1xuY29uc3QgbG92ZU1vbmRheTEgPSAnL2ltYWdlL2xvdmUtbW9uZGF5LnBuZydcbmNvbnN0IGxvdmVNb25kYXkyID0gJy9pbWFnZS9sb3ZlLW1vbmRheTIucG5nJ1xuY29uc3QgTklHSFRfQkFDS0dST1VORF9DT0xPUiA9ICdyZ2IoMjMsIDI0LCA0MSknXG5jb25zdCBEQVlfQkFDS0dST1VORF9DT0xPUiA9ICdyZ2IoMjAzLCAyMDUsIDI0OSknXG5cbnR5cGUgQ29udGFpbmVyUHJvcHMgPSB7XG4gIGlzTmlnaHQ6IGJvb2xlYW5cbn1cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXY8Q29udGFpbmVyUHJvcHM+YFxuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBlYXNlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT5cbiAgICBwcm9wcy5pc05pZ2h0ID8gTklHSFRfQkFDS0dST1VORF9DT0xPUiA6IERBWV9CQUNLR1JPVU5EX0NPTE9SfTtcblxuICAuaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XG5cbiAgICAuc3dpdGNoIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgIH1cblxuICAgIC5zd2l0Y2ggaW5wdXQge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHdpZHRoOiAwO1xuICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cblxuICAgIC5zbGlkZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcbiAgICAgIHRyYW5zaXRpb246IDAuNHM7XG4gICAgfVxuXG4gICAgLnNsaWRlcjpiZWZvcmUge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICB3aWR0aDogMjRweDtcbiAgICAgIGxlZnQ6IDVweDtcbiAgICAgIGJvdHRvbTogM3B4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XG4gICAgICB0cmFuc2l0aW9uOiAwLjRzO1xuICAgIH1cblxuICAgIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XG4gICAgfVxuXG4gICAgaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZmMztcbiAgICB9XG5cbiAgICBpbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICAgIH1cblxuICAgIC8qIFJvdW5kZWQgc2xpZGVycyAqL1xuICAgIC5zbGlkZXIucm91bmQge1xuICAgICAgYm9yZGVyLXJhZGl1czogMzRweDtcbiAgICB9XG5cbiAgICAuc2xpZGVyLnJvdW5kOmJlZm9yZSB7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuICB9XG5cbiAgLmJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAudGV4dC1oZWFkZXIge1xuICAgICAgbWFyZ2luOiAyMHB4IDBweDtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zIGVhc2U7XG4gICAgICBjb2xvcjogJHsocHJvcHMpID0+IChwcm9wcy5pc05pZ2h0ID8gJyNmZmZmZmYnIDogTklHSFRfQkFDS0dST1VORF9DT0xPUil9O1xuICAgIH1cbiAgICAudGV4dCB7XG4gICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXMgZWFzZTtcbiAgICAgIGNvbG9yOiAkeyhwcm9wcykgPT4gKHByb3BzLmlzTmlnaHQgPyAnI2ZmZmZmZicgOiBOSUdIVF9CQUNLR1JPVU5EX0NPTE9SKX07XG4gICAgfVxuXG4gICAgLmltZy13cmFwcGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBtYXJnaW46IDIwcHggMHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5gXG5cbnR5cGUgUmVmbGVjdEltYWdlUHJvcHMgPSB7XG4gIGltYWdlOiBzdHJpbmdcbiAgaXNOaWdodDogYm9vbGVhblxufVxuY29uc3QgUmVmbGVjdEltYWdlID0gc3R5bGVkLmRpdjxSZWZsZWN0SW1hZ2VQcm9wcz5gXG4gIG1hcmdpbjogMHB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMTZweCByZ2JhKDAsIDAsIDAsIDAuOCksXG4gICAgMHB4IDJweCA4cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7KHByb3BzKSA9PiBwcm9wcy5pbWFnZX0nKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlLCBib3gtc2hhZG93IDIwMG1zIGVhc2U7XG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjgpLFxuICAgICAgMHB4IDJweCAxNnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgfVxuICAmOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogaW5oZXJpdDtcbiAgICB3aWR0aDogaW5oZXJpdDtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtNjAlO1xuICAgIHRyYW5zZm9ybTogc2NhbGVZKC0xKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XG4gIH1cblxuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHdpZHRoOiBpbmhlcml0O1xuICAgIGhlaWdodDogNDIlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC02MCU7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgdG8gYm90dG9tLFxuICAgICAgcmdiYSgyMywgMjQsIDQxLCAwLjMpLFxuICAgICAgJHsocHJvcHMpID0+XG4gICAgICAgIHByb3BzLmlzTmlnaHQgPyBOSUdIVF9CQUNLR1JPVU5EX0NPTE9SIDogREFZX0JBQ0tHUk9VTkRfQ09MT1J9XG4gICAgKTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG5gXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbaXNOaWdodCwgc2V0aXNOaWdodF0gPSB1c2VTdGF0ZSh0cnVlKVxuICBjb25zdCB0b2dnbGVEYXlOaWdodCA9ICgpID0+IHtcbiAgICBzZXRpc05pZ2h0KCFpc05pZ2h0KVxuICB9XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBpc05pZ2h0PXtpc05pZ2h0fT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic3dpdGNoXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgY2hlY2tlZD17aXNOaWdodH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0b2dnbGVEYXlOaWdodCgpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGVyIHJvdW5kXCI+PC9zcGFuPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWhlYWRlclwiPuyViOuFle2VmOyEuOyalCDsnbTssKztmLjsnoXri4jri6Q8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+7ZSE66Gg7Yq47JeU65OcIOqwnOuwnOyekOyeheuLiOuLpC48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XG4gICAgICAgICAgUmVhY3RKc+yZgCBuZXh0SnPrpbwg7J207Jqp7ZWcIO2OmOydtOyngOyeheuLiOuLpC4gbmV4dOynhOynnCDstZzqs6DrhKTsmpQuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cbiAgICAgICAgICByZWFjdOyTsOyLnOuKlOu2hOuTpOydgCDrrLTsobDqsbQgbmV4dCDsk7DripTqsbgg7LaU7LKc7ZWp64uI64ukLlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+7JWE656YIOyCrOynhOydgCDsoJwg7ZSE66Gc7ZWE6rO8IOq0gOugqCDsl4bsirXri4jri6QuPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLXdyYXBwZXJcIj5cbiAgICAgICAgICA8UmVmbGVjdEltYWdlIGltYWdlPXtJTUFHRV9TT1VSQ0V9IGlzTmlnaHQ9e2lzTmlnaHR9PjwvUmVmbGVjdEltYWdlPlxuICAgICAgICAgIDxSZWZsZWN0SW1hZ2UgaW1hZ2U9e2xvdmVNb25kYXkxfSBpc05pZ2h0PXtpc05pZ2h0fT48L1JlZmxlY3RJbWFnZT5cbiAgICAgICAgICA8UmVmbGVjdEltYWdlIGltYWdlPXtsb3ZlTW9uZGF5Mn0gaXNOaWdodD17aXNOaWdodH0+PC9SZWZsZWN0SW1hZ2U+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/hello-world/index.tsx\n");

/***/ })

})