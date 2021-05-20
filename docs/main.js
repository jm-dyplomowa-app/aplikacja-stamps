(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\#moje\dev\workspace\DYPLOMOWA\src\main.ts */"zUnb");


/***/ }),

/***/ "0m0R":
/*!*****************************************!*\
  !*** ./src/app/promos/promos.module.ts ***!
  \*****************************************/
/*! exports provided: PromosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromosModule", function() { return PromosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _promos_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./promos-routing.module */ "dPrX");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");










class PromosModule {
}
PromosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PromosModule });
PromosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PromosModule_Factory(t) { return new (t || PromosModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _promos_routing_module__WEBPACK_IMPORTED_MODULE_2__["PromosRoutingModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorageModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase, 'cloud'),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PromosModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _promos_routing_module__WEBPACK_IMPORTED_MODULE_2__["PromosRoutingModule"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorageModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PromosModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _promos_routing_module__WEBPACK_IMPORTED_MODULE_2__["PromosRoutingModule"],
                    _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorageModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase, 'cloud'),
                ],
                providers: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "2JUs":
/*!**************************************!*\
  !*** ./src/app/auth/auth.actions.ts ***!
  \**************************************/
/*! exports provided: login, logout, updateAuthUserData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAuthUserData", function() { return updateAuthUserData; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const login = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Login Page] Load User Profile', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const logout = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Profile Page] User Logged Out');
const updateAuthUserData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Promos Public] Update auth user data ', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "4Gne":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/wrong-page/wrong-page.component.ts ***!
  \**********************************************************************/
/*! exports provided: WrongPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrongPageComponent", function() { return WrongPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class WrongPageComponent {
    constructor() { }
    ngOnInit() { }
}
WrongPageComponent.ɵfac = function WrongPageComponent_Factory(t) { return new (t || WrongPageComponent)(); };
WrongPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WrongPageComponent, selectors: [["app-wrong-page"]], decls: 3, vars: 0, consts: [[1, "bg"], [1, "message"]], template: function WrongPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Podana strona nie istnieje... :(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".bg[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  align-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100%;\n  padding: 2rem;\n  background: #ffb98d;\n  background: linear-gradient(144deg, #ffe87f 0%, #ffb98d 100%);\n  overflow: hidden;\n}\n\n.message[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 900;\n  align-self: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvd3JvbmctcGFnZS93cm9uZy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvc3R5bGVzL21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VDYUUsYUFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkRBQUE7RUFNQSxnQkFBQTtBRGxCRjs7QUFMQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBUUYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy93cm9uZy1wYWdlL3dyb25nLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi8uLi8uLi9zdHlsZXMvbWl4aW5zLnNjc3NcIjtcclxuXHJcbi5iZyB7XHJcbiAgQGluY2x1ZGUgd3JhcHBlci15ZWxsb3ctZmxleDtcclxufVxyXG5cclxuLm1lc3NhZ2Uge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG4iLCJAaW1wb3J0IFwiLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuQG1peGluIHdyYXBwZXIteWVsbG93IHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMTg1LCAxNDEpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDE0NGRlZyxcclxuICAgIHJnYmEoMjU1LCAxODUsIDE0MSwgMSkgMCUsXHJcbiAgICByZ2JhKDI1NSwgMjMyLCAxMjcsIDEpIDEwMCVcclxuICApO1xyXG59XHJcblxyXG5AbWl4aW4gd3JhcHBlci15ZWxsb3ctZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMTg1LCAxNDEpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDE0NGRlZyxcclxuICAgIHJnYmEoMjU1LCAyMzIsIDEyNywgMSkgMCUsXHJcbiAgICByZ2JhKDI1NSwgMTg1LCAxNDEsIDEpIDEwMCVcclxuICApO1xyXG5cclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5AbWl4aW4gd3JhcHBlci1ibHVlLWZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgxNTksIDE2OSwgMjE4LCAxKSAwJSwgcmdiKDkwLCA5MCwgMTgwKSAxMDAlKTtcclxuXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLy8gIyMjIEZPUk1TICMjI1xyXG5cclxuLy8gIyBGT1JNIC0gQVVUSCAjXHJcbkBtaXhpbiBmb3JtLWF1dGgge1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDMwdnc7XHJcbiAgYm94LXNoYWRvdzogMCAwLjFyZW0gMC4zcmVtIDAuMXJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBiYWNrZ3JvdW5kOiAkZm9ybS1iYWNrZ3JvdW5kO1xyXG4gIGJvcmRlcjogJGZvcm0tYm9yZGVyLXdpZHRoIHNvbGlkICRmb3JtLWJvcmRlci1jb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiAkZm9ybS1ib3JkZXItcmFkaXVzO1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDE4NSwgMTQxKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAxNDRkZWcsXHJcbiAgICByZ2JhKDI1NSwgMjMyLCAxMjcsIDEpIDAlLFxyXG4gICAgcmdiYSgyNTUsIDE4NSwgMTQxLCAxKSAxMDAlXHJcbiAgKTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxuICAmX19sYWJlbCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC40cmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAycmVtO1xyXG5cclxuICAgICYtLWltYWdlIHtcclxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBoZWlnaHQ6IDV2aDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgICYtLWltYWdlLXJlc3VsdCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGZvcm0tYXV0aC1pbnB1dC1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBtYXJnaW46IDAuM3JlbTtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zNXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgJi0tZXNzZW50aWFscyB7XHJcbiAgICBncmlkLXJvdzogMSAvIHNwYW4gMjtcclxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xyXG4gIH1cclxuXHJcbiAgJi0tcHJpemUge1xyXG4gICAgZ3JpZC1yb3c6IDMgLyBzcGFuIDI7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcclxuICB9XHJcbiAgJi0tcG9pbnRzIHtcclxuICAgIGdyaWQtcm93OiA1IC8gc3BhbiAyO1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7XHJcbiAgfVxyXG5cclxuICAmLS1pbWFnZSB7XHJcbiAgICBncmlkLXJvdzogMSAvIHNwYW4gMTtcclxuICAgIGdyaWQtY29sdW1uOiAzIC8gc3BhbiAyO1xyXG4gICAgcGFkZGluZzogMC40cmVtO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuXHJcbiAgJi0taW1hZ2UtcmVzdWx0IHtcclxuICAgIGdyaWQtcm93OiAzIC8gc3BhbiA1O1xyXG4gICAgZ3JpZC1jb2x1bW46IDMgLyBzcGFuIDQ7XHJcbiAgICBib3JkZXI6IDAuMDJyZW0gc29saWQgJGlucHV0LWJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICB9XHJcbiAgJi0tYnV0dG9ucyB7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBncmlkLXJvdzogMSAvIHNwYW4gMTtcclxuICAgIGdyaWQtY29sdW1uOiA1IC8gc3BhbiAyO1xyXG4gICAgcGFkZGluZzogMC40cmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxZW0gM2VtO1xyXG4gIH1cclxuXHJcbiAgJi0tcmVzdWx0IHtcclxuICAgIGdyaWQtcm93OiA1IC8gc3BhbiAyO1xyXG4gICAgZ3JpZC1jb2x1bW46IDMgLyBzcGFuIDI7XHJcbiAgICBib3JkZXI6ICRmb3JtLWJvcmRlci13aWR0aCBzb2xpZCAkZm9ybS1idXR0b24tYm9yZGVyLWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgJi0tbWVzc2FnZSB7XHJcbiAgICBncmlkLXJvdzogMiAvIHNwYW4gMTtcclxuXHJcbiAgICBncmlkLWNvbHVtbjogMyAvIHNwYW4gNDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGJhY2tncm91bmQ6ICRmb3JtLW1lc3NhZ2UtYmFja2dyb3VuZDtcclxuICAgIGJvcmRlcjogJGZvcm0tYm9yZGVyLXdpZHRoIHNvbGlkICRmb3JtLW1lc3NhZ2UtYmFja2dyb3VuZDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLWF1dGgtaW5wdXQtd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgbWFyZ2luOiAwLjJyZW0gMDtcclxufVxyXG5cclxuQG1peGluIGZvcm0tYXV0aC1tZXNzYWdlIHtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBoZWlnaHQ6IDR2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1hdXRoLWJ1dHRvbnMge1xyXG4gIGhlaWdodDogNnZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBtYXJnaW46IDAuNHJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XHJcbiAgYm9yZGVyOiAkZm9ybS1ib3JkZXItd2lkdGggc29saWQgJGZvcm0tYnV0dG9uLWJvcmRlci1jb2xvcjtcclxuICBib3JkZXI6IDAuMDZyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAkZm9ybS1idXR0b24tYmFja2dyb3VuZDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogJGZvcm0tYnV0dG9uLWJhY2tncm91bmQtLWhvdmVyO1xyXG4gIH1cclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZm9ybS1idXR0b24tYmFja2dyb3VuZC0tZm9jdXM7XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZm9ybS1idXR0b24tYmFja2dyb3VuZC0tYWN0aXZlO1xyXG4gIH1cclxuXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1hdXRoLWlucHV0IHtcclxuICBib3JkZXI6IDAuMDZyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICB3aWR0aDogMjR2dztcclxuICBwYWRkaW5nOiAwIDEuM3JlbTtcclxuICBoZWlnaHQ6IDd2aDtcclxuICBtYXJnaW46IDAuMzVyZW07XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbn1cclxuXHJcbi8vICMgRk9STSAtIFBST01PU1xyXG5cclxuQG1peGluIGZvcm0tcHJvbW8tYmFzZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG5cclxuICBoZWlnaHQ6IDkwdmg7XHJcbiAgd2lkdGg6IDkwdnc7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBib3gtc2hhZG93OiAwIDAuMXJlbSAwLjNyZW0gMC4xcmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGJvcmRlcjogJGZvcm0tYm9yZGVyLXdpZHRoIHNvbGlkICRmb3JtLWJvcmRlci1jb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiAkZm9ybS1ib3JkZXItcmFkaXVzO1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDE4NSwgMTQxKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAxNDRkZWcsXHJcbiAgICByZ2JhKDI1NSwgMjMyLCAxMjcsIDEpIDAlLFxyXG4gICAgcmdiYSgyNTUsIDE4NSwgMTQxLCAxKSAxMDAlXHJcbiAgKTtcclxuXHJcbiAgJl9fc2VjdGlvbiB7XHJcbiAgICB3aWR0aDogNDV2dztcclxuICAgIGhlaWdodDogODZ2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1wcm9tby1pbnB1dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlcjogMC4wNnJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogOCU7XHJcbiAgcGFkZGluZzogMC44ZW07XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1wcm9tby1pbnB1dC13cmFwcGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDAuNzVyZW0gMDtcclxufVxyXG5cclxuQG1peGluIGZvcm0tcHJvbW8tbWVzc2FnZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1wcm9tby1tZXNzYWdlLXdyYXBwZXIge1xyXG4gIGhlaWdodDogNSU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBsaW5lLWJyZWFrOiBzdHJpY3Q7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuQG1peGluIGZvcm0tcHJvbW8tZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDQwdnc7XHJcbiAgaGVpZ2h0OiA4NnZoO1xyXG4gIG1hcmdpbjogMC4zcmVtO1xyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4xcmVtO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDAgMC4xcmVtIDAuM3JlbSAwLjFyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICZfX2xhYmVsIHtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjJyZW07XHJcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogcmdiKDEwMCwgMTAwLCAyMDApO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcbiAgJi0tYnV0dG9ucyB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuXHJcbiAgJi0tcmVzdWx0IHtcclxuICAgIGJvcmRlcjogJGZvcm0tYm9yZGVyLXdpZHRoIHNvbGlkICRmb3JtLWJ1dHRvbi1ib3JkZXItY29sb3I7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1wcm9tby1idXR0b25zIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgbWFyZ2luOiAwLjRyZW07XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIG1hcmdpbjogMC43NXJlbSAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udDogNDAwIDAuOXJlbSBSb2JvdG87XHJcblxyXG4gIG1pbi1oZWlnaHQ6IDV2aDtcclxuXHJcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xyXG4gIGJvcmRlcjogMC4wNnJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZm9ybS1idXR0b24tYmFja2dyb3VuZC0taG92ZXI7XHJcbiAgfVxyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQ6ICRmb3JtLWJ1dHRvbi1iYWNrZ3JvdW5kLS1mb2N1cztcclxuICB9XHJcblxyXG4gICY6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICRmb3JtLWJ1dHRvbi1iYWNrZ3JvdW5kLS1hY3RpdmU7XHJcbiAgfVxyXG5cclxuICAmOmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcclxuICB9XHJcbn1cclxuXHJcbi8vICMjIyBUYWJsZSAjIyNcclxuQG1peGluIHRhYmxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4xcmVtO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDAgMC4xcmVtIDAuM3JlbSAwLjFyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGJvcmRlci1zcGFjaW5nOiAwcHg7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG5cclxuICAmX19oZWFkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICZfX2JvZHkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIH1cclxuXHJcbiAgJl9fcm93IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGhlaWdodDogN3ZoO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyOiAwLjA1cmVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuXHJcbiAgICAmLS1oZWFkIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMC4xcmVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE4NSwgMTQxLCAwLjUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gY2VsbCB7XHJcbiAgZmxleDogMSAxIDEwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci1yaWdodDogbm9uZTtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBib3JkZXItcmlnaHQ6IDAuMDFyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG5cclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG5cclxuICAmOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmLS1kYXRhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5cclxuICAkYmFja2dyb3VuZDE6IHJnYmEoMjMzLCAxNTIsIDY3LCAwLjIpO1xyXG4gICRiYWNrZ3JvdW5kMjogcmdiYSgyNTIsIDE3NSwgMTEsIDAuMik7XHJcblxyXG4gICYtLXByb21vLW5hbWUge1xyXG4gICAgZmxleDogMSAxIDEzMHB4O1xyXG4gIH1cclxuXHJcbiAgJi0tcHJvbW8tZGVzY3JpcHRpb24ge1xyXG4gICAgZmxleDogMSAwIDE1MHB4O1xyXG4gIH1cclxuXHJcbiAgJi0tdmVuZG9yLWVtYWlsIHtcclxuICAgIGZsZXg6IDEgMCAxNTBweDtcclxuICB9XHJcblxyXG4gICYtLWFkZHJlc3Mtc3RvcmUge1xyXG4gICAgZmxleDogMSAxIDEzMHB4O1xyXG4gIH1cclxuXHJcbiAgJi0tcHJvbW8tZGV0YWlscyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDE7XHJcbiAgfVxyXG4gICYtLXByaXplIHtcclxuICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kMTtcclxuICB9XHJcblxyXG4gICYtLXF1YW50aXR5IHtcclxuICAgIGZsZXg6IDEgMSA1NXB4O1xyXG4gIH1cclxuXHJcbiAgJi0tcG9pbnRzIHtcclxuICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kMTtcclxuICAgIGZsZXg6IDEgMSA1NXB4O1xyXG4gIH1cclxuXHJcbiAgJi0tcGFydGljaXBhbnRzIHtcclxuICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kMTtcclxuICB9XHJcblxyXG4gICYtLXBhcnRpY2lwYW50cy10b3RhbCB7XHJcbiAgICBmbGV4OiAxIDEgNTVweDtcclxuICB9XHJcblxyXG4gICYtLXBhcnRpY2lwYW50cy1saXN0IHtcclxuICAgIGZsZXg6IDEgMSA1NXB4O1xyXG4gIH1cclxuXHJcbiAgJi0tbWV0YWRhdGEge1xyXG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQxO1xyXG4gIH1cclxuXHJcbiAgJi0tY3JlYXRlZC1vbiB7XHJcbiAgICBmbGV4OiAxIDEgNTVweDtcclxuICB9XHJcblxyXG4gICYtLWFjdGl2ZSB7XHJcbiAgICBmbGV4OiAxIDEgNDVweDtcclxuICB9XHJcblxyXG4gICYtLWFjdGlvbnMge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMjUsIDIyNSwgMjI1LCAxKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJl9fbGFiZWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gdGFibGUtYWN0aW9uLWxhYmVsIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIHRleHQtc2hhZG93OiAwLjExcmVtIDAuMTFyZW0gMC4xcmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XHJcbiAgcGFkZGluZzogMC4yNmVtIDAuNDJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIG1hcmdpbjogMCAwLjJyZW07XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgY29sb3I6ICNmZmY7XHJcblxyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTI1JSk7XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTUwJSk7XHJcbiAgfVxyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygoMjAwJSkpO1xyXG4gIH1cclxuXHJcbiAgJi0tZWRpdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNTUsIDIwMCwgMTAwKTtcclxuICB9XHJcblxyXG4gICYtLWRlbGV0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAxMDAsIDApO1xyXG4gIH1cclxuXHJcbiAgJi0tbGlzdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTAwLCAxMDAsIDIyMCk7XHJcbiAgfVxyXG5cclxuICAmLS1kaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTUwLCAxNTAsIDE1MCk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gdGFibGUtcGFydHMge1xyXG4gIC50YWJsZSB7XHJcbiAgICBAaW5jbHVkZSB0YWJsZTtcclxuICB9XHJcblxyXG4gIC5jZWxsIHtcclxuICAgIEBpbmNsdWRlIGNlbGw7XHJcbiAgfVxyXG5cclxuICAuYWN0aW9uLWxhYmVsIHtcclxuICAgIEBpbmNsdWRlIHRhYmxlLWFjdGlvbi1sYWJlbDtcclxuICB9XHJcblxyXG4gIC5jZWxsLS1kYXRhLmNlbGwtLXByb21vLWRlc2NyaXB0aW9uLFxyXG4gIC5jZWxsLS1kYXRhLmNlbGwtLXByaXplLWRlc2NyaXB0aW9uIHtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WrongPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-wrong-page',
                templateUrl: './wrong-page.component.html',
                styleUrls: ['./wrong-page.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "5W12":
/*!**************************************!*\
  !*** ./src/app/auth/auth.reducer.ts ***!
  \**************************************/
/*! exports provided: featureKey, initialAuthState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "featureKey", function() { return featureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialAuthState", function() { return initialAuthState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.actions */ "2JUs");


const featureKey = 'auth';
const initialAuthState = {
    userProfile: null,
};
const authReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialAuthState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_auth_actions__WEBPACK_IMPORTED_MODULE_1__["login"], (state, { userProfile }) => {
    return Object.assign(Object.assign({}, state), { userProfile });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_auth_actions__WEBPACK_IMPORTED_MODULE_1__["logout"], (state) => {
    return Object.assign(Object.assign({}, state), { userProfile: null });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_auth_actions__WEBPACK_IMPORTED_MODULE_1__["updateAuthUserData"], (state, { user }) => {
    return Object.assign(Object.assign({}, state), { userProfile: user });
}));
function reducer(state, action) {
    return authReducer(state, action);
}


/***/ }),

/***/ "6uPG":
/*!*********************************************!*\
  !*** ./src/app/auth/auth.routing-module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.guard */ "P+IX");
/* harmony import */ var _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log-in/log-in.component */ "MaAH");
/* harmony import */ var _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile-page/profile-page.component */ "VTDY");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "ZGml");








const routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: 'log-in', pathMatch: 'full' },
            { path: 'log-in', component: _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_3__["LogInComponent"] },
            {
                path: 'profile',
                component: _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_4__["ProfilePageComponent"],
                canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
                data: {
                    exptectedRoles: ['customer', 'vendor'],
                },
            },
            { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
        ],
    },
];
class AuthRoutingModule {
}
AuthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthRoutingModule });
AuthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthRoutingModule_Factory(t) { return new (t || AuthRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "8ifR":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/auth */ "i6m5");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "qXBG");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







const _c0 = function () { return ["promos"]; };
const _c1 = function () { return { exact: true }; };
const _c2 = function () { return ["customer/promos"]; };
function NavbarComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "dost\u0119pne PROMOCJE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "MOJE PROMOCJE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
} }
const _c3 = function () { return ["vendor/promos"]; };
const _c4 = function () { return ["vendor/promos/add"]; };
const _c5 = function () { return ["/vendor/promo/give-prize"]; };
function NavbarComponent_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "dost\u0119pne PROMOCJE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "PROMOCJE SKLEPU");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "DODAJ PROMOCJ\u0118");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "PRZYZNAJ NAGROD\u0118");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c3))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c4))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c5))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c1));
} }
const _c6 = function () { return ["auth/profile"]; };
function NavbarComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavbarComponent_ng_container_1_ng_container_1_Template, 5, 8, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavbarComponent_ng_container_1_ng_container_2_Template, 9, 16, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Profil ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_ng_container_1_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.auth.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Wyloguj ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const user_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r3.role === "customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r3.role === "vendor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, user_r3.email), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c6));
} }
const _c7 = function () { return ["auth/register"]; };
const _c8 = function () { return ["auth/log-in"]; };
function NavbarComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "dost\u0119pne PROMOCJE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Rejestracja");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Logowanie");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c7));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c8));
} }
class NavbarComponent {
    constructor(auth, store) {
        this.auth = auth;
        this.store = store;
        this.user$ = this.store.select(src_app_auth__WEBPACK_IMPORTED_MODULE_1__["selectAuthUserProfile"]);
    }
    logout() {
        this.auth.logout();
    }
    ngOnDestroy() {
        this.logout();
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 5, vars: 4, consts: [[1, "header"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [4, "ngIf"], [1, "dropdown"], [1, "dropdown__button"], [1, "dropdown__chevron"], [1, "dropdown__content"], ["routerLinkActive", "active", 1, "header__item", 3, "routerLink"], ["routerLinkActive", "active", 1, "header__item", 3, "routerLink", "click"], ["routerLinkActive", "active", 1, "header__item", 3, "routerLink", "routerLinkActiveOptions"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavbarComponent_ng_container_1_Template, 13, 9, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavbarComponent_ng_template_3_Template, 6, 6, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.user$))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LowerCasePipe"]], styles: [".header[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 20;\n  box-shadow: 0 0.1rem 0.3rem 0.1rem rgba(0, 0, 0, 0.2);\n  width: 100vw;\n  height: 8vh;\n  padding: 0;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  align-content: center;\n  background: #5a64c8;\n}\n.header__item[_ngcontent-%COMP%] {\n  color: white;\n  text-shadow: 0.11rem 0.11rem 0.1rem rgba(0, 0, 0, 0.35);\n  display: flex;\n  align-items: center;\n  align-content: center;\n  text-transform: uppercase;\n  height: 100%;\n  padding: 0em 2em;\n}\n.header__item[_ngcontent-%COMP%]:hover {\n  background: #4650b4;\n}\n.header__section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-end;\n  text-align: right;\n  justify-content: right;\n  align-self: flex-end;\n}\n.active[_ngcontent-%COMP%] {\n  color: #ffe87f;\n}\n.dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  width: auto;\n  display: flex;\n  justify-content: center;\n  padding: 0em 2em;\n  text-shadow: 0.11rem 0.11rem 0.1rem rgba(0, 0, 0, 0.35);\n  white-space: nowrap;\n  height: 100%;\n}\n.dropdown[_ngcontent-%COMP%]:hover {\n  background: #4650b4;\n}\n.dropdown__chevron[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n          user-select: none;\n  margin: 0 0.5rem;\n  padding: 0.25rem;\n  transform: rotate(45deg);\n  border: 0.1rem solid white;\n  border-top: none;\n  border-left: none;\n}\n.dropdown__button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  width: 100%;\n  text-align: center;\n  color: white;\n}\n.dropdown__content[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  background-color: #f1f1f1;\n  background: #fff7e8;\n  top: 55%;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n.dropdown__content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  padding: 0.8em 2.2em;\n  text-decoration: none;\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  text-shadow: none;\n  font-size: 0.9rem;\n  text-shadow: 0.11rem 0.11rem 0.1rem rgba(0, 0, 0, 0.35);\n  background: #646ed2;\n}\n.dropdown__content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #8282e6;\n}\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown__content[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHFEQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLFlBQUE7RUFDQSx1REFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUFJO0VBQ0UsbUJBQUE7QUFFTjtBQUVFO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFBSjtBQUlBO0VBQ0UsY0FBQTtBQURGO0FBSUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVEQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBREY7QUFHRTtFQUNFLG1CQUFBO0FBREo7QUFJRTtFQUNFLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFGSjtBQUtFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFISjtBQU1FO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUVBLFFBQUE7RUFDQSwrQ0FBQTtFQUNBLFVBQUE7QUFMSjtBQVNBO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdURBQUE7RUFFQSxtQkFBQTtBQVBGO0FBUUU7RUFDRSxtQkFBQTtBQU5KO0FBVUE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQVBGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAyMDtcclxuICBib3gtc2hhZG93OiAwIDAuMXJlbSAwLjNyZW0gMC4xcmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiA4dmg7XHJcbiAgcGFkZGluZzogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogcmdiKDkwLCAxMDAsIDIwMCk7XHJcblxyXG4gICZfX2l0ZW0ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAuMTFyZW0gMC4xMXJlbSAwLjFyZW0gcmdiYSgwLCAwLCAwLCAwLjM1KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDBlbSAyZW07XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiKDcwLCA4MCwgMTgwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX3NlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGp1c3RpZnktY29udGVudDogcmlnaHQ7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICB9XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjMyLCAxMjcsIDEpO1xyXG59XHJcblxyXG4uZHJvcGRvd24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDBlbSAyZW07XHJcbiAgdGV4dC1zaGFkb3c6IDAuMTFyZW0gMC4xMXJlbSAwLjFyZW0gcmdiYSgwLCAwLCAwLCAwLjM1KTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNzAsIDgwLCAxODApO1xyXG4gIH1cclxuXHJcbiAgJl9fY2hldnJvbiB7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIG1hcmdpbjogMCAwLjVyZW07XHJcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgYm9yZGVyOiAwLjFyZW0gc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmX19idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgJl9fY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI0NywgMjMyKTtcclxuXHJcbiAgICB0b3A6IDU1JTtcclxuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbn1cclxuXHJcbi5kcm9wZG93bl9fY29udGVudCBhIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAwLjhlbSAyLjJlbTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgdGV4dC1zaGFkb3c6IDAuMTFyZW0gMC4xMXJlbSAwLjFyZW0gcmdiYSgwLCAwLCAwLCAwLjM1KTtcclxuXHJcbiAgYmFja2dyb3VuZDogcmdiKDEwMCwgMTEwLCAyMTApO1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDEzMCwgMTMwLCAyMzApO1xyXG4gIH1cclxufVxyXG5cclxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bl9fY29udGVudCB7XHJcbiAgbWFyZ2luLXRvcDogMWVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss'],
            }]
    }], function () { return [{ type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAWnREgHGxTJm5VLeU3Y7nmPf4e9zTqAwg",
        authDomain: "dyplomowa-app-0.firebaseapp.com",
        databaseURL: "https://dyplomowa-app-0.firebaseio.com",
        projectId: "dyplomowa-app-0",
        storageBucket: "dyplomowa-app-0.appspot.com",
        messagingSenderId: "460840839298",
        appId: "1:460840839298:web:768b5d0e35d11ec2a76c9b",
        measurementId: "G-ENQW880JRE"
    }
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

/***/ "L3EA":
/*!*********************************!*\
  !*** ./src/app/fire.service.ts ***!
  \*********************************/
/*! exports provided: FireService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireService", function() { return FireService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");







class FireService {
    constructor(afAuth, router, db, storage) {
        this.afAuth = afAuth;
        this.router = router;
        this.db = db;
        this.storage = storage;
    }
    getUsersCollectionRef() {
        return this.getCollectionRef('users');
    }
    getPromosCollectionRef() {
        return this.getCollectionRef('promos');
    }
    getCouponsCollectionRef() {
        return this.getCollectionRef('coupons');
    }
    addUserToCollection(role, uid, userData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const newUser = Object.assign(Object.assign({ uid }, userData), { role, promos: [] });
            this.db
                .collection('users')
                .doc(uid)
                .set(Object.assign({}, newUser))
                .then(() => {
                this.router.navigateByUrl('auth/log-in');
            })
                .catch((error) => {
                console.log('Something went wrong: ', error);
            });
        });
    }
    createFireAuthAndUser(email, password, data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.afAuth.createUserWithEmailAndPassword(email, password);
        });
    }
    fireAuthenticate(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.afAuth.signInWithEmailAndPassword(email, password);
        });
    }
    signOut() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.afAuth.signOut();
            this.router.navigate(['auth/log-in']);
        });
    }
    get fireAuth$() {
        return this.afAuth.user;
    }
    getCollectionRef(name) {
        return this.db.collection(name);
    }
}
FireService.ɵfac = function FireService_Factory(t) { return new (t || FireService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"])); };
FireService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FireService, factory: FireService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FireService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }, { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"] }]; }, null); })();


/***/ }),

