"use strict";
(self["webpackChunkconfrontend_ui_library"] = self["webpackChunkconfrontend_ui_library"] || []).push([["src_components_button_cui-button_tsx"],{

/***/ "./src/components/button/cui-button.styled.ts":
/*!****************************************************!*\
  !*** ./src/components/button/cui-button.styled.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonWrapper": function() { return /* binding */ ButtonWrapper; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "webpack/sharing/consume/default/styled-components/styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  box-shadow: inset 0px 1px 0px 0px #ffffff;\n  background-color: red;\n  border: 1px solid;\n  border-radius: 0.75em;\n  display: inline-block;\n  cursor: pointer;\n  color: #fff;\n  font-size: 15px;\n  font-weight: bold;\n  padding: 6px 24px;\n  text-decoration: none;\n  &:hover {\n    background-color: #eee;\n    color: #000;\n  }\n\n  &:disabled {\n    color: rgba(255, 255, 255, 0.3);\n    box-shadow: none;\n    background-color: rgba(255, 255, 255, 0.12);\n    pointer-events: none;\n  }\n\n  ", "\n"], ["\n  box-shadow: inset 0px 1px 0px 0px #ffffff;\n  background-color: red;\n  border: 1px solid;\n  border-radius: 0.75em;\n  display: inline-block;\n  cursor: pointer;\n  color: #fff;\n  font-size: 15px;\n  font-weight: bold;\n  padding: 6px 24px;\n  text-decoration: none;\n  &:hover {\n    background-color: #eee;\n    color: #000;\n  }\n\n  &:disabled {\n    color: rgba(255, 255, 255, 0.3);\n    box-shadow: none;\n    background-color: rgba(255, 255, 255, 0.12);\n    pointer-events: none;\n  }\n\n  ", "\n"])), function (_a) {
    var color = _a.color, bgColor = _a.bgColor, hoverBgColor = _a.hoverBgColor, hoverColor = _a.hoverColor;
    return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    color: ", ";\n    background-color: ", ";\n    &:hover {\n      background-color: ", ";\n      color: ", ";\n    }\n  "], ["\n    color: ", ";\n    background-color: ", ";\n    &:hover {\n      background-color: ", ";\n      color: ", ";\n    }\n  "])), color, bgColor, hoverBgColor, hoverColor);
});
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/components/button/cui-button.tsx":
/*!**********************************************!*\
  !*** ./src/components/button/cui-button.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _cui_button_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cui-button.styled */ "./src/components/button/cui-button.styled.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


/**
 * UI Button
 */
