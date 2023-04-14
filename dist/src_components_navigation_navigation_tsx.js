"use strict";
(self["webpackChunkconfrontend_ui_library"] = self["webpackChunkconfrontend_ui_library"] || []).push([["src_components_navigation_navigation_tsx"],{

/***/ "./src/components/navigation/navigation.styled.ts":
/*!********************************************************!*\
  !*** ./src/components/navigation/navigation.styled.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemRightWrapper": function() { return /* binding */ ItemRightWrapper; },
/* harmony export */   "NavigationWrapper": function() { return /* binding */ NavigationWrapper; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "webpack/sharing/consume/default/styled-components/styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var NavigationWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  column-gap: 1em;\n  padding-left: 3em;\n  height: 2.5em;\n  box-shadow: 0 1px 6px 0 rgb(32 33 36 / 28%);\n  box-sizing: border-box;\n  a {\n    height: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    width: 10em;\n    &:not(.active):hover {\n      box-shadow: 0 1px 0 0 #0384fc;\n      cursor: pointer;\n    }\n  }\n"], ["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  column-gap: 1em;\n  padding-left: 3em;\n  height: 2.5em;\n  box-shadow: 0 1px 6px 0 rgb(32 33 36 / 28%);\n  box-sizing: border-box;\n  a {\n    height: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    width: 10em;\n    &:not(.active):hover {\n      box-shadow: 0 1px 0 0 #0384fc;\n      cursor: pointer;\n    }\n  }\n"])));
var ItemRightWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-left: auto;\n  padding-right: 2em;\n  a {\n    height: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    width: fit-content;\n    &:not(.active):hover {\n      box-shadow: 0 0 0 0 ;\n      cursor: pointer;\n    }\n  }\n"], ["\n  margin-left: auto;\n  padding-right: 2em;\n  a {\n    height: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    width: fit-content;\n    &:not(.active):hover {\n      box-shadow: 0 0 0 0 ;\n      cursor: pointer;\n    }\n  }\n"])));
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/components/navigation/navigation.tsx":
/*!**************************************************!*\
  !*** ./src/components/navigation/navigation.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Navigation": function() { return /* binding */ Navigation; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _navigation_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation.styled */ "./src/components/navigation/navigation.styled.ts");
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

/* eslint-disable no-restricted-globals */


/**
 * Navigation bar with lazy-loading capability.
 * On Mouse Enter or Focus, the components get lazy-loaded.
 * @returns Navigation JSX Element
 */
