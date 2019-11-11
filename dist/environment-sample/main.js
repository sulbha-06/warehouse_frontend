(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/components/home/home.component */ "./src/app/components/components/home/home.component.ts");
/* harmony import */ var _components_components_help_help_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/components/help/help.component */ "./src/app/components/components/help/help.component.ts");
/* harmony import */ var _components_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/components/contact/contact.component */ "./src/app/components/components/contact/contact.component.ts");
/* harmony import */ var _components_components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components/login/login.component */ "./src/app/components/components/login/login.component.ts");
/* harmony import */ var _components_components_product_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/components/product/product.component */ "./src/app/components/components/product/product.component.ts");









var routes = [
    {
        path: '',
        component: _components_components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
    },
    {
        path: 'home',
        component: _components_components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    {
        path: 'help',
        component: _components_components_help_help_component__WEBPACK_IMPORTED_MODULE_5__["HelpComponent"]
    },
    {
        path: 'contact',
        component: _components_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"]
    }, {
        path: 'login',
        component: _components_components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
    },
    {
        path: 'product',
        component: _components_components_product_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductComponent"]
    },
    {
        path: '**',
        component: _components_components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] //need to be replaced by page notfound
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register_form{\r\n    background-color: aqua;\r\n    }\r\n    \r\n    .submit_btn{\r\n        text-align: center;\r\n        margin: 2% 0% 1% 0%;\r\n    }\r\n    \r\n    .sub_btn{\r\n        padding: 4px 25px;\r\n    }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsbUJBQW1CO0lBQ3ZCOztJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0ZXJfZm9ybXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zdWJtaXRfYnRue1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDIlIDAlIDElIDAlO1xyXG4gICAgfVxyXG4gICAgLnN1Yl9idG57XHJcbiAgICAgICAgcGFkZGluZzogNHB4IDI1cHg7XHJcbiAgICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <The content below is only a placeholder and can be replaced.\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>\n -->\n\n <app-header></app-header>\n <router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'environment-sample';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/components/header/header.component */ "./src/app/components/components/header/header.component.ts");
/* harmony import */ var _components_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/components/footer/footer.component */ "./src/app/components/components/footer/footer.component.ts");
/* harmony import */ var _components_components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/components/home/home.component */ "./src/app/components/components/home/home.component.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _components_components_help_help_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/components/help/help.component */ "./src/app/components/components/help/help.component.ts");
/* harmony import */ var _components_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/components/contact/contact.component */ "./src/app/components/components/contact/contact.component.ts");
/* harmony import */ var _components_components_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/components/login/login.component */ "./src/app/components/components/login/login.component.ts");
/* harmony import */ var _highlight_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./highlight.directive */ "./src/app/highlight.directive.ts");
/* harmony import */ var _commonComponents_footerPrimary_footerPrimary_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./commonComponents/footerPrimary/footerPrimary.component */ "./src/app/commonComponents/footerPrimary/footerPrimary.component.ts");
/* harmony import */ var _components_components_product_product_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/components/product/product.component */ "./src/app/components/components/product/product.component.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _components_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _components_components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _components_components_help_help_component__WEBPACK_IMPORTED_MODULE_10__["HelpComponent"],
                _components_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
                _components_components_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _highlight_directive__WEBPACK_IMPORTED_MODULE_13__["HighlightDirective"],
                _commonComponents_footerPrimary_footerPrimary_component__WEBPACK_IMPORTED_MODULE_14__["FooterPrimaryComponent"],
                _components_components_product_product_component__WEBPACK_IMPORTED_MODULE_15__["ProductComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/commonComponents/footerPrimary/footerPrimary.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/commonComponents/footerPrimary/footerPrimary.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n#bottom { \r\n    background-color:#33C7FF;\r\n    position: absolute;                  \r\n    bottom:0;\r\n    margin-bottom: 5px;\r\n    text-align: center;\r\n    width: 100%;                                             \r\n} \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uQ29tcG9uZW50cy9mb290ZXJQcmltYXJ5L2Zvb3RlclByaW1hcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbkNvbXBvbmVudHMvZm9vdGVyUHJpbWFyeS9mb290ZXJQcmltYXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI2JvdHRvbSB7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMzNDN0ZGO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyAgICAgICAgICAgICAgICAgIFxyXG4gICAgYm90dG9tOjA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxufSAiXX0= */"

/***/ }),

/***/ "./src/app/commonComponents/footerPrimary/footerPrimary.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/commonComponents/footerPrimary/footerPrimary.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer id=\"bottom\">\n  <p>\n    Contact Us @ +91-1111000011\n  </p>\n</footer>\n\n\n"

