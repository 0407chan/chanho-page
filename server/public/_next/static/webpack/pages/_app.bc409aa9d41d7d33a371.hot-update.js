webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/Header */ \"./components/common/Header.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _jsxFileName = \"/Users/chanho/Desktop/chris/chanho-page/components/Layout.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar IMAGE_SOURCE = \"/image/godchanho.gif\";\nvar loveMonday1 = \"/image/love-monday.png\";\nvar loveMonday2 = \"/image/love-monday2.png\";\nvar NIGHT_BACKGROUND_COLOR = 'rgb(23, 24, 41)';\nvar DAY_BACKGROUND_COLOR = 'rgb(244, 235, 225)';\nvar Container = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"Layout__Container\",\n  componentId: \"wc0be1-0\"\n})([\"display:flex;width:100vw;height:100vh;padding:20px;flex-direction:column;align-items:center;transition:background-color 200ms ease;background-color:\", \";.header{display:flex;width:100%;justify-content:center;align-items:center;min-height:62px;}.body{display:flex;flex-direction:column;justify-content:center;align-items:center;padding-bottom:60px;width:100%;height:100%;.text-header{margin:20px 0px;font-size:30px;transition:color 200ms ease;color:\", \";}.text{margin:10px 0px;font-size:15px;transition:color 200ms ease;color:\", \";}.img-wrapper{display:flex;flex-direction:row;justify-content:center;margin:20px 0px;width:100%;}}\"], function (props) {\n  return props.isNight ? NIGHT_BACKGROUND_COLOR : DAY_BACKGROUND_COLOR;\n}, function (props) {\n  return props.isNight ? '#ffffff' : NIGHT_BACKGROUND_COLOR;\n}, function (props) {\n  return props.isNight ? '#ffffff' : NIGHT_BACKGROUND_COLOR;\n});\n_c = Container;\n\nvar Layout = function Layout(_ref) {\n  _s();\n\n  var children = _ref.children,\n      _ref$title = _ref.title,\n      title = _ref$title === void 0 ? 'ChrisPage' : _ref$title;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      isNight = _useState[0],\n      setIsNight = _useState[1];\n\n  var toggleDayNight = function toggleDayNight() {\n    setIsNight(!isNight);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n    isNight: isNight,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"layout\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n          children: \"title\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n          rel: \"icon\",\n          href: \"/favicon.ico\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"header\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_common_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          isNight: isNight,\n          toggleDayNight: toggleDayNight\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"body\",\n        children: children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 77,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Layout, \"D+yL71t0yW7l5g7T/ncGuW4HR9U=\");\n\n_c2 = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQudHN4PzZhOTMiXSwibmFtZXMiOlsiSU1BR0VfU09VUkNFIiwibG92ZU1vbmRheTEiLCJsb3ZlTW9uZGF5MiIsIk5JR0hUX0JBQ0tHUk9VTkRfQ09MT1IiLCJEQVlfQkFDS0dST1VORF9DT0xPUiIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwiaXNOaWdodCIsIkxheW91dCIsImNoaWxkcmVuIiwidGl0bGUiLCJ1c2VTdGF0ZSIsInNldElzTmlnaHQiLCJ0b2dnbGVEYXlOaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLHlCQUFsQjtBQUNBLElBQU1DLFdBQVcsMkJBQWpCO0FBQ0EsSUFBTUMsV0FBVyw0QkFBakI7QUFDQSxJQUFNQyxzQkFBc0IsR0FBRyxpQkFBL0I7QUFDQSxJQUFNQyxvQkFBb0IsR0FBRyxvQkFBN0I7QUFLQSxJQUFNQyxTQUFTLGdCQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDZuQkFTTyxVQUFDQyxLQUFEO0FBQUEsU0FDbEJBLEtBQUssQ0FBQ0MsT0FBTixHQUFnQk4sc0JBQWhCLEdBQXlDQyxvQkFEdkI7QUFBQSxDQVRQLEVBZ0NBLFVBQUNJLEtBQUQ7QUFBQSxTQUFZQSxLQUFLLENBQUNDLE9BQU4sR0FBZ0IsU0FBaEIsR0FBNEJOLHNCQUF4QztBQUFBLENBaENBLEVBc0NBLFVBQUNLLEtBQUQ7QUFBQSxTQUFZQSxLQUFLLENBQUNDLE9BQU4sR0FBZ0IsU0FBaEIsR0FBNEJOLHNCQUF4QztBQUFBLENBdENBLENBQWY7S0FBTUUsUzs7QUF1RE4sSUFBTUssTUFBZ0IsR0FBRyxTQUFuQkEsTUFBbUIsT0FBOEM7QUFBQTs7QUFBQSxNQUEzQ0MsUUFBMkMsUUFBM0NBLFFBQTJDO0FBQUEsd0JBQWpDQyxLQUFpQztBQUFBLE1BQWpDQSxLQUFpQywyQkFBekIsV0FBeUI7O0FBQUEsa0JBQ3ZDQyxzREFBUSxDQUFDLElBQUQsQ0FEK0I7QUFBQSxNQUM5REosT0FEOEQ7QUFBQSxNQUNyREssVUFEcUQ7O0FBRXJFLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQkQsY0FBVSxDQUFDLENBQUNMLE9BQUYsQ0FBVjtBQUNELEdBRkQ7O0FBSUEsc0JBQ0UscUVBQUMsU0FBRDtBQUFXLFdBQU8sRUFBRUEsT0FBcEI7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQUEsOEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQU0sYUFBRyxFQUFDLE1BQVY7QUFBaUIsY0FBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFLRTtBQUFLLGlCQUFTLEVBQUMsUUFBZjtBQUFBLCtCQUNFLHFFQUFDLHNEQUFEO0FBQVEsaUJBQU8sRUFBRUEsT0FBakI7QUFBMEIsd0JBQWMsRUFBRU07QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRixlQVFFO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUEsa0JBQXVCSjtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBY0QsQ0FwQkQ7O0dBQU1ELE07O01BQUFBLE07QUFzQlNBLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9MYXlvdXQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21tb24vSGVhZGVyJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuY29uc3QgSU1BR0VfU09VUkNFID0gYC9pbWFnZS9nb2RjaGFuaG8uZ2lmYFxuY29uc3QgbG92ZU1vbmRheTEgPSBgL2ltYWdlL2xvdmUtbW9uZGF5LnBuZ2BcbmNvbnN0IGxvdmVNb25kYXkyID0gYC9pbWFnZS9sb3ZlLW1vbmRheTIucG5nYFxuY29uc3QgTklHSFRfQkFDS0dST1VORF9DT0xPUiA9ICdyZ2IoMjMsIDI0LCA0MSknXG5jb25zdCBEQVlfQkFDS0dST1VORF9DT0xPUiA9ICdyZ2IoMjQ0LCAyMzUsIDIyNSknXG5cbnR5cGUgQ29udGFpbmVyUHJvcHMgPSB7XG4gIGlzTmlnaHQ6IGJvb2xlYW5cbn1cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXY8Q29udGFpbmVyUHJvcHM+YFxuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBlYXNlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT5cbiAgICBwcm9wcy5pc05pZ2h0ID8gTklHSFRfQkFDS0dST1VORF9DT0xPUiA6IERBWV9CQUNLR1JPVU5EX0NPTE9SfTtcblxuICAuaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogNjJweDtcbiAgfVxuXG4gIC5ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLnRleHQtaGVhZGVyIHtcbiAgICAgIG1hcmdpbjogMjBweCAwcHg7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcyBlYXNlO1xuICAgICAgY29sb3I6ICR7KHByb3BzKSA9PiAocHJvcHMuaXNOaWdodCA/ICcjZmZmZmZmJyA6IE5JR0hUX0JBQ0tHUk9VTkRfQ09MT1IpfTtcbiAgICB9XG4gICAgLnRleHQge1xuICAgICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zIGVhc2U7XG4gICAgICBjb2xvcjogJHsocHJvcHMpID0+IChwcm9wcy5pc05pZ2h0ID8gJyNmZmZmZmYnIDogTklHSFRfQkFDS0dST1VORF9DT0xPUil9O1xuICAgIH1cblxuICAgIC5pbWctd3JhcHBlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgbWFyZ2luOiAyMHB4IDBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuYFxuXG50eXBlIFByb3BzID0ge1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZVxuICB0aXRsZT86IHN0cmluZ1xufVxuY29uc3QgTGF5b3V0OiBSZWFjdC5GQyA9ICh7IGNoaWxkcmVuLCB0aXRsZSA9ICdDaHJpc1BhZ2UnIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IFtpc05pZ2h0LCBzZXRJc05pZ2h0XSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IHRvZ2dsZURheU5pZ2h0ID0gKCkgPT4ge1xuICAgIHNldElzTmlnaHQoIWlzTmlnaHQpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgaXNOaWdodD17aXNOaWdodH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheW91dFwiPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+dGl0bGU8L3RpdGxlPlxuICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgIDxIZWFkZXIgaXNOaWdodD17aXNOaWdodH0gdG9nZ2xlRGF5TmlnaHQ9e3RvZ2dsZURheU5pZ2h0fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.tsx\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
false

})