"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[hackathon]",{

/***/ "./components/hackathon/features.tsx":
/*!*******************************************!*\
  !*** ./components/hackathon/features.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_featuresHome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/featuresHome */ \"./data/featuresHome.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/esm/index.js\");\n/* harmony import */ var _features_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features.module.css */ \"./components/hackathon/features.module.css\");\n/* harmony import */ var _features_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_features_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar _this = undefined;\nvar Features = function() {\n    var _this1 = _this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Spacer, {}, void 0, false, {\n                fileName: \"/Users/davidcamargo/vpProjects/ngaged/frontend/components/hackathon/features.tsx\",\n                lineNumber: 8,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Spacer, {}, void 0, false, {\n                fileName: \"/Users/davidcamargo/vpProjects/ngaged/frontend/components/hackathon/features.tsx\",\n                lineNumber: 8,\n                columnNumber: 14\n            }, _this),\n            _data_featuresHome__WEBPACK_IMPORTED_MODULE_1__[\"default\"].map(function(feature, index) {\n                var _this2 = _this1;\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Grid.Container, {\n                            gap: 1,\n                            justify: \"center\",\n                            alignItems: \"center\",\n                            direction: feature.layout,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Grid, {\n                                    xs: 8,\n                                    sm: 4,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: feature.image,\n                                        alt: feature.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/davidcamargo/vpProjects/ngaged/frontend/components/hackathon/features.tsx\",\n                                        lineNumber: 19,\n                                        columnNumber: 15\n                                    }, _this1)\n                                }, void 0, false, {\n                                    fileName: \"/Users/davidcamargo/vpProjects/ngaged/frontend/components/hackathon/features.tsx\",\n                                    lineNumber: 18,\n                                    columnNumber: 13\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Grid, {\n                                    xs: 10,\n                                    sm: 4,\n                                    direction: \"column\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                            h3: true,\n                                            size: \"2rem\",\n                                            weight: \"bold\",\n                                            className: (_features_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                                            css: {\n                                                textGradient: \"45deg, #fa222a -10%, #38acfe 70%\"\n                                            },\n                                            children: feature.title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/davidcamargo/vpProjects/ngaged/frontend/components/hackathon/features.tsx\",\n                                            lineNumber: 22,\n                                            columnNumber: 15\n                                        }, _this1),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                            children: feature.description.map(function(desc, index) {\n                                                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                    className: (_features_module_css__WEBPACK_IMPORTED_MODULE_4___default().listItem),\n                                                    children: desc\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/davidcamargo/vpProjects/ngaged/frontend/components/hackathon/features.tsx\",\n                                                    lineNumber: 35,\n                                                    columnNumber: 26\n                                                }, _this2));\n                                            })\n                                        }, void 0, false, {\n                                            fileName: \"/Users/davidcamargo/vpProjects/ngaged/frontend/components/hackathon/features.tsx\",\n                                            lineNumber: 33,\n                                            columnNumber: 15\n                                        }, _this1)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/davidcamargo/vpProjects/ngaged/frontend/components/hackathon/features.tsx\",\n                                    lineNumber: 21,\n                                    columnNumber: 13\n                                }, _this1)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/davidcamargo/vpProjects/ngaged/frontend/components/hackathon/features.tsx\",\n                            lineNumber: 12,\n                            columnNumber: 11\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Spacer, {}, void 0, false, {\n                            fileName: \"/Users/davidcamargo/vpProjects/ngaged/frontend/components/hackathon/features.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 23\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Spacer, {}, void 0, false, {\n                            fileName: \"/Users/davidcamargo/vpProjects/ngaged/frontend/components/hackathon/features.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, _this1)\n                    ]\n                }, index, true, {\n                    fileName: \"/Users/davidcamargo/vpProjects/ngaged/frontend/components/hackathon/features.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 11\n                }, _this1));\n            })\n        ]\n    }, void 0, true));\n};\n_c = Features;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Features);\nvar _c;\n$RefreshReg$(_c, \"Features\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hhY2thdGhvbi9mZWF0dXJlcy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFrRDtBQUNwQjtBQUN3QjtBQUNUOztBQUM3QyxHQUFLLENBQUNNLFFBQVEsR0FBRyxRQUNqQixHQUR1QixDQUFDOztJQUN0QixNQUFNOzt3RkFFSEYscURBQU07Ozs7O3dGQUFHQSxxREFBTTs7Ozs7WUFDYkosOERBQWdCLENBQUMsUUFBUSxDQUFQUSxPQUFPLEVBQUVDLEtBQUssRUFBSyxDQUFDOztnQkFDckMsTUFBTSw2RUFDSEMsQ0FBRzs7b0dBQ0hSLDZEQUFjOzRCQUNiVSxHQUFHLEVBQUUsQ0FBQzs0QkFDTkMsT0FBTyxFQUFDLENBQVE7NEJBQ2hCQyxVQUFVLEVBQUMsQ0FBUTs0QkFDbkJDLFNBQVMsRUFBRVAsT0FBTyxDQUFDUSxNQUFNOzs0R0FFeEJkLG1EQUFJO29DQUFDZSxFQUFFLEVBQUUsQ0FBQztvQ0FBRUMsRUFBRSxFQUFFLENBQUM7MEhBQ2ZqQixtREFBSzt3Q0FBQ2tCLEdBQUcsRUFBRVgsT0FBTyxDQUFDWSxLQUFLO3dDQUFFQyxHQUFHLEVBQUViLE9BQU8sQ0FBQ2MsS0FBSzs7Ozs7Ozs7Ozs7NEdBRTlDcEIsbURBQUk7b0NBQUNlLEVBQUUsRUFBRSxFQUFFO29DQUFFQyxFQUFFLEVBQUUsQ0FBQztvQ0FBRUgsU0FBUyxFQUFDLENBQVE7O29IQUNwQ1osbURBQUk7NENBQ0hvQixFQUFFOzRDQUNGQyxJQUFJLEVBQUMsQ0FBTTs0Q0FDWEMsTUFBTSxFQUFDLENBQU07NENBQ2JDLFNBQVMsRUFBRXJCLG1FQUFlOzRDQUMxQnNCLEdBQUcsRUFBRSxDQUFDO2dEQUNKQyxZQUFZLEVBQUUsQ0FBa0M7NENBQ2xELENBQUM7c0RBRUFwQixPQUFPLENBQUNjLEtBQUs7Ozs7OztvSEFFZk8sQ0FBRTtzREFDQXJCLE9BQU8sQ0FBQ3NCLFdBQVcsQ0FBQ3ZCLEdBQUcsQ0FBQyxRQUFRLENBQVB3QixJQUFJLEVBQUV0QixLQUFLLEVBQUssQ0FBQztnREFDekMsTUFBTSw2RUFBRXVCLENBQUU7b0RBQUNOLFNBQVMsRUFBRXJCLHNFQUFrQjs4REFBRzBCLElBQUk7Ozs7Ozs0Q0FDakQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O29HQUtNM0IscURBQU07Ozs7O29HQUNoQkEscURBQU07Ozs7OzttQkEvQkNLLEtBQUs7Ozs7O1lBa0NqQixDQUFDOzs7QUFJVCxDQUFDO0tBNUNLSCxRQUFRO0FBNkNkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oYWNrYXRob24vZmVhdHVyZXMudHN4PzcyYTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZlYXR1cmVzSG9tZSBmcm9tIFwiLi4vLi4vZGF0YS9mZWF0dXJlc0hvbWVcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgR3JpZCwgVGV4dCwgU3BhY2VyIH0gZnJvbSBcIkBuZXh0dWktb3JnL3JlYWN0XCI7XG5pbXBvcnQgZmVhdFN0eWxlIGZyb20gXCIuL2ZlYXR1cmVzLm1vZHVsZS5jc3NcIjtcbmNvbnN0IEZlYXR1cmVzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPFNwYWNlci8+PFNwYWNlci8+XG4gICAgICB7ZmVhdHVyZXNIb21lLm1hcCgoZmVhdHVyZSwgaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgIDxHcmlkLkNvbnRhaW5lclxuICAgICAgICAgICAgZ2FwPXsxfVxuICAgICAgICAgICAganVzdGlmeT1cImNlbnRlclwiXG4gICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgIGRpcmVjdGlvbj17ZmVhdHVyZS5sYXlvdXR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEdyaWQgeHM9ezh9IHNtPXs0fT5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17ZmVhdHVyZS5pbWFnZX0gYWx0PXtmZWF0dXJlLnRpdGxlfSAvPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgeHM9ezEwfSBzbT17NH0gZGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgaDNcbiAgICAgICAgICAgICAgICBzaXplPVwiMnJlbVwiXG4gICAgICAgICAgICAgICAgd2VpZ2h0PVwiYm9sZFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtmZWF0U3R5bGUudGl0bGV9XG4gICAgICAgICAgICAgICAgY3NzPXt7XG4gICAgICAgICAgICAgICAgICB0ZXh0R3JhZGllbnQ6IFwiNDVkZWcsICNmYTIyMmEgLTEwJSwgIzM4YWNmZSA3MCVcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2ZlYXR1cmUudGl0bGV9XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtmZWF0dXJlLmRlc2NyaXB0aW9uLm1hcCgoZGVzYywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkgY2xhc3NOYW1lPXtmZWF0U3R5bGUubGlzdEl0ZW19PntkZXNjfTwvbGk+O1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgICAgPC9HcmlkLkNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICA8U3BhY2VyIC8+XG4gICAgICAgICAgICA8U3BhY2VyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICBcbiAgICA8Lz5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlcztcbiJdLCJuYW1lcyI6WyJmZWF0dXJlc0hvbWUiLCJJbWFnZSIsIkdyaWQiLCJUZXh0IiwiU3BhY2VyIiwiZmVhdFN0eWxlIiwiRmVhdHVyZXMiLCJtYXAiLCJmZWF0dXJlIiwiaW5kZXgiLCJkaXYiLCJDb250YWluZXIiLCJnYXAiLCJqdXN0aWZ5IiwiYWxpZ25JdGVtcyIsImRpcmVjdGlvbiIsImxheW91dCIsInhzIiwic20iLCJzcmMiLCJpbWFnZSIsImFsdCIsInRpdGxlIiwiaDMiLCJzaXplIiwid2VpZ2h0IiwiY2xhc3NOYW1lIiwiY3NzIiwidGV4dEdyYWRpZW50IiwidWwiLCJkZXNjcmlwdGlvbiIsImRlc2MiLCJsaSIsImxpc3RJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/hackathon/features.tsx\n");

/***/ })

});