/***/ }),

/***/ "./src/app/commonComponents/footerPrimary/footerPrimary.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/commonComponents/footerPrimary/footerPrimary.component.ts ***!
  \***************************************************************************/
/*! exports provided: FooterPrimaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterPrimaryComponent", function() { return FooterPrimaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterPrimaryComponent = /** @class */ (function () {
    function FooterPrimaryComponent() {
        this.detail = "footerPrimary is here";
    }
    FooterPrimaryComponent.prototype.ngOnInit = function () {
    };
    FooterPrimaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footerPrimary',
            template: __webpack_require__(/*! ./footerPrimary.component.html */ "./src/app/commonComponents/footerPrimary/footerPrimary.component.html"),
            styles: [__webpack_require__(/*! ./footerPrimary.component.css */ "./src/app/commonComponents/footerPrimary/footerPrimary.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterPrimaryComponent);
    return FooterPrimaryComponent;
}());



/***/ }),

/***/ "./src/app/components/components/contact/contact.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/components/contact/contact.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/components/contact/contact.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/components/contact/contact.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h1>\n Contact Detail\n</h1>\n<div>\n  <p>Address:</p>\n  <p>Warehour pvt ltd.</p>\n  <p>\n    Bihar , India\n  </p>\n</div>\n<app-footerPrimary></app-footerPrimary>\n"

/***/ }),

/***/ "./src/app/components/components/contact/contact.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/components/contact/contact.component.ts ***!
  \********************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/components/components/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/components/footer/footer.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/components/footer/footer.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/components/footer/footer.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/components/footer/footer.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  footer works!\n</p> -->\n\n<div class=\"container\">\n  <div class=\"content has-text-centered\">\n    \n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/components/footer/footer.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/components/footer/footer.component.ts ***!
  \******************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/components/header/header.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/components/header/header.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo{\r\n    background-color: deepskyblue;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDZCQUE2QjtBQUNqQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRlZXBza3libHVlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/components/header/header.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/components/header/header.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header \">\n      <a class=\"navbar-brand logo\" href=\"#\"><i class=\"fab fa-angular fa-2x\"></i></a>\n      \n    </div>\n    <ul class=\"nav navbar-nav\">\n        <li><a routerLink=\"/login\">Login</a></li>\n      <li><a routerLink = \"/contact\">Contact Us</a></li>\n      <li><a routerLink = \"/help\">Help</a></li>\n      \n      \n      \n      \n      \n      \n    </ul>\n  </div>\n</nav>\n  \n"

/***/ }),

/***/ "./src/app/components/components/header/header.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/components/header/header.component.ts ***!
  \******************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/components/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/components/help/help.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/components/help/help.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcG9uZW50cy9oZWxwL2hlbHAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/components/help/help.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/components/help/help.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>\n FAQ\n</h2>\n"

/***/ }),