/***/ "MaAH":
/*!*************************************************!*\
  !*** ./src/app/auth/log-in/log-in.component.ts ***!
  \*************************************************/
/*! exports provided: LogInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInComponent", function() { return LogInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.actions */ "2JUs");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth.service */ "qXBG");
/* harmony import */ var src_app_fire_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/fire.service */ "L3EA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "l7P3");











class LogInComponent {
    constructor(auth, fire, fb, router, store) {
        this.auth = auth;
        this.fire = fire;
        this.fb = fb;
        this.router = router;
        this.store = store;
        this.message = '';
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
    }
    ngOnInit() {
        this.initForm();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.onReset();
    }
    checkAuth(data) {
        const uid = data.user.uid;
        this.subscription.add(this.auth.fireAuth$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((data) => {
            if (data) {
                return this.fire.getUsersCollectionRef().doc(uid).get();
            }
        }))
            .subscribe((data) => {
            if (data) {
                this.store.dispatch(Object(_auth_actions__WEBPACK_IMPORTED_MODULE_2__["login"])({ userProfile: data.data() }));
                this.auth.isLogged = true;
                if (this.auth.isLogged) {
                    this.message = 'Logged in. ';
                    this.router.navigate(['auth/profile']);
                }
            }
            else {
                this.message +=
                    'User is logged in but no profile data is available. ';
            }
        }, (err) => {
            this.message = err.message;
        }, () => { }));
    }
    authenticate(email, password) {
        this.auth.login(email, password).then((data) => this.checkAuth(data), (err) => {
            this.message = err.message;
        });
    }
    onSubmit(userEmail, userPassword) {
        let email = null;
        let password = null;
        if (userEmail && userPassword) {
            email = userEmail;
            password = userPassword;
        }
        else if (this.form.valid) {
            email = this.form.value['email'];
            password = this.form.value['password'];
        }
        if (email && password) {
            this.authenticate(email, password);
        }
        else {
            this.message = 'Please provide credentials. ';
        }
    }
    initForm() {
        let group = {};
        group['email'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
        ]);
        group['password'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(8),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
        ]);
        this.form = this.fb.group(group);
    }
    onReset() {
        this.message = '';
        this.form.reset();
    }
}
LogInComponent.ɵfac = function LogInComponent_Factory(t) { return new (t || LogInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_fire_service__WEBPACK_IMPORTED_MODULE_6__["FireService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"])); };
LogInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogInComponent, selectors: [["app-log-in"]], decls: 26, vars: 3, consts: [[1, "wrapper"], [1, "form", 3, "formGroup", "ngSubmit", "reset"], [1, "input-group", "input-group--points"], [1, "input-wrapper"], ["for", "email", 1, "form__label"], ["type", "email", "name", "email", "formControlName", "email", 1, "form__input"], ["for", "password", 1, "form__label"], ["type", "password", "name", "password", "formControlName", "password", 1, "form__input"], [1, "input-group", "input-group--buttons"], ["type", "reset", 1, "button", "buttons"], ["type", "submit", 1, "button", "buttons", 3, "disabled"], [1, "message"], [1, "logins", "dev-test"], [1, "logins-message"], [1, "logins-section"], [1, "login", 3, "click"]], template: function LogInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LogInComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); })("reset", function LogInComponent_Template_form_reset_1_listener() { return ctx.onReset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " has\u0142o ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Wyczy\u015B\u0107");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Wy\u015Blij ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Zaloguj si\u0119 jako:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LogInComponent_Template_button_click_22_listener() { return ctx.onSubmit("vendor@gmail.com", "vendor@gmail.com"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " VENDOR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LogInComponent_Template_button_click_24_listener() { return ctx.onSubmit("customer@gmail.com", "customer@gmail.com"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " CUSTOMER ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100%;\n  background: linear-gradient(#9fa9da 0%, #5a5ab4 100%);\n  overflow: hidden;\n}\n\n.form[_ngcontent-%COMP%] {\n  align-self: center;\n  justify-self: center;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: auto;\n  width: 30vw;\n  box-shadow: 0 0.1rem 0.3rem 0.1rem rgba(0, 0, 0, 0.2);\n  padding: 2rem;\n  background: #f0f0f0;\n  border: 0.1rem solid transparent;\n  border-radius: 0.2rem;\n  background: #ffb98d;\n  background: linear-gradient(144deg, #ffe87f 0%, #ffb98d 100%);\n  text-transform: uppercase;\n}\n\n.form__label[_ngcontent-%COMP%] {\n  padding-bottom: 0.4rem;\n  font-size: 1rem;\n  font-weight: 500;\n  letter-spacing: 0.02rem;\n}\n\n.form__label--image[_ngcontent-%COMP%] {\n  align-self: center;\n  display: flex;\n  text-align: center;\n  padding: 0;\n  justify-content: center;\n  align-items: center;\n  height: 5vh;\n  width: 100%;\n  background: white;\n}\n\n.form__label--image-result[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n}\n\n.input-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  margin: 0.3rem;\n  font-size: 0.75rem;\n  border-radius: 0.35rem;\n  width: 100%;\n}\n\n.input-group--essentials[_ngcontent-%COMP%] {\n  grid-row: 1/span 2;\n  grid-column: 1/span 2;\n}\n\n.input-group--prize[_ngcontent-%COMP%] {\n  grid-row: 3/span 2;\n  grid-column: 1/span 2;\n}\n\n.input-group--points[_ngcontent-%COMP%] {\n  grid-row: 5/span 2;\n  grid-column: 1/span 2;\n}\n\n.input-group--image[_ngcontent-%COMP%] {\n  grid-row: 1/span 1;\n  grid-column: 3/span 2;\n  padding: 0.4rem;\n  justify-content: space-between;\n}\n\n.input-group--image-result[_ngcontent-%COMP%] {\n  grid-row: 3/span 5;\n  grid-column: 3/span 4;\n  border: 0.02rem solid #787878;\n  border: none;\n  padding: 0;\n  height: auto;\n  max-width: 100%;\n  overflow: scroll;\n}\n\n.input-group--buttons[_ngcontent-%COMP%] {\n  align-items: stretch;\n  flex-direction: row;\n  grid-row: 1/span 1;\n  grid-column: 5/span 2;\n  padding: 0.4rem;\n  width: 100%;\n  padding: 1em 3em;\n}\n\n.input-group--result[_ngcontent-%COMP%] {\n  grid-row: 5/span 2;\n  grid-column: 3/span 2;\n  border: 0.1rem solid #c0bec6;\n}\n\n.input-group--message[_ngcontent-%COMP%] {\n  grid-row: 2/span 1;\n  grid-column: 3/span 4;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 2rem;\n  font-weight: 600;\n  background: #d4d2da;\n  border: 0.1rem solid #d4d2da;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  height: 6vh;\n  width: 100%;\n  margin: 0.4rem;\n  text-transform: uppercase;\n  font-family: Roboto;\n  font-size: 0.9rem;\n  font-weight: 400;\n  border-radius: 0.3rem;\n  border: 0.1rem solid #c0bec6;\n  border: 0.06rem solid rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n  background: #e8e6ee;\n  background: #fff;\n}\n\n.buttons[_ngcontent-%COMP%]:hover {\n  background: #edebf3;\n}\n\n.buttons[_ngcontent-%COMP%]:focus {\n  background: #f2f0f8;\n}\n\n.buttons[_ngcontent-%COMP%]:active {\n  background: #f7f7fd;\n}\n\n.buttons[_ngcontent-%COMP%]:disabled {\n  background: lightgrey;\n}\n\n.input-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  padding: 0.4rem;\n  margin: 0.2rem 0;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: 0.06rem solid rgba(0, 0, 0, 0.2);\n  background: #fff;\n  border-radius: 0.25rem;\n  width: 24vw;\n  padding: 0 1.3rem;\n  height: 7vh;\n  margin: 0.35rem;\n  font-size: 1.4rem;\n}\n\n.message[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  height: 4vh;\n  width: 100%;\n  font-weight: 500;\n}\n\n.logins[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  margin-bottom: 0.2rem;\n  transform: translate(-50%);\n}\n\n.logins-section[_ngcontent-%COMP%] {\n  position: relative;\n  width: 22vw;\n  height: 12vh;\n  display: flex;\n  justify-content: space-evenly;\n  align-content: center;\n  align-items: center;\n}\n\n.logins-message[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #fff;\n}\n\n.logins-message[_ngcontent-%COMP%]::before {\n  font-weight: 700;\n  color: #ff5555;\n  display: block;\n  content: \"DEV & TEST\";\n  margin-bottom: 1rem;\n}\n\n.login[_ngcontent-%COMP%] {\n  position: relative;\n  border: 0.1rem #fff solid;\n  border-radius: 6px;\n  height: 40%;\n  width: 40%;\n  cursor: pointer;\n  background: white;\n  font-size: 1rem;\n  text-transform: uppercase;\n  background: #a9a9da;\n  background: linear-gradient(126deg, #a9a9da 0%, #ffe87f 100%);\n}\n\n.login[_ngcontent-%COMP%]:hover {\n  filter: brightness(125%);\n}\n\n.dev-test[_ngcontent-%COMP%] {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAALklEQVQYV2Pca2v73/nwYUYGLAAsiEsBXAdMAbJCFOPQTSBeJ8xNMBOwuhLmSAAMrSI+h/ZUggAAAABJRU5ErkJggg==) repeat;\n}\n\n.dev-test[_ngcontent-%COMP%]:hover {\n  filter: brightness(120%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2ctaW4vbG9nLWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvc3R5bGVzL21peGlucy5zY3NzIiwic3JjL2FwcC9zaGFyZWQvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VDK0JFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHFEQUFBO0VBRUEsZ0JBQUE7QURoQ0Y7O0FBSEE7RUMwQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFEQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQzFEZ0I7RUQyRGhCLGdDQUFBO0VBQ0EscUJDeERtQjtFRHlEbkIsbUJBQUE7RUFDQSw2REFBQTtFQUtBLHlCQUFBO0FEdkNGOztBQ3lDRTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUR2Q0o7O0FDeUNJO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUR2Q047O0FDMENJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FEeENOOztBQXpDQTtFQ3VGRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFFQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUQzQ0Y7O0FDNkNFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBRDNDSjs7QUM4Q0U7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FENUNKOztBQzhDRTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUQ1Q0o7O0FDK0NFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBRDdDSjs7QUNnREU7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBRUEsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUQvQ0o7O0FDaURFO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FEL0NKOztBQ2tERTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtBRGhESjs7QUNtREU7RUFDRSxrQkFBQTtFQUVBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQzNKc0I7RUQ0SnRCLDRCQUFBO0FEbERKOztBQXZHQTtFQzZLRSxXQUFBO0VBQ0EsV0FBQTtFQUVBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3Q0FBQTtFQUNBLGVBQUE7RUFDQSxtQkNsTXVCO0VEbU12QixnQkFBQTtBRG5FRjs7QUNvRUU7RUFDRSxtQkNwTTRCO0FGa0loQzs7QUNxRUU7RUFDRSxtQkN2TTRCO0FGb0loQzs7QUNzRUU7RUFDRSxtQkMxTTZCO0FGc0lqQzs7QUN1RUU7RUFDRSxxQkFBQTtBRHJFSjs7QUEvSEE7RUMwSkUsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUR2QkY7O0FBbklBO0VDcU1FLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUQ5REY7O0FBMUlBO0VDMEpFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBRFpGOztBQTdJQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0FBZ0pGOztBQTdJQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBZ0pGOztBQTdJQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQWdKRjs7QUE5SUU7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQWdKSjs7QUE1SUE7RUFDRSxrQkFBQTtFQUVBLHlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFFQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkRBQUE7QUE0SUY7O0FBdElFO0VBQ0Usd0JBQUE7QUF3SUo7O0FBcElBO0VBQ0UsMExBQUE7QUF1SUY7O0FBcElFO0VBQ0Usd0JBQUE7QUFzSUoiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZy1pbi9sb2ctaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi8uLi8uLi9zaGFyZWQvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCI7XHJcbkBpbXBvcnQgXCIuLy4uLy4uL3NoYXJlZC9zdHlsZXMvbWl4aW5zLnNjc3NcIjtcclxuLndyYXBwZXIge1xyXG4gIEBpbmNsdWRlIHdyYXBwZXItYmx1ZS1mbGV4O1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgQGluY2x1ZGUgZm9ybS1hdXRoO1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAge1xyXG4gIEBpbmNsdWRlIGZvcm0tYXV0aC1pbnB1dC1ncm91cDtcclxufVxyXG5cclxuLmJ1dHRvbnMge1xyXG4gIEBpbmNsdWRlIGZvcm0tYXV0aC1idXR0b25zO1xyXG59XHJcblxyXG4uaW5wdXQtd3JhcHBlciB7XHJcbiAgQGluY2x1ZGUgZm9ybS1hdXRoLWlucHV0LXdyYXBwZXI7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBAaW5jbHVkZSBmb3JtLWF1dGgtaW5wdXQ7XHJcbn1cclxuXHJcbi5tZXNzYWdlIHtcclxuICBAaW5jbHVkZSBmb3JtLWF1dGgtbWVzc2FnZTtcclxufVxyXG5cclxuLmxvZ2lucyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xyXG59XHJcblxyXG4ubG9naW5zLXNlY3Rpb24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMjJ2dztcclxuICBoZWlnaHQ6IDEydmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ2lucy1tZXNzYWdlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmY7XHJcblxyXG4gICY6OmJlZm9yZSB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDg1LCA4NSk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbnRlbnQ6IFwiREVWICYgVEVTVFwiO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5sb2dpbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBib3JkZXI6IDAuMXJlbSAjZmZmIHNvbGlkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuXHJcbiAgaGVpZ2h0OiA0MCU7XHJcbiAgd2lkdGg6IDQwJTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICBmb250LXNpemU6IDFyZW07XHJcblxyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgYmFja2dyb3VuZDogcmdiKDE2OSwgMTY5LCAyMTgpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDEyNmRlZyxcclxuICAgIHJnYmEoMTY5LCAxNjksIDIxOCwgMSkgMCUsXHJcbiAgICByZ2JhKDI1NSwgMjMyLCAxMjcsIDEpIDEwMCVcclxuICApO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMjUlKTtcclxuICB9XHJcbn1cclxuXHJcbi5kZXYtdGVzdCB7XHJcbiAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWNBQUFBSENBWUFBQURFVWxmVEFBQUFMa2xFUVZRWVYyUGNhMnY3My9ud1lVWUdMQUFzaUVzQlhBZE1BYkpDRk9QUVRTQmVKOHhOTUJPd3VoTG1TQUFNclNJK2gvWlVnZ0FBQUFCSlJVNUVya0pnZ2c9PSlcclxuICAgIHJlcGVhdDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTIwJSk7XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgXCIuL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG5AbWl4aW4gd3JhcHBlci15ZWxsb3cge1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAxODUsIDE0MSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgMTQ0ZGVnLFxyXG4gICAgcmdiYSgyNTUsIDE4NSwgMTQxLCAxKSAwJSxcclxuICAgIHJnYmEoMjU1LCAyMzIsIDEyNywgMSkgMTAwJVxyXG4gICk7XHJcbn1cclxuXHJcbkBtaXhpbiB3cmFwcGVyLXllbGxvdy1mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAxODUsIDE0MSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgMTQ0ZGVnLFxyXG4gICAgcmdiYSgyNTUsIDIzMiwgMTI3LCAxKSAwJSxcclxuICAgIHJnYmEoMjU1LCAxODUsIDE0MSwgMSkgMTAwJVxyXG4gICk7XHJcblxyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbkBtaXhpbiB3cmFwcGVyLWJsdWUtZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDE1OSwgMTY5LCAyMTgsIDEpIDAlLCByZ2IoOTAsIDkwLCAxODApIDEwMCUpO1xyXG5cclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4vLyAjIyMgRk9STVMgIyMjXHJcblxyXG4vLyAjIEZPUk0gLSBBVVRIICNcclxuQG1peGluIGZvcm0tYXV0aCB7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogYXV0bztcclxuICB3aWR0aDogMzB2dztcclxuICBib3gtc2hhZG93OiAwIDAuMXJlbSAwLjNyZW0gMC4xcmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGJhY2tncm91bmQ6ICRmb3JtLWJhY2tncm91bmQ7XHJcbiAgYm9yZGVyOiAkZm9ybS1ib3JkZXItd2lkdGggc29saWQgJGZvcm0tYm9yZGVyLWNvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6ICRmb3JtLWJvcmRlci1yYWRpdXM7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMTg1LCAxNDEpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDE0NGRlZyxcclxuICAgIHJnYmEoMjU1LCAyMzIsIDEyNywgMSkgMCUsXHJcbiAgICByZ2JhKDI1NSwgMTg1LCAxNDEsIDEpIDEwMCVcclxuICApO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblxyXG4gICZfX2xhYmVsIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjRyZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJyZW07XHJcblxyXG4gICAgJi0taW1hZ2Uge1xyXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGhlaWdodDogNXZoO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgJi0taW1hZ2UtcmVzdWx0IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1hdXRoLWlucHV0LWdyb3VwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIG1hcmdpbjogMC4zcmVtO1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjM1cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAmLS1lc3NlbnRpYWxzIHtcclxuICAgIGdyaWQtcm93OiAxIC8gc3BhbiAyO1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7XHJcbiAgfVxyXG5cclxuICAmLS1wcml6ZSB7XHJcbiAgICBncmlkLXJvdzogMyAvIHNwYW4gMjtcclxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xyXG4gIH1cclxuICAmLS1wb2ludHMge1xyXG4gICAgZ3JpZC1yb3c6IDUgLyBzcGFuIDI7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcclxuICB9XHJcblxyXG4gICYtLWltYWdlIHtcclxuICAgIGdyaWQtcm93OiAxIC8gc3BhbiAxO1xyXG4gICAgZ3JpZC1jb2x1bW46IDMgLyBzcGFuIDI7XHJcbiAgICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG5cclxuICAmLS1pbWFnZS1yZXN1bHQge1xyXG4gICAgZ3JpZC1yb3c6IDMgLyBzcGFuIDU7XHJcbiAgICBncmlkLWNvbHVtbjogMyAvIHNwYW4gNDtcclxuICAgIGJvcmRlcjogMC4wMnJlbSBzb2xpZCAkaW5wdXQtYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG5cclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gIH1cclxuICAmLS1idXR0b25zIHtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGdyaWQtcm93OiAxIC8gc3BhbiAxO1xyXG4gICAgZ3JpZC1jb2x1bW46IDUgLyBzcGFuIDI7XHJcbiAgICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDFlbSAzZW07XHJcbiAgfVxyXG5cclxuICAmLS1yZXN1bHQge1xyXG4gICAgZ3JpZC1yb3c6IDUgLyBzcGFuIDI7XHJcbiAgICBncmlkLWNvbHVtbjogMyAvIHNwYW4gMjtcclxuICAgIGJvcmRlcjogJGZvcm0tYm9yZGVyLXdpZHRoIHNvbGlkICRmb3JtLWJ1dHRvbi1ib3JkZXItY29sb3I7XHJcbiAgfVxyXG5cclxuICAmLS1tZXNzYWdlIHtcclxuICAgIGdyaWQtcm93OiAyIC8gc3BhbiAxO1xyXG5cclxuICAgIGdyaWQtY29sdW1uOiAzIC8gc3BhbiA0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYmFja2dyb3VuZDogJGZvcm0tbWVzc2FnZS1iYWNrZ3JvdW5kO1xyXG4gICAgYm9yZGVyOiAkZm9ybS1ib3JkZXItd2lkdGggc29saWQgJGZvcm0tbWVzc2FnZS1iYWNrZ3JvdW5kO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGZvcm0tYXV0aC1pbnB1dC13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAuNHJlbTtcclxuICBtYXJnaW46IDAuMnJlbSAwO1xyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1hdXRoLW1lc3NhZ2Uge1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGhlaWdodDogNHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLWF1dGgtYnV0dG9ucyB7XHJcbiAgaGVpZ2h0OiA2dmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIG1hcmdpbjogMC40cmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcclxuICBib3JkZXI6ICRmb3JtLWJvcmRlci13aWR0aCBzb2xpZCAkZm9ybS1idXR0b24tYm9yZGVyLWNvbG9yO1xyXG4gIGJvcmRlcjogMC4wNnJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQ6ICRmb3JtLWJ1dHRvbi1iYWNrZ3JvdW5kO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZm9ybS1idXR0b24tYmFja2dyb3VuZC0taG92ZXI7XHJcbiAgfVxyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQ6ICRmb3JtLWJ1dHRvbi1iYWNrZ3JvdW5kLS1mb2N1cztcclxuICB9XHJcblxyXG4gICY6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICRmb3JtLWJ1dHRvbi1iYWNrZ3JvdW5kLS1hY3RpdmU7XHJcbiAgfVxyXG5cclxuICAmOmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLWF1dGgtaW5wdXQge1xyXG4gIGJvcmRlcjogMC4wNnJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gIHdpZHRoOiAyNHZ3O1xyXG4gIHBhZGRpbmc6IDAgMS4zcmVtO1xyXG4gIGhlaWdodDogN3ZoO1xyXG4gIG1hcmdpbjogMC4zNXJlbTtcclxuICBmb250LXNpemU6IDEuNHJlbTtcclxufVxyXG5cclxuLy8gIyBGT1JNIC0gUFJPTU9TXHJcblxyXG5AbWl4aW4gZm9ybS1wcm9tby1iYXNlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIGhlaWdodDogOTB2aDtcclxuICB3aWR0aDogOTB2dztcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGJveC1zaGFkb3c6IDAgMC4xcmVtIDAuM3JlbSAwLjFyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgYm9yZGVyOiAkZm9ybS1ib3JkZXItd2lkdGggc29saWQgJGZvcm0tYm9yZGVyLWNvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6ICRmb3JtLWJvcmRlci1yYWRpdXM7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMTg1LCAxNDEpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDE0NGRlZyxcclxuICAgIHJnYmEoMjU1LCAyMzIsIDEyNywgMSkgMCUsXHJcbiAgICByZ2JhKDI1NSwgMTg1LCAxNDEsIDEpIDEwMCVcclxuICApO1xyXG5cclxuICAmX19zZWN0aW9uIHtcclxuICAgIHdpZHRoOiA0NXZ3O1xyXG4gICAgaGVpZ2h0OiA4NnZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLXByb21vLWlucHV0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiAwLjA2cmVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA4JTtcclxuICBwYWRkaW5nOiAwLjhlbTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLXByb21vLWlucHV0LXdyYXBwZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogMC43NXJlbSAwO1xyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1wcm9tby1tZXNzYWdlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLXByb21vLW1lc3NhZ2Utd3JhcHBlciB7XHJcbiAgaGVpZ2h0OiA1JTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGxpbmUtYnJlYWs6IHN0cmljdDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1wcm9tby1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogNDB2dztcclxuICBoZWlnaHQ6IDg2dmg7XHJcbiAgbWFyZ2luOiAwLjNyZW07XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICBib3JkZXI6IDAuMXJlbSBzb2xpZCB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAwLjFyZW07XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogMCAwLjFyZW0gMC4zcmVtIDAuMXJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgJl9fbGFiZWwge1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcclxuICAgIHBhZGRpbmc6IDAuMjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZ2IoMTAwLCAxMDAsIDIwMCk7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuICAmLS1idXR0b25zIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmLS1yZXN1bHQge1xyXG4gICAgYm9yZGVyOiAkZm9ybS1ib3JkZXItd2lkdGggc29saWQgJGZvcm0tYnV0dG9uLWJvcmRlci1jb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLXByb21vLWJ1dHRvbnMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogOTAlO1xyXG4gIHBhZGRpbmc6IDAuNHJlbTtcclxuICBtYXJnaW46IDAuNHJlbTtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgbWFyZ2luOiAwLjc1cmVtIDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250OiA0MDAgMC45cmVtIFJvYm90bztcclxuXHJcbiAgbWluLWhlaWdodDogNXZoO1xyXG5cclxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XHJcbiAgYm9yZGVyOiAwLjA2cmVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICRmb3JtLWJ1dHRvbi1iYWNrZ3JvdW5kLS1ob3ZlcjtcclxuICB9XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZDogJGZvcm0tYnV0dG9uLWJhY2tncm91bmQtLWZvY3VzO1xyXG4gIH1cclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogJGZvcm0tYnV0dG9uLWJhY2tncm91bmQtLWFjdGl2ZTtcclxuICB9XHJcblxyXG4gICY6ZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZDogbGlnaHRncmV5O1xyXG4gIH1cclxufVxyXG5cclxuLy8gIyMjIFRhYmxlICMjI1xyXG5AbWl4aW4gdGFibGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBib3JkZXI6IDAuMXJlbSBzb2xpZCB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAwLjFyZW07XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogMCAwLjFyZW0gMC4zcmVtIDAuMXJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgYm9yZGVyLXNwYWNpbmc6IDBweDtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcblxyXG4gICZfX2hlYWQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJl9fYm9keSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgfVxyXG5cclxuICAmX19yb3cge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgaGVpZ2h0OiA3dmg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXI6IDAuMDVyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG5cclxuICAgICYtLWhlYWQge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAwLjFyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTg1LCAxNDEsIDAuNSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBjZWxsIHtcclxuICBmbGV4OiAxIDEgMTAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGJvcmRlci1yaWdodDogMC4wMXJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcblxyXG4gICY6bGFzdC1vZi10eXBlIHtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICB9XHJcblxyXG4gICYtLWRhdGEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcblxyXG4gICRiYWNrZ3JvdW5kMTogcmdiYSgyMzMsIDE1MiwgNjcsIDAuMik7XHJcbiAgJGJhY2tncm91bmQyOiByZ2JhKDI1MiwgMTc1LCAxMSwgMC4yKTtcclxuXHJcbiAgJi0tcHJvbW8tbmFtZSB7XHJcbiAgICBmbGV4OiAxIDEgMTMwcHg7XHJcbiAgfVxyXG5cclxuICAmLS1wcm9tby1kZXNjcmlwdGlvbiB7XHJcbiAgICBmbGV4OiAxIDAgMTUwcHg7XHJcbiAgfVxyXG5cclxuICAmLS12ZW5kb3ItZW1haWwge1xyXG4gICAgZmxleDogMSAwIDE1MHB4O1xyXG4gIH1cclxuXHJcbiAgJi0tYWRkcmVzcy1zdG9yZSB7XHJcbiAgICBmbGV4OiAxIDEgMTMwcHg7XHJcbiAgfVxyXG5cclxuICAmLS1wcm9tby1kZXRhaWxzIHtcclxuICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kMTtcclxuICB9XHJcbiAgJi0tcHJpemUge1xyXG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQxO1xyXG4gIH1cclxuXHJcbiAgJi0tcXVhbnRpdHkge1xyXG4gICAgZmxleDogMSAxIDU1cHg7XHJcbiAgfVxyXG5cclxuICAmLS1wb2ludHMge1xyXG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQxO1xyXG4gICAgZmxleDogMSAxIDU1cHg7XHJcbiAgfVxyXG5cclxuICAmLS1wYXJ0aWNpcGFudHMge1xyXG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQxO1xyXG4gIH1cclxuXHJcbiAgJi0tcGFydGljaXBhbnRzLXRvdGFsIHtcclxuICAgIGZsZXg6IDEgMSA1NXB4O1xyXG4gIH1cclxuXHJcbiAgJi0tcGFydGljaXBhbnRzLWxpc3Qge1xyXG4gICAgZmxleDogMSAxIDU1cHg7XHJcbiAgfVxyXG5cclxuICAmLS1tZXRhZGF0YSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDE7XHJcbiAgfVxyXG5cclxuICAmLS1jcmVhdGVkLW9uIHtcclxuICAgIGZsZXg6IDEgMSA1NXB4O1xyXG4gIH1cclxuXHJcbiAgJi0tYWN0aXZlIHtcclxuICAgIGZsZXg6IDEgMSA0NXB4O1xyXG4gIH1cclxuXHJcbiAgJi0tYWN0aW9ucyB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIyNSwgMjI1LCAyMjUsIDEpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAmX19sYWJlbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0YWJsZS1hY3Rpb24tbGFiZWwge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgdGV4dC1zaGFkb3c6IDAuMTFyZW0gMC4xMXJlbSAwLjFyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcclxuICBwYWRkaW5nOiAwLjI2ZW0gMC40MmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbWFyZ2luOiAwIDAuMnJlbTtcclxuICB3aWR0aDogYXV0bztcclxuICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMjUlKTtcclxuICB9XHJcblxyXG4gICY6YWN0aXZlIHtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxNTAlKTtcclxuICB9XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKCgyMDAlKSk7XHJcbiAgfVxyXG5cclxuICAmLS1lZGl0IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYig1NSwgMjAwLCAxMDApO1xyXG4gIH1cclxuXHJcbiAgJi0tZGVsZXRlIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDEwMCwgMCk7XHJcbiAgfVxyXG5cclxuICAmLS1saXN0IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxMDAsIDEwMCwgMjIwKTtcclxuICB9XHJcblxyXG4gICYtLWRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxNTAsIDE1MCwgMTUwKTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0YWJsZS1wYXJ0cyB7XHJcbiAgLnRhYmxlIHtcclxuICAgIEBpbmNsdWRlIHRhYmxlO1xyXG4gIH1cclxuXHJcbiAgLmNlbGwge1xyXG4gICAgQGluY2x1ZGUgY2VsbDtcclxuICB9XHJcblxyXG4gIC5hY3Rpb24tbGFiZWwge1xyXG4gICAgQGluY2x1ZGUgdGFibGUtYWN0aW9uLWxhYmVsO1xyXG4gIH1cclxuXHJcbiAgLmNlbGwtLWRhdGEuY2VsbC0tcHJvbW8tZGVzY3JpcHRpb24sXHJcbiAgLmNlbGwtLWRhdGEuY2VsbC0tcHJpemUtZGVzY3JpcHRpb24ge1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIH1cclxufVxyXG4iLCIkZm9ybS1iYWNrZ3JvdW5kOiByZ2JhKDI0MCwgMjQwLCAyNDAsIDEpO1xyXG4kZm9ybS1ib3JkZXItY29sb3I6IHJnYmEoMTUwLCAxNTAsIDE1MCwgMSk7XHJcbiRmb3JtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiRmb3JtLWJvcmRlci13aWR0aDogMC4xcmVtO1xyXG4kZm9ybS1ib3JkZXItcmFkaXVzOiAwLjJyZW07XHJcbiRmb3JtLWJ1dHRvbi1iYWNrZ3JvdW5kOiByZ2JhKDIzMiwgMjMwLCAyMzgsIDEpO1xyXG4kZm9ybS1idXR0b24tYmFja2dyb3VuZC0taG92ZXI6IHJnYmEoMjM3LCAyMzUsIDI0MywgMSk7XHJcbiRmb3JtLWJ1dHRvbi1iYWNrZ3JvdW5kLS1mb2N1czogcmdiYSgyNDIsIDI0MCwgMjQ4LCAxKTtcclxuJGZvcm0tYnV0dG9uLWJhY2tncm91bmQtLWFjdGl2ZTogcmdiYSgyNDcsIDI0NywgMjUzLCAxKTtcclxuJGZvcm0tYnV0dG9uLWJvcmRlci1jb2xvcjogcmdiYSgxOTIsIDE5MCwgMTk4LCAxKTtcclxuXHJcbiRmb3JtLW1lc3NhZ2UtYmFja2dyb3VuZDogcmdiYSgyMTIsIDIxMCwgMjE4LCAxKTtcclxuXHJcbiRpbnB1dC1ib3JkZXItY29sb3I6IHJnYmEoMTIwLCAxMjAsIDEyMCwgMSk7XHJcbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAwLjJyZW07XHJcblxyXG4kaW5wdXQtYm9yZGVyLXdpZHRoOiAwLjA1cmVtO1xyXG4kaW5wdXQtYm9yZGVyLXdpZHRoLS1mb2N1czogMC4wOHJlbTtcclxuXHJcbiRpbnB1dC1ncm91cC1iYWNrZ3JvdW5kOiByZ2JhKDIyMCwgMjIwLCAyMjAsIDEpO1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-log-in',
                templateUrl: './log-in.component.html',
                styleUrls: ['./log-in.component.scss'],
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: src_app_fire_service__WEBPACK_IMPORTED_MODULE_6__["FireService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"] }]; }, null); })();


