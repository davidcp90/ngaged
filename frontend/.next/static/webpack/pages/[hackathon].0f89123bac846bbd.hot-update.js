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

/***/ "./components/nav/navbarUser.tsx":
/*!***************************************!*\
  !*** ./components/nav/navbarUser.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/esm/index.js\");\n\n\nvar _this = undefined;\nvar NavbarUser = function(param) {\n    var transparentBg = param.transparentBg;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Grid.Container, {\n        alignItems: \"center\",\n        justify: \"flex-end\",\n        gap: 2,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    bordered: true,\n                    color: \"primary\",\n                    size: \"sm\",\n                    auto: true,\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"/Users/davidcamargo/vpProjects/ngaged/frontend/components/nav/navbarUser.tsx\",\n                    lineNumber: 8,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/davidcamargo/vpProjects/ngaged/frontend/components/nav/navbarUser.tsx\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    color: \"gradient\",\n                    size: \"xl\",\n                    auto: true,\n                    children: \"Sign-up\"\n                }, void 0, false, {\n                    fileName: \"/Users/davidcamargo/vpProjects/ngaged/frontend/components/nav/navbarUser.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/davidcamargo/vpProjects/ngaged/frontend/components/nav/navbarUser.tsx\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/davidcamargo/vpProjects/ngaged/frontend/components/nav/navbarUser.tsx\",\n        lineNumber: 6,\n        columnNumber: 7\n    }, _this));\n};\n_c = NavbarUser;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavbarUser);\nvar _c;\n$RefreshReg$(_c, \"NavbarUser\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdi9uYXZiYXJVc2VyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUNnRDs7QUFFaEQsR0FBSyxDQUFDRSxVQUFVLEdBQUcsUUFBUSxRQUFrQixDQUFDO1FBQXpCQyxhQUFhLFNBQWJBLGFBQWE7SUFDaEMsTUFBTSw2RUFDREYsNkRBQWM7UUFBQ0ksVUFBVSxFQUFDLENBQVE7UUFBQ0MsT0FBTyxFQUFDLENBQVU7UUFBQ0MsR0FBRyxFQUFFLENBQUM7O3dGQUMxRE4sbURBQUk7c0dBQ0ZELHFEQUFNO29CQUFDUSxRQUFRO29CQUFDQyxLQUFLLEVBQUMsQ0FBUztvQkFBQ0MsSUFBSSxFQUFDLENBQUk7b0JBQUNDLElBQUk7OEJBQUMsQ0FFaEQ7Ozs7Ozs7Ozs7O3dGQUVEVixtREFBSTtzR0FDRkQscURBQU07b0JBQUNTLEtBQUssRUFBQyxDQUFVO29CQUFDQyxJQUFJLEVBQUMsQ0FBSTtvQkFBQ0MsSUFBSTs4QkFBQyxDQUV4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJVixDQUFDO0tBZktULFVBQVU7QUFnQmhCLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYvbmF2YmFyVXNlci50c3g/M2U2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEJ1dHRvbiwgR3JpZCB9IGZyb20gXCJAbmV4dHVpLW9yZy9yZWFjdFwiO1xuXG5jb25zdCBOYXZiYXJVc2VyID0gKHt0cmFuc3BhcmVudEJnfTogYW55KSA9PiB7XG4gIHJldHVybiAoXG4gICAgICA8R3JpZC5Db250YWluZXIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnk9XCJmbGV4LWVuZFwiIGdhcD17Mn0+XG4gICAgICAgIDxHcmlkPlxuICAgICAgICAgIDxCdXR0b24gYm9yZGVyZWQgY29sb3I9XCJwcmltYXJ5XCIgc2l6ZT1cInNtXCIgYXV0bz5cbiAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImdyYWRpZW50XCIgc2l6ZT1cInhsXCIgYXV0bz5cbiAgICAgICAgICAgIFNpZ24tdXBcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkLkNvbnRhaW5lcj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBOYXZiYXJVc2VyO1xuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIkdyaWQiLCJOYXZiYXJVc2VyIiwidHJhbnNwYXJlbnRCZyIsIkNvbnRhaW5lciIsImFsaWduSXRlbXMiLCJqdXN0aWZ5IiwiZ2FwIiwiYm9yZGVyZWQiLCJjb2xvciIsInNpemUiLCJhdXRvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/nav/navbarUser.tsx\n");

/***/ })

});