/***/ "./src/app/components/components/help/help.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/components/help/help.component.ts ***!
  \**************************************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HelpComponent = /** @class */ (function () {
    function HelpComponent() {
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! ./help.component.html */ "./src/app/components/components/help/help.component.html"),
            styles: [__webpack_require__(/*! ./help.component.css */ "./src/app/components/components/help/help.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/components/components/home/home.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/components/home/home.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .img_template{\r\n    background-color: black;\r\n    \r\n    float: left;\r\n    position: absolute;\r\n    \r\n}\r\n.image_main{\r\n    width: 50%;\r\n    \r\n} */\r\n\r\n/* body  {\r\n    background-image: url(\"images/Penguins.jpg\");\r\n     background-color: #cccccc; \r\n  } */\r\n\r\n.bg_img {  \r\n    background-image: url(\"/../../assets/images/Penguins.jpg\");\r\n    background-repeat: repeat-x;\r\n    height: 772px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0dBVUc7O0FBRUg7OztLQUdLOztBQUNIO0lBQ0UsMERBQTBEO0lBQzFELDJCQUEyQjtJQUMzQixhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmltZ190ZW1wbGF0ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgXHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIFxyXG59XHJcbi5pbWFnZV9tYWlue1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIFxyXG59ICovXHJcblxyXG4vKiBib2R5ICB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJpbWFnZXMvUGVuZ3VpbnMuanBnXCIpO1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7IFxyXG4gIH0gKi9cclxuICAuYmdfaW1nIHsgIFxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLy4uLy4uL2Fzc2V0cy9pbWFnZXMvUGVuZ3VpbnMuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xyXG4gICAgaGVpZ2h0OiA3NzJweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/components/home/home.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/components/home/home.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n  <div class=\"bg_img\">\n  <div class=\"container-fluid \">\n    <h3 class=\" panel  panel-heading\">Home Page</h3>  \n    </div> \n  </div>"

/***/ }),

/***/ "./src/app/components/components/home/home.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/components/home/home.component.ts ***!
  \**************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/components/login/login.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/components/login/login.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.header1{\r\n    \r\n    width: 100%;\r\n    /*width: auto;*/\r\n    /*height:20px;*/\r\n    text-align:center;\r\n    margin-top:0px;\r\n    }\r\n   \r\n    .loginDiv{\r\n        background-color:#05386B;\r\n        width: 442px;\r\n        height:400px;\r\n        position:absolute;\r\n        margin:6% 39%;\r\n        text-align:center;\r\n        box-shadow:  2px 2px 20px grey;\r\n        border-radius:5px;\r\n    }\r\n   \r\n    .user_main{\r\n        position:relative;\r\n        margin:35% 10%;\r\n    }\r\n   \r\n    .in_div{\r\n        margin:3% 10%;\r\n        font-size: 18px;\r\n            height: 17px;\r\n    }\r\n   \r\n    .label1{\r\n            margin: 0px 6px;\r\n        height: 9px;\r\n    }\r\n   \r\n    input{\r\n        border-radius:5px;\r\n         /*text-shadow: 2px 2px 2px orange;*/\r\n         text-align: center;\r\n         color: black;\r\n        \r\n    }\r\n   \r\n    .footer{\r\n        background-color:pink;\r\n        position:fixed;\r\n        bottom:1px;\r\n        width:100%;\r\n        height:10%;\r\n        margin: 0px 0px 0px -7px; \r\n        /*text-align: center ;!important*/\r\n    }\r\n   \r\n    .footer1{\r\n    text-align: center ;\t\r\n    }\r\n   \r\n    .user_body{\r\n        position:absolute;\r\n        width:89%;\r\n        height:85%;\r\n        background-color:aqua;\r\n        margin-left:15%;\r\n        margin-top: -21px;\r\n        \r\n    }\r\n   \r\n    .user_sidebar{\r\n        position:absolute;\r\n        width:15%;\r\n        height:85%;\r\n        background-color:green;\r\n        margin-top: -21px;\r\n    \r\n    }\r\n   \r\n    input:hover {\r\n      border-color: blue;\r\n    }\r\n   \r\n    button:hover{\r\n         border-color: blue;\r\n    }\r\n   \r\n    .login_btn{\r\n        background-color:#C14242;\r\n        border:none;\r\n        padding:2px 5px;\r\n    }\r\n   \r\n    .login{\r\n       \r\n        position: absolute;\r\n        width: 39%;\r\n        height: 100%;\r\n        margin-left: 30%;\r\n    }\r\n   \r\n    .loginBody{\r\n        margin: 10% 0%;\r\n    }\r\n   \r\n    .row_margin{\r\n        margin-bottom: 1%;\r\n    }\r\n   \r\n    ::-webkit-input-placeholder {\r\n        color:burlywood;\r\n        opacity: 1; /* Firefox */\r\n      }\r\n   \r\n    ::-ms-input-placeholder {\r\n        color:burlywood;\r\n        opacity: 1; /* Firefox */\r\n      }\r\n   \r\n    ::placeholder {\r\n        color:burlywood;\r\n        opacity: 1; /* Firefox */\r\n      }\r\n   \r\n    .alignment{\r\n        text-align: center;\r\n      }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztJQUVJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Q7O0lBRUE7UUFDSSx3QkFBd0I7UUFDeEIsWUFBWTtRQUNaLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsYUFBYTtRQUNiLGlCQUFpQjtRQUNqQiw4QkFBOEI7UUFDOUIsaUJBQWlCO0lBQ3JCOztJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLGNBQWM7SUFDbEI7O0lBQ0E7UUFDSSxhQUFhO1FBQ2IsZUFBZTtZQUNYLFlBQVk7SUFDcEI7O0lBQ0E7WUFDUSxlQUFlO1FBQ25CLFdBQVc7SUFDZjs7SUFDQTtRQUNJLGlCQUFpQjtTQUNoQixtQ0FBbUM7U0FDbkMsa0JBQWtCO1NBQ2xCLFlBQVk7O0lBRWpCOztJQUNBO1FBQ0kscUJBQXFCO1FBQ3JCLGNBQWM7UUFDZCxVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVix3QkFBd0I7UUFDeEIsaUNBQWlDO0lBQ3JDOztJQUNBO0lBQ0EsbUJBQW1CO0lBQ25COztJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLFNBQVM7UUFDVCxVQUFVO1FBQ1YscUJBQXFCO1FBQ3JCLGVBQWU7UUFDZixpQkFBaUI7O0lBRXJCOztJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLFNBQVM7UUFDVCxVQUFVO1FBQ1Ysc0JBQXNCO1FBQ3RCLGlCQUFpQjs7SUFFckI7O0lBQ0E7TUFDRSxrQkFBa0I7SUFDcEI7O0lBQ0E7U0FDSyxrQkFBa0I7SUFDdkI7O0lBQ0E7UUFDSSx3QkFBd0I7UUFDeEIsV0FBVztRQUNYLGVBQWU7SUFDbkI7O0lBQ0E7O1FBRUksa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixZQUFZO1FBQ1osZ0JBQWdCO0lBQ3BCOztJQUNBO1FBQ0ksY0FBYztJQUNsQjs7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFDQTtRQUNJLGVBQWU7UUFDZixVQUFVLEVBQUUsWUFBWTtNQUMxQjs7SUFIRjtRQUNJLGVBQWU7UUFDZixVQUFVLEVBQUUsWUFBWTtNQUMxQjs7SUFIRjtRQUNJLGVBQWU7UUFDZixVQUFVLEVBQUUsWUFBWTtNQUMxQjs7SUFFQTtRQUNFLGtCQUFrQjtNQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5oZWFkZXIxe1xyXG4gICAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qd2lkdGg6IGF1dG87Ki9cclxuICAgIC8qaGVpZ2h0OjIwcHg7Ki9cclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDowcHg7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgLmxvZ2luRGl2e1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IzA1Mzg2QjtcclxuICAgICAgICB3aWR0aDogNDQycHg7XHJcbiAgICAgICAgaGVpZ2h0OjQwMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIG1hcmdpbjo2JSAzOSU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgYm94LXNoYWRvdzogIDJweCAycHggMjBweCBncmV5O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gICAgfVxyXG4gICAgLnVzZXJfbWFpbntcclxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICBtYXJnaW46MzUlIDEwJTtcclxuICAgIH1cclxuICAgIC5pbl9kaXZ7XHJcbiAgICAgICAgbWFyZ2luOjMlIDEwJTtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTdweDtcclxuICAgIH1cclxuICAgIC5sYWJlbDF7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDZweDtcclxuICAgICAgICBoZWlnaHQ6IDlweDtcclxuICAgIH1cclxuICAgIGlucHV0e1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gICAgICAgICAvKnRleHQtc2hhZG93OiAycHggMnB4IDJweCBvcmFuZ2U7Ki9cclxuICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAuZm9vdGVye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6cGluaztcclxuICAgICAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgICAgICBib3R0b206MXB4O1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OjEwJTtcclxuICAgICAgICBtYXJnaW46IDBweCAwcHggMHB4IC03cHg7IFxyXG4gICAgICAgIC8qdGV4dC1hbGlnbjogY2VudGVyIDshaW1wb3J0YW50Ki9cclxuICAgIH1cclxuICAgIC5mb290ZXIxe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyIDtcdFxyXG4gICAgfVxyXG4gICAgLnVzZXJfYm9keXtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDo4OSU7XHJcbiAgICAgICAgaGVpZ2h0Ojg1JTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmFxdWE7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MTUlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0yMXB4O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLnVzZXJfc2lkZWJhcntcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDoxNSU7XHJcbiAgICAgICAgaGVpZ2h0Ojg1JTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmdyZWVuO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0yMXB4O1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICBpbnB1dDpob3ZlciB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogYmx1ZTtcclxuICAgIH1cclxuICAgIGJ1dHRvbjpob3ZlcntcclxuICAgICAgICAgYm9yZGVyLWNvbG9yOiBibHVlO1xyXG4gICAgfVxyXG4gICAgLmxvZ2luX2J0bntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNDMTQyNDI7XHJcbiAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgcGFkZGluZzoycHggNXB4O1xyXG4gICAgfVxyXG4gICAgLmxvZ2lue1xyXG4gICAgICAgXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAzOSU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbiAgICB9XHJcbiAgICAubG9naW5Cb2R5e1xyXG4gICAgICAgIG1hcmdpbjogMTAlIDAlO1xyXG4gICAgfVxyXG4gICAgLnJvd19tYXJnaW57XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbiAgICB9XHJcbiAgICA6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICBjb2xvcjpidXJseXdvb2Q7XHJcbiAgICAgICAgb3BhY2l0eTogMTsgLyogRmlyZWZveCAqL1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWxpZ25tZW50e1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/components/login/login.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/components/login/login.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\n\t\t<form name=\"form\" class=\"loginBody\">\n\t\t\t\t<div class=\"row row_margin\">\n\t\t\t\t\t\t<div *ngIf=\"successFlag\" class=\"alignment\">\n\t\t\t\t\t\t\t\t<p class=\"text-danger\">Bad credential , try again with correct username & password</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-4 col-lg-offset-5\">\n\t\t\t\t\t\t  <label>User Name</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </div>\n\t\t\t\t<div class=\"row row_margin\">\n\t\t\t\t  <div class=\"col-lg-4 col-lg-offset-4\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"someone@gmail.com\" name=\"uname\" [(ngModel)]=\"uname\" maxlength=\"50\" required/>\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row row_margin\">\n\t\t\t\t\t\t<div class=\"col-lg-4 col-lg-offset-5\">\n\t\t\t\t\t\t  <label>Password</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </div>\n\t\t\t\t<div class=\"row row_margin\">\n\t\t\t\t  <div class=\"col-lg-4 col-lg-offset-4\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"******\" name = \"pwrd\" [(ngModel)]=\"pwrd\" maxlength=\"20\" required/>\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row row_margin\">\n\t\t\t\t\t\t<div class=\"col-lg-4 col-lg-offset-5\">\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success\" (click)=\"loginCheck()\"  >Login</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </div>\n\n\n\n\n\n\t\t\t\t\n\t </form>\n</div>"

/***/ }),

/***/ "./src/app/components/components/login/login.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/components/login/login.component.ts ***!
  \****************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
        this.model = {};
        this.obs = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](); //creating observable
        this.uname = '';
        this.pwrd = '';
        this.successFlag = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        //console.log("user name is :"+this.uname);
    };
    LoginComponent.prototype.loginCheck = function () {
        if (this.uname === "sulbha" && this.pwrd === "1234") {
            console.log("loginCheck user name isdsdsdsddsds :" + this.uname);
            this.router.navigate(['/home']);
        }
        else {
            this.uname = '';
            this.pwrd = '';
            this.successFlag = true;
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/components/product/product.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/components/product/product.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/components/product/product.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/components/product/product.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n\n  <tr>\n    <th>Id</th>\n    <th>Product Name</th>\n    <th>Product Type</th>\n  </tr>\n  <tr *ngfor= 'let Product of productdata'  >\n    <td>{{Product.Id}}</td>\n    <td>{{Product.productName}}</td>\n    <td>{{Product.producttype}}</td>\n\n  </tr>\n\n\n</table>"

/***/ }),