/***/ }),

/***/ "P+IX":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "i6m5");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "qXBG");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







class AuthGuard {
    constructor(auth, store, router) {
        this.auth = auth;
        this.store = store;
        this.router = router;
        this.user$ = this.store.select(___WEBPACK_IMPORTED_MODULE_2__["selectAuthUserProfile"]);
    }
    canActivate(route, state) {
        this.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe((user) => {
            if (user) {
                if (route.data.exptectedRoles && route.data.exptectedRoles.length) {
                    const userRoleCorrect = route.data.exptectedRoles.find((role) => user.role === role);
                    if (userRoleCorrect) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                else {
                    return true;
                }
            }
            else {
                this.router.navigate(['/auth/log-in']);
                return false;
            }
        });
        return true;
    }
    canActivateChild(next, state) {
        return this.canActivate(next, state);
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_wrong_page_wrong_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/wrong-page/wrong-page.component */ "4Gne");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "8ifR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _components_faq_page_faq_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/faq-page/faq-page.component */ "zqsm");
/* harmony import */ var _components_promo_form_promo_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/promo-form/promo-form.component */ "TXrg");
/* harmony import */ var _components_promos_public_promos_public_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/promos-public/promos-public.component */ "s9Xg");














const components = [
    _components_wrong_page_wrong_page_component__WEBPACK_IMPORTED_MODULE_2__["WrongPageComponent"],
    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
    _components_faq_page_faq_page_component__WEBPACK_IMPORTED_MODULE_9__["FaqPageComponent"],
    _components_promo_form_promo_form_component__WEBPACK_IMPORTED_MODULE_10__["PromoFormComponent"],
    _components_promos_public_promos_public_component__WEBPACK_IMPORTED_MODULE_11__["PromosPublicComponent"],
];
class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorageModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebase, 'cloud'),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_wrong_page_wrong_page_component__WEBPACK_IMPORTED_MODULE_2__["WrongPageComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
        _components_faq_page_faq_page_component__WEBPACK_IMPORTED_MODULE_9__["FaqPageComponent"],
        _components_promo_form_promo_form_component__WEBPACK_IMPORTED_MODULE_10__["PromoFormComponent"],
        _components_promos_public_promos_public_component__WEBPACK_IMPORTED_MODULE_11__["PromosPublicComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorageModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"]], exports: [_components_wrong_page_wrong_page_component__WEBPACK_IMPORTED_MODULE_2__["WrongPageComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
        _components_faq_page_faq_page_component__WEBPACK_IMPORTED_MODULE_9__["FaqPageComponent"],
        _components_promo_form_promo_form_component__WEBPACK_IMPORTED_MODULE_10__["PromoFormComponent"],
        _components_promos_public_promos_public_component__WEBPACK_IMPORTED_MODULE_11__["PromosPublicComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: components,
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorageModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebase, 'cloud'),
                ],
                exports: components,
                providers: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/components/navbar/navbar.component */ "8ifR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'stamps';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "app-container"], [1, "app-content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".app-container[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  box-sizing: border-box;\n}\n\n.app-content[_ngcontent-%COMP%] {\n  height: 92vh;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uYXBwLWNvbnRlbnQge1xyXG4gIGhlaWdodDogOTJ2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "TXrg":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/promo-form/promo-form.component.ts ***!
  \**********************************************************************/
/*! exports provided: PromoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromoFormComponent", function() { return PromoFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth */ "i6m5");
/* harmony import */ var src_app_fire_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/fire.service */ "L3EA");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");










