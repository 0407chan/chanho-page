webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/common/Header.tsx":
/*!**************************************!*\
  !*** ./components/common/Header.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _DayNightCheckBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DayNightCheckBox */ \"./components/DayNightCheckBox.tsx\");\n\n\nvar _jsxFileName = \"/Users/chanho/Desktop/chris/chanho-page/components/common/Header.tsx\",\n    _this = undefined;\n\n\n\n\nvar NIGHT_BACKGROUND_COLOR = 'rgb(23, 24, 41)';\nvar DAY_BACKGROUND_COLOR = 'rgb(244, 235, 225)';\nvar Container = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Header__Container\",\n  componentId: \"sc-4lz10c-0\"\n})([\"display:flex;width:100%;height:100%;transition:background-color 200ms ease;background-color:\", \";.router{margin:0px 10px;color:\", \";}\"], function (props) {\n  return props.isNight ? NIGHT_BACKGROUND_COLOR : DAY_BACKGROUND_COLOR;\n}, function (props) {\n  return props.isNight ? '#ffffff' : NIGHT_BACKGROUND_COLOR;\n});\n_c = Container;\n\nvar Header = function Header(_ref) {\n  var isNight = _ref.isNight,\n      toggleDayNight = _ref.toggleDayNight;\n  console.log('무엇이니?', isNight);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n    isNight: isNight,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      href: \"/\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"router\",\n        children: \"Home\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      href: \"/portfolio\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"router\",\n        children: \"Portfolio\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_DayNightCheckBox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      isNight: isNight,\n      toggleDayNight: toggleDayNight\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vSGVhZGVyLnRzeD83YWE0Il0sIm5hbWVzIjpbIk5JR0hUX0JBQ0tHUk9VTkRfQ09MT1IiLCJEQVlfQkFDS0dST1VORF9DT0xPUiIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwiaXNOaWdodCIsIkhlYWRlciIsInRvZ2dsZURheU5pZ2h0IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsc0JBQXNCLEdBQUcsaUJBQS9CO0FBQ0EsSUFBTUMsb0JBQW9CLEdBQUcsb0JBQTdCO0FBS0EsSUFBTUMsU0FBUyxnQkFBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw4SUFLTyxVQUFDQyxLQUFEO0FBQUEsU0FDbEJBLEtBQUssQ0FBQ0MsT0FBTixHQUFnQk4sc0JBQWhCLEdBQXlDQyxvQkFEdkI7QUFBQSxDQUxQLEVBVUYsVUFBQ0ksS0FBRDtBQUFBLFNBQVlBLEtBQUssQ0FBQ0MsT0FBTixHQUFnQixTQUFoQixHQUE0Qk4sc0JBQXhDO0FBQUEsQ0FWRSxDQUFmO0tBQU1FLFM7O0FBbUJOLElBQU1LLE1BQXVCLEdBQUcsU0FBMUJBLE1BQTBCLE9BQXdDO0FBQUEsTUFBckNELE9BQXFDLFFBQXJDQSxPQUFxQztBQUFBLE1BQTVCRSxjQUE0QixRQUE1QkEsY0FBNEI7QUFDdEVDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJKLE9BQXJCO0FBQ0Esc0JBQ0UscUVBQUMsU0FBRDtBQUFXLFdBQU8sRUFBRUEsT0FBcEI7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxHQUFYO0FBQUEsNkJBQ0U7QUFBTSxpQkFBUyxFQUFDLFFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUUscUVBQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsWUFBWDtBQUFBLDZCQUNFO0FBQU0saUJBQVMsRUFBQyxRQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRixlQVFFLHFFQUFDLHlEQUFEO0FBQ0UsYUFBTyxFQUFFQSxPQURYO0FBRUUsb0JBQWMsRUFBRUU7QUFGbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZUQsQ0FqQkQ7O01BQU1ELE07QUFtQlNBLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jb21tb24vSGVhZGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgRGF5TmlnaHRDaGVja0JveCBmcm9tICcuLi9EYXlOaWdodENoZWNrQm94J1xuXG5jb25zdCBOSUdIVF9CQUNLR1JPVU5EX0NPTE9SID0gJ3JnYigyMywgMjQsIDQxKSdcbmNvbnN0IERBWV9CQUNLR1JPVU5EX0NPTE9SID0gJ3JnYigyNDQsIDIzNSwgMjI1KSdcblxudHlwZSBDb250YWluZXJQcm9wcyA9IHtcbiAgaXNOaWdodDogYm9vbGVhblxufVxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdjxDb250YWluZXJQcm9wcz5gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgZWFzZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+XG4gICAgcHJvcHMuaXNOaWdodCA/IE5JR0hUX0JBQ0tHUk9VTkRfQ09MT1IgOiBEQVlfQkFDS0dST1VORF9DT0xPUn07XG5cbiAgLnJvdXRlciB7XG4gICAgbWFyZ2luOiAwcHggMTBweDtcbiAgICBjb2xvcjogJHsocHJvcHMpID0+IChwcm9wcy5pc05pZ2h0ID8gJyNmZmZmZmYnIDogTklHSFRfQkFDS0dST1VORF9DT0xPUil9O1xuICB9XG5gXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGlzTmlnaHQ/OiBib29sZWFuXG4gIHRvZ2dsZURheU5pZ2h0OiAoKSA9PiB2b2lkXG59XG5cbmNvbnN0IEhlYWRlcjogUmVhY3QuRkM8UHJvcHM+ID0gKHsgaXNOaWdodCwgdG9nZ2xlRGF5TmlnaHQgfTogUHJvcHMpID0+IHtcbiAgY29uc29sZS5sb2coJ+ustOyXh+ydtOuLiD8nLCBpc05pZ2h0KVxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgaXNOaWdodD17aXNOaWdodH0+XG4gICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyb3V0ZXJcIj5Ib21lPC9zcGFuPlxuICAgICAgPC9MaW5rPlxuICAgICAgPExpbmsgaHJlZj1cIi9wb3J0Zm9saW9cIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicm91dGVyXCI+UG9ydGZvbGlvPC9zcGFuPlxuICAgICAgPC9MaW5rPlxuXG4gICAgICA8RGF5TmlnaHRDaGVja0JveFxuICAgICAgICBpc05pZ2h0PXtpc05pZ2h0fVxuICAgICAgICB0b2dnbGVEYXlOaWdodD17dG9nZ2xlRGF5TmlnaHR9XG4gICAgICA+PC9EYXlOaWdodENoZWNrQm94PlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/common/Header.tsx\n");

/***/ })

})