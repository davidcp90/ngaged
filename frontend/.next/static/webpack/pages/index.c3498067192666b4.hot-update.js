"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/home/features.tsx":
/*!**************************************!*\
  !*** ./components/home/features.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_featuresHome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/featuresHome */ \"./data/featuresHome.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/esm/index.js\");\n/* harmony import */ var _features_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features.module.css */ \"./components/home/features.module.css\");\n/* harmony import */ var _features_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_features_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar _this = undefined;\nvar Features = function() {\n    var _this1 = _this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Spacer, {}, void 0, false, {\n                fileName: \"/Users/davidcamargo/vpProjects/ngaged/frontend/components/home/features.tsx\",\n                lineNumber: 8,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Spacer, {}, void 0, false, {\n                fileName: \"/Users/davidcamargo/vpProjects/ngaged/frontend/components/home/features.tsx\",\n                lineNumber: 8,\n                columnNumber: 14\n            }, _this),\n            _data_featuresHome__WEBPACK_IMPORTED_MODULE_1__[\"default\"].map(function(feature, index) {\n                var _this2 = _this1;\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Grid.Container, {\n                            gap: 1,\n                            justify: \"center\",\n                            alignItems: \"center\",\n                            direction: feature.layout,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Grid, {\n                                    xs: 8,\n                                    sm: 4,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: feature.image,\n                                        alt: feature.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/davidcamargo/vpProjects/ngaged/frontend/components/home/features.tsx\",\n                                        lineNumber: 19,\n                                        columnNumber: 15\n                                    }, _this1)\n                                }, void 0, false, {\n                                    fileName: \"/Users/davidcamargo/vpProjects/ngaged/frontend/components/home/features.tsx\",\n                                    lineNumber: 18,\n                                    columnNumber: 13\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Grid, {\n                                    xs: 10,\n                                    sm: 4,\n                                    direction: \"column\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                            h3: true,\n                                            size: \"2rem\",\n                                            weight: \"bold\",\n                                            className: (_features_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                                            css: {\n                                                textGradient: \"45deg, #fa222a -10%, #38acfe 70%\"\n                                            },\n                                            children: feature.title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/davidcamargo/vpProjects/ngaged/frontend/components/home/features.tsx\",\n                                            lineNumber: 22,\n                                            columnNumber: 15\n                                        }, _this1),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                            children: feature.description.map(function(desc, index) {\n                                                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                    className: (_features_module_css__WEBPACK_IMPORTED_MODULE_4___default().listItem),\n                                                    children: desc\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/davidcamargo/vpProjects/ngaged/frontend/components/home/features.tsx\",\n                                                    lineNumber: 35,\n                                                    columnNumber: 26\n                                                }, _this2));\n                                            })\n                                        }, void 0, false, {\n                                            fileName: \"/Users/davidcamargo/vpProjects/ngaged/frontend/components/home/features.tsx\",\n                                            lineNumber: 33,\n                                            columnNumber: 15\n                                        }, _this1)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/davidcamargo/vpProjects/ngaged/frontend/components/home/features.tsx\",\n                                    lineNumber: 21,\n                                    columnNumber: 13\n                                }, _this1)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/davidcamargo/vpProjects/ngaged/frontend/components/home/features.tsx\",\n                            lineNumber: 12,\n                            columnNumber: 11\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Spacer, {}, void 0, false, {\n                            fileName: \"/Users/davidcamargo/vpProjects/ngaged/frontend/components/home/features.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 23\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Spacer, {}, void 0, false, {\n                            fileName: \"/Users/davidcamargo/vpProjects/ngaged/frontend/components/home/features.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, _this1)\n                    ]\n                }, void 0, true));\n            })\n        ]\n    }, void 0, true));\n};\n_c = Features;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Features);\nvar _c;\n$RefreshReg$(_c, \"Features\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvbWUvZmVhdHVyZXMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBa0Q7QUFDcEI7QUFDd0I7QUFDVDs7QUFDN0MsR0FBSyxDQUFDTSxRQUFRLEdBQUcsUUFDakIsR0FEdUIsQ0FBQzs7SUFDdEIsTUFBTTs7d0ZBRUhGLHFEQUFNOzs7Ozt3RkFBR0EscURBQU07Ozs7O1lBQ2JKLDhEQUFnQixDQUFDLFFBQVEsQ0FBUFEsT0FBTyxFQUFFQyxLQUFLLEVBQUssQ0FBQzs7Z0JBQ3JDLE1BQU07O29HQUVIUCw2REFBYzs0QkFDYlMsR0FBRyxFQUFFLENBQUM7NEJBQ05DLE9BQU8sRUFBQyxDQUFROzRCQUNoQkMsVUFBVSxFQUFDLENBQVE7NEJBQ25CQyxTQUFTLEVBQUVOLE9BQU8sQ0FBQ08sTUFBTTs7NEdBRXhCYixtREFBSTtvQ0FBQ2MsRUFBRSxFQUFFLENBQUM7b0NBQUVDLEVBQUUsRUFBRSxDQUFDOzBIQUNmaEIsbURBQUs7d0NBQUNpQixHQUFHLEVBQUVWLE9BQU8sQ0FBQ1csS0FBSzt3Q0FBRUMsR0FBRyxFQUFFWixPQUFPLENBQUNhLEtBQUs7Ozs7Ozs7Ozs7OzRHQUU5Q25CLG1EQUFJO29DQUFDYyxFQUFFLEVBQUUsRUFBRTtvQ0FBRUMsRUFBRSxFQUFFLENBQUM7b0NBQUVILFNBQVMsRUFBQyxDQUFROztvSEFDcENYLG1EQUFJOzRDQUNIbUIsRUFBRTs0Q0FDRkMsSUFBSSxFQUFDLENBQU07NENBQ1hDLE1BQU0sRUFBQyxDQUFNOzRDQUNiQyxTQUFTLEVBQUVwQixtRUFBZTs0Q0FDMUJxQixHQUFHLEVBQUUsQ0FBQztnREFDSkMsWUFBWSxFQUFFLENBQWtDOzRDQUNsRCxDQUFDO3NEQUVBbkIsT0FBTyxDQUFDYSxLQUFLOzs7Ozs7b0hBRWZPLENBQUU7c0RBQ0FwQixPQUFPLENBQUNxQixXQUFXLENBQUN0QixHQUFHLENBQUMsUUFBUSxDQUFQdUIsSUFBSSxFQUFFckIsS0FBSyxFQUFLLENBQUM7Z0RBQ3pDLE1BQU0sNkVBQUVzQixDQUFFO29EQUFDTixTQUFTLEVBQUVwQixzRUFBa0I7OERBQUd5QixJQUFJOzs7Ozs7NENBQ2pELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztvR0FLTTFCLHFEQUFNOzs7OztvR0FDaEJBLHFEQUFNOzs7Ozs7O1lBR1gsQ0FBQzs7O0FBSVQsQ0FBQztLQTVDS0UsUUFBUTtBQTZDZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaG9tZS9mZWF0dXJlcy50c3g/ZWVlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmVhdHVyZXNIb21lIGZyb20gXCIuLi8uLi9kYXRhL2ZlYXR1cmVzSG9tZVwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBHcmlkLCBUZXh0LCBTcGFjZXIgfSBmcm9tIFwiQG5leHR1aS1vcmcvcmVhY3RcIjtcbmltcG9ydCBmZWF0U3R5bGUgZnJvbSBcIi4vZmVhdHVyZXMubW9kdWxlLmNzc1wiO1xuY29uc3QgRmVhdHVyZXMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8U3BhY2VyLz48U3BhY2VyLz5cbiAgICAgIHtmZWF0dXJlc0hvbWUubWFwKChmZWF0dXJlLCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgPEdyaWQuQ29udGFpbmVyXG4gICAgICAgICAgICBnYXA9ezF9XG4gICAgICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcbiAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgZGlyZWN0aW9uPXtmZWF0dXJlLmxheW91dH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8R3JpZCB4cz17OH0gc209ezR9PlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtmZWF0dXJlLmltYWdlfSBhbHQ9e2ZlYXR1cmUudGl0bGV9IC8+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8R3JpZCB4cz17MTB9IHNtPXs0fSBkaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICBoM1xuICAgICAgICAgICAgICAgIHNpemU9XCIycmVtXCJcbiAgICAgICAgICAgICAgICB3ZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2ZlYXRTdHlsZS50aXRsZX1cbiAgICAgICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgICAgIHRleHRHcmFkaWVudDogXCI0NWRlZywgI2ZhMjIyYSAtMTAlLCAjMzhhY2ZlIDcwJVwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7ZmVhdHVyZS50aXRsZX1cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge2ZlYXR1cmUuZGVzY3JpcHRpb24ubWFwKChkZXNjLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBjbGFzc05hbWU9e2ZlYXRTdHlsZS5saXN0SXRlbX0+e2Rlc2N9PC9saT47XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgICA8L0dyaWQuQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgIDxTcGFjZXIgLz5cbiAgICAgICAgICAgIDxTcGFjZXIgLz5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIFxuICAgIDwvPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVzO1xuIl0sIm5hbWVzIjpbImZlYXR1cmVzSG9tZSIsIkltYWdlIiwiR3JpZCIsIlRleHQiLCJTcGFjZXIiLCJmZWF0U3R5bGUiLCJGZWF0dXJlcyIsIm1hcCIsImZlYXR1cmUiLCJpbmRleCIsIkNvbnRhaW5lciIsImdhcCIsImp1c3RpZnkiLCJhbGlnbkl0ZW1zIiwiZGlyZWN0aW9uIiwibGF5b3V0IiwieHMiLCJzbSIsInNyYyIsImltYWdlIiwiYWx0IiwidGl0bGUiLCJoMyIsInNpemUiLCJ3ZWlnaHQiLCJjbGFzc05hbWUiLCJjc3MiLCJ0ZXh0R3JhZGllbnQiLCJ1bCIsImRlc2NyaXB0aW9uIiwiZGVzYyIsImxpIiwibGlzdEl0ZW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/home/features.tsx\n");

/***/ })

});