const _c0 = ["userPhoto"];
function PromoFormComponent_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", null, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.percentage, "% ");
} }
function PromoFormComponent_img_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 30);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class PromoFormComponent {
    constructor(fb, fire, store) {
        this.fb = fb;
        this.fire = fire;
        this.store = store;
        this.promo = null;
        this.editItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.user$ = this.store.select(src_app_auth__WEBPACK_IMPORTED_MODULE_4__["selectAuthUserProfile"]);
        this.user = null;
        this.selectedFile = null;
        this.uploadDone = false;
        this.url = '';
        this.message = '';
        this.bytesTotal = 0;
        this.bytesTransferred = 0;
        this.percentage = 0;
        this.sub.add(this.user$.subscribe((user) => (this.user = user)));
    }
    ngOnInit() {
        this.initForm();
        if (this.promo) {
            this.loadPromo();
        }
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    loadPromo() {
        this.form.patchValue({
            promoName: this.promo.promoName,
            promoDescription: this.promo.promoDescription,
            prizeDescription: this.promo.prizeDescription,
            prizeQuantity: this.promo.prizeQuantity,
            pointsEntry: this.promo.pointsEntry,
            pointsRedeem: this.promo.pointsRedeem,
            participantsTable: this.promo.participantsTable,
            participantsTotal: this.promo.participantsTotal,
            vendorId: this.promo.vendorId,
            vendorEmail: this.promo.vendorEmail,
            vendorStoreAddress: this.promo.vendorStoreAddress,
            pid: this.promo.pid,
            createdOn: this.promo.createdOn,
            imageRef: this.promo.imageRef,
        });
        this.url = this.promo.imageRef;
        this.uploadDone = true;
    }
    checkIfImage(filename) {
        let name = filename.toLocaleLowerCase();
        if (name.includes('.jpg') ||
            name.includes('.png') ||
            name.includes('gif')) {
            return true;
        }
        return false;
    }
    onFileSelected(event) {
        let n = Date.now();
        const file = event.target.files[0];
        if (this.checkIfImage(file.name)) {
            const filePath = `promo-images/${n}`;
            const fileRef = this.fire.storage.ref(filePath);
            const task = this.fire.storage.upload(`promo-images/${n}`, file);
            task
                .snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => {
                this.downloadURL = fileRef.getDownloadURL();
                this.downloadURL.subscribe((url) => {
                    if (url) {
                        this.url = url;
                        this.form.patchValue({ imageRef: url });
                    }
                });
            }))
                .subscribe((uploadingProccess) => {
                if (uploadingProccess) {
                    const percentage = (uploadingProccess.bytesTransferred /
                        uploadingProccess.totalBytes) *
                        100;
                    this.percentage = Math.floor(percentage);
                    if (percentage === 100) {
                        this.uploadDone = true;
                    }
                }
            });
        }
        else {
            this.message = 'Proszę przesyłać pliki .jpg i .png.';
        }
    }
    onSubmit() {
        this.submitForm();
    }
    submitForm() {
        this.message = '...';
        if (this.promo) {
            this.submitFormUpdate();
        }
        else {
            if (confirm('Czy na pewno chcesz dodać promocję?')) {
                this.submitFormCreate();
            }
        }
    }
    submitFormCreate() {
        if (this.url && this.user) {
            const documentPure = this.composePurePromoDTO(this.user);
            this.fire
                .getPromosCollectionRef()
                .add(documentPure)
                .then((data) => {
                let id = data.id;
                const newDocument = Object.assign(Object.assign({}, documentPure), { pid: id });
                const newDocumentPure = Object.assign({}, newDocument);
                this.fire
                    .getPromosCollectionRef()
                    .doc(id)
                    .set(Object.assign({}, newDocumentPure))
                    .then(() => {
                    const promos = [...this.user.promos, id];
                    this.fire
                        .getUsersCollectionRef()
                        .doc(this.user.uid)
                        .update({ promos: promos })
                        .catch((e) => console.log('err', e));
                })
                    .catch((e) => (this.message = e));
            })
                .catch((e) => (this.message = e))
                .finally(() => (this.message = 'Promocja została utworzona.'));
        }
        else {
            this.message = 'Nie udało się stworzyć promocji.';
        }
    }
    submitFormUpdate() {
        this.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe((auth) => {
            if (auth) {
                const documentPure = this.composePurePromoDTO(auth, this.promo);
                this.fire
                    .getPromosCollectionRef()
                    .doc(this.promo.pid)
                    .set(documentPure)
                    .catch((e) => (this.message = e))
                    .finally(() => (this.message = 'Promocja została zaktualizowana.'));
            }
            else {
                this.message = 'Musisz się zalogować.';
            }
        });
    }
    resetForm() {
        this.photo.nativeElement.value = '';
        this.url = '';
        this.message = '';
        this.uploadDone = false;
        this.form.reset();
        this.initForm();
    }
    composePurePromoDTO(auth, promo) {
        const formData = {
            promoName: this.form.value['promoName'],
            promoDescription: this.form.value['promoDescription'],
            prizeDescription: this.form.value['prizeDescription'],
            prizeQuantity: this.form.value['prizeQuantity'],
            pointsEntry: this.form.value['pointsEntry'],
            pointsRedeem: this.form.value['pointsRedeem'],
        };
        const additionalData = {
            vendorId: auth.uid,
            vendorEmail: auth.email,
            vendorStoreAddress: auth.storeAddress,
            participantsTable: (promo === null || promo === void 0 ? void 0 : promo.participantsTable) || [],
            participantsTotal: (promo === null || promo === void 0 ? void 0 : promo.participantsTotal) || 0,
            pid: (promo === null || promo === void 0 ? void 0 : promo.pid) || '',
            imageRef: (promo === null || promo === void 0 ? void 0 : promo.imageRef) || this.url,
            createdOn: (promo === null || promo === void 0 ? void 0 : promo.createdOn) || new Date().toISOString().split('T')[0],
        };
        const document = Object.assign(Object.assign({}, formData), additionalData);
        const documentPure = Object.assign({}, document);
        return documentPure;
    }
    initForm() {
        let group = {};
        group['promoName'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        group['promoDescription'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        group['prizeDescription'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        group['prizeQuantity'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        group['pointsEntry'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        group['pointsRedeem'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        group['participantsTable'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        group['participantsTotal'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        group['vendorId'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        group['vendorEmail'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        group['vendorStoreAddress'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        group['pid'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        group['active'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        group['createdOn'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        group['imageRef'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.form = this.fb.group(group);
    }
}
PromoFormComponent.ɵfac = function PromoFormComponent_Factory(t) { return new (t || PromoFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_fire_service__WEBPACK_IMPORTED_MODULE_5__["FireService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"])); };
PromoFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PromoFormComponent, selectors: [["app-promo-form"]], viewQuery: function PromoFormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.photo = _t.first);
    } }, inputs: { promo: "promo" }, outputs: { editItem: "editItem" }, decls: 48, vars: 5, consts: [[1, "wrapper"], [1, "form", 3, "formGroup", "ngSubmit", "reset"], [1, "form__section"], [1, "group"], [1, "group__label"], [1, "input-wrapper"], ["for", "promoName", 1, "form__label"], ["type", "text", "name", "promoName", "formControlName", "promoName", 1, "form__input"], ["for", "promoDescription", 1, "form__label"], ["rows", "2", "type", "text", "name", "promoDescription", "formControlName", "promoDescription", 1, "form__input"], ["for", "prizeDescription", 1, "form__label"], ["type", "text", "name", "prizeDescription", "formControlName", "prizeDescription", 1, "form__input"], ["for", "prizeQuantity", 1, "form__label"], ["type", "number", "name", "prizeQuantity", "formControlName", "prizeQuantity", 1, "form__input"], ["for", "pointsEntry", 1, "form__label"], ["type", "number", "name", "pointsEntry", "formControlName", "pointsEntry", 1, "form__input"], ["for", "pointsRedeem", 1, "form__label"], ["type", "number", "name", "pointsRedeem", "formControlName", "pointsRedeem", 1, "form__input"], ["for", "imageRef", "type", "button", 1, "buttons"], ["type", "file", "id", "imageRef", "name", "imageRef", "autocomplete", "off", 1, "form__input", "form__input--image", 3, "change"], ["userPhoto", ""], [1, "upload-progress"], [4, "ngIf"], ["type", "reset", 1, "buttons"], ["type", "submit", 1, "buttons", 3, "disabled"], [1, "message-wrapper"], [1, "message"], [1, "image-wrapper"], ["class", "image-result", "alt", "promo-image", 3, "src", 4, "ngIf"], ["uploadProgress", ""], ["alt", "promo-image", 1, "image-result", 3, "src"]], template: function PromoFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PromoFormComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); })("reset", function PromoFormComponent_Template_form_reset_1_listener() { return ctx.resetForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "PROMOCJA - Formularz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " nazwa promocji ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " opis promocji ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Nazwa i opis nagrody ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " ilo\u015B\u0107 (nagrody) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Punkty na wej\u015Bcie ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Punkty wymagane do nagrody ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " prze\u015Blij grafik\u0119 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PromoFormComponent_Template_input_change_33_listener($event) { return ctx.onFileSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Przes\u0142ano :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, PromoFormComponent_span_37_Template, 3, 1, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Wyczy\u015B\u0107 formularz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Prze\u015Blij ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, PromoFormComponent_img_47_Template, 1, 1, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.uploadDone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.message, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.url);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100%;\n  background: linear-gradient(#9fa9da 0%, #5a5ab4 100%);\n  overflow: hidden;\n  padding: 1rem;\n}\n\n.form[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  align-content: center;\n  height: 90vh;\n  width: 90vw;\n  text-transform: uppercase;\n  box-shadow: 0 0.1rem 0.3rem 0.1rem rgba(0, 0, 0, 0.2);\n  padding: 2rem;\n  border: 0.1rem solid transparent;\n  border-radius: 0.2rem;\n  background: #ffb98d;\n  background: linear-gradient(144deg, #ffe87f 0%, #ffb98d 100%);\n}\n\n.form__section[_ngcontent-%COMP%] {\n  width: 45vw;\n  height: 86vh;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n}\n\n.form__input[_ngcontent-%COMP%] {\n  border: 0.05rem solid #787878;\n  border-radius: 0.2rem;\n  min-width: 9vw;\n}\n\n.form__input--image[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.form__label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 500;\n  letter-spacing: 0.02rem;\n}\n\n.form__label--image[_ngcontent-%COMP%] {\n  align-self: center;\n  display: flex;\n  text-align: center;\n  padding: 0;\n  justify-content: center;\n  align-items: center;\n  height: 5vh;\n  width: 100%;\n  background: white;\n}\n\n.form__label--image-result[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 90%;\n  padding: 0.4rem;\n  margin: 0.4rem;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  margin: 0.75rem 0;\n  text-transform: uppercase;\n  font: 400 0.9rem Roboto;\n  min-height: 5vh;\n  border-radius: 0.3rem;\n  border: 0.06rem solid rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n  background: #fff;\n}\n\n.buttons[_ngcontent-%COMP%]:hover {\n  background: #edebf3;\n}\n\n.buttons[_ngcontent-%COMP%]:focus {\n  background: #f2f0f8;\n}\n\n.buttons[_ngcontent-%COMP%]:active {\n  background: #f7f7fd;\n}\n\n.buttons[_ngcontent-%COMP%]:disabled {\n  background: lightgrey;\n}\n\n.group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow-y: scroll;\n  justify-content: flex-start;\n  align-items: center;\n  width: 40vw;\n  height: 86vh;\n  margin: 0.3rem;\n  padding: 1.5rem;\n  font-size: 0.75rem;\n  border: 0.1rem solid white;\n  border-radius: 0.1rem;\n  background: white;\n  box-shadow: 0 0.1rem 0.3rem 0.1rem rgba(0, 0, 0, 0.2);\n}\n\n.group__label[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  text-transform: uppercase;\n  font-size: 0.9rem;\n  border-radius: 0.2rem;\n  padding: 0.25rem;\n  margin-bottom: 0.5rem;\n  width: 100%;\n  text-align: center;\n  color: #6464c8;\n  font-weight: 700;\n}\n\n.group--buttons[_ngcontent-%COMP%] {\n  box-shadow: none;\n}\n\n.group--result[_ngcontent-%COMP%] {\n  border: 0.1rem solid #c0bec6;\n}\n\n.message-wrapper[_ngcontent-%COMP%] {\n  height: 5%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 0.8rem;\n  font-weight: 600;\n  line-break: strict;\n  box-shadow: none;\n}\n\n.message[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  text-align: center;\n  box-shadow: none;\n}\n\n.input-wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 90%;\n  margin: 0.75rem 0;\n}\n\ninput[_ngcontent-%COMP%] {\n  text-align: center;\n  border: 0.06rem solid rgba(0, 0, 0, 0.2);\n  background: #fff;\n  border-radius: 0.25rem;\n  width: 100%;\n  height: 8%;\n  padding: 0.8em;\n  font-size: 1rem;\n}\n\n.img[_ngcontent-%COMP%] {\n  overflow: scroll;\n  max-height: 50vh;\n  z-index: 10;\n  background: red;\n}\n\n.upload-progress[_ngcontent-%COMP%] {\n  padding-top: 0.4rem;\n}\n\n.image-result[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.image-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  margin: 0.3rem;\n  padding: 1rem;\n  font-size: 0.75rem;\n  border: 0.1rem solid white;\n  border-radius: 0.1rem;\n  background: white;\n  box-shadow: 0 0.1rem 0.3rem 0.1rem rgba(0, 0, 0, 0.2);\n}\n\n.image-wrapper--image[_ngcontent-%COMP%] {\n  padding: 0.4rem;\n}\n\n.image-wrapper--image-result[_ngcontent-%COMP%] {\n  border: 0.02rem solid #787878;\n  border: none;\n  padding: 0;\n  height: auto;\n  max-width: 100%;\n  overflow: scroll;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  border: 0.06rem solid rgba(0, 0, 0, 0.2);\n  background: #fff;\n  border-radius: 0.25rem;\n  width: 100%;\n  font-size: 1.1rem;\n  overflow-y: scroll;\n  margin-bottom: 1rem;\n  resize: none;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcHJvbW8tZm9ybS9wcm9tby1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvc3R5bGVzL21peGlucy5zY3NzIiwic3JjL2FwcC9zaGFyZWQvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VDOEJFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHFEQUFBO0VBRUEsZ0JBQUE7RURwQ0EsYUFBQTtBQUtGOztBQUZBO0VDZ09FLGFBQUE7RUFFQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFFQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EscURBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkNoUG1CO0VEaVBuQixtQkFBQTtFQUNBLDZEQUFBO0FENU5GOztBQ2tPRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QURoT0o7O0FBeEJFO0VBQ0UsNkJBQUE7RUFDQSxxQkVUaUI7RUZVakIsY0FBQTtBQTBCSjs7QUF4Qkk7RUFDRSxhQUFBO0FBMEJOOztBQXRCRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQXdCSjs7QUF0Qkk7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQXdCTjs7QUFyQkk7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUF1Qk47O0FBbEJBO0VDb1NFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUVBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUVBLGVBQUE7RUFFQSxxQkFBQTtFQUNBLHdDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEbFJGOztBQ21SRTtFQUNFLG1CQ2xXNEI7QUZpRmhDOztBQ29SRTtFQUNFLG1CQ3JXNEI7QUZtRmhDOztBQ3FSRTtFQUNFLG1CQ3hXNkI7QUZxRmpDOztBQ3NSRTtFQUNFLHFCQUFBO0FEcFJKOztBQTdDQTtFQzRQRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxREFBQTtBRDNNRjs7QUM0TUU7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUQxTUo7O0FDNE1FO0VBQ0UsZ0JBQUE7QUQxTUo7O0FDNk1FO0VBQ0UsNEJBQUE7QUQzTUo7O0FBNUVBO0VDNE9FLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUQ1SkY7O0FBcEZBO0VDOE5FLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUR0SUY7O0FBMUZBO0VDb05FLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FEdEhGOztBQTVGQTtFQ3FNRSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QURyR0Y7O0FBbkdBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBc0dGOztBQW5HQTtFQUNFLG1CQUFBO0FBc0dGOztBQW5HQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQXNHRjs7QUFuR0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxREFBQTtBQXNHRjs7QUFyR0U7RUFDRSxlQUFBO0FBdUdKOztBQXBHRTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtFQUVBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBcUdKOztBQWpHQTtFQUNFLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFvR0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wcm9tby1mb3JtL3Byb21vLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtcclxuQGltcG9ydCBcIi4vLi4vLi4vc3R5bGVzL21peGlucy5zY3NzXCI7XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgQGluY2x1ZGUgd3JhcHBlci1ibHVlLWZsZXg7XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuLmZvcm0ge1xyXG4gIEBpbmNsdWRlIGZvcm0tcHJvbW8tYmFzZTtcclxuXHJcbiAgJl9faW5wdXQge1xyXG4gICAgYm9yZGVyOiAkaW5wdXQtYm9yZGVyLXdpZHRoIHNvbGlkICRpbnB1dC1ib3JkZXItY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAkZm9ybS1ib3JkZXItcmFkaXVzO1xyXG4gICAgbWluLXdpZHRoOiA5dnc7XHJcblxyXG4gICAgJi0taW1hZ2Uge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJyZW07XHJcblxyXG4gICAgJi0taW1hZ2Uge1xyXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGhlaWdodDogNXZoO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgJi0taW1hZ2UtcmVzdWx0IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYnV0dG9ucyB7XHJcbiAgQGluY2x1ZGUgZm9ybS1wcm9tby1idXR0b25zO1xyXG59XHJcblxyXG4uZ3JvdXAge1xyXG4gIEBpbmNsdWRlIGZvcm0tcHJvbW8tZ3JvdXA7XHJcbn1cclxuXHJcbi5tZXNzYWdlLXdyYXBwZXIge1xyXG4gIEBpbmNsdWRlIGZvcm0tcHJvbW8tbWVzc2FnZS13cmFwcGVyO1xyXG59XHJcblxyXG4ubWVzc2FnZSB7XHJcbiAgQGluY2x1ZGUgZm9ybS1wcm9tby1tZXNzYWdlO1xyXG59XHJcblxyXG4uaW5wdXQtd3JhcHBlciB7XHJcbiAgQGluY2x1ZGUgZm9ybS1wcm9tby1pbnB1dC13cmFwcGVyO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgQGluY2x1ZGUgZm9ybS1wcm9tby1pbnB1dDtcclxufVxyXG5cclxuLmltZyB7XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICBtYXgtaGVpZ2h0OiA1MHZoO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIGJhY2tncm91bmQ6IHJlZDtcclxufVxyXG5cclxuLnVwbG9hZC1wcm9ncmVzcyB7XHJcbiAgcGFkZGluZy10b3A6IDAuNHJlbTtcclxufVxyXG5cclxuLmltYWdlLXJlc3VsdCB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5pbWFnZS13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDAuM3JlbTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICBib3JkZXI6IDAuMXJlbSBzb2xpZCB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAwLjFyZW07XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogMCAwLjFyZW0gMC4zcmVtIDAuMXJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgJi0taW1hZ2Uge1xyXG4gICAgcGFkZGluZzogMC40cmVtO1xyXG4gIH1cclxuXHJcbiAgJi0taW1hZ2UtcmVzdWx0IHtcclxuICAgIGJvcmRlcjogMC4wMnJlbSBzb2xpZCAkaW5wdXQtYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG5cclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gIH1cclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gIGJvcmRlcjogMC4wNnJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIHJlc2l6ZTogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbiIsIkBpbXBvcnQgXCIuL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG5AbWl4aW4gd3JhcHBlci15ZWxsb3cge1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAxODUsIDE0MSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgMTQ0ZGVnLFxyXG4gICAgcmdiYSgyNTUsIDE4NSwgMTQxLCAxKSAwJSxcclxuICAgIHJnYmEoMjU1LCAyMzIsIDEyNywgMSkgMTAwJVxyXG4gICk7XHJcbn1cclxuXHJcbkBtaXhpbiB3cmFwcGVyLXllbGxvdy1mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAxODUsIDE0MSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgMTQ0ZGVnLFxyXG4gICAgcmdiYSgyNTUsIDIzMiwgMTI3LCAxKSAwJSxcclxuICAgIHJnYmEoMjU1LCAxODUsIDE0MSwgMSkgMTAwJVxyXG4gICk7XHJcblxyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbkBtaXhpbiB3cmFwcGVyLWJsdWUtZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDE1OSwgMTY5LCAyMTgsIDEpIDAlLCByZ2IoOTAsIDkwLCAxODApIDEwMCUpO1xyXG5cclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4vLyAjIyMgRk9STVMgIyMjXHJcblxyXG4vLyAjIEZPUk0gLSBBVVRIICNcclxuQG1peGluIGZvcm0tYXV0aCB7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogYXV0bztcclxuICB3aWR0aDogMzB2dztcclxuICBib3gtc2hhZG93OiAwIDAuMXJlbSAwLjNyZW0gMC4xcmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGJhY2tncm91bmQ6ICRmb3JtLWJhY2tncm91bmQ7XHJcbiAgYm9yZGVyOiAkZm9ybS1ib3JkZXItd2lkdGggc29saWQgJGZvcm0tYm9yZGVyLWNvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6ICRmb3JtLWJvcmRlci1yYWRpdXM7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMTg1LCAxNDEpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDE0NGRlZyxcclxuICAgIHJnYmEoMjU1LCAyMzIsIDEyNywgMSkgMCUsXHJcbiAgICByZ2JhKDI1NSwgMTg1LCAxNDEsIDEpIDEwMCVcclxuICApO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblxyXG4gICZfX2xhYmVsIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjRyZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJyZW07XHJcblxyXG4gICAgJi0taW1hZ2Uge1xyXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGhlaWdodDogNXZoO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgJi0taW1hZ2UtcmVzdWx0IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1hdXRoLWlucHV0LWdyb3VwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIG1hcmdpbjogMC4zcmVtO1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjM1cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAmLS1lc3NlbnRpYWxzIHtcclxuICAgIGdyaWQtcm93OiAxIC8gc3BhbiAyO1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7XHJcbiAgfVxyXG5cclxuICAmLS1wcml6ZSB7XHJcbiAgICBncmlkLXJvdzogMyAvIHNwYW4gMjtcclxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xyXG4gIH1cclxuICAmLS1wb2ludHMge1xyXG4gICAgZ3JpZC1yb3c6IDUgLyBzcGFuIDI7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcclxuICB9XHJcblxyXG4gICYtLWltYWdlIHtcclxuICAgIGdyaWQtcm93OiAxIC8gc3BhbiAxO1xyXG4gICAgZ3JpZC1jb2x1bW46IDMgLyBzcGFuIDI7XHJcbiAgICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG5cclxuICAmLS1pbWFnZS1yZXN1bHQge1xyXG4gICAgZ3JpZC1yb3c6IDMgLyBzcGFuIDU7XHJcbiAgICBncmlkLWNvbHVtbjogMyAvIHNwYW4gNDtcclxuICAgIGJvcmRlcjogMC4wMnJlbSBzb2xpZCAkaW5wdXQtYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG5cclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gIH1cclxuICAmLS1idXR0b25zIHtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGdyaWQtcm93OiAxIC8gc3BhbiAxO1xyXG4gICAgZ3JpZC1jb2x1bW46IDUgLyBzcGFuIDI7XHJcbiAgICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDFlbSAzZW07XHJcbiAgfVxyXG5cclxuICAmLS1yZXN1bHQge1xyXG4gICAgZ3JpZC1yb3c6IDUgLyBzcGFuIDI7XHJcbiAgICBncmlkLWNvbHVtbjogMyAvIHNwYW4gMjtcclxuICAgIGJvcmRlcjogJGZvcm0tYm9yZGVyLXdpZHRoIHNvbGlkICRmb3JtLWJ1dHRvbi1ib3JkZXItY29sb3I7XHJcbiAgfVxyXG5cclxuICAmLS1tZXNzYWdlIHtcclxuICAgIGdyaWQtcm93OiAyIC8gc3BhbiAxO1xyXG5cclxuICAgIGdyaWQtY29sdW1uOiAzIC8gc3BhbiA0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYmFja2dyb3VuZDogJGZvcm0tbWVzc2FnZS1iYWNrZ3JvdW5kO1xyXG4gICAgYm9yZGVyOiAkZm9ybS1ib3JkZXItd2lkdGggc29saWQgJGZvcm0tbWVzc2FnZS1iYWNrZ3JvdW5kO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGZvcm0tYXV0aC1pbnB1dC13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAuNHJlbTtcclxuICBtYXJnaW46IDAuMnJlbSAwO1xyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1hdXRoLW1lc3NhZ2Uge1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGhlaWdodDogNHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLWF1dGgtYnV0dG9ucyB7XHJcbiAgaGVpZ2h0OiA2dmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIG1hcmdpbjogMC40cmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcclxuICBib3JkZXI6ICRmb3JtLWJvcmRlci13aWR0aCBzb2xpZCAkZm9ybS1idXR0b24tYm9yZGVyLWNvbG9yO1xyXG4gIGJvcmRlcjogMC4wNnJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQ6ICRmb3JtLWJ1dHRvbi1iYWNrZ3JvdW5kO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZm9ybS1idXR0b24tYmFja2dyb3VuZC0taG92ZXI7XHJcbiAgfVxyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQ6ICRmb3JtLWJ1dHRvbi1iYWNrZ3JvdW5kLS1mb2N1cztcclxuICB9XHJcblxyXG4gICY6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICRmb3JtLWJ1dHRvbi1iYWNrZ3JvdW5kLS1hY3RpdmU7XHJcbiAgfVxyXG5cclxuICAmOmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLWF1dGgtaW5wdXQge1xyXG4gIGJvcmRlcjogMC4wNnJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gIHdpZHRoOiAyNHZ3O1xyXG4gIHBhZGRpbmc6IDAgMS4zcmVtO1xyXG4gIGhlaWdodDogN3ZoO1xyXG4gIG1hcmdpbjogMC4zNXJlbTtcclxuICBmb250LXNpemU6IDEuNHJlbTtcclxufVxyXG5cclxuLy8gIyBGT1JNIC0gUFJPTU9TXHJcblxyXG5AbWl4aW4gZm9ybS1wcm9tby1iYXNlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIGhlaWdodDogOTB2aDtcclxuICB3aWR0aDogOTB2dztcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGJveC1zaGFkb3c6IDAgMC4xcmVtIDAuM3JlbSAwLjFyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgYm9yZGVyOiAkZm9ybS1ib3JkZXItd2lkdGggc29saWQgJGZvcm0tYm9yZGVyLWNvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6ICRmb3JtLWJvcmRlci1yYWRpdXM7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMTg1LCAxNDEpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDE0NGRlZyxcclxuICAgIHJnYmEoMjU1LCAyMzIsIDEyNywgMSkgMCUsXHJcbiAgICByZ2JhKDI1NSwgMTg1LCAxNDEsIDEpIDEwMCVcclxuICApO1xyXG5cclxuICAmX19zZWN0aW9uIHtcclxuICAgIHdpZHRoOiA0NXZ3O1xyXG4gICAgaGVpZ2h0OiA4NnZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLXByb21vLWlucHV0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiAwLjA2cmVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA4JTtcclxuICBwYWRkaW5nOiAwLjhlbTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLXByb21vLWlucHV0LXdyYXBwZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogMC43NXJlbSAwO1xyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1wcm9tby1tZXNzYWdlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLXByb21vLW1lc3NhZ2Utd3JhcHBlciB7XHJcbiAgaGVpZ2h0OiA1JTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGxpbmUtYnJlYWs6IHN0cmljdDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1wcm9tby1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogNDB2dztcclxuICBoZWlnaHQ6IDg2dmg7XHJcbiAgbWFyZ2luOiAwLjNyZW07XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICBib3JkZXI6IDAuMXJlbSBzb2xpZCB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAwLjFyZW07XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogMCAwLjFyZW0gMC4zcmVtIDAuMXJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgJl9fbGFiZWwge1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcclxuICAgIHBhZGRpbmc6IDAuMjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZ2IoMTAwLCAxMDAsIDIwMCk7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuICAmLS1idXR0b25zIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmLS1yZXN1bHQge1xyXG4gICAgYm9yZGVyOiAkZm9ybS1ib3JkZXItd2lkdGggc29saWQgJGZvcm0tYnV0dG9uLWJvcmRlci1jb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLXByb21vLWJ1dHRvbnMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogOTAlO1xyXG4gIHBhZGRpbmc6IDAuNHJlbTtcclxuICBtYXJnaW46IDAuNHJlbTtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgbWFyZ2luOiAwLjc1cmVtIDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250OiA0MDAgMC45cmVtIFJvYm90bztcclxuXHJcbiAgbWluLWhlaWdodDogNXZoO1xyXG5cclxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XHJcbiAgYm9yZGVyOiAwLjA2cmVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICRmb3JtLWJ1dHRvbi1iYWNrZ3JvdW5kLS1ob3ZlcjtcclxuICB9XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZDogJGZvcm0tYnV0dG9uLWJhY2tncm91bmQtLWZvY3VzO1xyXG4gIH1cclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogJGZvcm0tYnV0dG9uLWJhY2tncm91bmQtLWFjdGl2ZTtcclxuICB9XHJcblxyXG4gICY6ZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZDogbGlnaHRncmV5O1xyXG4gIH1cclxufVxyXG5cclxuLy8gIyMjIFRhYmxlICMjI1xyXG5AbWl4aW4gdGFibGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBib3JkZXI6IDAuMXJlbSBzb2xpZCB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAwLjFyZW07XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogMCAwLjFyZW0gMC4zcmVtIDAuMXJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgYm9yZGVyLXNwYWNpbmc6IDBweDtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcblxyXG4gICZfX2hlYWQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJl9fYm9keSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgfVxyXG5cclxuICAmX19yb3cge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgaGVpZ2h0OiA3dmg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXI6IDAuMDVyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG5cclxuICAgICYtLWhlYWQge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAwLjFyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTg1LCAxNDEsIDAuNSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBjZWxsIHtcclxuICBmbGV4OiAxIDEgMTAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGJvcmRlci1yaWdodDogMC4wMXJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcblxyXG4gICY6bGFzdC1vZi10eXBlIHtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICB9XHJcblxyXG4gICYtLWRhdGEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcblxyXG4gICRiYWNrZ3JvdW5kMTogcmdiYSgyMzMsIDE1MiwgNjcsIDAuMik7XHJcbiAgJGJhY2tncm91bmQyOiByZ2JhKDI1MiwgMTc1LCAxMSwgMC4yKTtcclxuXHJcbiAgJi0tcHJvbW8tbmFtZSB7XHJcbiAgICBmbGV4OiAxIDEgMTMwcHg7XHJcbiAgfVxyXG5cclxuICAmLS1wcm9tby1kZXNjcmlwdGlvbiB7XHJcbiAgICBmbGV4OiAxIDAgMTUwcHg7XHJcbiAgfVxyXG5cclxuICAmLS12ZW5kb3ItZW1haWwge1xyXG4gICAgZmxleDogMSAwIDE1MHB4O1xyXG4gIH1cclxuXHJcbiAgJi0tYWRkcmVzcy1zdG9yZSB7XHJcbiAgICBmbGV4OiAxIDEgMTMwcHg7XHJcbiAgfVxyXG5cclxuICAmLS1wcm9tby1kZXRhaWxzIHtcclxuICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kMTtcclxuICB9XHJcbiAgJi0tcHJpemUge1xyXG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQxO1xyXG4gIH1cclxuXHJcbiAgJi0tcXVhbnRpdHkge1xyXG4gICAgZmxleDogMSAxIDU1cHg7XHJcbiAgfVxyXG5cclxuICAmLS1wb2ludHMge1xyXG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQxO1xyXG4gICAgZmxleDogMSAxIDU1cHg7XHJcbiAgfVxyXG5cclxuICAmLS1wYXJ0aWNpcGFudHMge1xyXG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQxO1xyXG4gIH1cclxuXHJcbiAgJi0tcGFydGljaXBhbnRzLXRvdGFsIHtcclxuICAgIGZsZXg6IDEgMSA1NXB4O1xyXG4gIH1cclxuXHJcbiAgJi0tcGFydGljaXBhbnRzLWxpc3Qge1xyXG4gICAgZmxleDogMSAxIDU1cHg7XHJcbiAgfVxyXG5cclxuICAmLS1tZXRhZGF0YSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDE7XHJcbiAgfVxyXG5cclxuICAmLS1jcmVhdGVkLW9uIHtcclxuICAgIGZsZXg6IDEgMSA1NXB4O1xyXG4gIH1cclxuXHJcbiAgJi0tYWN0aXZlIHtcclxuICAgIGZsZXg6IDEgMSA0NXB4O1xyXG4gIH1cclxuXHJcbiAgJi0tYWN0aW9ucyB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIyNSwgMjI1LCAyMjUsIDEpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAmX19sYWJlbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0YWJsZS1hY3Rpb24tbGFiZWwge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgdGV4dC1zaGFkb3c6IDAuMTFyZW0gMC4xMXJlbSAwLjFyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcclxuICBwYWRkaW5nOiAwLjI2ZW0gMC40MmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbWFyZ2luOiAwIDAuMnJlbTtcclxuICB3aWR0aDogYXV0bztcclxuICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMjUlKTtcclxuICB9XHJcblxyXG4gICY6YWN0aXZlIHtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxNTAlKTtcclxuICB9XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKCgyMDAlKSk7XHJcbiAgfVxyXG5cclxuICAmLS1lZGl0IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYig1NSwgMjAwLCAxMDApO1xyXG4gIH1cclxuXHJcbiAgJi0tZGVsZXRlIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDEwMCwgMCk7XHJcbiAgfVxyXG5cclxuICAmLS1saXN0IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxMDAsIDEwMCwgMjIwKTtcclxuICB9XHJcblxyXG4gICYtLWRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxNTAsIDE1MCwgMTUwKTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0YWJsZS1wYXJ0cyB7XHJcbiAgLnRhYmxlIHtcclxuICAgIEBpbmNsdWRlIHRhYmxlO1xyXG4gIH1cclxuXHJcbiAgLmNlbGwge1xyXG4gICAgQGluY2x1ZGUgY2VsbDtcclxuICB9XHJcblxyXG4gIC5hY3Rpb24tbGFiZWwge1xyXG4gICAgQGluY2x1ZGUgdGFibGUtYWN0aW9uLWxhYmVsO1xyXG4gIH1cclxuXHJcbiAgLmNlbGwtLWRhdGEuY2VsbC0tcHJvbW8tZGVzY3JpcHRpb24sXHJcbiAgLmNlbGwtLWRhdGEuY2VsbC0tcHJpemUtZGVzY3JpcHRpb24ge1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIH1cclxufVxyXG4iLCIkZm9ybS1iYWNrZ3JvdW5kOiByZ2JhKDI0MCwgMjQwLCAyNDAsIDEpO1xyXG4kZm9ybS1ib3JkZXItY29sb3I6IHJnYmEoMTUwLCAxNTAsIDE1MCwgMSk7XHJcbiRmb3JtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiRmb3JtLWJvcmRlci13aWR0aDogMC4xcmVtO1xyXG4kZm9ybS1ib3JkZXItcmFkaXVzOiAwLjJyZW07XHJcbiRmb3JtLWJ1dHRvbi1iYWNrZ3JvdW5kOiByZ2JhKDIzMiwgMjMwLCAyMzgsIDEpO1xyXG4kZm9ybS1idXR0b24tYmFja2dyb3VuZC0taG92ZXI6IHJnYmEoMjM3LCAyMzUsIDI0MywgMSk7XHJcbiRmb3JtLWJ1dHRvbi1iYWNrZ3JvdW5kLS1mb2N1czogcmdiYSgyNDIsIDI0MCwgMjQ4LCAxKTtcclxuJGZvcm0tYnV0dG9uLWJhY2tncm91bmQtLWFjdGl2ZTogcmdiYSgyNDcsIDI0NywgMjUzLCAxKTtcclxuJGZvcm0tYnV0dG9uLWJvcmRlci1jb2xvcjogcmdiYSgxOTIsIDE5MCwgMTk4LCAxKTtcclxuXHJcbiRmb3JtLW1lc3NhZ2UtYmFja2dyb3VuZDogcmdiYSgyMTIsIDIxMCwgMjE4LCAxKTtcclxuXHJcbiRpbnB1dC1ib3JkZXItY29sb3I6IHJnYmEoMTIwLCAxMjAsIDEyMCwgMSk7XHJcbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAwLjJyZW07XHJcblxyXG4kaW5wdXQtYm9yZGVyLXdpZHRoOiAwLjA1cmVtO1xyXG4kaW5wdXQtYm9yZGVyLXdpZHRoLS1mb2N1czogMC4wOHJlbTtcclxuXHJcbiRpbnB1dC1ncm91cC1iYWNrZ3JvdW5kOiByZ2JhKDIyMCwgMjIwLCAyMjAsIDEpO1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PromoFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-promo-form',
                templateUrl: './promo-form.component.html',
                styleUrls: ['./promo-form.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_fire_service__WEBPACK_IMPORTED_MODULE_5__["FireService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }]; }, { promo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], editItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], photo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['userPhoto']
        }] }); })();


/***/ }),

/***/ "VTDY":
/*!*************************************************************!*\
  !*** ./src/app/auth/profile-page/profile-page.component.ts ***!
  \*************************************************************/
/*! exports provided: ProfilePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageComponent", function() { return ProfilePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/auth */ "i6m5");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "qXBG");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ProfilePageComponent_ng_container_1_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "NIP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.nip);
} }
function ProfilePageComponent_ng_container_1_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Przedstawiciel Sklepu ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ProfilePageComponent_ng_container_1_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Kupuj\u0105cy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ProfilePageComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProfilePageComponent_ng_container_1_div_12_Template, 5, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Funkcja w serwisie");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProfilePageComponent_ng_container_1_ng_container_17_Template, 2, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProfilePageComponent_ng_container_1_ng_container_18_Template, 2, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("nazwa ", user_r1.role === "vendor" ? "sklepu" : "u\u017Cytkownika", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r1.nip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r1.role === "vendor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r1.role === "customer");
} }
class ProfilePageComponent {
    constructor(auth, store) {
        this.auth = auth;
        this.store = store;
        this.user$ = this.store.select(src_app_auth__WEBPACK_IMPORTED_MODULE_1__["selectAuthUserProfile"]);
    }
    ngOnInit() { }
}
ProfilePageComponent.ɵfac = function ProfilePageComponent_Factory(t) { return new (t || ProfilePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
ProfilePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfilePageComponent, selectors: [["app-profile-page"]], decls: 3, vars: 3, consts: [[1, "wrapper"], [4, "ngIf"], [1, "details"], [1, "detail"], [1, "detail__label"], [1, "detail__value"], ["class", "detail", 4, "ngIf"]], template: function ProfilePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfilePageComponent_ng_container_1_Template, 19, 6, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.user$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  align-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100%;\n  padding: 2rem;\n  background: #ffb98d;\n  background: linear-gradient(144deg, #ffe87f 0%, #ffb98d 100%);\n  overflow: hidden;\n}\n\n.details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 30vw;\n  margin: 1rem;\n  height: 90%;\n  border-radius: 0.2rem;\n  box-shadow: 0 0.1rem 0.3rem 0.1rem rgba(0, 0, 0, 0.3);\n  padding: 1.4rem 0.4rem;\n  background: #fff;\n}\n\n.details--promos[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n\n.detail[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 0.25rem;\n  padding: 2rem;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.detail__label[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  text-transform: uppercase;\n  font-size: 0.9rem;\n  border-radius: 0.2rem;\n  padding: 0.25rem;\n  margin-bottom: 0.5rem;\n  width: auto;\n  color: #6464c8;\n  font-weight: 700;\n}\n\n.detail__value[_ngcontent-%COMP%] {\n  border: 0.06rem solid rgba(0, 0, 0, 0.2);\n  padding: 0.5rem 0.7rem;\n  border-radius: 0.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9wcm9maWxlLXBhZ2UvcHJvZmlsZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvc3R5bGVzL21peGlucy5zY3NzIiwic3JjL2FwcC9zaGFyZWQvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VDWUUsYUFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkRBQUE7RUFNQSxnQkFBQTtBRGxCRjs7QUFKQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJFWG1CO0VGYW5CLHFEQUFBO0VBQ0Esc0JBQUE7RUFFQSxnQkFBQTtBQUlGOztBQUZFO0VBQ0UsMkJBQUE7QUFJSjs7QUFBQTtFQUNFLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUFHRjs7QUFERTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFBRTtFQUNFLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkU5Q2lCO0FGZ0RyQiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcHJvZmlsZS1wYWdlL3Byb2ZpbGUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLy4uLy4uL3NoYXJlZC9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtcclxuQGltcG9ydCBcIi4vLi4vLi4vc2hhcmVkL3N0eWxlcy9taXhpbnMuc2Nzc1wiO1xyXG5cclxuLndyYXBwZXIge1xyXG4gIEBpbmNsdWRlIHdyYXBwZXIteWVsbG93LWZsZXg7XHJcbn1cclxuXHJcbi5kZXRhaWxzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICB3aWR0aDogMzB2dztcclxuICBtYXJnaW46IDFyZW07XHJcbiAgaGVpZ2h0OiA5MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogJGZvcm0tYm9yZGVyLXJhZGl1cztcclxuXHJcbiAgYm94LXNoYWRvdzogMCAwLjFyZW0gMC4zcmVtIDAuMXJlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgcGFkZGluZzogMS40cmVtIDAuNHJlbTtcclxuXHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuXHJcbiAgJi0tcHJvbW9zIHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICB9XHJcbn1cclxuXHJcbi5kZXRhaWwge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgJl9fbGFiZWwge1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcclxuICAgIHBhZGRpbmc6IDAuMjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGNvbG9yOiByZ2IoMTAwLCAxMDAsIDIwMCk7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuXHJcbiAgJl9fdmFsdWUge1xyXG4gICAgYm9yZGVyOiAwLjA2cmVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjdyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAkZm9ybS1ib3JkZXItcmFkaXVzO1xyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0IFwiLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuQG1peGluIHdyYXBwZXIteWVsbG93IHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMTg1LCAxNDEpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDE0NGRlZyxcclxuICAgIHJnYmEoMjU1LCAxODUsIDE0MSwgMSkgMCUsXHJcbiAgICByZ2JhKDI1NSwgMjMyLCAxMjcsIDEpIDEwMCVcclxuICApO1xyXG59XHJcblxyXG5AbWl4aW4gd3JhcHBlci15ZWxsb3ctZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMTg1LCAxNDEpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDE0NGRlZyxcclxuICAgIHJnYmEoMjU1LCAyMzIsIDEyNywgMSkgMCUsXHJcbiAgICByZ2JhKDI1NSwgMTg1LCAxNDEsIDEpIDEwMCVcclxuICApO1xyXG5cclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5AbWl4aW4gd3JhcHBlci1ibHVlLWZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgxNTksIDE2OSwgMjE4LCAxKSAwJSwgcmdiKDkwLCA5MCwgMTgwKSAxMDAlKTtcclxuXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLy8gIyMjIEZPUk1TICMjI1xyXG5cclxuLy8gIyBGT1JNIC0gQVVUSCAjXHJcbkBtaXhpbiBmb3JtLWF1dGgge1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDMwdnc7XHJcbiAgYm94LXNoYWRvdzogMCAwLjFyZW0gMC4zcmVtIDAuMXJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBiYWNrZ3JvdW5kOiAkZm9ybS1iYWNrZ3JvdW5kO1xyXG4gIGJvcmRlcjogJGZvcm0tYm9yZGVyLXdpZHRoIHNvbGlkICRmb3JtLWJvcmRlci1jb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiAkZm9ybS1ib3JkZXItcmFkaXVzO1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDE4NSwgMTQxKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAxNDRkZWcsXHJcbiAgICByZ2JhKDI1NSwgMjMyLCAxMjcsIDEpIDAlLFxyXG4gICAgcmdiYSgyNTUsIDE4NSwgMTQxLCAxKSAxMDAlXHJcbiAgKTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxuICAmX19sYWJlbCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC40cmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAycmVtO1xyXG5cclxuICAgICYtLWltYWdlIHtcclxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBoZWlnaHQ6IDV2aDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgICYtLWltYWdlLXJlc3VsdCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGZvcm0tYXV0aC1pbnB1dC1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBtYXJnaW46IDAuM3JlbTtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zNXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgJi0tZXNzZW50aWFscyB7XHJcbiAgICBncmlkLXJvdzogMSAvIHNwYW4gMjtcclxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xyXG4gIH1cclxuXHJcbiAgJi0tcHJpemUge1xyXG4gICAgZ3JpZC1yb3c6IDMgLyBzcGFuIDI7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcclxuICB9XHJcbiAgJi0tcG9pbnRzIHtcclxuICAgIGdyaWQtcm93OiA1IC8gc3BhbiAyO1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7XHJcbiAgfVxyXG5cclxuICAmLS1pbWFnZSB7XHJcbiAgICBncmlkLXJvdzogMSAvIHNwYW4gMTtcclxuICAgIGdyaWQtY29sdW1uOiAzIC8gc3BhbiAyO1xyXG4gICAgcGFkZGluZzogMC40cmVtO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuXHJcbiAgJi0taW1hZ2UtcmVzdWx0IHtcclxuICAgIGdyaWQtcm93OiAzIC8gc3BhbiA1O1xyXG4gICAgZ3JpZC1jb2x1bW46IDMgLyBzcGFuIDQ7XHJcbiAgICBib3JkZXI6IDAuMDJyZW0gc29saWQgJGlucHV0LWJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICB9XHJcbiAgJi0tYnV0dG9ucyB7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBncmlkLXJvdzogMSAvIHNwYW4gMTtcclxuICAgIGdyaWQtY29sdW1uOiA1IC8gc3BhbiAyO1xyXG4gICAgcGFkZGluZzogMC40cmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxZW0gM2VtO1xyXG4gIH1cclxuXHJcbiAgJi0tcmVzdWx0IHtcclxuICAgIGdyaWQtcm93OiA1IC8gc3BhbiAyO1xyXG4gICAgZ3JpZC1jb2x1bW46IDMgLyBzcGFuIDI7XHJcbiAgICBib3JkZXI6ICRmb3JtLWJvcmRlci13aWR0aCBzb2xpZCAkZm9ybS1idXR0b24tYm9yZGVyLWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgJi0tbWVzc2FnZSB7XHJcbiAgICBncmlkLXJvdzogMiAvIHNwYW4gMTtcclxuXHJcbiAgICBncmlkLWNvbHVtbjogMyAvIHNwYW4gNDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGJhY2tncm91bmQ6ICRmb3JtLW1lc3NhZ2UtYmFja2dyb3VuZDtcclxuICAgIGJvcmRlcjogJGZvcm0tYm9yZGVyLXdpZHRoIHNvbGlkICRmb3JtLW1lc3NhZ2UtYmFja2dyb3VuZDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLWF1dGgtaW5wdXQtd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgbWFyZ2luOiAwLjJyZW0gMDtcclxufVxyXG5cclxuQG1peGluIGZvcm0tYXV0aC1tZXNzYWdlIHtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBoZWlnaHQ6IDR2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1hdXRoLWJ1dHRvbnMge1xyXG4gIGhlaWdodDogNnZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBtYXJnaW46IDAuNHJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XHJcbiAgYm9yZGVyOiAkZm9ybS1ib3JkZXItd2lkdGggc29saWQgJGZvcm0tYnV0dG9uLWJvcmRlci1jb2xvcjtcclxuICBib3JkZXI6IDAuMDZyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAkZm9ybS1idXR0b24tYmFja2dyb3VuZDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogJGZvcm0tYnV0dG9uLWJhY2tncm91bmQtLWhvdmVyO1xyXG4gIH1cclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZm9ybS1idXR0b24tYmFja2dyb3VuZC0tZm9jdXM7XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZm9ybS1idXR0b24tYmFja2dyb3VuZC0tYWN0aXZlO1xyXG4gIH1cclxuXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1hdXRoLWlucHV0IHtcclxuICBib3JkZXI6IDAuMDZyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICB3aWR0aDogMjR2dztcclxuICBwYWRkaW5nOiAwIDEuM3JlbTtcclxuICBoZWlnaHQ6IDd2aDtcclxuICBtYXJnaW46IDAuMzVyZW07XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbn1cclxuXHJcbi8vICMgRk9STSAtIFBST01PU1xyXG5cclxuQG1peGluIGZvcm0tcHJvbW8tYmFzZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG5cclxuICBoZWlnaHQ6IDkwdmg7XHJcbiAgd2lkdGg6IDkwdnc7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBib3gtc2hhZG93OiAwIDAuMXJlbSAwLjNyZW0gMC4xcmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGJvcmRlcjogJGZvcm0tYm9yZGVyLXdpZHRoIHNvbGlkICRmb3JtLWJvcmRlci1jb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiAkZm9ybS1ib3JkZXItcmFkaXVzO1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDE4NSwgMTQxKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAxNDRkZWcsXHJcbiAgICByZ2JhKDI1NSwgMjMyLCAxMjcsIDEpIDAlLFxyXG4gICAgcmdiYSgyNTUsIDE4NSwgMTQxLCAxKSAxMDAlXHJcbiAgKTtcclxuXHJcbiAgJl9fc2VjdGlvbiB7XHJcbiAgICB3aWR0aDogNDV2dztcclxuICAgIGhlaWdodDogODZ2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1wcm9tby1pbnB1dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlcjogMC4wNnJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogOCU7XHJcbiAgcGFkZGluZzogMC44ZW07XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1wcm9tby1pbnB1dC13cmFwcGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDAuNzVyZW0gMDtcclxufVxyXG5cclxuQG1peGluIGZvcm0tcHJvbW8tbWVzc2FnZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1wcm9tby1tZXNzYWdlLXdyYXBwZXIge1xyXG4gIGhlaWdodDogNSU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBsaW5lLWJyZWFrOiBzdHJpY3Q7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuQG1peGluIGZvcm0tcHJvbW8tZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDQwdnc7XHJcbiAgaGVpZ2h0OiA4NnZoO1xyXG4gIG1hcmdpbjogMC4zcmVtO1xyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4xcmVtO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDAgMC4xcmVtIDAuM3JlbSAwLjFyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICZfX2xhYmVsIHtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjJyZW07XHJcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogcmdiKDEwMCwgMTAwLCAyMDApO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcbiAgJi0tYnV0dG9ucyB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuXHJcbiAgJi0tcmVzdWx0IHtcclxuICAgIGJvcmRlcjogJGZvcm0tYm9yZGVyLXdpZHRoIHNvbGlkICRmb3JtLWJ1dHRvbi1ib3JkZXItY29sb3I7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1wcm9tby1idXR0b25zIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgbWFyZ2luOiAwLjRyZW07XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIG1hcmdpbjogMC43NXJlbSAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udDogNDAwIDAuOXJlbSBSb2JvdG87XHJcblxyXG4gIG1pbi1oZWlnaHQ6IDV2aDtcclxuXHJcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xyXG4gIGJvcmRlcjogMC4wNnJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZm9ybS1idXR0b24tYmFja2dyb3VuZC0taG92ZXI7XHJcbiAgfVxyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQ6ICRmb3JtLWJ1dHRvbi1iYWNrZ3JvdW5kLS1mb2N1cztcclxuICB9XHJcblxyXG4gICY6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICRmb3JtLWJ1dHRvbi1iYWNrZ3JvdW5kLS1hY3RpdmU7XHJcbiAgfVxyXG5cclxuICAmOmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcclxuICB9XHJcbn1cclxuXHJcbi8vICMjIyBUYWJsZSAjIyNcclxuQG1peGluIHRhYmxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4xcmVtO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDAgMC4xcmVtIDAuM3JlbSAwLjFyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGJvcmRlci1zcGFjaW5nOiAwcHg7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG5cclxuICAmX19oZWFkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICZfX2JvZHkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIH1cclxuXHJcbiAgJl9fcm93IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGhlaWdodDogN3ZoO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyOiAwLjA1cmVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuXHJcbiAgICAmLS1oZWFkIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMC4xcmVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE4NSwgMTQxLCAwLjUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gY2VsbCB7XHJcbiAgZmxleDogMSAxIDEwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci1yaWdodDogbm9uZTtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBib3JkZXItcmlnaHQ6IDAuMDFyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG5cclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG5cclxuICAmOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmLS1kYXRhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5cclxuICAkYmFja2dyb3VuZDE6IHJnYmEoMjMzLCAxNTIsIDY3LCAwLjIpO1xyXG4gICRiYWNrZ3JvdW5kMjogcmdiYSgyNTIsIDE3NSwgMTEsIDAuMik7XHJcblxyXG4gICYtLXByb21vLW5hbWUge1xyXG4gICAgZmxleDogMSAxIDEzMHB4O1xyXG4gIH1cclxuXHJcbiAgJi0tcHJvbW8tZGVzY3JpcHRpb24ge1xyXG4gICAgZmxleDogMSAwIDE1MHB4O1xyXG4gIH1cclxuXHJcbiAgJi0tdmVuZG9yLWVtYWlsIHtcclxuICAgIGZsZXg6IDEgMCAxNTBweDtcclxuICB9XHJcblxyXG4gICYtLWFkZHJlc3Mtc3RvcmUge1xyXG4gICAgZmxleDogMSAxIDEzMHB4O1xyXG4gIH1cclxuXHJcbiAgJi0tcHJvbW8tZGV0YWlscyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDE7XHJcbiAgfVxyXG4gICYtLXByaXplIHtcclxuICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kMTtcclxuICB9XHJcblxyXG4gICYtLXF1YW50aXR5IHtcclxuICAgIGZsZXg6IDEgMSA1NXB4O1xyXG4gIH1cclxuXHJcbiAgJi0tcG9pbnRzIHtcclxuICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kMTtcclxuICAgIGZsZXg6IDEgMSA1NXB4O1xyXG4gIH1cclxuXHJcbiAgJi0tcGFydGljaXBhbnRzIHtcclxuICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kMTtcclxuICB9XHJcblxyXG4gICYtLXBhcnRpY2lwYW50cy10b3RhbCB7XHJcbiAgICBmbGV4OiAxIDEgNTVweDtcclxuICB9XHJcblxyXG4gICYtLXBhcnRpY2lwYW50cy1saXN0IHtcclxuICAgIGZsZXg6IDEgMSA1NXB4O1xyXG4gIH1cclxuXHJcbiAgJi0tbWV0YWRhdGEge1xyXG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQxO1xyXG4gIH1cclxuXHJcbiAgJi0tY3JlYXRlZC1vbiB7XHJcbiAgICBmbGV4OiAxIDEgNTVweDtcclxuICB9XHJcblxyXG4gICYtLWFjdGl2ZSB7XHJcbiAgICBmbGV4OiAxIDEgNDVweDtcclxuICB9XHJcblxyXG4gICYtLWFjdGlvbnMge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMjUsIDIyNSwgMjI1LCAxKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJl9fbGFiZWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gdGFibGUtYWN0aW9uLWxhYmVsIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIHRleHQtc2hhZG93OiAwLjExcmVtIDAuMTFyZW0gMC4xcmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XHJcbiAgcGFkZGluZzogMC4yNmVtIDAuNDJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIG1hcmdpbjogMCAwLjJyZW07XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgY29sb3I6ICNmZmY7XHJcblxyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTI1JSk7XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTUwJSk7XHJcbiAgfVxyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygoMjAwJSkpO1xyXG4gIH1cclxuXHJcbiAgJi0tZWRpdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNTUsIDIwMCwgMTAwKTtcclxuICB9XHJcblxyXG4gICYtLWRlbGV0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAxMDAsIDApO1xyXG4gIH1cclxuXHJcbiAgJi0tbGlzdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTAwLCAxMDAsIDIyMCk7XHJcbiAgfVxyXG5cclxuICAmLS1kaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTUwLCAxNTAsIDE1MCk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gdGFibGUtcGFydHMge1xyXG4gIC50YWJsZSB7XHJcbiAgICBAaW5jbHVkZSB0YWJsZTtcclxuICB9XHJcblxyXG4gIC5jZWxsIHtcclxuICAgIEBpbmNsdWRlIGNlbGw7XHJcbiAgfVxyXG5cclxuICAuYWN0aW9uLWxhYmVsIHtcclxuICAgIEBpbmNsdWRlIHRhYmxlLWFjdGlvbi1sYWJlbDtcclxuICB9XHJcblxyXG4gIC5jZWxsLS1kYXRhLmNlbGwtLXByb21vLWRlc2NyaXB0aW9uLFxyXG4gIC5jZWxsLS1kYXRhLmNlbGwtLXByaXplLWRlc2NyaXB0aW9uIHtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICB9XHJcbn1cclxuIiwiJGZvcm0tYmFja2dyb3VuZDogcmdiYSgyNDAsIDI0MCwgMjQwLCAxKTtcclxuJGZvcm0tYm9yZGVyLWNvbG9yOiByZ2JhKDE1MCwgMTUwLCAxNTAsIDEpO1xyXG4kZm9ybS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4kZm9ybS1ib3JkZXItd2lkdGg6IDAuMXJlbTtcclxuJGZvcm0tYm9yZGVyLXJhZGl1czogMC4ycmVtO1xyXG4kZm9ybS1idXR0b24tYmFja2dyb3VuZDogcmdiYSgyMzIsIDIzMCwgMjM4LCAxKTtcclxuJGZvcm0tYnV0dG9uLWJhY2tncm91bmQtLWhvdmVyOiByZ2JhKDIzNywgMjM1LCAyNDMsIDEpO1xyXG4kZm9ybS1idXR0b24tYmFja2dyb3VuZC0tZm9jdXM6IHJnYmEoMjQyLCAyNDAsIDI0OCwgMSk7XHJcbiRmb3JtLWJ1dHRvbi1iYWNrZ3JvdW5kLS1hY3RpdmU6IHJnYmEoMjQ3LCAyNDcsIDI1MywgMSk7XHJcbiRmb3JtLWJ1dHRvbi1ib3JkZXItY29sb3I6IHJnYmEoMTkyLCAxOTAsIDE5OCwgMSk7XHJcblxyXG4kZm9ybS1tZXNzYWdlLWJhY2tncm91bmQ6IHJnYmEoMjEyLCAyMTAsIDIxOCwgMSk7XHJcblxyXG4kaW5wdXQtYm9yZGVyLWNvbG9yOiByZ2JhKDEyMCwgMTIwLCAxMjAsIDEpO1xyXG4kaW5wdXQtYm9yZGVyLXJhZGl1czogMC4ycmVtO1xyXG5cclxuJGlucHV0LWJvcmRlci13aWR0aDogMC4wNXJlbTtcclxuJGlucHV0LWJvcmRlci13aWR0aC0tZm9jdXM6IDAuMDhyZW07XHJcblxyXG4kaW5wdXQtZ3JvdXAtYmFja2dyb3VuZDogcmdiYSgyMjAsIDIyMCwgMjIwLCAxKTtcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfilePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-page',
                templateUrl: './profile-page.component.html',
                styleUrls: ['./profile-page.component.scss'],
            }]
    }], function () { return [{ type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, null); })();


