webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _jsxFileName = \"/Users/chanho/Desktop/chris/hello-world/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nvar IMAGE_SOURCE = \"/image/godchanho.gif\";\nvar loveMonday1 = \"/image/love-monday.png\";\nvar loveMonday2 = \"/image/love-monday2.png\";\nvar NIGHT_BACKGROUND_COLOR = 'rgb(23, 24, 41)';\nvar DAY_BACKGROUND_COLOR = 'rgb(219, 221, 254)';\nvar Container = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"pages__Container\",\n  componentId: \"sc-11278rz-0\"\n})([\"display:flex;width:100vw;height:100vh;padding:20px;flex-direction:column;align-items:center;transition:background-color 200ms ease;background-color:\", \";.header{display:flex;justify-content:flex-end;align-items:center;padding:20px;width:100%;min-height:60px;.switch{position:relative;display:inline-block;width:60px;height:30px;}.switch input{opacity:0;width:0;height:0;}.slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#808080;-webkit-transition:0.4s;transition:0.4s;}.slider:before{position:absolute;content:'';height:24px;width:24px;left:5px;bottom:3px;background-color:white;-webkit-transition:0.4s;transition:0.4s;}input:checked + .slider{background-color:#2196f3;}input:focus + .slider{box-shadow:0 0 1px #2196f3;}input:checked + .slider:before{-webkit-transform:translateX(26px);-ms-transform:translateX(26px);transform:translateX(26px);}.slider.round{border-radius:34px;}.slider.round:before{border-radius:50%;}}.body{display:flex;flex-direction:column;justify-content:center;align-items:center;padding-bottom:60px;width:100%;height:100%;.text-header{margin:20px 0px;font-size:30px;transition:color 200ms ease;color:\", \";}.text{margin:10px 0px;font-size:15px;transition:color 200ms ease;color:\", \";}.img-wrapper{display:flex;flex-direction:row;justify-content:center;margin:20px 0px;width:100%;}}\"], function (props) {\n  return props.isNight ? NIGHT_BACKGROUND_COLOR : DAY_BACKGROUND_COLOR;\n}, function (props) {\n  return props.isNight ? '#ffffff' : NIGHT_BACKGROUND_COLOR;\n}, function (props) {\n  return props.isNight ? '#ffffff' : NIGHT_BACKGROUND_COLOR;\n});\n_c = Container;\nvar ReflectImage = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"pages__ReflectImage\",\n  componentId: \"sc-11278rz-1\"\n})([\"display:flex;margin:0px 20px;border-radius:10px;box-shadow:0px 2px 16px rgba(0,0,0,0.8),0px 2px 8px rgba(255,255,255,0.5);background-image:url('\", \"');background-size:cover;background-repeat:no-repeat;width:200px;height:200px;position:relative;transition:transform 200ms ease,box-shadow 200ms ease;&:hover{transform:scale(1.03);box-shadow:0px 2px 16px rgba(0,0,0,0.8),0px 2px 16px rgba(255,255,255,0.7);}&::after{content:'';background-image:inherit;width:100%;height:40%;background-size:100%;background-repeat:no-repeat;position:absolute;bottom:-60%;transform:scaleY(-1);background-position:bottom;}&::before{content:'';width:100%;height:40%;position:absolute;bottom:-60%;background:linear-gradient( to bottom,rgba(23,24,41,0.3),\", \" );z-index:1;}\"], function (props) {\n  return props.image;\n}, function (props) {\n  return props.isNight ? NIGHT_BACKGROUND_COLOR : DAY_BACKGROUND_COLOR;\n});\n_c2 = ReflectImage;\nfunction Home() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true),\n      isNight = _useState[0],\n      setisNight = _useState[1];\n\n  var toggleDayNight = function toggleDayNight() {\n    setisNight(!isNight);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n    isNight: isNight,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Create Next App\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 188,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 189,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 187,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"header\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        className: \"switch\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"checkbox\",\n          checked: isNight,\n          onChange: function onChange() {\n            return toggleDayNight();\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 194,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          className: \"slider round\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 199,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 193,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 192,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"body\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"text-header\",\n        children: \"\\uC548\\uB155\\uD558\\uC138\\uC694 \\uC774\\uCC2C\\uD638\\uC785\\uB2C8\\uB2E4\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 203,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"text\",\n        children: \"\\uD504\\uB860\\uD2B8\\uC5D4\\uB4DC \\uAC1C\\uBC1C\\uC790\\uC785\\uB2C8\\uB2E4.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 204,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"text\",\n        children: \"ReactJs\\uC640 nextJs\\uB97C \\uC774\\uC6A9\\uD55C \\uD398\\uC774\\uC9C0\\uC785\\uB2C8\\uB2E4. next\\uC9C4\\uC9DC \\uCD5C\\uACE0\\uB124\\uC694.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 205,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"text\",\n        children: \"react\\uC4F0\\uC2DC\\uB294\\uBD84\\uB4E4\\uC740 \\uBB34\\uC870\\uAC74 next \\uC4F0\\uB294\\uAC78 \\uCD94\\uCC9C\\uD569\\uB2C8\\uB2E4.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 208,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"text\",\n        children: \"\\uC544\\uB798 \\uC0AC\\uC9C4\\uC740 \\uC81C \\uD504\\uB85C\\uD544\\uACFC \\uAD00\\uB828 \\uC5C6\\uC2B5\\uB2C8\\uB2E4.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 211,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"img-wrapper\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ReflectImage, {\n          image: IMAGE_SOURCE,\n          isNight: isNight\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 213,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ReflectImage, {\n          image: loveMonday1,\n          isNight: isNight\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 214,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ReflectImage, {\n          image: loveMonday2,\n          isNight: isNight\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 215,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 212,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 202,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 186,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"I4+gbXVhV4I3cNErRh1WNpNRjZQ=\");\n\n_c3 = Home;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"ReflectImage\");\n$RefreshReg$(_c3, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSU1BR0VfU09VUkNFIiwibG92ZU1vbmRheTEiLCJsb3ZlTW9uZGF5MiIsIk5JR0hUX0JBQ0tHUk9VTkRfQ09MT1IiLCJEQVlfQkFDS0dST1VORF9DT0xPUiIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwiaXNOaWdodCIsIlJlZmxlY3RJbWFnZSIsImltYWdlIiwiSG9tZSIsInVzZVN0YXRlIiwic2V0aXNOaWdodCIsInRvZ2dsZURheU5pZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQTtBQUVBLElBQU1BLFlBQVkseUJBQWxCO0FBQ0EsSUFBTUMsV0FBVywyQkFBakI7QUFDQSxJQUFNQyxXQUFXLDRCQUFqQjtBQUNBLElBQU1DLHNCQUFzQixHQUFHLGlCQUEvQjtBQUNBLElBQU1DLG9CQUFvQixHQUFHLG9CQUE3QjtBQUtBLElBQU1DLFNBQVMsZ0JBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsdzBDQVNPLFVBQUNDLEtBQUQ7QUFBQSxTQUNsQkEsS0FBSyxDQUFDQyxPQUFOLEdBQWdCTixzQkFBaEIsR0FBeUNDLG9CQUR2QjtBQUFBLENBVFAsRUE2RkEsVUFBQ0ksS0FBRDtBQUFBLFNBQVlBLEtBQUssQ0FBQ0MsT0FBTixHQUFnQixTQUFoQixHQUE0Qk4sc0JBQXhDO0FBQUEsQ0E3RkEsRUFtR0EsVUFBQ0ssS0FBRDtBQUFBLFNBQVlBLEtBQUssQ0FBQ0MsT0FBTixHQUFnQixTQUFoQixHQUE0Qk4sc0JBQXhDO0FBQUEsQ0FuR0EsQ0FBZjtLQUFNRSxTO0FBb0hOLElBQU1LLFlBQVksZ0JBQUdKLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsb3ZCQU1TLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNHLEtBQWpCO0FBQUEsQ0FOVCxFQXlDVixVQUFDSCxLQUFEO0FBQUEsU0FDQUEsS0FBSyxDQUFDQyxPQUFOLEdBQWdCTixzQkFBaEIsR0FBeUNDLG9CQUR6QztBQUFBLENBekNVLENBQWxCO01BQU1NLFk7QUErQ1MsU0FBU0UsSUFBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUNDQyxzREFBUSxDQUFDLElBQUQsQ0FEVDtBQUFBLE1BQ3RCSixPQURzQjtBQUFBLE1BQ2JLLFVBRGE7O0FBRTdCLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQkQsY0FBVSxDQUFDLENBQUNMLE9BQUYsQ0FBVjtBQUNELEdBRkQ7O0FBSUEsc0JBQ0UscUVBQUMsU0FBRDtBQUFXLFdBQU8sRUFBRUEsT0FBcEI7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFNRTtBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQUEsNkJBQ0U7QUFBTyxpQkFBUyxFQUFDLFFBQWpCO0FBQUEsZ0NBQ0U7QUFDRSxjQUFJLEVBQUMsVUFEUDtBQUVFLGlCQUFPLEVBQUVBLE9BRlg7QUFHRSxrQkFBUSxFQUFFO0FBQUEsbUJBQU1NLGNBQWMsRUFBcEI7QUFBQTtBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFNRTtBQUFNLG1CQUFTLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsZUFnQkU7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0U7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixlQU1FO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkYsZUFTRTtBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGLGVBVUU7QUFBSyxpQkFBUyxFQUFDLGFBQWY7QUFBQSxnQ0FDRSxxRUFBQyxZQUFEO0FBQWMsZUFBSyxFQUFFZixZQUFyQjtBQUFtQyxpQkFBTyxFQUFFUztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUUscUVBQUMsWUFBRDtBQUFjLGVBQUssRUFBRVIsV0FBckI7QUFBa0MsaUJBQU8sRUFBRVE7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQUdFLHFFQUFDLFlBQUQ7QUFBYyxlQUFLLEVBQUVQLFdBQXJCO0FBQWtDLGlCQUFPLEVBQUVPO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUNEOztHQXpDdUJHLEk7O01BQUFBLEkiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmNvbnN0IElNQUdFX1NPVVJDRSA9IGAvaW1hZ2UvZ29kY2hhbmhvLmdpZmBcbmNvbnN0IGxvdmVNb25kYXkxID0gYC9pbWFnZS9sb3ZlLW1vbmRheS5wbmdgXG5jb25zdCBsb3ZlTW9uZGF5MiA9IGAvaW1hZ2UvbG92ZS1tb25kYXkyLnBuZ2BcbmNvbnN0IE5JR0hUX0JBQ0tHUk9VTkRfQ09MT1IgPSAncmdiKDIzLCAyNCwgNDEpJ1xuY29uc3QgREFZX0JBQ0tHUk9VTkRfQ09MT1IgPSAncmdiKDIxOSwgMjIxLCAyNTQpJ1xuXG50eXBlIENvbnRhaW5lclByb3BzID0ge1xuICBpc05pZ2h0OiBib29sZWFuXG59XG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2PENvbnRhaW5lclByb3BzPmBcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiAyMHB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgZWFzZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+XG4gICAgcHJvcHMuaXNOaWdodCA/IE5JR0hUX0JBQ0tHUk9VTkRfQ09MT1IgOiBEQVlfQkFDS0dST1VORF9DT0xPUn07XG5cbiAgLmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xuXG4gICAgLnN3aXRjaCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogNjBweDtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG5cbiAgICAuc3dpdGNoIGlucHV0IHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB3aWR0aDogMDtcbiAgICAgIGhlaWdodDogMDtcbiAgICB9XG5cbiAgICAuc2xpZGVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4MDgwODA7XG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XG4gICAgICB0cmFuc2l0aW9uOiAwLjRzO1xuICAgIH1cblxuICAgIC5zbGlkZXI6YmVmb3JlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICBsZWZ0OiA1cHg7XG4gICAgICBib3R0b206IDNweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICAgICAgdHJhbnNpdGlvbjogMC40cztcbiAgICB9XG5cbiAgICBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xuICAgIH1cblxuICAgIGlucHV0OmZvY3VzICsgLnNsaWRlciB7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2ZjM7XG4gICAgfVxuXG4gICAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgICB9XG5cbiAgICAvKiBSb3VuZGVkIHNsaWRlcnMgKi9cbiAgICAuc2xpZGVyLnJvdW5kIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XG4gICAgfVxuXG4gICAgLnNsaWRlci5yb3VuZDpiZWZvcmUge1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIH1cbiAgfVxuXG4gIC5ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLnRleHQtaGVhZGVyIHtcbiAgICAgIG1hcmdpbjogMjBweCAwcHg7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcyBlYXNlO1xuICAgICAgY29sb3I6ICR7KHByb3BzKSA9PiAocHJvcHMuaXNOaWdodCA/ICcjZmZmZmZmJyA6IE5JR0hUX0JBQ0tHUk9VTkRfQ09MT1IpfTtcbiAgICB9XG4gICAgLnRleHQge1xuICAgICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zIGVhc2U7XG4gICAgICBjb2xvcjogJHsocHJvcHMpID0+IChwcm9wcy5pc05pZ2h0ID8gJyNmZmZmZmYnIDogTklHSFRfQkFDS0dST1VORF9DT0xPUil9O1xuICAgIH1cblxuICAgIC5pbWctd3JhcHBlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgbWFyZ2luOiAyMHB4IDBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuYFxuXG50eXBlIFJlZmxlY3RJbWFnZVByb3BzID0ge1xuICBpbWFnZTogc3RyaW5nXG4gIGlzTmlnaHQ6IGJvb2xlYW5cbn1cbmNvbnN0IFJlZmxlY3RJbWFnZSA9IHN0eWxlZC5kaXY8UmVmbGVjdEltYWdlUHJvcHM+YFxuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDBweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwcHggMnB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjgpLFxuICAgIDBweCAycHggOHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCckeyhwcm9wcykgPT4gcHJvcHMuaW1hZ2V9Jyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMgZWFzZSwgYm94LXNoYWRvdyAyMDBtcyBlYXNlO1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC44KSxcbiAgICAgIDBweCAycHggMTZweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gIH1cbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGluaGVyaXQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MCU7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTYwJTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgtMSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xuICB9XG5cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtNjAlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIHRvIGJvdHRvbSxcbiAgICAgIHJnYmEoMjMsIDI0LCA0MSwgMC4zKSxcbiAgICAgICR7KHByb3BzKSA9PlxuICAgICAgICBwcm9wcy5pc05pZ2h0ID8gTklHSFRfQkFDS0dST1VORF9DT0xPUiA6IERBWV9CQUNLR1JPVU5EX0NPTE9SfVxuICAgICk7XG4gICAgei1pbmRleDogMTtcbiAgfVxuYFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2lzTmlnaHQsIHNldGlzTmlnaHRdID0gdXNlU3RhdGUodHJ1ZSlcbiAgY29uc3QgdG9nZ2xlRGF5TmlnaHQgPSAoKSA9PiB7XG4gICAgc2V0aXNOaWdodCghaXNOaWdodClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBpc05pZ2h0PXtpc05pZ2h0fT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic3dpdGNoXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgY2hlY2tlZD17aXNOaWdodH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0b2dnbGVEYXlOaWdodCgpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGVyIHJvdW5kXCI+PC9zcGFuPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWhlYWRlclwiPuyViOuFle2VmOyEuOyalCDsnbTssKztmLjsnoXri4jri6Q8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+7ZSE66Gg7Yq47JeU65OcIOqwnOuwnOyekOyeheuLiOuLpC48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XG4gICAgICAgICAgUmVhY3RKc+yZgCBuZXh0SnPrpbwg7J207Jqp7ZWcIO2OmOydtOyngOyeheuLiOuLpC4gbmV4dOynhOynnCDstZzqs6DrhKTsmpQuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cbiAgICAgICAgICByZWFjdOyTsOyLnOuKlOu2hOuTpOydgCDrrLTsobDqsbQgbmV4dCDsk7DripTqsbgg7LaU7LKc7ZWp64uI64ukLlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+7JWE656YIOyCrOynhOydgCDsoJwg7ZSE66Gc7ZWE6rO8IOq0gOugqCDsl4bsirXri4jri6QuPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLXdyYXBwZXJcIj5cbiAgICAgICAgICA8UmVmbGVjdEltYWdlIGltYWdlPXtJTUFHRV9TT1VSQ0V9IGlzTmlnaHQ9e2lzTmlnaHR9PjwvUmVmbGVjdEltYWdlPlxuICAgICAgICAgIDxSZWZsZWN0SW1hZ2UgaW1hZ2U9e2xvdmVNb25kYXkxfSBpc05pZ2h0PXtpc05pZ2h0fT48L1JlZmxlY3RJbWFnZT5cbiAgICAgICAgICA8UmVmbGVjdEltYWdlIGltYWdlPXtsb3ZlTW9uZGF5Mn0gaXNOaWdodD17aXNOaWdodH0+PC9SZWZsZWN0SW1hZ2U+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})