var CuiButton = function (_a) {
    var children = _a.children, onClick = _a.onClick, color = _a.color, bgColor = _a.bgColor, hoverColor = _a.hoverColor, hoverBgColor = _a.hoverBgColor, disabled = _a.disabled, _b = _a.type, type = _b === void 0 ? undefined : _b;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_cui_button_styled__WEBPACK_IMPORTED_MODULE_1__.ButtonWrapper, __assign({ onClick: onClick, color: color, bgColor: bgColor, hoverColor: hoverColor, hoverBgColor: hoverBgColor, disabled: disabled, type: type }, { children: children })));
};
/* harmony default export */ __webpack_exports__["default"] = (CuiButton);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfYnV0dG9uX2N1aS1idXR0b25fdHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRCQUE0QixTQUFJLElBQUksU0FBSTtBQUN4QyxpQ0FBaUMsdUNBQXVDLFlBQVksS0FBSyxPQUFPO0FBQ2hHO0FBQ0E7QUFDZ0Q7QUFDekMsb0JBQW9CLCtEQUFhLDhHQUE4RywwQkFBMEIsc0JBQXNCLDBCQUEwQiwwQkFBMEIsb0JBQW9CLGdCQUFnQixvQkFBb0Isc0JBQXNCLHNCQUFzQiwwQkFBMEIsYUFBYSw2QkFBNkIsa0JBQWtCLEtBQUssa0JBQWtCLHNDQUFzQyx1QkFBdUIsa0RBQWtELDJCQUEyQixLQUFLLGdFQUFnRSwwQkFBMEIsc0JBQXNCLDBCQUEwQiwwQkFBMEIsb0JBQW9CLGdCQUFnQixvQkFBb0Isc0JBQXNCLHNCQUFzQiwwQkFBMEIsYUFBYSw2QkFBNkIsa0JBQWtCLEtBQUssa0JBQWtCLHNDQUFzQyx1QkFBdUIsa0RBQWtELDJCQUEyQixLQUFLO0FBQzlsQztBQUNBLFdBQVcsc0RBQUcsa0ZBQWtGLDZCQUE2QixlQUFlLCtCQUErQixvQkFBb0IsT0FBTyw0QkFBNEIsNkJBQTZCLGVBQWUsK0JBQStCLG9CQUFvQixPQUFPO0FBQ3hVLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7Ozs7QUNUQSxnQkFBZ0IsU0FBSSxJQUFJLFNBQUk7QUFDNUI7QUFDQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2dEO0FBQ1A7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0RBQUksQ0FBQyw2REFBZSxhQUFhLHNJQUFzSSxJQUFJLG9CQUFvQjtBQUMzTTtBQUNBLCtEQUFlLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbmZyb250ZW5kX3VpX2xpYnJhcnkvLi9zcmMvY29tcG9uZW50cy9idXR0b24vY3VpLWJ1dHRvbi5zdHlsZWQudHMiLCJ3ZWJwYWNrOi8vY29uZnJvbnRlbmRfdWlfbGlicmFyeS8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9jdWktYnV0dG9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19tYWtlVGVtcGxhdGVPYmplY3QgPSAodGhpcyAmJiB0aGlzLl9fbWFrZVRlbXBsYXRlT2JqZWN0KSB8fCBmdW5jdGlvbiAoY29va2VkLCByYXcpIHtcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxuICAgIHJldHVybiBjb29rZWQ7XG59O1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmV4cG9ydCB2YXIgQnV0dG9uV3JhcHBlciA9IHN0eWxlZC5idXR0b24odGVtcGxhdGVPYmplY3RfMiB8fCAodGVtcGxhdGVPYmplY3RfMiA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAwcHggMHB4ICNmZmZmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNzVlbTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiA2cHggMjRweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgICBjb2xvcjogIzAwMDtcXG4gIH1cXG5cXG4gICY6ZGlzYWJsZWQge1xcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIH1cXG5cXG4gIFwiLCBcIlxcblwiXSwgW1wiXFxuICBib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDBweCAwcHggI2ZmZmZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogMC43NWVtO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDZweCAyNHB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgJjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxuICAgIGNvbG9yOiAjMDAwO1xcbiAgfVxcblxcbiAgJjpkaXNhYmxlZCB7XFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgfVxcblxcbiAgXCIsIFwiXFxuXCJdKSksIGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBjb2xvciA9IF9hLmNvbG9yLCBiZ0NvbG9yID0gX2EuYmdDb2xvciwgaG92ZXJCZ0NvbG9yID0gX2EuaG92ZXJCZ0NvbG9yLCBob3ZlckNvbG9yID0gX2EuaG92ZXJDb2xvcjtcbiAgICByZXR1cm4gY3NzKHRlbXBsYXRlT2JqZWN0XzEgfHwgKHRlbXBsYXRlT2JqZWN0XzEgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgY29sb3I6IFwiLCBcIjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogXCIsIFwiO1xcbiAgICAmOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcIiwgXCI7XFxuICAgICAgY29sb3I6IFwiLCBcIjtcXG4gICAgfVxcbiAgXCJdLCBbXCJcXG4gICAgY29sb3I6IFwiLCBcIjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogXCIsIFwiO1xcbiAgICAmOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcIiwgXCI7XFxuICAgICAgY29sb3I6IFwiLCBcIjtcXG4gICAgfVxcbiAgXCJdKSksIGNvbG9yLCBiZ0NvbG9yLCBob3ZlckJnQ29sb3IsIGhvdmVyQ29sb3IpO1xufSk7XG52YXIgdGVtcGxhdGVPYmplY3RfMSwgdGVtcGxhdGVPYmplY3RfMjtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0ICogYXMgUyBmcm9tIFwiLi9jdWktYnV0dG9uLnN0eWxlZFwiO1xuLyoqXG4gKiBVSSBCdXR0b25cbiAqL1xudmFyIEN1aUJ1dHRvbiA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuLCBvbkNsaWNrID0gX2Eub25DbGljaywgY29sb3IgPSBfYS5jb2xvciwgYmdDb2xvciA9IF9hLmJnQ29sb3IsIGhvdmVyQ29sb3IgPSBfYS5ob3ZlckNvbG9yLCBob3ZlckJnQ29sb3IgPSBfYS5ob3ZlckJnQ29sb3IsIGRpc2FibGVkID0gX2EuZGlzYWJsZWQsIF9iID0gX2EudHlwZSwgdHlwZSA9IF9iID09PSB2b2lkIDAgPyB1bmRlZmluZWQgOiBfYjtcbiAgICByZXR1cm4gKF9qc3goUy5CdXR0b25XcmFwcGVyLCBfX2Fzc2lnbih7IG9uQ2xpY2s6IG9uQ2xpY2ssIGNvbG9yOiBjb2xvciwgYmdDb2xvcjogYmdDb2xvciwgaG92ZXJDb2xvcjogaG92ZXJDb2xvciwgaG92ZXJCZ0NvbG9yOiBob3ZlckJnQ29sb3IsIGRpc2FibGVkOiBkaXNhYmxlZCwgdHlwZTogdHlwZSB9LCB7IGNoaWxkcmVuOiBjaGlsZHJlbiB9KSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEN1aUJ1dHRvbjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==