var Navigation = function (_a) {
    var navMenuItems = _a.navMenuItems, rightSideItems = _a.rightSideItems;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_navigation_styled__WEBPACK_IMPORTED_MODULE_1__.NavigationWrapper, { children: [navMenuItems.map(function (item, index) { return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, __assign({ to: item.route, onMouseEnter: item.lazyLoadComponent, onFocus: item.lazyLoadComponent, style: function (_a) {
                    var isActive = _a.isActive;
                    return isActive ||
                        location.pathname === item.route ||
                        (location.pathname === "/" && index === 0)
                        ? {
                            borderBottom: " 3px solid #0384fc",
                            marginBottom: "-3px",
                        }
                        : { color: "#000000" };
                } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: item.displayName }) }), item.displayName)); }), rightSideItems && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_navigation_styled__WEBPACK_IMPORTED_MODULE_1__.ItemRightWrapper, { children: rightSideItems }))] }));
};
/* harmony default export */ __webpack_exports__["default"] = (Navigation);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfbmF2aWdhdGlvbl9uYXZpZ2F0aW9uX3RzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNEJBQTRCLFNBQUksSUFBSSxTQUFJO0FBQ3hDLGlDQUFpQyx1Q0FBdUMsWUFBWSxLQUFLLE9BQU87QUFDaEc7QUFDQTtBQUN1QztBQUNoQyx3QkFBd0IsNkRBQVcsa0ZBQWtGLHdCQUF3Qix3QkFBd0Isb0JBQW9CLHNCQUFzQixrQkFBa0IsZ0RBQWdELDJCQUEyQixPQUFPLG1CQUFtQixvQkFBb0IsMEJBQTBCLDBCQUEwQiw4QkFBOEIsa0JBQWtCLDRCQUE0QixzQ0FBc0Msd0JBQXdCLE9BQU8sS0FBSywwQkFBMEIsd0JBQXdCLHdCQUF3QixvQkFBb0Isc0JBQXNCLGtCQUFrQixnREFBZ0QsMkJBQTJCLE9BQU8sbUJBQW1CLG9CQUFvQiwwQkFBMEIsMEJBQTBCLDhCQUE4QixrQkFBa0IsNEJBQTRCLHNDQUFzQyx3QkFBd0IsT0FBTyxLQUFLO0FBQzcrQix1QkFBdUIsNkRBQVcsc0ZBQXNGLHVCQUF1QixPQUFPLG1CQUFtQixvQkFBb0IsMEJBQTBCLDBCQUEwQiw4QkFBOEIseUJBQXlCLDRCQUE0Qiw2QkFBNkIsd0JBQXdCLE9BQU8sS0FBSyw4QkFBOEIsdUJBQXVCLE9BQU8sbUJBQW1CLG9CQUFvQiwwQkFBMEIsMEJBQTBCLDhCQUE4Qix5QkFBeUIsNEJBQTRCLDZCQUE2Qix3QkFBd0IsT0FBTyxLQUFLO0FBQ3ZyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEEsZ0JBQWdCLFNBQUksSUFBSSxTQUFJO0FBQzVCO0FBQ0EsaURBQWlELE9BQU87QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrRDtBQUMvRDtBQUMyQztBQUNGO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0EsWUFBWSx1REFBSyxDQUFDLGlFQUFtQixJQUFJLHFEQUFxRCxRQUFRLHNEQUFJLENBQUMscURBQU8sYUFBYTtBQUMvSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLG1CQUFtQixJQUFJLFVBQVUsc0RBQUksV0FBVyw0QkFBNEIsR0FBRyx3QkFBd0Isc0JBQXNCLHNEQUFJLENBQUMsZ0VBQWtCLElBQUksMEJBQTBCLEtBQUs7QUFDdkw7QUFDQSwrREFBZSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb25mcm9udGVuZF91aV9saWJyYXJ5Ly4vc3JjL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLnN0eWxlZC50cyIsIndlYnBhY2s6Ly9jb25mcm9udGVuZF91aV9saWJyYXJ5Ly4vc3JjL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19tYWtlVGVtcGxhdGVPYmplY3QgPSAodGhpcyAmJiB0aGlzLl9fbWFrZVRlbXBsYXRlT2JqZWN0KSB8fCBmdW5jdGlvbiAoY29va2VkLCByYXcpIHtcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxuICAgIHJldHVybiBjb29rZWQ7XG59O1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmV4cG9ydCB2YXIgTmF2aWdhdGlvbldyYXBwZXIgPSBzdHlsZWQuc3Bhbih0ZW1wbGF0ZU9iamVjdF8xIHx8ICh0ZW1wbGF0ZU9iamVjdF8xID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2x1bW4tZ2FwOiAxZW07XFxuICBwYWRkaW5nLWxlZnQ6IDNlbTtcXG4gIGhlaWdodDogMi41ZW07XFxuICBib3gtc2hhZG93OiAwIDFweCA2cHggMCByZ2IoMzIgMzMgMzYgLyAyOCUpO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGEge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTBlbTtcXG4gICAgJjpub3QoLmFjdGl2ZSk6aG92ZXIge1xcbiAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDAgMCAjMDM4NGZjO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbiAgfVxcblwiXSwgW1wiXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2x1bW4tZ2FwOiAxZW07XFxuICBwYWRkaW5nLWxlZnQ6IDNlbTtcXG4gIGhlaWdodDogMi41ZW07XFxuICBib3gtc2hhZG93OiAwIDFweCA2cHggMCByZ2IoMzIgMzMgMzYgLyAyOCUpO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGEge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTBlbTtcXG4gICAgJjpub3QoLmFjdGl2ZSk6aG92ZXIge1xcbiAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDAgMCAjMDM4NGZjO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbiAgfVxcblwiXSkpKTtcbmV4cG9ydCB2YXIgSXRlbVJpZ2h0V3JhcHBlciA9IHN0eWxlZC5zcGFuKHRlbXBsYXRlT2JqZWN0XzIgfHwgKHRlbXBsYXRlT2JqZWN0XzIgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgcGFkZGluZy1yaWdodDogMmVtO1xcbiAgYSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgJjpub3QoLmFjdGl2ZSk6aG92ZXIge1xcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbiAgfVxcblwiXSwgW1wiXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIHBhZGRpbmctcmlnaHQ6IDJlbTtcXG4gIGEge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgICY6bm90KC5hY3RpdmUpOmhvdmVyIHtcXG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAwIDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG4gIH1cXG5cIl0pKSk7XG52YXIgdGVtcGxhdGVPYmplY3RfMSwgdGVtcGxhdGVPYmplY3RfMjtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzICovXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCAqIGFzIFMgZnJvbSBcIi4vbmF2aWdhdGlvbi5zdHlsZWRcIjtcbi8qKlxuICogTmF2aWdhdGlvbiBiYXIgd2l0aCBsYXp5LWxvYWRpbmcgY2FwYWJpbGl0eS5cbiAqIE9uIE1vdXNlIEVudGVyIG9yIEZvY3VzLCB0aGUgY29tcG9uZW50cyBnZXQgbGF6eS1sb2FkZWQuXG4gKiBAcmV0dXJucyBOYXZpZ2F0aW9uIEpTWCBFbGVtZW50XG4gKi9cbmV4cG9ydCB2YXIgTmF2aWdhdGlvbiA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBuYXZNZW51SXRlbXMgPSBfYS5uYXZNZW51SXRlbXMsIHJpZ2h0U2lkZUl0ZW1zID0gX2EucmlnaHRTaWRlSXRlbXM7XG4gICAgcmV0dXJuIChfanN4cyhTLk5hdmlnYXRpb25XcmFwcGVyLCB7IGNoaWxkcmVuOiBbbmF2TWVudUl0ZW1zLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHsgcmV0dXJuIChfanN4KE5hdkxpbmssIF9fYXNzaWduKHsgdG86IGl0ZW0ucm91dGUsIG9uTW91c2VFbnRlcjogaXRlbS5sYXp5TG9hZENvbXBvbmVudCwgb25Gb2N1czogaXRlbS5sYXp5TG9hZENvbXBvbmVudCwgc3R5bGU6IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXNBY3RpdmUgPSBfYS5pc0FjdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzQWN0aXZlIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5wYXRobmFtZSA9PT0gaXRlbS5yb3V0ZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKGxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9cIiAmJiBpbmRleCA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogXCIgM3B4IHNvbGlkICMwMzg0ZmNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiLTNweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB7IGNvbG9yOiBcIiMwMDAwMDBcIiB9O1xuICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogX2pzeChcInNwYW5cIiwgeyBjaGlsZHJlbjogaXRlbS5kaXNwbGF5TmFtZSB9KSB9KSwgaXRlbS5kaXNwbGF5TmFtZSkpOyB9KSwgcmlnaHRTaWRlSXRlbXMgJiYgKF9qc3goUy5JdGVtUmlnaHRXcmFwcGVyLCB7IGNoaWxkcmVuOiByaWdodFNpZGVJdGVtcyB9KSldIH0pKTtcbn07XG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9