/***/ }),

/***/ "Yj9t":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log-in/log-in.component */ "MaAH");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "ZGml");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.routing-module */ "6uPG");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "qXBG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _auth_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.reducer */ "5W12");
/* harmony import */ var _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile-page/profile-page.component */ "VTDY");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");












const components = [_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_1__["LogInComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"], _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_8__["ProfilePageComponent"]];
class AuthModule {
}
AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthModule_Factory(t) { return new (t || AuthModule)(); }, providers: [_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]], imports: [[
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forFeature(_auth_reducer__WEBPACK_IMPORTED_MODULE_7__["featureKey"], _auth_reducer__WEBPACK_IMPORTED_MODULE_7__["reducer"]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_1__["LogInComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"], _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_8__["ProfilePageComponent"]], imports: [_auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreFeatureModule"]], exports: [_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_1__["LogInComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"], _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_8__["ProfilePageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: components,
                imports: [
                    _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forFeature(_auth_reducer__WEBPACK_IMPORTED_MODULE_7__["featureKey"], _auth_reducer__WEBPACK_IMPORTED_MODULE_7__["reducer"]),
                ],
                exports: components,
                providers: [_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/auth.module */ "Yj9t");
/* harmony import */ var _fire_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fire.service */ "L3EA");
/* harmony import */ var _promos_promos_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./promos/promos.module */ "0m0R");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_fire_service__WEBPACK_IMPORTED_MODULE_10__["FireService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot({}),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_9__["AuthModule"],
            _promos_promos_module__WEBPACK_IMPORTED_MODULE_11__["PromosModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebase, 'cloud'),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestoreModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreRootModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
        _auth_auth_module__WEBPACK_IMPORTED_MODULE_9__["AuthModule"],
        _promos_promos_module__WEBPACK_IMPORTED_MODULE_11__["PromosModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestoreModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot({}),
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                    _auth_auth_module__WEBPACK_IMPORTED_MODULE_9__["AuthModule"],
                    _promos_promos_module__WEBPACK_IMPORTED_MODULE_11__["PromosModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebase, 'cloud'),
                    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestoreModule"],
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                providers: [_fire_service__WEBPACK_IMPORTED_MODULE_10__["FireService"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "ZGml":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "qXBG");
/* harmony import */ var src_app_fire_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/fire.service */ "L3EA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function RegisterComponent_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " adres sklepu ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " NIP (10 cyfr) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class RegisterComponent {
    constructor(auth, fire, router, fb) {
        this.auth = auth;
        this.fire = fire;
        this.router = router;
        this.fb = fb;
        this.message = '';
        this.initForm();
    }
    ngOnInit() { }
    ngAfterViewInit() { }
    attachVendorControls() { }
    onSubmit() {
        if (this.form.valid) {
            const email = this.form.value['email'];
            const password = this.form.value['password'];
            const nickname = this.form.value['nickname'];
            const role = this.form.value['role'];
            const storeAddress = this.form.value['storeAddress'];
            const nip = this.form.value['nip'];
            this.auth
                .register(email, password, { nickname, role })
                .then((value) => {
                const authUid = value.user.uid;
                let userData = {
                    email,
                    password,
                    name: nickname,
                    role: role,
                };
                if (this.form.value['role'] === 'vendor') {
                    userData = Object.assign(Object.assign({}, userData), { storeAddress, nip });
                }
                if (this.form.value['role'] === 'customer') {
                    let coupons = [];
                    userData = Object.assign(Object.assign({}, userData), { coupons });
                }
                this.fire.addUserToCollection(role, authUid, userData);
                this.router.navigate(['auth/log-in']);
            })
                .catch((error) => {
                console.log('Something went wrong: ', error);
                this.message = error.message;
            });
        }
    }
    initForm() {
        let group = {};
        group['email'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
        ]);
        group['password'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(8),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
        ]);
        group['nickname'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(2)]);
        group['role'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('vendor', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        group['storeAddress'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        group['nip'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^-?(0|[1-9]\d*)?$/),
        ]);
        this.form = this.fb.group(group);
    }
    resetForm() {
        this.form.reset();
        this.initForm();
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_fire_service__WEBPACK_IMPORTED_MODULE_3__["FireService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 32, vars: 5, consts: [[1, "wrapper"], [1, "form", 3, "formGroup", "ngSubmit", "reset"], [1, "input-group", "input-group--points"], [1, "input-wrapper"], ["for", "role", 1, "form__label"], ["name", "role", "formControlName", "role", 1, "form__input", "form__input--role"], ["roleInput", ""], ["value", "vendor"], ["value", "customer"], ["for", "email", 1, "form__label"], ["type", "email", "name", "email", "formControlName", "email", 1, "form__input"], ["for", "password", 1, "form__label"], ["type", "password", "name", "password", "formControlName", "password", 1, "form__input"], ["for", "nickname", 1, "form__label"], ["type", "text", "name", "nickname", "formControlName", "nickname", 1, "form__input"], [4, "ngIf"], [1, "input-group", "input-group--buttons"], ["type", "reset", 1, "button", "buttons"], ["type", "submit", 1, "button", "buttons", 3, "disabled"], [1, "message"], ["for", "storeAddress", 1, "form__label"], ["type", "text", "name", "storeAddress", "formControlName", "storeAddress", 1, "form__input"], ["for", "nip", 1, "form__label"], ["type", "text", "name", "nip", "formControlName", "nip", 1, "form__input"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); })("reset", function RegisterComponent_Template_form_reset_1_listener() { return ctx.resetForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " rola ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "sklep");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "klient");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " has\u0142o ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, RegisterComponent_ng_container_24_Template, 9, 0, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Wyczy\u015B\u0107");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Wy\u015Blij ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" nazwa ", _r0.value === "vendor" ? "sklepu" : "u\u017Cytkownika", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.value === "vendor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100%;\n  background: linear-gradient(#9fa9da 0%, #5a5ab4 100%);\n  overflow: hidden;\n}\n\n.form[_ngcontent-%COMP%] {\n  align-self: center;\n  justify-self: center;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: auto;\n  width: 30vw;\n  box-shadow: 0 0.1rem 0.3rem 0.1rem rgba(0, 0, 0, 0.2);\n  padding: 2rem;\n  background: #f0f0f0;\n  border: 0.1rem solid transparent;\n  border-radius: 0.2rem;\n  background: #ffb98d;\n  background: linear-gradient(144deg, #ffe87f 0%, #ffb98d 100%);\n  text-transform: uppercase;\n  overflow-y: scroll;\n  height: 90%;\n  display: initial;\n}\n\n.form__label[_ngcontent-%COMP%] {\n  padding-bottom: 0.4rem;\n  font-size: 1rem;\n  font-weight: 500;\n  letter-spacing: 0.02rem;\n}\n\n.form__label--image[_ngcontent-%COMP%] {\n  align-self: center;\n  display: flex;\n  text-align: center;\n  padding: 0;\n  justify-content: center;\n  align-items: center;\n  height: 5vh;\n  width: 100%;\n  background: white;\n}\n\n.form__label--image-result[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n}\n\n.input-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  margin: 0.3rem;\n  font-size: 0.75rem;\n  border-radius: 0.35rem;\n  width: 100%;\n}\n\n.input-group--essentials[_ngcontent-%COMP%] {\n  grid-row: 1/span 2;\n  grid-column: 1/span 2;\n}\n\n.input-group--prize[_ngcontent-%COMP%] {\n  grid-row: 3/span 2;\n  grid-column: 1/span 2;\n}\n\n.input-group--points[_ngcontent-%COMP%] {\n  grid-row: 5/span 2;\n  grid-column: 1/span 2;\n}\n\n.input-group--image[_ngcontent-%COMP%] {\n  grid-row: 1/span 1;\n  grid-column: 3/span 2;\n  padding: 0.4rem;\n  justify-content: space-between;\n}\n\n.input-group--image-result[_ngcontent-%COMP%] {\n  grid-row: 3/span 5;\n  grid-column: 3/span 4;\n  border: 0.02rem solid #787878;\n  border: none;\n  padding: 0;\n  height: auto;\n  max-width: 100%;\n  overflow: scroll;\n}\n\n.input-group--buttons[_ngcontent-%COMP%] {\n  align-items: stretch;\n  flex-direction: row;\n  grid-row: 1/span 1;\n  grid-column: 5/span 2;\n  padding: 0.4rem;\n  width: 100%;\n  padding: 1em 3em;\n}\n\n.input-group--result[_ngcontent-%COMP%] {\n  grid-row: 5/span 2;\n  grid-column: 3/span 2;\n  border: 0.1rem solid #c0bec6;\n}\n\n.input-group--message[_ngcontent-%COMP%] {\n  grid-row: 2/span 1;\n  grid-column: 3/span 4;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 2rem;\n  font-weight: 600;\n  background: #d4d2da;\n  border: 0.1rem solid #d4d2da;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  height: 6vh;\n  width: 100%;\n  margin: 0.4rem;\n  text-transform: uppercase;\n  font-family: Roboto;\n  font-size: 0.9rem;\n  font-weight: 400;\n  border-radius: 0.3rem;\n  border: 0.1rem solid #c0bec6;\n  border: 0.06rem solid rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n  background: #e8e6ee;\n  background: #fff;\n}\n\n.buttons[_ngcontent-%COMP%]:hover {\n  background: #edebf3;\n}\n\n.buttons[_ngcontent-%COMP%]:focus {\n  background: #f2f0f8;\n}\n\n.buttons[_ngcontent-%COMP%]:active {\n  background: #f7f7fd;\n}\n\n.buttons[_ngcontent-%COMP%]:disabled {\n  background: lightgrey;\n}\n\n.input-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  padding: 0.4rem;\n  margin: 0.2rem 0;\n}\n\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  border: 0.06rem solid rgba(0, 0, 0, 0.2);\n  background: #fff;\n  border-radius: 0.25rem;\n  width: 24vw;\n  padding: 0 1.3rem;\n  height: 7vh;\n  margin: 0.35rem;\n  font-size: 1.4rem;\n}\n\n.message[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  height: 4vh;\n  width: 100%;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3N0eWxlcy9taXhpbnMuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3N0eWxlcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQzhCRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxxREFBQTtFQUVBLGdCQUFBO0FEaENGOztBQUZBO0VDeUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxREFBQTtFQUNBLGFBQUE7RUFDQSxtQkMxRGdCO0VEMkRoQixnQ0FBQTtFQUNBLHFCQ3hEbUI7RUR5RG5CLG1CQUFBO0VBQ0EsNkRBQUE7RUFLQSx5QkFBQTtFRDFEQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQW9CRjs7QUNzQ0U7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FEcENKOztBQ3NDSTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FEcENOOztBQ3VDSTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBRHJDTjs7QUF4Q0E7RUNtRkUsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBRUEsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FEeENGOztBQzBDRTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUR4Q0o7O0FDMkNFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBRHpDSjs7QUMyQ0U7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FEekNKOztBQzRDRTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUQxQ0o7O0FDNkNFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUVBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FENUNKOztBQzhDRTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBRDVDSjs7QUMrQ0U7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUQ3Q0o7O0FDZ0RFO0VBQ0Usa0JBQUE7RUFFQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkMzSnNCO0VENEp0Qiw0QkFBQTtBRC9DSjs7QUF0R0E7RUN5S0UsV0FBQTtFQUNBLFdBQUE7RUFFQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0NBQUE7RUFDQSxlQUFBO0VBQ0EsbUJDbE11QjtFRG1NdkIsZ0JBQUE7QURoRUY7O0FDaUVFO0VBQ0UsbUJDcE00QjtBRnFJaEM7O0FDa0VFO0VBQ0UsbUJDdk00QjtBRnVJaEM7O0FDbUVFO0VBQ0UsbUJDMU02QjtBRnlJakM7O0FDb0VFO0VBQ0UscUJBQUE7QURsRUo7O0FBOUhBO0VDc0pFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEcEJGOztBQWxJQTs7RUNpTUUsd0NBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBRDFERjs7QUF6SUE7RUNxSkUsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FEUkYiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vLi4vLi4vc2hhcmVkL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiLi8uLi8uLi9zaGFyZWQvc3R5bGVzL21peGlucy5zY3NzXCI7XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgQGluY2x1ZGUgd3JhcHBlci1ibHVlLWZsZXg7XHJcbn1cclxuXHJcbi5mb3JtIHtcclxuICBAaW5jbHVkZSBmb3JtLWF1dGg7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIGhlaWdodDogOTAlO1xyXG4gIGRpc3BsYXk6IGluaXRpYWw7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cCB7XHJcbiAgQGluY2x1ZGUgZm9ybS1hdXRoLWlucHV0LWdyb3VwO1xyXG59XHJcblxyXG4uYnV0dG9ucyB7XHJcbiAgQGluY2x1ZGUgZm9ybS1hdXRoLWJ1dHRvbnM7XHJcbn1cclxuXHJcbi5pbnB1dC13cmFwcGVyIHtcclxuICBAaW5jbHVkZSBmb3JtLWF1dGgtaW5wdXQtd3JhcHBlcjtcclxufVxyXG5cclxuaW5wdXQsXHJcbnNlbGVjdCB7XHJcbiAgQGluY2x1ZGUgZm9ybS1hdXRoLWlucHV0O1xyXG59XHJcblxyXG4ubWVzc2FnZSB7XHJcbiAgQGluY2x1ZGUgZm9ybS1hdXRoLW1lc3NhZ2U7XHJcbn1cclxuIiwiQGltcG9ydCBcIi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbkBtaXhpbiB3cmFwcGVyLXllbGxvdyB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDE4NSwgMTQxKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAxNDRkZWcsXHJcbiAgICByZ2JhKDI1NSwgMTg1LCAxNDEsIDEpIDAlLFxyXG4gICAgcmdiYSgyNTUsIDIzMiwgMTI3LCAxKSAxMDAlXHJcbiAgKTtcclxufVxyXG5cclxuQG1peGluIHdyYXBwZXIteWVsbG93LWZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDE4NSwgMTQxKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAxNDRkZWcsXHJcbiAgICByZ2JhKDI1NSwgMjMyLCAxMjcsIDEpIDAlLFxyXG4gICAgcmdiYSgyNTUsIDE4NSwgMTQxLCAxKSAxMDAlXHJcbiAgKTtcclxuXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuQG1peGluIHdyYXBwZXItYmx1ZS1mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMTU5LCAxNjksIDIxOCwgMSkgMCUsIHJnYig5MCwgOTAsIDE4MCkgMTAwJSk7XHJcblxyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi8vICMjIyBGT1JNUyAjIyNcclxuXHJcbi8vICMgRk9STSAtIEFVVEggI1xyXG5AbWl4aW4gZm9ybS1hdXRoIHtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiAzMHZ3O1xyXG4gIGJveC1zaGFkb3c6IDAgMC4xcmVtIDAuM3JlbSAwLjFyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgYmFja2dyb3VuZDogJGZvcm0tYmFja2dyb3VuZDtcclxuICBib3JkZXI6ICRmb3JtLWJvcmRlci13aWR0aCBzb2xpZCAkZm9ybS1ib3JkZXItY29sb3I7XHJcbiAgYm9yZGVyLXJhZGl1czogJGZvcm0tYm9yZGVyLXJhZGl1cztcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAxODUsIDE0MSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgMTQ0ZGVnLFxyXG4gICAgcmdiYSgyNTUsIDIzMiwgMTI3LCAxKSAwJSxcclxuICAgIHJnYmEoMjU1LCAxODUsIDE0MSwgMSkgMTAwJVxyXG4gICk7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHJcbiAgJl9fbGFiZWwge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuNHJlbTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMnJlbTtcclxuXHJcbiAgICAmLS1pbWFnZSB7XHJcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgaGVpZ2h0OiA1dmg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAmLS1pbWFnZS1yZXN1bHQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLWF1dGgtaW5wdXQtZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgbWFyZ2luOiAwLjNyZW07XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMzVyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICYtLWVzc2VudGlhbHMge1xyXG4gICAgZ3JpZC1yb3c6IDEgLyBzcGFuIDI7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcclxuICB9XHJcblxyXG4gICYtLXByaXplIHtcclxuICAgIGdyaWQtcm93OiAzIC8gc3BhbiAyO1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7XHJcbiAgfVxyXG4gICYtLXBvaW50cyB7XHJcbiAgICBncmlkLXJvdzogNSAvIHNwYW4gMjtcclxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xyXG4gIH1cclxuXHJcbiAgJi0taW1hZ2Uge1xyXG4gICAgZ3JpZC1yb3c6IDEgLyBzcGFuIDE7XHJcbiAgICBncmlkLWNvbHVtbjogMyAvIHNwYW4gMjtcclxuICAgIHBhZGRpbmc6IDAuNHJlbTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcblxyXG4gICYtLWltYWdlLXJlc3VsdCB7XHJcbiAgICBncmlkLXJvdzogMyAvIHNwYW4gNTtcclxuICAgIGdyaWQtY29sdW1uOiAzIC8gc3BhbiA0O1xyXG4gICAgYm9yZGVyOiAwLjAycmVtIHNvbGlkICRpbnB1dC1ib3JkZXItY29sb3I7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcblxyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgfVxyXG4gICYtLWJ1dHRvbnMge1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZ3JpZC1yb3c6IDEgLyBzcGFuIDE7XHJcbiAgICBncmlkLWNvbHVtbjogNSAvIHNwYW4gMjtcclxuICAgIHBhZGRpbmc6IDAuNHJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMWVtIDNlbTtcclxuICB9XHJcblxyXG4gICYtLXJlc3VsdCB7XHJcbiAgICBncmlkLXJvdzogNSAvIHNwYW4gMjtcclxuICAgIGdyaWQtY29sdW1uOiAzIC8gc3BhbiAyO1xyXG4gICAgYm9yZGVyOiAkZm9ybS1ib3JkZXItd2lkdGggc29saWQgJGZvcm0tYnV0dG9uLWJvcmRlci1jb2xvcjtcclxuICB9XHJcblxyXG4gICYtLW1lc3NhZ2Uge1xyXG4gICAgZ3JpZC1yb3c6IDIgLyBzcGFuIDE7XHJcblxyXG4gICAgZ3JpZC1jb2x1bW46IDMgLyBzcGFuIDQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZm9ybS1tZXNzYWdlLWJhY2tncm91bmQ7XHJcbiAgICBib3JkZXI6ICRmb3JtLWJvcmRlci13aWR0aCBzb2xpZCAkZm9ybS1tZXNzYWdlLWJhY2tncm91bmQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1hdXRoLWlucHV0LXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMC40cmVtO1xyXG4gIG1hcmdpbjogMC4ycmVtIDA7XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLWF1dGgtbWVzc2FnZSB7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgaGVpZ2h0OiA0dmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuQG1peGluIGZvcm0tYXV0aC1idXR0b25zIHtcclxuICBoZWlnaHQ6IDZ2aDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgbWFyZ2luOiAwLjRyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xyXG4gIGJvcmRlcjogJGZvcm0tYm9yZGVyLXdpZHRoIHNvbGlkICRmb3JtLWJ1dHRvbi1ib3JkZXItY29sb3I7XHJcbiAgYm9yZGVyOiAwLjA2cmVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZDogJGZvcm0tYnV0dG9uLWJhY2tncm91bmQ7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICRmb3JtLWJ1dHRvbi1iYWNrZ3JvdW5kLS1ob3ZlcjtcclxuICB9XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZDogJGZvcm0tYnV0dG9uLWJhY2tncm91bmQtLWZvY3VzO1xyXG4gIH1cclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogJGZvcm0tYnV0dG9uLWJhY2tncm91bmQtLWFjdGl2ZTtcclxuICB9XHJcblxyXG4gICY6ZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZDogbGlnaHRncmV5O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGZvcm0tYXV0aC1pbnB1dCB7XHJcbiAgYm9yZGVyOiAwLjA2cmVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgd2lkdGg6IDI0dnc7XHJcbiAgcGFkZGluZzogMCAxLjNyZW07XHJcbiAgaGVpZ2h0OiA3dmg7XHJcbiAgbWFyZ2luOiAwLjM1cmVtO1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG59XHJcblxyXG4vLyAjIEZPUk0gLSBQUk9NT1NcclxuXHJcbkBtaXhpbiBmb3JtLXByb21vLWJhc2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgaGVpZ2h0OiA5MHZoO1xyXG4gIHdpZHRoOiA5MHZ3O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgYm94LXNoYWRvdzogMCAwLjFyZW0gMC4zcmVtIDAuMXJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBib3JkZXI6ICRmb3JtLWJvcmRlci13aWR0aCBzb2xpZCAkZm9ybS1ib3JkZXItY29sb3I7XHJcbiAgYm9yZGVyLXJhZGl1czogJGZvcm0tYm9yZGVyLXJhZGl1cztcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAxODUsIDE0MSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgMTQ0ZGVnLFxyXG4gICAgcmdiYSgyNTUsIDIzMiwgMTI3LCAxKSAwJSxcclxuICAgIHJnYmEoMjU1LCAxODUsIDE0MSwgMSkgMTAwJVxyXG4gICk7XHJcblxyXG4gICZfX3NlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDQ1dnc7XHJcbiAgICBoZWlnaHQ6IDg2dmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGZvcm0tcHJvbW8taW5wdXQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXI6IDAuMDZyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDglO1xyXG4gIHBhZGRpbmc6IDAuOGVtO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuQG1peGluIGZvcm0tcHJvbW8taW5wdXQtd3JhcHBlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiAwLjc1cmVtIDA7XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLXByb21vLW1lc3NhZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuQG1peGluIGZvcm0tcHJvbW8tbWVzc2FnZS13cmFwcGVyIHtcclxuICBoZWlnaHQ6IDUlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbGluZS1icmVhazogc3RyaWN0O1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLXByb21vLWdyb3VwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiA0MHZ3O1xyXG4gIGhlaWdodDogODZ2aDtcclxuICBtYXJnaW46IDAuM3JlbTtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMXJlbTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAwIDAuMXJlbSAwLjNyZW0gMC4xcmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAmX19sYWJlbCB7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xyXG4gICAgcGFkZGluZzogMC4yNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHJnYigxMDAsIDEwMCwgMjAwKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG4gICYtLWJ1dHRvbnMge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcblxyXG4gICYtLXJlc3VsdCB7XHJcbiAgICBib3JkZXI6ICRmb3JtLWJvcmRlci13aWR0aCBzb2xpZCAkZm9ybS1idXR0b24tYm9yZGVyLWNvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGZvcm0tcHJvbW8tYnV0dG9ucyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgcGFkZGluZzogMC40cmVtO1xyXG4gIG1hcmdpbjogMC40cmVtO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBtYXJnaW46IDAuNzVyZW0gMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQ6IDQwMCAwLjlyZW0gUm9ib3RvO1xyXG5cclxuICBtaW4taGVpZ2h0OiA1dmg7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcclxuICBib3JkZXI6IDAuMDZyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogJGZvcm0tYnV0dG9uLWJhY2tncm91bmQtLWhvdmVyO1xyXG4gIH1cclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZm9ybS1idXR0b24tYmFja2dyb3VuZC0tZm9jdXM7XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZm9ybS1idXR0b24tYmFja2dyb3VuZC0tYWN0aXZlO1xyXG4gIH1cclxuXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyAjIyMgVGFibGUgIyMjXHJcbkBtaXhpbiB0YWJsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMXJlbTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAwIDAuMXJlbSAwLjNyZW0gMC4xcmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBib3JkZXItc3BhY2luZzogMHB4O1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxuXHJcbiAgJl9faGVhZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAmX19ib2R5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICB9XHJcblxyXG4gICZfX3JvdyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBoZWlnaHQ6IDd2aDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlcjogMC4wNXJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcblxyXG4gICAgJi0taGVhZCB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDAuMXJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxODUsIDE0MSwgMC41KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX25hbWUge1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGNlbGwge1xyXG4gIGZsZXg6IDEgMSAxMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgYm9yZGVyLXJpZ2h0OiAwLjAxcmVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuXHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuXHJcbiAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIH1cclxuXHJcbiAgJi0tZGF0YSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuXHJcbiAgJGJhY2tncm91bmQxOiByZ2JhKDIzMywgMTUyLCA2NywgMC4yKTtcclxuICAkYmFja2dyb3VuZDI6IHJnYmEoMjUyLCAxNzUsIDExLCAwLjIpO1xyXG5cclxuICAmLS1wcm9tby1uYW1lIHtcclxuICAgIGZsZXg6IDEgMSAxMzBweDtcclxuICB9XHJcblxyXG4gICYtLXByb21vLWRlc2NyaXB0aW9uIHtcclxuICAgIGZsZXg6IDEgMCAxNTBweDtcclxuICB9XHJcblxyXG4gICYtLXZlbmRvci1lbWFpbCB7XHJcbiAgICBmbGV4OiAxIDAgMTUwcHg7XHJcbiAgfVxyXG5cclxuICAmLS1hZGRyZXNzLXN0b3JlIHtcclxuICAgIGZsZXg6IDEgMSAxMzBweDtcclxuICB9XHJcblxyXG4gICYtLXByb21vLWRldGFpbHMge1xyXG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQxO1xyXG4gIH1cclxuICAmLS1wcml6ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDE7XHJcbiAgfVxyXG5cclxuICAmLS1xdWFudGl0eSB7XHJcbiAgICBmbGV4OiAxIDEgNTVweDtcclxuICB9XHJcblxyXG4gICYtLXBvaW50cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDE7XHJcbiAgICBmbGV4OiAxIDEgNTVweDtcclxuICB9XHJcblxyXG4gICYtLXBhcnRpY2lwYW50cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDE7XHJcbiAgfVxyXG5cclxuICAmLS1wYXJ0aWNpcGFudHMtdG90YWwge1xyXG4gICAgZmxleDogMSAxIDU1cHg7XHJcbiAgfVxyXG5cclxuICAmLS1wYXJ0aWNpcGFudHMtbGlzdCB7XHJcbiAgICBmbGV4OiAxIDEgNTVweDtcclxuICB9XHJcblxyXG4gICYtLW1ldGFkYXRhIHtcclxuICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kMTtcclxuICB9XHJcblxyXG4gICYtLWNyZWF0ZWQtb24ge1xyXG4gICAgZmxleDogMSAxIDU1cHg7XHJcbiAgfVxyXG5cclxuICAmLS1hY3RpdmUge1xyXG4gICAgZmxleDogMSAxIDQ1cHg7XHJcbiAgfVxyXG5cclxuICAmLS1hY3Rpb25zIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjI1LCAyMjUsIDIyNSwgMSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICZfX2xhYmVsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRhYmxlLWFjdGlvbi1sYWJlbCB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICB0ZXh0LXNoYWRvdzogMC4xMXJlbSAwLjExcmVtIDAuMXJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xyXG4gIHBhZGRpbmc6IDAuMjZlbSAwLjQyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXJnaW46IDAgMC4ycmVtO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG5cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEyNSUpO1xyXG4gIH1cclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDE1MCUpO1xyXG4gIH1cclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoKDIwMCUpKTtcclxuICB9XHJcblxyXG4gICYtLWVkaXQge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDU1LCAyMDAsIDEwMCk7XHJcbiAgfVxyXG5cclxuICAmLS1kZWxldGUge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMTAwLCAwKTtcclxuICB9XHJcblxyXG4gICYtLWxpc3Qge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDEwMCwgMTAwLCAyMjApO1xyXG4gIH1cclxuXHJcbiAgJi0tZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE1MCwgMTUwLCAxNTApO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRhYmxlLXBhcnRzIHtcclxuICAudGFibGUge1xyXG4gICAgQGluY2x1ZGUgdGFibGU7XHJcbiAgfVxyXG5cclxuICAuY2VsbCB7XHJcbiAgICBAaW5jbHVkZSBjZWxsO1xyXG4gIH1cclxuXHJcbiAgLmFjdGlvbi1sYWJlbCB7XHJcbiAgICBAaW5jbHVkZSB0YWJsZS1hY3Rpb24tbGFiZWw7XHJcbiAgfVxyXG5cclxuICAuY2VsbC0tZGF0YS5jZWxsLS1wcm9tby1kZXNjcmlwdGlvbixcclxuICAuY2VsbC0tZGF0YS5jZWxsLS1wcml6ZS1kZXNjcmlwdGlvbiB7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgfVxyXG59XHJcbiIsIiRmb3JtLWJhY2tncm91bmQ6IHJnYmEoMjQwLCAyNDAsIDI0MCwgMSk7XHJcbiRmb3JtLWJvcmRlci1jb2xvcjogcmdiYSgxNTAsIDE1MCwgMTUwLCAxKTtcclxuJGZvcm0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuJGZvcm0tYm9yZGVyLXdpZHRoOiAwLjFyZW07XHJcbiRmb3JtLWJvcmRlci1yYWRpdXM6IDAuMnJlbTtcclxuJGZvcm0tYnV0dG9uLWJhY2tncm91bmQ6IHJnYmEoMjMyLCAyMzAsIDIzOCwgMSk7XHJcbiRmb3JtLWJ1dHRvbi1iYWNrZ3JvdW5kLS1ob3ZlcjogcmdiYSgyMzcsIDIzNSwgMjQzLCAxKTtcclxuJGZvcm0tYnV0dG9uLWJhY2tncm91bmQtLWZvY3VzOiByZ2JhKDI0MiwgMjQwLCAyNDgsIDEpO1xyXG4kZm9ybS1idXR0b24tYmFja2dyb3VuZC0tYWN0aXZlOiByZ2JhKDI0NywgMjQ3LCAyNTMsIDEpO1xyXG4kZm9ybS1idXR0b24tYm9yZGVyLWNvbG9yOiByZ2JhKDE5MiwgMTkwLCAxOTgsIDEpO1xyXG5cclxuJGZvcm0tbWVzc2FnZS1iYWNrZ3JvdW5kOiByZ2JhKDIxMiwgMjEwLCAyMTgsIDEpO1xyXG5cclxuJGlucHV0LWJvcmRlci1jb2xvcjogcmdiYSgxMjAsIDEyMCwgMTIwLCAxKTtcclxuJGlucHV0LWJvcmRlci1yYWRpdXM6IDAuMnJlbTtcclxuXHJcbiRpbnB1dC1ib3JkZXItd2lkdGg6IDAuMDVyZW07XHJcbiRpbnB1dC1ib3JkZXItd2lkdGgtLWZvY3VzOiAwLjA4cmVtO1xyXG5cclxuJGlucHV0LWdyb3VwLWJhY2tncm91bmQ6IHJnYmEoMjIwLCAyMjAsIDIyMCwgMSk7XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.scss'],
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: src_app_fire_service__WEBPACK_IMPORTED_MODULE_3__["FireService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "dPrX":
/*!*************************************************!*\
  !*** ./src/app/promos/promos-routing.module.ts ***!
  \*************************************************/
/*! exports provided: PromosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromosRoutingModule", function() { return PromosRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_promos_public_promos_public_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/promos-public/promos-public.component */ "s9Xg");





const routes = [
    {
        path: '',
        children: [
            {
                path: 'promos',
                pathMatch: 'full',
                component: _shared_components_promos_public_promos_public_component__WEBPACK_IMPORTED_MODULE_2__["PromosPublicComponent"],
            },
            {
                path: 'customer',
                loadChildren: () => Promise.all(/*! import() | customer-customer-module */[__webpack_require__.e("common"), __webpack_require__.e("customer-customer-module")]).then(__webpack_require__.bind(null, /*! ./customer/customer.module */ "+WK0")).then((m) => m.CustomerModule),
            },
            {
                path: 'vendor',
                loadChildren: () => Promise.all(/*! import() | vendor-vendor-module */[__webpack_require__.e("common"), __webpack_require__.e("vendor-vendor-module")]).then(__webpack_require__.bind(null, /*! ./vendor/vendor.module */ "MmiT")).then((m) => m.VendorModule),
            },
        ],
    },
];
class PromosRoutingModule {
}
PromosRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PromosRoutingModule });
PromosRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PromosRoutingModule_Factory(t) { return new (t || PromosRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PromosRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PromosRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "i6m5":
/*!*******************************!*\
  !*** ./src/app/auth/index.ts ***!
  \*******************************/
/*! exports provided: selectAuth, selectAuthUserProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAuth", function() { return selectAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAuthUserProfile", function() { return selectAuthUserProfile; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const selectAuth = (state) => state.auth;
const selectAuthUserProfile = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAuth, (state) => state.userProfile);


/***/ }),

/***/ "qXBG":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.actions */ "2JUs");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fire_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fire.service */ "L3EA");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");







