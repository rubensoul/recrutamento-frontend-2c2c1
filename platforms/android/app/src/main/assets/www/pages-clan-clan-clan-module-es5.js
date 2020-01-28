(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-clan-clan-clan-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/clan/clan/clan.page.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/clan/clan/clan.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>clan</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/clan/clan/clan-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/clan/clan/clan-routing.module.ts ***!
  \********************************************************/
/*! exports provided: ClanPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClanPageRoutingModule", function() { return ClanPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _clan_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clan.page */ "./src/app/pages/clan/clan/clan.page.ts");




var routes = [
    {
        path: '',
        component: _clan_page__WEBPACK_IMPORTED_MODULE_3__["ClanPage"]
    }
];
var ClanPageRoutingModule = /** @class */ (function () {
    function ClanPageRoutingModule() {
    }
    ClanPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ClanPageRoutingModule);
    return ClanPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/clan/clan/clan.module.ts":
/*!************************************************!*\
  !*** ./src/app/pages/clan/clan/clan.module.ts ***!
  \************************************************/
/*! exports provided: ClanPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClanPageModule", function() { return ClanPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _clan_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clan-routing.module */ "./src/app/pages/clan/clan/clan-routing.module.ts");
/* harmony import */ var _clan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clan.page */ "./src/app/pages/clan/clan/clan.page.ts");







var ClanPageModule = /** @class */ (function () {
    function ClanPageModule() {
    }
    ClanPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _clan_routing_module__WEBPACK_IMPORTED_MODULE_5__["ClanPageRoutingModule"]
            ],
            declarations: [_clan_page__WEBPACK_IMPORTED_MODULE_6__["ClanPage"]]
        })
    ], ClanPageModule);
    return ClanPageModule;
}());



/***/ }),

/***/ "./src/app/pages/clan/clan/clan.page.scss":
/*!************************************************!*\
  !*** ./src/app/pages/clan/clan/clan.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NsYW4vY2xhbi9jbGFuLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/clan/clan/clan.page.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/clan/clan/clan.page.ts ***!
  \**********************************************/
/*! exports provided: ClanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClanPage", function() { return ClanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ClanPage = /** @class */ (function () {
    function ClanPage() {
    }
    ClanPage.prototype.ngOnInit = function () {
    };
    ClanPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clan',
            template: __webpack_require__(/*! raw-loader!./clan.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/clan/clan/clan.page.html"),
            styles: [__webpack_require__(/*! ./clan.page.scss */ "./src/app/pages/clan/clan/clan.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ClanPage);
    return ClanPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-clan-clan-clan-module-es5.js.map