/***/ "./src/app/components/components/product/product.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/components/product/product.component.ts ***!
  \********************************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
        this.productdata = [];
    }
    ProductComponent.prototype.ngOnInit = function () {
        this.productdata = [
            {
                "Id": 1,
                "productId": "product1",
                "productName": "Item 1",
                "producttype": "hard",
                "productSerialNumber": "12345"
            },
            {
                "Id": 2,
                "productId": "product2",
                "productName": "Item 2",
                "producttype": "hard",
                "productSerialNumber": "123131"
            },
            {
                "Id": 3,
                "productId": "product3",
                "productName": "Item 3",
                "producttype": "soft",
                "productSerialNumber": "1245441"
            },
            {
                "Id": 4,
                "productId": "product4",
                "productName": "Item 4",
                "producttype": "soft",
                "productSerialNumber": "16445441"
            },
            {
                "Id": 5,
                "productId": "product5",
                "productName": "Item 5",
                "producttype": "soft",
                "productSerialNumber": "1454441"
            }
        ];
    };
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/components/components/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/components/components/product/product.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/highlight.directive.ts":
/*!****************************************!*\
  !*** ./src/app/highlight.directive.ts ***!
  \****************************************/
/*! exports provided: HighlightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightDirective", function() { return HighlightDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HighlightDirective = /** @class */ (function () {
    function HighlightDirective(el) {
        el.nativeElement.style.backgroundColor = 'aqua';
    }
    HighlightDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appHighlight]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], HighlightDirective);
    return HighlightDirective;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Angular-WS\warehouse_frontend\warehouse_frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map