class AuthService {
    constructor(router, fire, store) {
        this.router = router;
        this.fire = fire;
        this.store = store;
        this.isLogged = false;
    }
    login(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLogged = true;
            return this.fire.fireAuthenticate(email, password);
        });
    }
    register(email, password, data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.fire.createFireAuthAndUser(email, password, data);
        });
    }
    get fireAuth$() {
        return this.fire.fireAuth$;
    }
    logout() {
        this.fire.signOut();
        this.store.dispatch(Object(_auth_actions__WEBPACK_IMPORTED_MODULE_2__["logout"])());
        this.isLogged = false;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_fire_service__WEBPACK_IMPORTED_MODULE_4__["FireService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _fire_service__WEBPACK_IMPORTED_MODULE_4__["FireService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }]; }, null); })();


/***/ }),

/***/ "s9Xg":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/promos-public/promos-public.component.ts ***!
  \****************************************************************************/
/*! exports provided: PromosPublicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromosPublicComponent", function() { return PromosPublicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/auth */ "i6m5");
/* harmony import */ var src_app_auth_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.actions */ "2JUs");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ "qXBG");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_fire_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/fire.service */ "L3EA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function PromosPublicComponent_ul_1_li_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const promo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" (", promo_r3.prizeQuantity ? "x " : "", " ", promo_r3.prizeQuantity, ") ");
} }
function PromosPublicComponent_ul_1_li_1_ng_container_15_ng_container_1_label_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PromosPublicComponent_ul_1_li_1_ng_container_15_ng_container_1_label_2_Template_label_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).ngIf; const promo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.join(promo_r3, user_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Do\u0142\u0105cz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PromosPublicComponent_ul_1_li_1_ng_container_15_ng_container_1_label_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ju\u017C do\u0142\u0105czono");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PromosPublicComponent_ul_1_li_1_ng_container_15_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PromosPublicComponent_ul_1_li_1_ng_container_15_ng_container_1_label_2_Template, 2, 0, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PromosPublicComponent_ul_1_li_1_ng_container_15_ng_container_1_label_3_Template, 2, 0, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    const promo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.hasAlreadyJoined(promo_r3, user_r7) === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.hasAlreadyJoined(promo_r3, user_r7) === true);
} }
function PromosPublicComponent_ul_1_li_1_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PromosPublicComponent_ul_1_li_1_ng_container_15_ng_container_1_Template, 4, 2, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const user_r7 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r7.role === "customer");
} }
function PromosPublicComponent_ul_1_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PromosPublicComponent_ul_1_li_1_ng_container_8_Template, 2, 2, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PromosPublicComponent_ul_1_li_1_ng_container_15_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const promo_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", promo_r3.imageRef, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Promo: ", promo_r3.promoName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Nagroda: ", promo_r3.prizeDescription, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", promo_r3.prizeQuantity && promo_r3.prizeQuantity > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", promo_r3.promoDescription, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Lokalizacja: ", promo_r3.vendorStoreAddress, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Kontakt ze sklepem: ", promo_r3.vendorEmail, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 8, ctx_r2.user$));
} }
function PromosPublicComponent_ul_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PromosPublicComponent_ul_1_li_1_Template, 17, 10, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const promos_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", promos_r1);
} }
class PromosPublicComponent {
    constructor(auth, store, fire) {
        this.auth = auth;
        this.store = store;
        this.fire = fire;
        this.promos$ = this.fire.getPromosCollectionRef().valueChanges();
        this.tableName = 'DOSTĘPNE PROMOCJE';
        this.user$ = this.store.select(src_app_auth__WEBPACK_IMPORTED_MODULE_1__["selectAuthUserProfile"]);
        this.message = '';
    }
    ngOnInit() { }
    hasAlreadyJoined(promo, user) {
        let alreadyJoined = null;
        alreadyJoined = promo.participantsTable.find((p) => p.uid === user.uid);
        return !!alreadyJoined;
    }
    updateCustomerPromosFirestore(customer) {
        return this.fire.getUsersCollectionRef().doc(customer.uid).set(customer);
    }
    updatePromoParticipantsFirestore(promo) {
        return this.fire.getPromosCollectionRef().doc(promo.pid).set(promo);
    }
    join(promo, user) {
        this.fire
            .getUsersCollectionRef()
            .doc(user.uid)
            .get()
            .toPromise()
            .then((data) => {
            if (data) {
                const user = data.data();
                const alreadyJoined = promo.participantsTable.find((participant) => participant.uid === user.uid);
                if (!alreadyJoined) {
                    const customer = this.updateCustomerPromos(promo, user);
                    const promoUpdated = this.updatePromoParticipants(promo, customer);
                    const customerPromise = this.updateCustomerPromosFirestore(customer);
                    const promoPromise = this.updatePromoParticipantsFirestore(promoUpdated);
                    Promise.all([customerPromise, promoPromise]).then(() => {
                        this.store.dispatch(Object(src_app_auth_auth_actions__WEBPACK_IMPORTED_MODULE_2__["updateAuthUserData"])({ user: customer }));
                    });
                }
            }
        });
    }
    updatePromoParticipants(promo, user) {
        const currentPoints = 0 + promo.pointsEntry;
        const newParticipant = {
            uid: user.uid,
            email: user.email,
            currentPoints,
            joinedOn: new Date().toISOString().split('T')[0],
            prizeCounter: 0,
        };
        const participantsTable = [...promo.participantsTable, newParticipant];
        const newPromo = Object.assign(Object.assign({}, promo), { participantsTable, participantsTotal: participantsTable.length });
        return newPromo;
    }
    updateCustomerPromos(promo, user) {
        let promos = [];
        if (user === null || user === void 0 ? void 0 : user.promos.length) {
            promos = [...user === null || user === void 0 ? void 0 : user.promos, promo.pid];
        }
        else {
            promos = [promo.pid];
        }
        const newCustomer = Object.assign({}, Object.assign(Object.assign({}, user), { promos }));
        return newCustomer;
    }
}
PromosPublicComponent.ɵfac = function PromosPublicComponent_Factory(t) { return new (t || PromosPublicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_fire_service__WEBPACK_IMPORTED_MODULE_5__["FireService"])); };
PromosPublicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PromosPublicComponent, selectors: [["app-promos-public"]], decls: 3, vars: 3, consts: [[1, "wrapper"], ["class", "promos", 4, "ngIf"], [1, "promos"], ["class", "promo", 4, "ngFor", "ngForOf"], [1, "promo"], [1, "promo__image-wrapper"], [1, "promo__image", 3, "src"], [1, "promo__pocket"], [1, "promo__name"], [1, "promo__prize"], [4, "ngIf"], [1, "promo__description"], [1, "promo__vendor-email"], [1, "promo__actions"], ["class", "action-label", 3, "click", 4, "ngIf"], ["class", "action-label action-label--disabled", 4, "ngIf"], [1, "action-label", 3, "click"], [1, "action-label", "action-label--disabled"]], template: function PromosPublicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PromosPublicComponent_ul_1_Template, 2, 1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.promos$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".message[_ngcontent-%COMP%] {\n  height: 10vh;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  align-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100%;\n  padding: 2rem;\n  background: #ffb98d;\n  background: linear-gradient(144deg, #ffe87f 0%, #ffb98d 100%);\n  overflow: hidden;\n  padding: 0;\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n\n.promos[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n  padding: 3rem;\n  gap: 1.5rem;\n  width: 100%;\n  height: 100%;\n}\n\n.promo[_ngcontent-%COMP%] {\n  width: 22vw;\n  height: 58vh;\n  border-radius: 0.2rem;\n  background: white;\n  box-shadow: 0 0.1rem 0.3rem 0.1rem rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-content: center;\n  align-items: stretch;\n  text-align: center;\n}\n\n.promo__image-wrapper[_ngcontent-%COMP%] {\n  border-radius: 0.2rem 0.2rem 0 0;\n  transition: all 0.25s ease-in-out 0s;\n  height: 100%;\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-items: center;\n  width: 100%;\n  overflow: hidden;\n}\n\n.promo__image[_ngcontent-%COMP%] {\n  width: 24vw;\n  object-fit: cover;\n  object-position: 15% 15%;\n  transition: all 0.25s ease-in-out 0s;\n}\n\n.promo__pocket[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  align-items: center;\n  width: 100%;\n}\n\n.promo__name[_ngcontent-%COMP%] {\n  color: #ffda33;\n  font: 700 1.4rem Roboto;\n  text-shadow: 0.05rem 0.05rem 0.1rem rgba(0, 0, 0, 0.9);\n  line-height: 1.5rem;\n}\n\n.promo__prize[_ngcontent-%COMP%] {\n  margin: 0.25rem 0;\n  font-weight: 600;\n}\n\n.promo__vendor-email[_ngcontent-%COMP%] {\n  margin: 0.25rem 0;\n}\n\n.promo__description[_ngcontent-%COMP%] {\n  transition: all 0.25s ease-in-out 0s;\n  width: 100%;\n  padding: 0.4rem;\n  color: #5050b4;\n  font-weight: 500;\n  display: flex;\n  text-overflow: ellipsis;\n  justify-content: center;\n  align-content: center;\n  align-items: stretch;\n  text-align: center;\n}\n\n.promo__actions[_ngcontent-%COMP%] {\n  padding: 0.4rem;\n  height: 12%;\n  margin: 0.25rem 0;\n  display: flex;\n}\n\n.promo[_ngcontent-%COMP%]:hover   .promo__image-wrapper[_ngcontent-%COMP%] {\n  height: 40%;\n}\n\n.promo[_ngcontent-%COMP%]:hover   .promo__image[_ngcontent-%COMP%] {\n  transform: scale(1.15);\n}\n\n.action-label[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 0.8rem;\n  text-shadow: 0.11rem 0.11rem 0.1rem rgba(0, 0, 0, 0.2);\n  border-radius: 0.2rem;\n  padding: 0.26em 0.42em;\n  font-weight: 400;\n  margin: 0 0.2rem;\n  width: auto;\n  color: #fff;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  width: 100%;\n  height: 3vh;\n  background: #6464c8;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n}\n\n.action-label[_ngcontent-%COMP%]:hover {\n  filter: brightness(125%);\n}\n\n.action-label[_ngcontent-%COMP%]:active {\n  filter: brightness(150%);\n}\n\n.action-label[_ngcontent-%COMP%]:focus {\n  filter: brightness(200%);\n}\n\n.action-label--edit[_ngcontent-%COMP%] {\n  background: #37c864;\n}\n\n.action-label--delete[_ngcontent-%COMP%] {\n  background: #ff6400;\n}\n\n.action-label--list[_ngcontent-%COMP%] {\n  background: #6464dc;\n}\n\n.action-label--disabled[_ngcontent-%COMP%] {\n  background: #969696;\n}\n\n.action-label--disabled[_ngcontent-%COMP%] {\n  cursor: initial;\n}\n\n.action-label--disabled[_ngcontent-%COMP%]:focus, .action-label--disabled[_ngcontent-%COMP%]:hover {\n  filter: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcHJvbW9zLXB1YmxpYy9wcm9tb3MtcHVibGljLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvc3R5bGVzL21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsWUFBQTtBQUZGOztBQUtBO0VDUUUsYUFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkRBQUE7RUFNQSxnQkFBQTtFRHBCQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQU9GOztBQUpBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQU9GOztBQUpBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EscURBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQU9GOztBQUxFO0VBQ0UsZ0NBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUVBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFLSjs7QUFGRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7QUFJSjs7QUFERTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBR0o7O0FBQUU7RUFDRSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxzREFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQ0U7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxpQkFBQTtBQUFKOztBQUdFO0VBQ0Usb0NBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQUZKOztBQU1BO0VBQ0UsV0FBQTtBQUhGOztBQU1BO0VBQ0Usc0JBQUE7QUFIRjs7QUFNQTtFQ2thRSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0RBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBRUEsZUFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUQzYUEsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFPRjs7QUNnYUU7RUFDRSx3QkFBQTtBRDlaSjs7QUNpYUU7RUFDRSx3QkFBQTtBRC9aSjs7QUNrYUU7RUFDRSx3QkFBQTtBRGhhSjs7QUNtYUU7RUFDRSxtQkFBQTtBRGphSjs7QUNvYUU7RUFDRSxtQkFBQTtBRGxhSjs7QUNxYUU7RUFDRSxtQkFBQTtBRG5hSjs7QUNzYUU7RUFDRSxtQkFBQTtBRHBhSjs7QUExQkU7RUFDRSxlQUFBO0FBNEJKOztBQTNCSTtFQUVFLFlBQUE7QUE0Qk4iLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wcm9tb3MtcHVibGljL3Byb21vcy1wdWJsaWMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtcclxuQGltcG9ydCBcIi4vLi4vLi4vc3R5bGVzL21peGlucy5zY3NzXCI7XHJcblxyXG4ubWVzc2FnZSB7XHJcbiAgaGVpZ2h0OiAxMHZoO1xyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgQGluY2x1ZGUgd3JhcHBlci15ZWxsb3ctZmxleDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbi5wcm9tb3Mge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBwYWRkaW5nOiAzcmVtO1xyXG4gIGdhcDogMS41cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnByb21vIHtcclxuICB3aWR0aDogMjJ2dztcclxuICBoZWlnaHQ6IDU4dmg7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDAgMC4xcmVtIDAuM3JlbSAwLjFyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgJl9faW1hZ2Utd3JhcHBlciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjJyZW0gMC4ycmVtIDAgMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dCAwcztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAmX19pbWFnZSB7XHJcbiAgICB3aWR0aDogMjR2dztcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgb2JqZWN0LXBvc2l0aW9uOiAxNSUgMTUlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0IDBzO1xyXG4gIH1cclxuXHJcbiAgJl9fcG9ja2V0IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJl9fbmFtZSB7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjE4LCA1MSk7XHJcbiAgICBmb250OiA3MDAgMS40cmVtIFJvYm90bztcclxuICAgIHRleHQtc2hhZG93OiAwLjA1cmVtIDAuMDVyZW0gMC4xcmVtIHJnYmEoMCwgMCwgMCwgMC45KTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICAmX19wcml6ZSB7XHJcbiAgICBtYXJnaW46IDAuMjVyZW0gMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG5cclxuICAmX192ZW5kb3ItZW1haWwge1xyXG4gICAgbWFyZ2luOiAwLjI1cmVtIDA7XHJcbiAgfVxyXG5cclxuICAmX19kZXNjcmlwdGlvbiB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQgMHM7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDAuNHJlbTtcclxuICAgIGNvbG9yOiByZ2IoODAsIDgwLCAxODApO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAmX19hY3Rpb25zIHtcclxuICAgIHBhZGRpbmc6IDAuNHJlbTtcclxuICAgIGhlaWdodDogMTIlO1xyXG4gICAgbWFyZ2luOiAwLjI1cmVtIDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxufVxyXG5cclxuLnByb21vOmhvdmVyIC5wcm9tb19faW1hZ2Utd3JhcHBlciB7XHJcbiAgaGVpZ2h0OiA0MCU7XHJcbn1cclxuXHJcbi5wcm9tbzpob3ZlciAucHJvbW9fX2ltYWdlIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xyXG59XHJcblxyXG4uYWN0aW9uLWxhYmVsIHtcclxuICBAaW5jbHVkZSB0YWJsZS1hY3Rpb24tbGFiZWw7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzdmg7XHJcbiAgYmFja2dyb3VuZDogcmdiKDEwMCwgMTAwLCAyMDApO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICYtLWRpc2FibGVkIHtcclxuICAgIGN1cnNvcjogaW5pdGlhbDtcclxuICAgICY6Zm9jdXMsXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgZmlsdGVyOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0IFwiLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuQG1peGluIHdyYXBwZXIteWVsbG93IHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMTg1LCAxNDEpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDE0NGRlZyxcclxuICAgIHJnYmEoMjU1LCAxODUsIDE0MSwgMSkgMCUsXHJcbiAgICByZ2JhKDI1NSwgMjMyLCAxMjcsIDEpIDEwMCVcclxuICApO1xyXG59XHJcblxyXG5AbWl4aW4gd3JhcHBlci15ZWxsb3ctZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMTg1LCAxNDEpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDE0NGRlZyxcclxuICAgIHJnYmEoMjU1LCAyMzIsIDEyNywgMSkgMCUsXHJcbiAgICByZ2JhKDI1NSwgMTg1LCAxNDEsIDEpIDEwMCVcclxuICApO1xyXG5cclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5AbWl4aW4gd3JhcHBlci1ibHVlLWZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgxNTksIDE2OSwgMjE4LCAxKSAwJSwgcmdiKDkwLCA5MCwgMTgwKSAxMDAlKTtcclxuXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLy8gIyMjIEZPUk1TICMjI1xyXG5cclxuLy8gIyBGT1JNIC0gQVVUSCAjXHJcbkBtaXhpbiBmb3JtLWF1dGgge1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDMwdnc7XHJcbiAgYm94LXNoYWRvdzogMCAwLjFyZW0gMC4zcmVtIDAuMXJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBiYWNrZ3JvdW5kOiAkZm9ybS1iYWNrZ3JvdW5kO1xyXG4gIGJvcmRlcjogJGZvcm0tYm9yZGVyLXdpZHRoIHNvbGlkICRmb3JtLWJvcmRlci1jb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiAkZm9ybS1ib3JkZXItcmFkaXVzO1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDE4NSwgMTQxKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAxNDRkZWcsXHJcbiAgICByZ2JhKDI1NSwgMjMyLCAxMjcsIDEpIDAlLFxyXG4gICAgcmdiYSgyNTUsIDE4NSwgMTQxLCAxKSAxMDAlXHJcbiAgKTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxuICAmX19sYWJlbCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC40cmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAycmVtO1xyXG5cclxuICAgICYtLWltYWdlIHtcclxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBoZWlnaHQ6IDV2aDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgICYtLWltYWdlLXJlc3VsdCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGZvcm0tYXV0aC1pbnB1dC1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBtYXJnaW46IDAuM3JlbTtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zNXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgJi0tZXNzZW50aWFscyB7XHJcbiAgICBncmlkLXJvdzogMSAvIHNwYW4gMjtcclxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xyXG4gIH1cclxuXHJcbiAgJi0tcHJpemUge1xyXG4gICAgZ3JpZC1yb3c6IDMgLyBzcGFuIDI7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcclxuICB9XHJcbiAgJi0tcG9pbnRzIHtcclxuICAgIGdyaWQtcm93OiA1IC8gc3BhbiAyO1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7XHJcbiAgfVxyXG5cclxuICAmLS1pbWFnZSB7XHJcbiAgICBncmlkLXJvdzogMSAvIHNwYW4gMTtcclxuICAgIGdyaWQtY29sdW1uOiAzIC8gc3BhbiAyO1xyXG4gICAgcGFkZGluZzogMC40cmVtO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuXHJcbiAgJi0taW1hZ2UtcmVzdWx0IHtcclxuICAgIGdyaWQtcm93OiAzIC8gc3BhbiA1O1xyXG4gICAgZ3JpZC1jb2x1bW46IDMgLyBzcGFuIDQ7XHJcbiAgICBib3JkZXI6IDAuMDJyZW0gc29saWQgJGlucHV0LWJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICB9XHJcbiAgJi0tYnV0dG9ucyB7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBncmlkLXJvdzogMSAvIHNwYW4gMTtcclxuICAgIGdyaWQtY29sdW1uOiA1IC8gc3BhbiAyO1xyXG4gICAgcGFkZGluZzogMC40cmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxZW0gM2VtO1xyXG4gIH1cclxuXHJcbiAgJi0tcmVzdWx0IHtcclxuICAgIGdyaWQtcm93OiA1IC8gc3BhbiAyO1xyXG4gICAgZ3JpZC1jb2x1bW46IDMgLyBzcGFuIDI7XHJcbiAgICBib3JkZXI6ICRmb3JtLWJvcmRlci13aWR0aCBzb2xpZCAkZm9ybS1idXR0b24tYm9yZGVyLWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgJi0tbWVzc2FnZSB7XHJcbiAgICBncmlkLXJvdzogMiAvIHNwYW4gMTtcclxuXHJcbiAgICBncmlkLWNvbHVtbjogMyAvIHNwYW4gNDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGJhY2tncm91bmQ6ICRmb3JtLW1lc3NhZ2UtYmFja2dyb3VuZDtcclxuICAgIGJvcmRlcjogJGZvcm0tYm9yZGVyLXdpZHRoIHNvbGlkICRmb3JtLW1lc3NhZ2UtYmFja2dyb3VuZDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLWF1dGgtaW5wdXQtd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgbWFyZ2luOiAwLjJyZW0gMDtcclxufVxyXG5cclxuQG1peGluIGZvcm0tYXV0aC1tZXNzYWdlIHtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBoZWlnaHQ6IDR2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1hdXRoLWJ1dHRvbnMge1xyXG4gIGhlaWdodDogNnZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBtYXJnaW46IDAuNHJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XHJcbiAgYm9yZGVyOiAkZm9ybS1ib3JkZXItd2lkdGggc29saWQgJGZvcm0tYnV0dG9uLWJvcmRlci1jb2xvcjtcclxuICBib3JkZXI6IDAuMDZyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAkZm9ybS1idXR0b24tYmFja2dyb3VuZDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogJGZvcm0tYnV0dG9uLWJhY2tncm91bmQtLWhvdmVyO1xyXG4gIH1cclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZm9ybS1idXR0b24tYmFja2dyb3VuZC0tZm9jdXM7XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZm9ybS1idXR0b24tYmFja2dyb3VuZC0tYWN0aXZlO1xyXG4gIH1cclxuXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1hdXRoLWlucHV0IHtcclxuICBib3JkZXI6IDAuMDZyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICB3aWR0aDogMjR2dztcclxuICBwYWRkaW5nOiAwIDEuM3JlbTtcclxuICBoZWlnaHQ6IDd2aDtcclxuICBtYXJnaW46IDAuMzVyZW07XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbn1cclxuXHJcbi8vICMgRk9STSAtIFBST01PU1xyXG5cclxuQG1peGluIGZvcm0tcHJvbW8tYmFzZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG5cclxuICBoZWlnaHQ6IDkwdmg7XHJcbiAgd2lkdGg6IDkwdnc7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBib3gtc2hhZG93OiAwIDAuMXJlbSAwLjNyZW0gMC4xcmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGJvcmRlcjogJGZvcm0tYm9yZGVyLXdpZHRoIHNvbGlkICRmb3JtLWJvcmRlci1jb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiAkZm9ybS1ib3JkZXItcmFkaXVzO1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDE4NSwgMTQxKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAxNDRkZWcsXHJcbiAgICByZ2JhKDI1NSwgMjMyLCAxMjcsIDEpIDAlLFxyXG4gICAgcmdiYSgyNTUsIDE4NSwgMTQxLCAxKSAxMDAlXHJcbiAgKTtcclxuXHJcbiAgJl9fc2VjdGlvbiB7XHJcbiAgICB3aWR0aDogNDV2dztcclxuICAgIGhlaWdodDogODZ2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1wcm9tby1pbnB1dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlcjogMC4wNnJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogOCU7XHJcbiAgcGFkZGluZzogMC44ZW07XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1wcm9tby1pbnB1dC13cmFwcGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDAuNzVyZW0gMDtcclxufVxyXG5cclxuQG1peGluIGZvcm0tcHJvbW8tbWVzc2FnZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1wcm9tby1tZXNzYWdlLXdyYXBwZXIge1xyXG4gIGhlaWdodDogNSU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBsaW5lLWJyZWFrOiBzdHJpY3Q7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuQG1peGluIGZvcm0tcHJvbW8tZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDQwdnc7XHJcbiAgaGVpZ2h0OiA4NnZoO1xyXG4gIG1hcmdpbjogMC4zcmVtO1xyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4xcmVtO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDAgMC4xcmVtIDAuM3JlbSAwLjFyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICZfX2xhYmVsIHtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjJyZW07XHJcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogcmdiKDEwMCwgMTAwLCAyMDApO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcbiAgJi0tYnV0dG9ucyB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuXHJcbiAgJi0tcmVzdWx0IHtcclxuICAgIGJvcmRlcjogJGZvcm0tYm9yZGVyLXdpZHRoIHNvbGlkICRmb3JtLWJ1dHRvbi1ib3JkZXItY29sb3I7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1wcm9tby1idXR0b25zIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgbWFyZ2luOiAwLjRyZW07XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIG1hcmdpbjogMC43NXJlbSAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udDogNDAwIDAuOXJlbSBSb2JvdG87XHJcblxyXG4gIG1pbi1oZWlnaHQ6IDV2aDtcclxuXHJcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xyXG4gIGJvcmRlcjogMC4wNnJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZm9ybS1idXR0b24tYmFja2dyb3VuZC0taG92ZXI7XHJcbiAgfVxyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQ6ICRmb3JtLWJ1dHRvbi1iYWNrZ3JvdW5kLS1mb2N1cztcclxuICB9XHJcblxyXG4gICY6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICRmb3JtLWJ1dHRvbi1iYWNrZ3JvdW5kLS1hY3RpdmU7XHJcbiAgfVxyXG5cclxuICAmOmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcclxuICB9XHJcbn1cclxuXHJcbi8vICMjIyBUYWJsZSAjIyNcclxuQG1peGluIHRhYmxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4xcmVtO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDAgMC4xcmVtIDAuM3JlbSAwLjFyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGJvcmRlci1zcGFjaW5nOiAwcHg7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG5cclxuICAmX19oZWFkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICZfX2JvZHkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIH1cclxuXHJcbiAgJl9fcm93IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGhlaWdodDogN3ZoO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyOiAwLjA1cmVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuXHJcbiAgICAmLS1oZWFkIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMC4xcmVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE4NSwgMTQxLCAwLjUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gY2VsbCB7XHJcbiAgZmxleDogMSAxIDEwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci1yaWdodDogbm9uZTtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBib3JkZXItcmlnaHQ6IDAuMDFyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG5cclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG5cclxuICAmOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmLS1kYXRhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5cclxuICAkYmFja2dyb3VuZDE6IHJnYmEoMjMzLCAxNTIsIDY3LCAwLjIpO1xyXG4gICRiYWNrZ3JvdW5kMjogcmdiYSgyNTIsIDE3NSwgMTEsIDAuMik7XHJcblxyXG4gICYtLXByb21vLW5hbWUge1xyXG4gICAgZmxleDogMSAxIDEzMHB4O1xyXG4gIH1cclxuXHJcbiAgJi0tcHJvbW8tZGVzY3JpcHRpb24ge1xyXG4gICAgZmxleDogMSAwIDE1MHB4O1xyXG4gIH1cclxuXHJcbiAgJi0tdmVuZG9yLWVtYWlsIHtcclxuICAgIGZsZXg6IDEgMCAxNTBweDtcclxuICB9XHJcblxyXG4gICYtLWFkZHJlc3Mtc3RvcmUge1xyXG4gICAgZmxleDogMSAxIDEzMHB4O1xyXG4gIH1cclxuXHJcbiAgJi0tcHJvbW8tZGV0YWlscyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDE7XHJcbiAgfVxyXG4gICYtLXByaXplIHtcclxuICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kMTtcclxuICB9XHJcblxyXG4gICYtLXF1YW50aXR5IHtcclxuICAgIGZsZXg6IDEgMSA1NXB4O1xyXG4gIH1cclxuXHJcbiAgJi0tcG9pbnRzIHtcclxuICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kMTtcclxuICAgIGZsZXg6IDEgMSA1NXB4O1xyXG4gIH1cclxuXHJcbiAgJi0tcGFydGljaXBhbnRzIHtcclxuICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kMTtcclxuICB9XHJcblxyXG4gICYtLXBhcnRpY2lwYW50cy10b3RhbCB7XHJcbiAgICBmbGV4OiAxIDEgNTVweDtcclxuICB9XHJcblxyXG4gICYtLXBhcnRpY2lwYW50cy1saXN0IHtcclxuICAgIGZsZXg6IDEgMSA1NXB4O1xyXG4gIH1cclxuXHJcbiAgJi0tbWV0YWRhdGEge1xyXG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQxO1xyXG4gIH1cclxuXHJcbiAgJi0tY3JlYXRlZC1vbiB7XHJcbiAgICBmbGV4OiAxIDEgNTVweDtcclxuICB9XHJcblxyXG4gICYtLWFjdGl2ZSB7XHJcbiAgICBmbGV4OiAxIDEgNDVweDtcclxuICB9XHJcblxyXG4gICYtLWFjdGlvbnMge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMjUsIDIyNSwgMjI1LCAxKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJl9fbGFiZWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gdGFibGUtYWN0aW9uLWxhYmVsIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIHRleHQtc2hhZG93OiAwLjExcmVtIDAuMTFyZW0gMC4xcmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XHJcbiAgcGFkZGluZzogMC4yNmVtIDAuNDJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIG1hcmdpbjogMCAwLjJyZW07XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgY29sb3I6ICNmZmY7XHJcblxyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTI1JSk7XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTUwJSk7XHJcbiAgfVxyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygoMjAwJSkpO1xyXG4gIH1cclxuXHJcbiAgJi0tZWRpdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNTUsIDIwMCwgMTAwKTtcclxuICB9XHJcblxyXG4gICYtLWRlbGV0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAxMDAsIDApO1xyXG4gIH1cclxuXHJcbiAgJi0tbGlzdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTAwLCAxMDAsIDIyMCk7XHJcbiAgfVxyXG5cclxuICAmLS1kaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTUwLCAxNTAsIDE1MCk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gdGFibGUtcGFydHMge1xyXG4gIC50YWJsZSB7XHJcbiAgICBAaW5jbHVkZSB0YWJsZTtcclxuICB9XHJcblxyXG4gIC5jZWxsIHtcclxuICAgIEBpbmNsdWRlIGNlbGw7XHJcbiAgfVxyXG5cclxuICAuYWN0aW9uLWxhYmVsIHtcclxuICAgIEBpbmNsdWRlIHRhYmxlLWFjdGlvbi1sYWJlbDtcclxuICB9XHJcblxyXG4gIC5jZWxsLS1kYXRhLmNlbGwtLXByb21vLWRlc2NyaXB0aW9uLFxyXG4gIC5jZWxsLS1kYXRhLmNlbGwtLXByaXplLWRlc2NyaXB0aW9uIHtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PromosPublicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-promos-public',
                templateUrl: './promos-public.component.html',
                styleUrls: ['./promos-public.component.scss'],
            }]
    }], function () { return [{ type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }, { type: src_app_fire_service__WEBPACK_IMPORTED_MODULE_5__["FireService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_faq_page_faq_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/components/faq-page/faq-page.component */ "zqsm");
/* harmony import */ var _shared_components_wrong_page_wrong_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components/wrong-page/wrong-page.component */ "4Gne");






const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'promos' },
    { path: 'faq', component: _shared_components_faq_page_faq_page_component__WEBPACK_IMPORTED_MODULE_2__["FaqPageComponent"] },
    {
        path: 'auth',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "Yj9t")).then((m) => m.AuthModule),
    },
    {
        path: '',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./promos/promos.module */ "0m0R")).then((m) => m.PromosModule),
    },
    { path: '**', component: _shared_components_wrong_page_wrong_page_component__WEBPACK_IMPORTED_MODULE_3__["WrongPageComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zqsm":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/faq-page/faq-page.component.ts ***!
  \******************************************************************/
/*! exports provided: FaqPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPageComponent", function() { return FaqPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function FaqPageComponent_ul_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", question_r1.question, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](question_r1.answer);
} }
class FaqPageComponent {
    constructor() {
        this.questions = [
            {
                question: 'Jak założyć konto i korzystać z aplikacji?',
                answer: 'Należy utworzyć konto, podając przy tym adres email, nickname, hasło do konta oraz rola jaką chce się pełnić w ramach aplikacji ' +
                    'Podany adres email będzie służył jako identyfikator uczestnika promocji. ' +
                    'Role do wyboru: ' +
                    'uczestnik promocji  (klient) - możliwość brania udzialu w promocjach na tańsze produkty. ' +
                    'właściciel promocji (sklep) - możliwość zakładania promocji i modyfikowania punktów uczestników własnych promocji.',
            },
            {
                question: 'Jak zapisać się do promocji?',
                answer: 'Po zalogowaniu do serwisu wejdź w zakładkę DOSTĘPNE PROMOCJE i wybierz z listy interesujące Cię promocje klikając w ' +
                    'przycisk "ZAPISZ SIĘ". Promocja automatycznie zapisze się do Twojego konta. ',
            },
            {
                question: 'Jak sprawdzić w jakich promocjach biorę udział?',
                answer: 'Po zalogowaniu do serwisu wejdź w zakładkę MOJE PROMOCJE - jest tam lista wszystkich Twoich promocji, do których Cię zapisano.',
            },
            {
                question: 'Jak działa przyznawanie punktów?',
                answer: 'Punkty są dodawane na podstawie kuponu wygenerowanego przez sprzedawcę. ' +
                    'Kupon jest wydawany uczestnikowi danej promocji, jeśli w ramach transkacji spełnił któryś z warunków uwzględnionych w tej promocji. ' +
                    'W celu dopisania sobie nowych punktów, uczestnik musi wprowadzić kod z otrzymanego kuponu pod specjalnym adresem promocji: .../.../....com . ' +
                    'Jeśli okaże się, że po dodaniu punktów uczestnik uzyskał już wymaganą ilość punktów do odebrania nagrody - może natychmiast udać się po jej odbiór ' +
                    'do dowolnego przedstawiciela sklepu organizującego promocję. Punkty zostaną zweryfikowane na podstawie adresu email uczestnika. ',
            },
        ];
    }
    ngOnInit() { }
}
FaqPageComponent.ɵfac = function FaqPageComponent_Factory(t) { return new (t || FaqPageComponent)(); };
FaqPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FaqPageComponent, selectors: [["app-faq-page"]], decls: 2, vars: 1, consts: [[1, "wrapper"], ["class", "faq-list", 4, "ngFor", "ngForOf"], [1, "faq-list"], [1, "faq"], [1, "faq__question"], [1, "wrap"], [1, "faq__answer"]], template: function FaqPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FaqPageComponent_ul_1_Template, 7, 2, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.questions);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100%;\n  padding: 1rem;\n  background: #ffb98d;\n  background: linear-gradient(144deg, #ffb98d 0%, #ffe87f 100%);\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n\n.faq-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n  align-items: flex-start;\n  width: 100%;\n}\n\n.wrap[_ngcontent-%COMP%] {\n  background: rgba(105, 115, 230, 0.45);\n  position: absolute;\n  transform: translateY(0vh);\n  height: 5.5vh;\n  width: 28vw;\n}\n\n.faq[_ngcontent-%COMP%] {\n  position: relative;\n  border: 0.1rem solid white;\n  border-radius: 0.1rem;\n  background: white;\n  box-shadow: 0 0.1rem 0.3rem 0.1rem rgba(0, 0, 0, 0.2);\n  padding: 1em 3em;\n  margin: 1rem 3rem;\n}\n\n.faq__index[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.faq__question[_ngcontent-%COMP%] {\n  font-weight: 600;\n  padding: 1em;\n  background: rgba(115, 115, 230, 0.45);\n  height: 7vh;\n  width: 27vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  text-align: center;\n  position: relative;\n}\n\n.faq__answer[_ngcontent-%COMP%] {\n  padding: 1em 3em;\n  line-height: 1.4rem;\n}\n\n.faq__symbol[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 5rem;\n  font-weight: 400;\n  transform: translateY(70%) translateX(-100%) rotate(0deg);\n  color: #9b9bff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZmFxLXBhZ2UvZmFxLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9zdHlsZXMvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUNDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZEQUFBO0VESEEsa0JBQUE7RUFDQSxrQkFBQTtBQUdGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQUdGOztBQUFBO0VBQ0UscUNBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFHRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EscURBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBR0Y7O0FBREU7RUFDRSxZQUFBO0FBR0o7O0FBQUU7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseURBQUE7RUFDQSxjQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9mYXEtcGFnZS9mYXEtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLy4uLy4uL3N0eWxlcy9taXhpbnMuc2Nzc1wiO1xyXG5cclxuLndyYXBwZXIge1xyXG4gIEBpbmNsdWRlIHdyYXBwZXIteWVsbG93O1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbi5mYXEtbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLndyYXAge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTA1LCAxMTUsIDIzMCwgMC40NSk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpO1xyXG4gIGhlaWdodDogNS41dmg7XHJcbiAgd2lkdGg6IDI4dnc7XHJcbn1cclxuXHJcbi5mYXEge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXI6IDAuMXJlbSBzb2xpZCB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAwLjFyZW07XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogMCAwLjFyZW0gMC4zcmVtIDAuMXJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgcGFkZGluZzogMWVtIDNlbTtcclxuICBtYXJnaW46IDFyZW0gM3JlbTtcclxuXHJcbiAgJl9faW5kZXgge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgJl9fcXVlc3Rpb24ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTE1LCAxMTUsIDIzMCwgMC40NSk7XHJcbiAgICBoZWlnaHQ6IDd2aDtcclxuICAgIHdpZHRoOiAyN3Z3O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gICZfX2Fuc3dlciB7XHJcbiAgICBwYWRkaW5nOiAxZW0gM2VtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNHJlbTtcclxuICB9XHJcblxyXG4gICZfX3N5bWJvbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXNpemU6IDVyZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDcwJSkgdHJhbnNsYXRlWCgtMTAwJSkgcm90YXRlKDBkZWcpO1xyXG4gICAgY29sb3I6IHJnYigxNTUsIDE1NSwgMjU1KTtcclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCBcIi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbkBtaXhpbiB3cmFwcGVyLXllbGxvdyB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDE4NSwgMTQxKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAxNDRkZWcsXHJcbiAgICByZ2JhKDI1NSwgMTg1LCAxNDEsIDEpIDAlLFxyXG4gICAgcmdiYSgyNTUsIDIzMiwgMTI3LCAxKSAxMDAlXHJcbiAgKTtcclxufVxyXG5cclxuQG1peGluIHdyYXBwZXIteWVsbG93LWZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDE4NSwgMTQxKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAxNDRkZWcsXHJcbiAgICByZ2JhKDI1NSwgMjMyLCAxMjcsIDEpIDAlLFxyXG4gICAgcmdiYSgyNTUsIDE4NSwgMTQxLCAxKSAxMDAlXHJcbiAgKTtcclxuXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuQG1peGluIHdyYXBwZXItYmx1ZS1mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMTU5LCAxNjksIDIxOCwgMSkgMCUsIHJnYig5MCwgOTAsIDE4MCkgMTAwJSk7XHJcblxyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi8vICMjIyBGT1JNUyAjIyNcclxuXHJcbi8vICMgRk9STSAtIEFVVEggI1xyXG5AbWl4aW4gZm9ybS1hdXRoIHtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiAzMHZ3O1xyXG4gIGJveC1zaGFkb3c6IDAgMC4xcmVtIDAuM3JlbSAwLjFyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgYmFja2dyb3VuZDogJGZvcm0tYmFja2dyb3VuZDtcclxuICBib3JkZXI6ICRmb3JtLWJvcmRlci13aWR0aCBzb2xpZCAkZm9ybS1ib3JkZXItY29sb3I7XHJcbiAgYm9yZGVyLXJhZGl1czogJGZvcm0tYm9yZGVyLXJhZGl1cztcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAxODUsIDE0MSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgMTQ0ZGVnLFxyXG4gICAgcmdiYSgyNTUsIDIzMiwgMTI3LCAxKSAwJSxcclxuICAgIHJnYmEoMjU1LCAxODUsIDE0MSwgMSkgMTAwJVxyXG4gICk7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHJcbiAgJl9fbGFiZWwge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuNHJlbTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMnJlbTtcclxuXHJcbiAgICAmLS1pbWFnZSB7XHJcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgaGVpZ2h0OiA1dmg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAmLS1pbWFnZS1yZXN1bHQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLWF1dGgtaW5wdXQtZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgbWFyZ2luOiAwLjNyZW07XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMzVyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICYtLWVzc2VudGlhbHMge1xyXG4gICAgZ3JpZC1yb3c6IDEgLyBzcGFuIDI7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcclxuICB9XHJcblxyXG4gICYtLXByaXplIHtcclxuICAgIGdyaWQtcm93OiAzIC8gc3BhbiAyO1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7XHJcbiAgfVxyXG4gICYtLXBvaW50cyB7XHJcbiAgICBncmlkLXJvdzogNSAvIHNwYW4gMjtcclxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xyXG4gIH1cclxuXHJcbiAgJi0taW1hZ2Uge1xyXG4gICAgZ3JpZC1yb3c6IDEgLyBzcGFuIDE7XHJcbiAgICBncmlkLWNvbHVtbjogMyAvIHNwYW4gMjtcclxuICAgIHBhZGRpbmc6IDAuNHJlbTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcblxyXG4gICYtLWltYWdlLXJlc3VsdCB7XHJcbiAgICBncmlkLXJvdzogMyAvIHNwYW4gNTtcclxuICAgIGdyaWQtY29sdW1uOiAzIC8gc3BhbiA0O1xyXG4gICAgYm9yZGVyOiAwLjAycmVtIHNvbGlkICRpbnB1dC1ib3JkZXItY29sb3I7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcblxyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgfVxyXG4gICYtLWJ1dHRvbnMge1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZ3JpZC1yb3c6IDEgLyBzcGFuIDE7XHJcbiAgICBncmlkLWNvbHVtbjogNSAvIHNwYW4gMjtcclxuICAgIHBhZGRpbmc6IDAuNHJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMWVtIDNlbTtcclxuICB9XHJcblxyXG4gICYtLXJlc3VsdCB7XHJcbiAgICBncmlkLXJvdzogNSAvIHNwYW4gMjtcclxuICAgIGdyaWQtY29sdW1uOiAzIC8gc3BhbiAyO1xyXG4gICAgYm9yZGVyOiAkZm9ybS1ib3JkZXItd2lkdGggc29saWQgJGZvcm0tYnV0dG9uLWJvcmRlci1jb2xvcjtcclxuICB9XHJcblxyXG4gICYtLW1lc3NhZ2Uge1xyXG4gICAgZ3JpZC1yb3c6IDIgLyBzcGFuIDE7XHJcblxyXG4gICAgZ3JpZC1jb2x1bW46IDMgLyBzcGFuIDQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZm9ybS1tZXNzYWdlLWJhY2tncm91bmQ7XHJcbiAgICBib3JkZXI6ICRmb3JtLWJvcmRlci13aWR0aCBzb2xpZCAkZm9ybS1tZXNzYWdlLWJhY2tncm91bmQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1hdXRoLWlucHV0LXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMC40cmVtO1xyXG4gIG1hcmdpbjogMC4ycmVtIDA7XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLWF1dGgtbWVzc2FnZSB7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgaGVpZ2h0OiA0dmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuQG1peGluIGZvcm0tYXV0aC1idXR0b25zIHtcclxuICBoZWlnaHQ6IDZ2aDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgbWFyZ2luOiAwLjRyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xyXG4gIGJvcmRlcjogJGZvcm0tYm9yZGVyLXdpZHRoIHNvbGlkICRmb3JtLWJ1dHRvbi1ib3JkZXItY29sb3I7XHJcbiAgYm9yZGVyOiAwLjA2cmVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZDogJGZvcm0tYnV0dG9uLWJhY2tncm91bmQ7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICRmb3JtLWJ1dHRvbi1iYWNrZ3JvdW5kLS1ob3ZlcjtcclxuICB9XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZDogJGZvcm0tYnV0dG9uLWJhY2tncm91bmQtLWZvY3VzO1xyXG4gIH1cclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogJGZvcm0tYnV0dG9uLWJhY2tncm91bmQtLWFjdGl2ZTtcclxuICB9XHJcblxyXG4gICY6ZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZDogbGlnaHRncmV5O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGZvcm0tYXV0aC1pbnB1dCB7XHJcbiAgYm9yZGVyOiAwLjA2cmVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgd2lkdGg6IDI0dnc7XHJcbiAgcGFkZGluZzogMCAxLjNyZW07XHJcbiAgaGVpZ2h0OiA3dmg7XHJcbiAgbWFyZ2luOiAwLjM1cmVtO1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG59XHJcblxyXG4vLyAjIEZPUk0gLSBQUk9NT1NcclxuXHJcbkBtaXhpbiBmb3JtLXByb21vLWJhc2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgaGVpZ2h0OiA5MHZoO1xyXG4gIHdpZHRoOiA5MHZ3O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgYm94LXNoYWRvdzogMCAwLjFyZW0gMC4zcmVtIDAuMXJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBib3JkZXI6ICRmb3JtLWJvcmRlci13aWR0aCBzb2xpZCAkZm9ybS1ib3JkZXItY29sb3I7XHJcbiAgYm9yZGVyLXJhZGl1czogJGZvcm0tYm9yZGVyLXJhZGl1cztcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAxODUsIDE0MSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgMTQ0ZGVnLFxyXG4gICAgcmdiYSgyNTUsIDIzMiwgMTI3LCAxKSAwJSxcclxuICAgIHJnYmEoMjU1LCAxODUsIDE0MSwgMSkgMTAwJVxyXG4gICk7XHJcblxyXG4gICZfX3NlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDQ1dnc7XHJcbiAgICBoZWlnaHQ6IDg2dmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGZvcm0tcHJvbW8taW5wdXQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXI6IDAuMDZyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDglO1xyXG4gIHBhZGRpbmc6IDAuOGVtO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuQG1peGluIGZvcm0tcHJvbW8taW5wdXQtd3JhcHBlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiAwLjc1cmVtIDA7XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLXByb21vLW1lc3NhZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuQG1peGluIGZvcm0tcHJvbW8tbWVzc2FnZS13cmFwcGVyIHtcclxuICBoZWlnaHQ6IDUlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbGluZS1icmVhazogc3RyaWN0O1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLXByb21vLWdyb3VwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiA0MHZ3O1xyXG4gIGhlaWdodDogODZ2aDtcclxuICBtYXJnaW46IDAuM3JlbTtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMXJlbTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAwIDAuMXJlbSAwLjNyZW0gMC4xcmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAmX19sYWJlbCB7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xyXG4gICAgcGFkZGluZzogMC4yNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHJnYigxMDAsIDEwMCwgMjAwKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG4gICYtLWJ1dHRvbnMge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcblxyXG4gICYtLXJlc3VsdCB7XHJcbiAgICBib3JkZXI6ICRmb3JtLWJvcmRlci13aWR0aCBzb2xpZCAkZm9ybS1idXR0b24tYm9yZGVyLWNvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGZvcm0tcHJvbW8tYnV0dG9ucyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgcGFkZGluZzogMC40cmVtO1xyXG4gIG1hcmdpbjogMC40cmVtO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBtYXJnaW46IDAuNzVyZW0gMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQ6IDQwMCAwLjlyZW0gUm9ib3RvO1xyXG5cclxuICBtaW4taGVpZ2h0OiA1dmg7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcclxuICBib3JkZXI6IDAuMDZyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogJGZvcm0tYnV0dG9uLWJhY2tncm91bmQtLWhvdmVyO1xyXG4gIH1cclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZm9ybS1idXR0b24tYmFja2dyb3VuZC0tZm9jdXM7XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZm9ybS1idXR0b24tYmFja2dyb3VuZC0tYWN0aXZlO1xyXG4gIH1cclxuXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyAjIyMgVGFibGUgIyMjXHJcbkBtaXhpbiB0YWJsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMXJlbTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAwIDAuMXJlbSAwLjNyZW0gMC4xcmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBib3JkZXItc3BhY2luZzogMHB4O1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxuXHJcbiAgJl9faGVhZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAmX19ib2R5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICB9XHJcblxyXG4gICZfX3JvdyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBoZWlnaHQ6IDd2aDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlcjogMC4wNXJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcblxyXG4gICAgJi0taGVhZCB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDAuMXJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxODUsIDE0MSwgMC41KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX25hbWUge1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGNlbGwge1xyXG4gIGZsZXg6IDEgMSAxMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgYm9yZGVyLXJpZ2h0OiAwLjAxcmVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuXHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuXHJcbiAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIH1cclxuXHJcbiAgJi0tZGF0YSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuXHJcbiAgJGJhY2tncm91bmQxOiByZ2JhKDIzMywgMTUyLCA2NywgMC4yKTtcclxuICAkYmFja2dyb3VuZDI6IHJnYmEoMjUyLCAxNzUsIDExLCAwLjIpO1xyXG5cclxuICAmLS1wcm9tby1uYW1lIHtcclxuICAgIGZsZXg6IDEgMSAxMzBweDtcclxuICB9XHJcblxyXG4gICYtLXByb21vLWRlc2NyaXB0aW9uIHtcclxuICAgIGZsZXg6IDEgMCAxNTBweDtcclxuICB9XHJcblxyXG4gICYtLXZlbmRvci1lbWFpbCB7XHJcbiAgICBmbGV4OiAxIDAgMTUwcHg7XHJcbiAgfVxyXG5cclxuICAmLS1hZGRyZXNzLXN0b3JlIHtcclxuICAgIGZsZXg6IDEgMSAxMzBweDtcclxuICB9XHJcblxyXG4gICYtLXByb21vLWRldGFpbHMge1xyXG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQxO1xyXG4gIH1cclxuICAmLS1wcml6ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDE7XHJcbiAgfVxyXG5cclxuICAmLS1xdWFudGl0eSB7XHJcbiAgICBmbGV4OiAxIDEgNTVweDtcclxuICB9XHJcblxyXG4gICYtLXBvaW50cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDE7XHJcbiAgICBmbGV4OiAxIDEgNTVweDtcclxuICB9XHJcblxyXG4gICYtLXBhcnRpY2lwYW50cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDE7XHJcbiAgfVxyXG5cclxuICAmLS1wYXJ0aWNpcGFudHMtdG90YWwge1xyXG4gICAgZmxleDogMSAxIDU1cHg7XHJcbiAgfVxyXG5cclxuICAmLS1wYXJ0aWNpcGFudHMtbGlzdCB7XHJcbiAgICBmbGV4OiAxIDEgNTVweDtcclxuICB9XHJcblxyXG4gICYtLW1ldGFkYXRhIHtcclxuICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kMTtcclxuICB9XHJcblxyXG4gICYtLWNyZWF0ZWQtb24ge1xyXG4gICAgZmxleDogMSAxIDU1cHg7XHJcbiAgfVxyXG5cclxuICAmLS1hY3RpdmUge1xyXG4gICAgZmxleDogMSAxIDQ1cHg7XHJcbiAgfVxyXG5cclxuICAmLS1hY3Rpb25zIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjI1LCAyMjUsIDIyNSwgMSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICZfX2xhYmVsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRhYmxlLWFjdGlvbi1sYWJlbCB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICB0ZXh0LXNoYWRvdzogMC4xMXJlbSAwLjExcmVtIDAuMXJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xyXG4gIHBhZGRpbmc6IDAuMjZlbSAwLjQyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXJnaW46IDAgMC4ycmVtO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG5cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEyNSUpO1xyXG4gIH1cclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDE1MCUpO1xyXG4gIH1cclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoKDIwMCUpKTtcclxuICB9XHJcblxyXG4gICYtLWVkaXQge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDU1LCAyMDAsIDEwMCk7XHJcbiAgfVxyXG5cclxuICAmLS1kZWxldGUge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMTAwLCAwKTtcclxuICB9XHJcblxyXG4gICYtLWxpc3Qge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDEwMCwgMTAwLCAyMjApO1xyXG4gIH1cclxuXHJcbiAgJi0tZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE1MCwgMTUwLCAxNTApO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRhYmxlLXBhcnRzIHtcclxuICAudGFibGUge1xyXG4gICAgQGluY2x1ZGUgdGFibGU7XHJcbiAgfVxyXG5cclxuICAuY2VsbCB7XHJcbiAgICBAaW5jbHVkZSBjZWxsO1xyXG4gIH1cclxuXHJcbiAgLmFjdGlvbi1sYWJlbCB7XHJcbiAgICBAaW5jbHVkZSB0YWJsZS1hY3Rpb24tbGFiZWw7XHJcbiAgfVxyXG5cclxuICAuY2VsbC0tZGF0YS5jZWxsLS1wcm9tby1kZXNjcmlwdGlvbixcclxuICAuY2VsbC0tZGF0YS5jZWxsLS1wcml6ZS1kZXNjcmlwdGlvbiB7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaqPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-faq-page',
                templateUrl: './faq-page.component.html',
                styleUrls: ['./faq-page.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map