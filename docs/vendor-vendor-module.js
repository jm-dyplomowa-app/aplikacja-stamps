(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendor-vendor-module"],{

/***/ "4hdW":
/*!****************************************************************************!*\
  !*** ./src/app/promos/vendor/generate-coupon/generate-coupon.component.ts ***!
  \****************************************************************************/
/*! exports provided: GenerateCouponComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateCouponComponent", function() { return GenerateCouponComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_shared_coupon_generator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/coupon-generator */ "AJF1");
/* harmony import */ var src_app_fire_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/fire.service */ "L3EA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");










function GenerateCouponComponent_ng_container_1_div_19_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.message, " ");
} }
function GenerateCouponComponent_ng_container_1_div_19_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.messagePrize, " ");
} }
function GenerateCouponComponent_ng_container_1_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Wygenerowany kod realizacji: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GenerateCouponComponent_ng_container_1_div_19_div_4_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GenerateCouponComponent_ng_container_1_div_19_div_5_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.messagePrize);
} }
function GenerateCouponComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function GenerateCouponComponent_ng_container_1_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.generateCodeAndSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Generowanie kuponu promocyjnego");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Id promocji ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Id uczestnika promocji ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Ilo\u015B\u0107 punkt\u00F3w do przyznania uczestnikowi ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Generuj kupon ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, GenerateCouponComponent_ng_container_1_div_19_Template, 6, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.form.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.message);
} }
class GenerateCouponComponent {
    constructor(fire, router, fb, route, store) {
        this.fire = fire;
        this.router = router;
        this.fb = fb;
        this.route = route;
        this.store = store;
        this.form = null;
        this.code = '';
        this.isOneCouponClose = false;
        this.message = null;
        this.messagePrize = null;
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.errors = '';
        this.pid = null;
        this.uid = null;
        this.form = this.fb.group({
            promoId: [{ value: this.pid || 0, disabled: true }],
            customerId: [{ value: this.uid || 0, disabled: true }],
            points: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            code: [''],
        });
        this.sub.add(this.route.queryParams.subscribe((data) => {
            this.pid = data.pid;
            this.uid = data.uid;
            this.form = this.fb.group({
                promoId: [{ value: this.pid, disabled: true }],
                customerId: [{ value: this.uid, disabled: true }],
                points: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                code: [''],
            });
        }));
    }
    ngOnInit() { }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    generateCodeAndSubmit() {
        this.message = '';
        const couponPure = this.configureCouponPureDTO();
        this.fire
            .getCouponsCollectionRef()
            .add(couponPure)
            .then((data) => {
            const couponId = data.id;
            const newDocument = Object.assign(Object.assign({}, couponPure), { id: couponId });
            const newDocumentPure = Object.assign({}, newDocument);
            this.fire
                .getCouponsCollectionRef()
                .doc(couponId)
                .set(Object.assign({}, newDocumentPure))
                .catch((e) => { })
                .then(() => {
                this.fire
                    .getUsersCollectionRef()
                    .doc(newDocumentPure.customerId)
                    .get()
                    .toPromise()
                    .catch((e) => { })
                    .then((customerData) => {
                    const customer = customerData.data();
                    const updatedCoupons = [...customer.coupons, couponId];
                    const updatedCustomer = Object.assign(Object.assign({}, customer), { coupons: [...updatedCoupons] });
                    const customerPureDTO = Object.assign({}, updatedCustomer);
                    this.fire
                        .getUsersCollectionRef()
                        .doc(newDocumentPure.customerId)
                        .set(Object.assign({}, customerPureDTO))
                        .catch((e) => { })
                        .then(() => {
                        this.composeFinalMessage();
                    })
                        .catch((e) => (this.errors += e));
                })
                    .catch((e) => (this.errors += e));
            })
                .catch((e) => (this.errors += e));
        })
            .catch((e) => (this.errors += e))
            .then(() => {
            this.fire
                .getPromosCollectionRef()
                .doc(this.pid)
                .get()
                .toPromise()
                .then((promoData) => {
                const promo = promoData.data();
                const participant = Object.assign({}, promo.participantsTable.find((participant) => participant.uid === this.uid));
                if (participant) {
                    const participantCurrentPoints = parseInt(`${participant.currentPoints}`, 0);
                    const isOneCouponClose = promo.pointsRedeem <=
                        couponPure.points + participantCurrentPoints;
                    if (isOneCouponClose) {
                        this.isOneCouponClose = isOneCouponClose;
                    }
                }
            })
                .catch((e) => (this.errors += e));
        })
            .catch((e) => (this.errors += e));
        console.log(this.errors);
    }
    configureCouponPureDTO() {
        const code = Object(src_app_shared_coupon_generator__WEBPACK_IMPORTED_MODULE_3__["generateCouponCode"])();
        this.code = code;
        const points = this.form.value['points'] || 0;
        const promoId = this.pid;
        const customerId = this.uid;
        const coupon = {
            promoId,
            customerId,
            code,
            points,
            realised: false,
            id: '',
            type: 'points',
        };
        const couponPureDTO = Object.assign({}, coupon);
        return couponPureDTO;
    }
    composeFinalMessage() {
        if (this.errors.length) {
            this.message += this.errors;
        }
        else {
            this.message =
                'Kupon został pomyślnie wygenerowany i przypisany do konta Uczestnika (Klienta). Poinformuj go o tym i przypomnij, że realizację Kuponu należy wykonać w aplikacji.';
            if (this.isOneCouponClose) {
                this.messagePrize =
                    'UWAGA: Możesz wydać Klientowi nagrodę jeśli od razu odbierze punkty w aplikacji! Poinformuj go o tym.';
            }
        }
    }
}
GenerateCouponComponent.ɵfac = function GenerateCouponComponent_Factory(t) { return new (t || GenerateCouponComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_fire_service__WEBPACK_IMPORTED_MODULE_4__["FireService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"])); };
GenerateCouponComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GenerateCouponComponent, selectors: [["app-generate-coupon"]], decls: 2, vars: 1, consts: [[1, "wrapper"], [4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "group"], [1, "group__label"], [1, "input-wrapper"], ["for", "promoId", 1, "label"], ["type", "text", "name", "promoId", "formControlName", "promoId", 1, "disabled"], ["for", "customerId", 1, "label"], ["type", "text", "name", "customerId", "formControlName", "customerId", 1, "disabled"], ["for", "points", 1, "label"], ["type", "number", "name", "points", "formControlName", "points", "required", "", 1, "input"], ["type", "submit", 1, "buttons", 3, "disabled"], ["class", "message-wrapper", 4, "ngIf"], [1, "message-wrapper"], [1, "code"], ["class", "message", 4, "ngIf"], ["class", "message-prize", 4, "ngIf"], [1, "message"], [1, "message-prize"]], template: function GenerateCouponComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GenerateCouponComponent_ng_container_1_Template, 20, 3, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pid && ctx.uid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  align-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100%;\n  padding: 2rem;\n  background: #ffb98d;\n  background: linear-gradient(144deg, #ffe87f 0%, #ffb98d 100%);\n  overflow: hidden;\n  padding: 1rem;\n}\n\n.label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 500;\n  letter-spacing: 0.02rem;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 90%;\n  padding: 0.4rem;\n  margin: 0.4rem;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  margin: 0.75rem 0;\n  text-transform: uppercase;\n  font: 400 0.9rem Roboto;\n  min-height: 5vh;\n  border-radius: 0.3rem;\n  border: 0.06rem solid rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n  background: #fff;\n}\n\n.buttons[_ngcontent-%COMP%]:hover {\n  background: #edebf3;\n}\n\n.buttons[_ngcontent-%COMP%]:focus {\n  background: #f2f0f8;\n}\n\n.buttons[_ngcontent-%COMP%]:active {\n  background: #f7f7fd;\n}\n\n.buttons[_ngcontent-%COMP%]:disabled {\n  background: lightgrey;\n}\n\n.group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow-y: scroll;\n  justify-content: flex-start;\n  align-items: center;\n  width: 40vw;\n  height: 86vh;\n  margin: 0.3rem;\n  padding: 1.5rem;\n  font-size: 0.75rem;\n  border: 0.1rem solid white;\n  border-radius: 0.1rem;\n  background: white;\n  box-shadow: 0 0.1rem 0.3rem 0.1rem rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n\n.group__label[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  text-transform: uppercase;\n  font-size: 0.9rem;\n  border-radius: 0.2rem;\n  padding: 0.25rem;\n  margin-bottom: 0.5rem;\n  width: 100%;\n  text-align: center;\n  color: #6464c8;\n  font-weight: 700;\n}\n\n.group--buttons[_ngcontent-%COMP%] {\n  box-shadow: none;\n}\n\n.group--result[_ngcontent-%COMP%] {\n  border: 0.1rem solid #c0bec6;\n}\n\n.message-wrapper[_ngcontent-%COMP%] {\n  height: 5%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 0.8rem;\n  font-weight: 600;\n  line-break: strict;\n  box-shadow: none;\n  overflow: scroll;\n  height: auto;\n  margin-top: 1rem;\n  padding: 0.4rem;\n}\n\n.message[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  text-align: center;\n  box-shadow: none;\n  font-size: 1rem;\n}\n\n.message-prize[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  text-align: center;\n  box-shadow: none;\n  margin-top: 1rem;\n  font-size: 0.8rem;\n  color: red;\n}\n\n.code[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 900;\n  padding: 0.4rem;\n}\n\n.input-wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 90%;\n  margin: 0.75rem 0;\n}\n\ninput[_ngcontent-%COMP%] {\n  text-align: center;\n  border: 0.06rem solid rgba(0, 0, 0, 0.2);\n  background: #fff;\n  border-radius: 0.25rem;\n  width: 100%;\n  height: 8%;\n  padding: 0.8em;\n  font-size: 1rem;\n}\n\ninput.disabled[_ngcontent-%COMP%] {\n  background: #bbb;\n  color: #666;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvbW9zL3ZlbmRvci9nZW5lcmF0ZS1jb3Vwb24vZ2VuZXJhdGUtY291cG9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvc3R5bGVzL21peGlucy5zY3NzIiwic3JjL2FwcC9zaGFyZWQvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VDWUUsYUFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkRBQUE7RUFNQSxnQkFBQTtFRHZCQSxhQUFBO0FBTUY7O0FBSEE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFNRjs7QUFIQTtFQ3FVRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFFQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFFQSxlQUFBO0VBRUEscUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRGxVRjs7QUNtVUU7RUFDRSxtQkNuVzRCO0FGa0NoQzs7QUNvVUU7RUFDRSxtQkN0VzRCO0FGb0NoQzs7QUNxVUU7RUFDRSxtQkN6VzZCO0FGc0NqQzs7QUNzVUU7RUFDRSxxQkFBQTtBRHBVSjs7QUE5QkE7RUM2UkUsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EscURBQUE7RUR4U0EsZ0JBQUE7QUE4Q0Y7O0FDMlBFO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FEelBKOztBQzJQRTtFQUNFLGdCQUFBO0FEelBKOztBQzRQRTtFQUNFLDRCQUFBO0FEMVBKOztBQTdEQTtFQzJRRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RURsUkEsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQXlFRjs7QUF0RUE7RUMwUEUsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFRDlQQSxlQUFBO0FBK0VGOztBQTVFQTtFQ3FQRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VEelBBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FBcUZGOztBQWxGQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFxRkY7O0FBbEZBO0VDa09FLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FENUlGOztBQXBGQTtFQ21ORSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUQzSEY7O0FBM0ZBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBOEZGIiwiZmlsZSI6InNyYy9hcHAvcHJvbW9zL3ZlbmRvci9nZW5lcmF0ZS1jb3Vwb24vZ2VuZXJhdGUtY291cG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vLi4vLi4vLi4vc2hhcmVkL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiLi8uLi8uLi8uLi9zaGFyZWQvc3R5bGVzL21peGlucy5zY3NzXCI7XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgQGluY2x1ZGUgd3JhcHBlci15ZWxsb3ctZmxleDtcclxuXHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuLmxhYmVsIHtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAycmVtO1xyXG59XHJcblxyXG4uYnV0dG9ucyB7XHJcbiAgQGluY2x1ZGUgZm9ybS1wcm9tby1idXR0b25zO1xyXG59XHJcblxyXG4uZ3JvdXAge1xyXG4gIEBpbmNsdWRlIGZvcm0tcHJvbW8tZ3JvdXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLm1lc3NhZ2Utd3JhcHBlciB7XHJcbiAgQGluY2x1ZGUgZm9ybS1wcm9tby1tZXNzYWdlLXdyYXBwZXI7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgcGFkZGluZzogMC40cmVtO1xyXG59XHJcblxyXG4ubWVzc2FnZSB7XHJcbiAgQGluY2x1ZGUgZm9ybS1wcm9tby1tZXNzYWdlO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLm1lc3NhZ2UtcHJpemUge1xyXG4gIEBpbmNsdWRlIGZvcm0tcHJvbW8tbWVzc2FnZTtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5jb2RlIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBwYWRkaW5nOiAwLjRyZW07XHJcbn1cclxuXHJcbi5pbnB1dC13cmFwcGVyIHtcclxuICBAaW5jbHVkZSBmb3JtLXByb21vLWlucHV0LXdyYXBwZXI7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBAaW5jbHVkZSBmb3JtLXByb21vLWlucHV0O1xyXG59XHJcblxyXG5pbnB1dC5kaXNhYmxlZCB7XHJcbiAgYmFja2dyb3VuZDogI2JiYjtcclxuICBjb2xvcjogIzY2NjtcclxufVxyXG4iLCJAaW1wb3J0IFwiLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuQG1peGluIHdyYXBwZXIteWVsbG93IHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMTg1LCAxNDEpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDE0NGRlZyxcclxuICAgIHJnYmEoMjU1LCAxODUsIDE0MSwgMSkgMCUsXHJcbiAgICByZ2JhKDI1NSwgMjMyLCAxMjcsIDEpIDEwMCVcclxuICApO1xyXG59XHJcblxyXG5AbWl4aW4gd3JhcHBlci15ZWxsb3ctZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMTg1LCAxNDEpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDE0NGRlZyxcclxuICAgIHJnYmEoMjU1LCAyMzIsIDEyNywgMSkgMCUsXHJcbiAgICByZ2JhKDI1NSwgMTg1LCAxNDEsIDEpIDEwMCVcclxuICApO1xyXG5cclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5AbWl4aW4gd3JhcHBlci1ibHVlLWZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgxNTksIDE2OSwgMjE4LCAxKSAwJSwgcmdiKDkwLCA5MCwgMTgwKSAxMDAlKTtcclxuXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLy8gIyMjIEZPUk1TICMjI1xyXG5cclxuLy8gIyBGT1JNIC0gQVVUSCAjXHJcbkBtaXhpbiBmb3JtLWF1dGgge1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDMwdnc7XHJcbiAgYm94LXNoYWRvdzogMCAwLjFyZW0gMC4zcmVtIDAuMXJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBiYWNrZ3JvdW5kOiAkZm9ybS1iYWNrZ3JvdW5kO1xyXG4gIGJvcmRlcjogJGZvcm0tYm9yZGVyLXdpZHRoIHNvbGlkICRmb3JtLWJvcmRlci1jb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiAkZm9ybS1ib3JkZXItcmFkaXVzO1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDE4NSwgMTQxKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAxNDRkZWcsXHJcbiAgICByZ2JhKDI1NSwgMjMyLCAxMjcsIDEpIDAlLFxyXG4gICAgcmdiYSgyNTUsIDE4NSwgMTQxLCAxKSAxMDAlXHJcbiAgKTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxuICAmX19sYWJlbCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC40cmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAycmVtO1xyXG5cclxuICAgICYtLWltYWdlIHtcclxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBoZWlnaHQ6IDV2aDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgICYtLWltYWdlLXJlc3VsdCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGZvcm0tYXV0aC1pbnB1dC1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBtYXJnaW46IDAuM3JlbTtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zNXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgJi0tZXNzZW50aWFscyB7XHJcbiAgICBncmlkLXJvdzogMSAvIHNwYW4gMjtcclxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xyXG4gIH1cclxuXHJcbiAgJi0tcHJpemUge1xyXG4gICAgZ3JpZC1yb3c6IDMgLyBzcGFuIDI7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcclxuICB9XHJcbiAgJi0tcG9pbnRzIHtcclxuICAgIGdyaWQtcm93OiA1IC8gc3BhbiAyO1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7XHJcbiAgfVxyXG5cclxuICAmLS1pbWFnZSB7XHJcbiAgICBncmlkLXJvdzogMSAvIHNwYW4gMTtcclxuICAgIGdyaWQtY29sdW1uOiAzIC8gc3BhbiAyO1xyXG4gICAgcGFkZGluZzogMC40cmVtO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuXHJcbiAgJi0taW1hZ2UtcmVzdWx0IHtcclxuICAgIGdyaWQtcm93OiAzIC8gc3BhbiA1O1xyXG4gICAgZ3JpZC1jb2x1bW46IDMgLyBzcGFuIDQ7XHJcbiAgICBib3JkZXI6IDAuMDJyZW0gc29saWQgJGlucHV0LWJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICB9XHJcbiAgJi0tYnV0dG9ucyB7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBncmlkLXJvdzogMSAvIHNwYW4gMTtcclxuICAgIGdyaWQtY29sdW1uOiA1IC8gc3BhbiAyO1xyXG4gICAgcGFkZGluZzogMC40cmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxZW0gM2VtO1xyXG4gIH1cclxuXHJcbiAgJi0tcmVzdWx0IHtcclxuICAgIGdyaWQtcm93OiA1IC8gc3BhbiAyO1xyXG4gICAgZ3JpZC1jb2x1bW46IDMgLyBzcGFuIDI7XHJcbiAgICBib3JkZXI6ICRmb3JtLWJvcmRlci13aWR0aCBzb2xpZCAkZm9ybS1idXR0b24tYm9yZGVyLWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgJi0tbWVzc2FnZSB7XHJcbiAgICBncmlkLXJvdzogMiAvIHNwYW4gMTtcclxuXHJcbiAgICBncmlkLWNvbHVtbjogMyAvIHNwYW4gNDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGJhY2tncm91bmQ6ICRmb3JtLW1lc3NhZ2UtYmFja2dyb3VuZDtcclxuICAgIGJvcmRlcjogJGZvcm0tYm9yZGVyLXdpZHRoIHNvbGlkICRmb3JtLW1lc3NhZ2UtYmFja2dyb3VuZDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLWF1dGgtaW5wdXQtd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgbWFyZ2luOiAwLjJyZW0gMDtcclxufVxyXG5cclxuQG1peGluIGZvcm0tYXV0aC1tZXNzYWdlIHtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBoZWlnaHQ6IDR2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1hdXRoLWJ1dHRvbnMge1xyXG4gIGhlaWdodDogNnZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBtYXJnaW46IDAuNHJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XHJcbiAgYm9yZGVyOiAkZm9ybS1ib3JkZXItd2lkdGggc29saWQgJGZvcm0tYnV0dG9uLWJvcmRlci1jb2xvcjtcclxuICBib3JkZXI6IDAuMDZyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAkZm9ybS1idXR0b24tYmFja2dyb3VuZDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogJGZvcm0tYnV0dG9uLWJhY2tncm91bmQtLWhvdmVyO1xyXG4gIH1cclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZm9ybS1idXR0b24tYmFja2dyb3VuZC0tZm9jdXM7XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZm9ybS1idXR0b24tYmFja2dyb3VuZC0tYWN0aXZlO1xyXG4gIH1cclxuXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1hdXRoLWlucHV0IHtcclxuICBib3JkZXI6IDAuMDZyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICB3aWR0aDogMjR2dztcclxuICBwYWRkaW5nOiAwIDEuM3JlbTtcclxuICBoZWlnaHQ6IDd2aDtcclxuICBtYXJnaW46IDAuMzVyZW07XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbn1cclxuXHJcbi8vICMgRk9STSAtIFBST01PU1xyXG5cclxuQG1peGluIGZvcm0tcHJvbW8tYmFzZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG5cclxuICBoZWlnaHQ6IDkwdmg7XHJcbiAgd2lkdGg6IDkwdnc7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBib3gtc2hhZG93OiAwIDAuMXJlbSAwLjNyZW0gMC4xcmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGJvcmRlcjogJGZvcm0tYm9yZGVyLXdpZHRoIHNvbGlkICRmb3JtLWJvcmRlci1jb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiAkZm9ybS1ib3JkZXItcmFkaXVzO1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDE4NSwgMTQxKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAxNDRkZWcsXHJcbiAgICByZ2JhKDI1NSwgMjMyLCAxMjcsIDEpIDAlLFxyXG4gICAgcmdiYSgyNTUsIDE4NSwgMTQxLCAxKSAxMDAlXHJcbiAgKTtcclxuXHJcbiAgJl9fc2VjdGlvbiB7XHJcbiAgICB3aWR0aDogNDV2dztcclxuICAgIGhlaWdodDogODZ2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1wcm9tby1pbnB1dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlcjogMC4wNnJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogOCU7XHJcbiAgcGFkZGluZzogMC44ZW07XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1wcm9tby1pbnB1dC13cmFwcGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDAuNzVyZW0gMDtcclxufVxyXG5cclxuQG1peGluIGZvcm0tcHJvbW8tbWVzc2FnZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1wcm9tby1tZXNzYWdlLXdyYXBwZXIge1xyXG4gIGhlaWdodDogNSU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBsaW5lLWJyZWFrOiBzdHJpY3Q7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1wcm9tby1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogNDB2dztcclxuICBoZWlnaHQ6IDg2dmg7XHJcbiAgbWFyZ2luOiAwLjNyZW07XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICBib3JkZXI6IDAuMXJlbSBzb2xpZCB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAwLjFyZW07XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogMCAwLjFyZW0gMC4zcmVtIDAuMXJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgJl9fbGFiZWwge1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcclxuICAgIHBhZGRpbmc6IDAuMjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZ2IoMTAwLCAxMDAsIDIwMCk7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuICAmLS1idXR0b25zIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmLS1yZXN1bHQge1xyXG4gICAgYm9yZGVyOiAkZm9ybS1ib3JkZXItd2lkdGggc29saWQgJGZvcm0tYnV0dG9uLWJvcmRlci1jb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLXByb21vLWJ1dHRvbnMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogOTAlO1xyXG4gIHBhZGRpbmc6IDAuNHJlbTtcclxuICBtYXJnaW46IDAuNHJlbTtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgbWFyZ2luOiAwLjc1cmVtIDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250OiA0MDAgMC45cmVtIFJvYm90bztcclxuXHJcbiAgbWluLWhlaWdodDogNXZoO1xyXG5cclxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XHJcbiAgYm9yZGVyOiAwLjA2cmVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICRmb3JtLWJ1dHRvbi1iYWNrZ3JvdW5kLS1ob3ZlcjtcclxuICB9XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZDogJGZvcm0tYnV0dG9uLWJhY2tncm91bmQtLWZvY3VzO1xyXG4gIH1cclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogJGZvcm0tYnV0dG9uLWJhY2tncm91bmQtLWFjdGl2ZTtcclxuICB9XHJcblxyXG4gICY6ZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZDogbGlnaHRncmV5O1xyXG4gIH1cclxufVxyXG5cclxuLy8gIyMjIFRhYmxlICMjI1xyXG5AbWl4aW4gdGFibGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBib3JkZXI6IDAuMXJlbSBzb2xpZCB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAwLjFyZW07XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogMCAwLjFyZW0gMC4zcmVtIDAuMXJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgYm9yZGVyLXNwYWNpbmc6IDBweDtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcblxyXG4gICZfX2hlYWQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJl9fYm9keSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgfVxyXG5cclxuICAmX19yb3cge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgaGVpZ2h0OiA3dmg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXI6IDAuMDVyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG5cclxuICAgICYtLWhlYWQge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAwLjFyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTg1LCAxNDEsIDAuNSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBjZWxsIHtcclxuICBmbGV4OiAxIDEgMTAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGJvcmRlci1yaWdodDogMC4wMXJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcblxyXG4gICY6bGFzdC1vZi10eXBlIHtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICB9XHJcblxyXG4gICYtLWRhdGEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcblxyXG4gICRiYWNrZ3JvdW5kMTogcmdiYSgyMzMsIDE1MiwgNjcsIDAuMik7XHJcbiAgJGJhY2tncm91bmQyOiByZ2JhKDI1MiwgMTc1LCAxMSwgMC4yKTtcclxuXHJcbiAgJi0tcHJvbW8tbmFtZSB7XHJcbiAgICBmbGV4OiAxIDEgMTMwcHg7XHJcbiAgfVxyXG5cclxuICAmLS1wcm9tby1kZXNjcmlwdGlvbiB7XHJcbiAgICBmbGV4OiAxIDAgMTUwcHg7XHJcbiAgfVxyXG5cclxuICAmLS12ZW5kb3ItZW1haWwge1xyXG4gICAgZmxleDogMSAwIDE1MHB4O1xyXG4gIH1cclxuXHJcbiAgJi0tYWRkcmVzcy1zdG9yZSB7XHJcbiAgICBmbGV4OiAxIDEgMTMwcHg7XHJcbiAgfVxyXG5cclxuICAmLS1wcm9tby1kZXRhaWxzIHtcclxuICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kMTtcclxuICB9XHJcbiAgJi0tcHJpemUge1xyXG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQxO1xyXG4gIH1cclxuXHJcbiAgJi0tcXVhbnRpdHkge1xyXG4gICAgZmxleDogMSAxIDU1cHg7XHJcbiAgfVxyXG5cclxuICAmLS1wb2ludHMge1xyXG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQxO1xyXG4gICAgZmxleDogMSAxIDU1cHg7XHJcbiAgfVxyXG5cclxuICAmLS1wYXJ0aWNpcGFudHMge1xyXG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQxO1xyXG4gIH1cclxuXHJcbiAgJi0tcGFydGljaXBhbnRzLXRvdGFsIHtcclxuICAgIGZsZXg6IDEgMSA1NXB4O1xyXG4gIH1cclxuXHJcbiAgJi0tcGFydGljaXBhbnRzLWxpc3Qge1xyXG4gICAgZmxleDogMSAxIDU1cHg7XHJcbiAgfVxyXG5cclxuICAmLS1tZXRhZGF0YSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDE7XHJcbiAgfVxyXG5cclxuICAmLS1jcmVhdGVkLW9uIHtcclxuICAgIGZsZXg6IDEgMSA1NXB4O1xyXG4gIH1cclxuXHJcbiAgJi0tYWN0aXZlIHtcclxuICAgIGZsZXg6IDEgMSA0NXB4O1xyXG4gIH1cclxuXHJcbiAgJi0tYWN0aW9ucyB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIyNSwgMjI1LCAyMjUsIDEpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAmX19sYWJlbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0YWJsZS1hY3Rpb24tbGFiZWwge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgdGV4dC1zaGFkb3c6IDAuMTFyZW0gMC4xMXJlbSAwLjFyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcclxuICBwYWRkaW5nOiAwLjI2ZW0gMC40MmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbWFyZ2luOiAwIDAuMnJlbTtcclxuICB3aWR0aDogYXV0bztcclxuICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMjUlKTtcclxuICB9XHJcblxyXG4gICY6YWN0aXZlIHtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxNTAlKTtcclxuICB9XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKCgyMDAlKSk7XHJcbiAgfVxyXG5cclxuICAmLS1lZGl0IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYig1NSwgMjAwLCAxMDApO1xyXG4gIH1cclxuXHJcbiAgJi0tZGVsZXRlIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDEwMCwgMCk7XHJcbiAgfVxyXG5cclxuICAmLS1saXN0IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxMDAsIDEwMCwgMjIwKTtcclxuICB9XHJcblxyXG4gICYtLWRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxNTAsIDE1MCwgMTUwKTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0YWJsZS1wYXJ0cyB7XHJcbiAgLnRhYmxlIHtcclxuICAgIEBpbmNsdWRlIHRhYmxlO1xyXG4gIH1cclxuXHJcbiAgLmNlbGwge1xyXG4gICAgQGluY2x1ZGUgY2VsbDtcclxuICB9XHJcblxyXG4gIC5hY3Rpb24tbGFiZWwge1xyXG4gICAgQGluY2x1ZGUgdGFibGUtYWN0aW9uLWxhYmVsO1xyXG4gIH1cclxuXHJcbiAgLmNlbGwtLWRhdGEuY2VsbC0tcHJvbW8tZGVzY3JpcHRpb24sXHJcbiAgLmNlbGwtLWRhdGEuY2VsbC0tcHJpemUtZGVzY3JpcHRpb24ge1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIH1cclxufVxyXG4iLCIkZm9ybS1iYWNrZ3JvdW5kOiByZ2JhKDI0MCwgMjQwLCAyNDAsIDEpO1xyXG4kZm9ybS1ib3JkZXItY29sb3I6IHJnYmEoMTUwLCAxNTAsIDE1MCwgMSk7XHJcbiRmb3JtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiRmb3JtLWJvcmRlci13aWR0aDogMC4xcmVtO1xyXG4kZm9ybS1ib3JkZXItcmFkaXVzOiAwLjJyZW07XHJcbiRmb3JtLWJ1dHRvbi1iYWNrZ3JvdW5kOiByZ2JhKDIzMiwgMjMwLCAyMzgsIDEpO1xyXG4kZm9ybS1idXR0b24tYmFja2dyb3VuZC0taG92ZXI6IHJnYmEoMjM3LCAyMzUsIDI0MywgMSk7XHJcbiRmb3JtLWJ1dHRvbi1iYWNrZ3JvdW5kLS1mb2N1czogcmdiYSgyNDIsIDI0MCwgMjQ4LCAxKTtcclxuJGZvcm0tYnV0dG9uLWJhY2tncm91bmQtLWFjdGl2ZTogcmdiYSgyNDcsIDI0NywgMjUzLCAxKTtcclxuJGZvcm0tYnV0dG9uLWJvcmRlci1jb2xvcjogcmdiYSgxOTIsIDE5MCwgMTk4LCAxKTtcclxuXHJcbiRmb3JtLW1lc3NhZ2UtYmFja2dyb3VuZDogcmdiYSgyMTIsIDIxMCwgMjE4LCAxKTtcclxuXHJcbiRpbnB1dC1ib3JkZXItY29sb3I6IHJnYmEoMTIwLCAxMjAsIDEyMCwgMSk7XHJcbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAwLjJyZW07XHJcblxyXG4kaW5wdXQtYm9yZGVyLXdpZHRoOiAwLjA1cmVtO1xyXG4kaW5wdXQtYm9yZGVyLXdpZHRoLS1mb2N1czogMC4wOHJlbTtcclxuXHJcbiRpbnB1dC1ncm91cC1iYWNrZ3JvdW5kOiByZ2JhKDIyMCwgMjIwLCAyMjAsIDEpO1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GenerateCouponComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-generate-coupon',
                templateUrl: './generate-coupon.component.html',
                styleUrls: ['./generate-coupon.component.scss'],
            }]
    }], function () { return [{ type: src_app_fire_service__WEBPACK_IMPORTED_MODULE_4__["FireService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }]; }, null); })();


/***/ }),

/***/ "9PYH":
/*!****************************************************************!*\
  !*** ./src/app/promos/vendor/promo-add/promo-add.component.ts ***!
  \****************************************************************/
/*! exports provided: PromoAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromoAddComponent", function() { return PromoAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_promo_form_promo_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/promo-form/promo-form.component */ "TXrg");



class PromoAddComponent {
    constructor() { }
    ngOnInit() { }
}
PromoAddComponent.ɵfac = function PromoAddComponent_Factory(t) { return new (t || PromoAddComponent)(); };
PromoAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PromoAddComponent, selectors: [["app-promo-add"]], decls: 1, vars: 1, consts: [[3, "promo"]], template: function PromoAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-promo-form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("promo", null);
    } }, directives: [_shared_components_promo_form_promo_form_component__WEBPACK_IMPORTED_MODULE_1__["PromoFormComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PromoAddComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-promo-add',
                templateUrl: './promo-add.component.html',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "MmiT":
/*!************************************************!*\
  !*** ./src/app/promos/vendor/vendor.module.ts ***!
  \************************************************/
/*! exports provided: VendorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorModule", function() { return VendorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _vendor_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vendor-routing.module */ "r/J5");
/* harmony import */ var _generate_coupon_generate_coupon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generate-coupon/generate-coupon.component */ "4hdW");
/* harmony import */ var _promo_add_promo_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./promo-add/promo-add.component */ "9PYH");
/* harmony import */ var _promo_edit_promo_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./promo-edit/promo-edit.component */ "r6UW");
/* harmony import */ var _promo_participants_promo_participants_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./promo-participants/promo-participants.component */ "Q7Y0");
/* harmony import */ var _vendor_promos_vendor_promos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vendor-promos/vendor-promos.component */ "ohTQ");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _give_prize_give_prize_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./give-prize/give-prize.component */ "cOYy");












const components = [
    _generate_coupon_generate_coupon_component__WEBPACK_IMPORTED_MODULE_3__["GenerateCouponComponent"],
    _promo_add_promo_add_component__WEBPACK_IMPORTED_MODULE_4__["PromoAddComponent"],
    _promo_edit_promo_edit_component__WEBPACK_IMPORTED_MODULE_5__["PromoEditComponent"],
    _promo_participants_promo_participants_component__WEBPACK_IMPORTED_MODULE_6__["PromoParticipantsComponent"],
    _vendor_promos_vendor_promos_component__WEBPACK_IMPORTED_MODULE_7__["VendorPromosComponent"],
    _give_prize_give_prize_component__WEBPACK_IMPORTED_MODULE_10__["GivePrizeComponent"],
];
class VendorModule {
}
VendorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VendorModule });
VendorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VendorModule_Factory(t) { return new (t || VendorModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _vendor_routing_module__WEBPACK_IMPORTED_MODULE_2__["VendorRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VendorModule, { declarations: [_generate_coupon_generate_coupon_component__WEBPACK_IMPORTED_MODULE_3__["GenerateCouponComponent"],
        _promo_add_promo_add_component__WEBPACK_IMPORTED_MODULE_4__["PromoAddComponent"],
        _promo_edit_promo_edit_component__WEBPACK_IMPORTED_MODULE_5__["PromoEditComponent"],
        _promo_participants_promo_participants_component__WEBPACK_IMPORTED_MODULE_6__["PromoParticipantsComponent"],
        _vendor_promos_vendor_promos_component__WEBPACK_IMPORTED_MODULE_7__["VendorPromosComponent"],
        _give_prize_give_prize_component__WEBPACK_IMPORTED_MODULE_10__["GivePrizeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _vendor_routing_module__WEBPACK_IMPORTED_MODULE_2__["VendorRoutingModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]], exports: [_generate_coupon_generate_coupon_component__WEBPACK_IMPORTED_MODULE_3__["GenerateCouponComponent"],
        _promo_add_promo_add_component__WEBPACK_IMPORTED_MODULE_4__["PromoAddComponent"],
        _promo_edit_promo_edit_component__WEBPACK_IMPORTED_MODULE_5__["PromoEditComponent"],
        _promo_participants_promo_participants_component__WEBPACK_IMPORTED_MODULE_6__["PromoParticipantsComponent"],
        _vendor_promos_vendor_promos_component__WEBPACK_IMPORTED_MODULE_7__["VendorPromosComponent"],
        _give_prize_give_prize_component__WEBPACK_IMPORTED_MODULE_10__["GivePrizeComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VendorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: components,
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _vendor_routing_module__WEBPACK_IMPORTED_MODULE_2__["VendorRoutingModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                ],
                exports: components,
            }]
    }], null, null); })();


/***/ }),

/***/ "Q7Y0":
/*!**********************************************************************************!*\
  !*** ./src/app/promos/vendor/promo-participants/promo-participants.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PromoParticipantsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromoParticipantsComponent", function() { return PromoParticipantsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth */ "i6m5");
/* harmony import */ var src_app_fire_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/fire.service */ "L3EA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








const _c0 = function () { return ["/vendor/promo/generate-coupon"]; };
const _c1 = function (a0, a1) { return { pid: a0, uid: a1 }; };
function PromoParticipantsComponent_table_3_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " GENERUJ KUPON ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const participant_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", participant_r3.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", participant_r3.currentPoints, " / ", ctx_r2.promo.pointsRedeem, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", participant_r3.prizeCounter, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c1, ctx_r2.promo.pid, participant_r3.uid));
} }
function PromoParticipantsComponent_table_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Email uczestnika ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Aktualne punkty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Ilo\u015B\u0107 wr\u0119czonych nagr\u00F3d ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Operacje - Uczestnicy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tbody", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PromoParticipantsComponent_table_3_tr_16_Template, 13, 10, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const participants_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", participants_r1);
} }
class PromoParticipantsComponent {
    constructor(fire, router, route, store) {
        this.fire = fire;
        this.router = router;
        this.route = route;
        this.store = store;
        this.tableName = '';
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.pid = null;
        this.promo = null;
        this.user$ = this.store.select(src_app_auth__WEBPACK_IMPORTED_MODULE_2__["selectAuthUserProfile"]);
        this.promos$ = this.fire.getPromosCollectionRef().valueChanges();
        this.pid = this.route.snapshot.paramMap.get('pid');
        this.subscription.add(this.promos$.subscribe((promos) => {
            let foundPromo = promos.find((promo) => promo.pid === this.pid);
            this.promo = foundPromo;
        }));
    }
    ngOnInit() { }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
PromoParticipantsComponent.ɵfac = function PromoParticipantsComponent_Factory(t) { return new (t || PromoParticipantsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_fire_service__WEBPACK_IMPORTED_MODULE_3__["FireService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"])); };
PromoParticipantsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PromoParticipantsComponent, selectors: [["app-promo-participants"]], inputs: { tableName: "tableName" }, decls: 4, vars: 2, consts: [[1, "wrapper"], [1, "table-name"], ["class", "table", 4, "ngIf"], [1, "table"], [1, "table__head"], [1, "table__row", "table__row--head"], [1, "cell", "cell--header"], [1, "cell__label"], [1, "cell", "cell--header", "cell--metadata"], [1, "cell", "cell--actions"], [1, "table__body"], ["class", "table__row table__row--body", 4, "ngFor", "ngForOf"], [1, "table__row", "table__row--body"], [1, "cell", "cell--data", "cell--participant-details"], [1, "action-label", "action-label--edit", 3, "routerLink", "queryParams"]], template: function PromoParticipantsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PromoParticipantsComponent_table_3_Template, 17, 1, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.tableName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.promo && ctx.promo.participantsTable);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100%;\n  padding: 1rem;\n  background: #ffb98d;\n  background: linear-gradient(144deg, #ffb98d 0%, #ffe87f 100%);\n  overflow: hidden;\n}\n\n.table[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  width: 100%;\n  padding: 1rem;\n  border: 0.1rem solid white;\n  border-radius: 0.1rem;\n  background: white;\n  box-shadow: 0 0.1rem 0.3rem 0.1rem rgba(0, 0, 0, 0.2);\n  border-spacing: 0px;\n  border-collapse: collapse;\n  table-layout: fixed;\n}\n\n.table__head[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n}\n\n.table__body[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  flex-wrap: wrap;\n}\n\n.table__row[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  height: 7vh;\n  align-content: center;\n  align-items: center;\n  font-family: Roboto;\n  font-size: 0.9rem;\n  font-weight: 400;\n  border-radius: 0;\n  border: 0.05rem solid rgba(0, 0, 0, 0.2);\n}\n\n.table__row--head[_ngcontent-%COMP%] {\n  border-radius: 0;\n  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.2);\n  background: rgba(255, 185, 141, 0.5);\n}\n\n.table__name[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin-bottom: 1em;\n}\n\n.cell[_ngcontent-%COMP%] {\n  flex: 1 1 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  align-content: center;\n  height: 100%;\n  overflow: hidden;\n  border-right: none;\n  font-size: 0.8rem;\n  border-right: 0.01rem solid rgba(0, 0, 0, 0.2);\n  border-radius: 0;\n}\n\n.cell[_ngcontent-%COMP%]:last-of-type {\n  border-right: none;\n}\n\n.cell--data[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.cell--promo-name[_ngcontent-%COMP%] {\n  flex: 1 1 130px;\n}\n\n.cell--promo-description[_ngcontent-%COMP%] {\n  flex: 1 0 150px;\n}\n\n.cell--vendor-email[_ngcontent-%COMP%] {\n  flex: 1 0 150px;\n}\n\n.cell--address-store[_ngcontent-%COMP%] {\n  flex: 1 1 130px;\n}\n\n.cell--promo-details[_ngcontent-%COMP%] {\n  background: rgba(233, 152, 67, 0.2);\n}\n\n.cell--prize[_ngcontent-%COMP%] {\n  background: rgba(233, 152, 67, 0.2);\n}\n\n.cell--quantity[_ngcontent-%COMP%] {\n  flex: 1 1 55px;\n}\n\n.cell--points[_ngcontent-%COMP%] {\n  background: rgba(233, 152, 67, 0.2);\n  flex: 1 1 55px;\n}\n\n.cell--participants[_ngcontent-%COMP%] {\n  background: rgba(233, 152, 67, 0.2);\n}\n\n.cell--participants-total[_ngcontent-%COMP%] {\n  flex: 1 1 55px;\n}\n\n.cell--participants-list[_ngcontent-%COMP%] {\n  flex: 1 1 55px;\n}\n\n.cell--metadata[_ngcontent-%COMP%] {\n  background: rgba(233, 152, 67, 0.2);\n}\n\n.cell--created-on[_ngcontent-%COMP%] {\n  flex: 1 1 55px;\n}\n\n.cell--active[_ngcontent-%COMP%] {\n  flex: 1 1 45px;\n}\n\n.cell--actions[_ngcontent-%COMP%] {\n  background: #e1e1e1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  text-align: center;\n  align-content: center;\n}\n\n.cell__label[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  font-size: 0.8rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  align-content: center;\n}\n\n.action-label[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 0.8rem;\n  text-shadow: 0.11rem 0.11rem 0.1rem rgba(0, 0, 0, 0.2);\n  border-radius: 0.2rem;\n  padding: 0.26em 0.42em;\n  font-weight: 400;\n  margin: 0 0.2rem;\n  width: auto;\n  color: #fff;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.action-label[_ngcontent-%COMP%]:hover {\n  filter: brightness(125%);\n}\n\n.action-label[_ngcontent-%COMP%]:active {\n  filter: brightness(150%);\n}\n\n.action-label[_ngcontent-%COMP%]:focus {\n  filter: brightness(200%);\n}\n\n.action-label--edit[_ngcontent-%COMP%] {\n  background: #37c864;\n}\n\n.action-label--delete[_ngcontent-%COMP%] {\n  background: #ff6400;\n}\n\n.action-label--list[_ngcontent-%COMP%] {\n  background: #6464dc;\n}\n\n.action-label--disabled[_ngcontent-%COMP%] {\n  background: #969696;\n}\n\n.cell--data.cell--promo-description[_ngcontent-%COMP%], .cell--data.cell--prize-description[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n}\n\n.table[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvbW9zL3ZlbmRvci9wcm9tby1wYXJ0aWNpcGFudHMvcHJvbW8tcGFydGljaXBhbnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvc3R5bGVzL21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VDQUUsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2REFBQTtFRERBLGdCQUFBO0FBQ0Y7O0FDMmpCRTtFQXZNQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EscURBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QURoWEY7O0FDa1hFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QURoWEo7O0FDbVhFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FEalhKOztBQ29YRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0NBQUE7QURsWEo7O0FDb1hJO0VBQ0UsZ0JBQUE7RUFDQSw4Q0FBQTtFQUNBLG9DQUFBO0FEbFhOOztBQ3NYRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRHBYSjs7QUNnaEJFO0VBdkpBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOENBQUE7RUFFQSxnQkFBQTtBRHRYRjs7QUN3WEU7RUFDRSxrQkFBQTtBRHRYSjs7QUN5WEU7RUFDRSxhQUFBO0FEdlhKOztBQzZYRTtFQUNFLGVBQUE7QUQzWEo7O0FDOFhFO0VBQ0UsZUFBQTtBRDVYSjs7QUMrWEU7RUFDRSxlQUFBO0FEN1hKOztBQ2dZRTtFQUNFLGVBQUE7QUQ5WEo7O0FDaVlFO0VBQ0UsbUNBcEJZO0FEM1doQjs7QUNpWUU7RUFDRSxtQ0F2Qlk7QUR4V2hCOztBQ2tZRTtFQUNFLGNBQUE7QURoWUo7O0FDbVlFO0VBQ0UsbUNBL0JZO0VBZ0NaLGNBQUE7QURqWUo7O0FDb1lFO0VBQ0UsbUNBcENZO0FEOVZoQjs7QUNxWUU7RUFDRSxjQUFBO0FEbllKOztBQ3NZRTtFQUNFLGNBQUE7QURwWUo7O0FDdVlFO0VBQ0UsbUNBaERZO0FEclZoQjs7QUN3WUU7RUFDRSxjQUFBO0FEdFlKOztBQ3lZRTtFQUNFLGNBQUE7QUR2WUo7O0FDMFlFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBRHhZSjs7QUMyWUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FEellKOztBQ2ljRTtFQW5EQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0RBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBRUEsZUFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7QUQzWUY7O0FDNllFO0VBQ0Usd0JBQUE7QUQzWUo7O0FDOFlFO0VBQ0Usd0JBQUE7QUQ1WUo7O0FDK1lFO0VBQ0Usd0JBQUE7QUQ3WUo7O0FDZ1pFO0VBQ0UsbUJBQUE7QUQ5WUo7O0FDaVpFO0VBQ0UsbUJBQUE7QUQvWUo7O0FDa1pFO0VBQ0UsbUJBQUE7QURoWko7O0FDbVpFO0VBQ0UsbUJBQUE7QURqWko7O0FDa2FFOztFQUVFLGtCQUFBO0FEL1pKOztBQXZLQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQTBLRiIsImZpbGUiOiJzcmMvYXBwL3Byb21vcy92ZW5kb3IvcHJvbW8tcGFydGljaXBhbnRzL3Byb21vLXBhcnRpY2lwYW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLy4uLy4uLy4uL3NoYXJlZC9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtcclxuQGltcG9ydCBcIi4vLi4vLi4vLi4vc2hhcmVkL3N0eWxlcy9taXhpbnMuc2Nzc1wiO1xyXG5cclxuLndyYXBwZXIge1xyXG4gIEBpbmNsdWRlIHdyYXBwZXIteWVsbG93O1xyXG5cclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5AaW5jbHVkZSB0YWJsZS1wYXJ0cztcclxuLnRhYmxlIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcbiIsIkBpbXBvcnQgXCIuL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG5AbWl4aW4gd3JhcHBlci15ZWxsb3cge1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAxODUsIDE0MSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgMTQ0ZGVnLFxyXG4gICAgcmdiYSgyNTUsIDE4NSwgMTQxLCAxKSAwJSxcclxuICAgIHJnYmEoMjU1LCAyMzIsIDEyNywgMSkgMTAwJVxyXG4gICk7XHJcbn1cclxuXHJcbkBtaXhpbiB3cmFwcGVyLXllbGxvdy1mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAxODUsIDE0MSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgMTQ0ZGVnLFxyXG4gICAgcmdiYSgyNTUsIDIzMiwgMTI3LCAxKSAwJSxcclxuICAgIHJnYmEoMjU1LCAxODUsIDE0MSwgMSkgMTAwJVxyXG4gICk7XHJcblxyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbkBtaXhpbiB3cmFwcGVyLWJsdWUtZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDE1OSwgMTY5LCAyMTgsIDEpIDAlLCByZ2IoOTAsIDkwLCAxODApIDEwMCUpO1xyXG5cclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4vLyAjIyMgRk9STVMgIyMjXHJcblxyXG4vLyAjIEZPUk0gLSBBVVRIICNcclxuQG1peGluIGZvcm0tYXV0aCB7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogYXV0bztcclxuICB3aWR0aDogMzB2dztcclxuICBib3gtc2hhZG93OiAwIDAuMXJlbSAwLjNyZW0gMC4xcmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGJhY2tncm91bmQ6ICRmb3JtLWJhY2tncm91bmQ7XHJcbiAgYm9yZGVyOiAkZm9ybS1ib3JkZXItd2lkdGggc29saWQgJGZvcm0tYm9yZGVyLWNvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6ICRmb3JtLWJvcmRlci1yYWRpdXM7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMTg1LCAxNDEpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDE0NGRlZyxcclxuICAgIHJnYmEoMjU1LCAyMzIsIDEyNywgMSkgMCUsXHJcbiAgICByZ2JhKDI1NSwgMTg1LCAxNDEsIDEpIDEwMCVcclxuICApO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblxyXG4gICZfX2xhYmVsIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjRyZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJyZW07XHJcblxyXG4gICAgJi0taW1hZ2Uge1xyXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGhlaWdodDogNXZoO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgJi0taW1hZ2UtcmVzdWx0IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1hdXRoLWlucHV0LWdyb3VwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIG1hcmdpbjogMC4zcmVtO1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjM1cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAmLS1lc3NlbnRpYWxzIHtcclxuICAgIGdyaWQtcm93OiAxIC8gc3BhbiAyO1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7XHJcbiAgfVxyXG5cclxuICAmLS1wcml6ZSB7XHJcbiAgICBncmlkLXJvdzogMyAvIHNwYW4gMjtcclxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xyXG4gIH1cclxuICAmLS1wb2ludHMge1xyXG4gICAgZ3JpZC1yb3c6IDUgLyBzcGFuIDI7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcclxuICB9XHJcblxyXG4gICYtLWltYWdlIHtcclxuICAgIGdyaWQtcm93OiAxIC8gc3BhbiAxO1xyXG4gICAgZ3JpZC1jb2x1bW46IDMgLyBzcGFuIDI7XHJcbiAgICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG5cclxuICAmLS1pbWFnZS1yZXN1bHQge1xyXG4gICAgZ3JpZC1yb3c6IDMgLyBzcGFuIDU7XHJcbiAgICBncmlkLWNvbHVtbjogMyAvIHNwYW4gNDtcclxuICAgIGJvcmRlcjogMC4wMnJlbSBzb2xpZCAkaW5wdXQtYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG5cclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gIH1cclxuICAmLS1idXR0b25zIHtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGdyaWQtcm93OiAxIC8gc3BhbiAxO1xyXG4gICAgZ3JpZC1jb2x1bW46IDUgLyBzcGFuIDI7XHJcbiAgICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDFlbSAzZW07XHJcbiAgfVxyXG5cclxuICAmLS1yZXN1bHQge1xyXG4gICAgZ3JpZC1yb3c6IDUgLyBzcGFuIDI7XHJcbiAgICBncmlkLWNvbHVtbjogMyAvIHNwYW4gMjtcclxuICAgIGJvcmRlcjogJGZvcm0tYm9yZGVyLXdpZHRoIHNvbGlkICRmb3JtLWJ1dHRvbi1ib3JkZXItY29sb3I7XHJcbiAgfVxyXG5cclxuICAmLS1tZXNzYWdlIHtcclxuICAgIGdyaWQtcm93OiAyIC8gc3BhbiAxO1xyXG5cclxuICAgIGdyaWQtY29sdW1uOiAzIC8gc3BhbiA0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYmFja2dyb3VuZDogJGZvcm0tbWVzc2FnZS1iYWNrZ3JvdW5kO1xyXG4gICAgYm9yZGVyOiAkZm9ybS1ib3JkZXItd2lkdGggc29saWQgJGZvcm0tbWVzc2FnZS1iYWNrZ3JvdW5kO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGZvcm0tYXV0aC1pbnB1dC13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAuNHJlbTtcclxuICBtYXJnaW46IDAuMnJlbSAwO1xyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1hdXRoLW1lc3NhZ2Uge1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGhlaWdodDogNHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLWF1dGgtYnV0dG9ucyB7XHJcbiAgaGVpZ2h0OiA2dmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIG1hcmdpbjogMC40cmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcclxuICBib3JkZXI6ICRmb3JtLWJvcmRlci13aWR0aCBzb2xpZCAkZm9ybS1idXR0b24tYm9yZGVyLWNvbG9yO1xyXG4gIGJvcmRlcjogMC4wNnJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQ6ICRmb3JtLWJ1dHRvbi1iYWNrZ3JvdW5kO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZm9ybS1idXR0b24tYmFja2dyb3VuZC0taG92ZXI7XHJcbiAgfVxyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQ6ICRmb3JtLWJ1dHRvbi1iYWNrZ3JvdW5kLS1mb2N1cztcclxuICB9XHJcblxyXG4gICY6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICRmb3JtLWJ1dHRvbi1iYWNrZ3JvdW5kLS1hY3RpdmU7XHJcbiAgfVxyXG5cclxuICAmOmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLWF1dGgtaW5wdXQge1xyXG4gIGJvcmRlcjogMC4wNnJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gIHdpZHRoOiAyNHZ3O1xyXG4gIHBhZGRpbmc6IDAgMS4zcmVtO1xyXG4gIGhlaWdodDogN3ZoO1xyXG4gIG1hcmdpbjogMC4zNXJlbTtcclxuICBmb250LXNpemU6IDEuNHJlbTtcclxufVxyXG5cclxuLy8gIyBGT1JNIC0gUFJPTU9TXHJcblxyXG5AbWl4aW4gZm9ybS1wcm9tby1iYXNlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIGhlaWdodDogOTB2aDtcclxuICB3aWR0aDogOTB2dztcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGJveC1zaGFkb3c6IDAgMC4xcmVtIDAuM3JlbSAwLjFyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgYm9yZGVyOiAkZm9ybS1ib3JkZXItd2lkdGggc29saWQgJGZvcm0tYm9yZGVyLWNvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6ICRmb3JtLWJvcmRlci1yYWRpdXM7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMTg1LCAxNDEpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDE0NGRlZyxcclxuICAgIHJnYmEoMjU1LCAyMzIsIDEyNywgMSkgMCUsXHJcbiAgICByZ2JhKDI1NSwgMTg1LCAxNDEsIDEpIDEwMCVcclxuICApO1xyXG5cclxuICAmX19zZWN0aW9uIHtcclxuICAgIHdpZHRoOiA0NXZ3O1xyXG4gICAgaGVpZ2h0OiA4NnZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLXByb21vLWlucHV0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiAwLjA2cmVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA4JTtcclxuICBwYWRkaW5nOiAwLjhlbTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLXByb21vLWlucHV0LXdyYXBwZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogMC43NXJlbSAwO1xyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1wcm9tby1tZXNzYWdlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLXByb21vLW1lc3NhZ2Utd3JhcHBlciB7XHJcbiAgaGVpZ2h0OiA1JTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGxpbmUtYnJlYWs6IHN0cmljdDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLXByb21vLWdyb3VwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiA0MHZ3O1xyXG4gIGhlaWdodDogODZ2aDtcclxuICBtYXJnaW46IDAuM3JlbTtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMXJlbTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAwIDAuMXJlbSAwLjNyZW0gMC4xcmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAmX19sYWJlbCB7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xyXG4gICAgcGFkZGluZzogMC4yNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHJnYigxMDAsIDEwMCwgMjAwKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG4gICYtLWJ1dHRvbnMge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcblxyXG4gICYtLXJlc3VsdCB7XHJcbiAgICBib3JkZXI6ICRmb3JtLWJvcmRlci13aWR0aCBzb2xpZCAkZm9ybS1idXR0b24tYm9yZGVyLWNvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGZvcm0tcHJvbW8tYnV0dG9ucyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgcGFkZGluZzogMC40cmVtO1xyXG4gIG1hcmdpbjogMC40cmVtO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBtYXJnaW46IDAuNzVyZW0gMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQ6IDQwMCAwLjlyZW0gUm9ib3RvO1xyXG5cclxuICBtaW4taGVpZ2h0OiA1dmg7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcclxuICBib3JkZXI6IDAuMDZyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogJGZvcm0tYnV0dG9uLWJhY2tncm91bmQtLWhvdmVyO1xyXG4gIH1cclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZm9ybS1idXR0b24tYmFja2dyb3VuZC0tZm9jdXM7XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZm9ybS1idXR0b24tYmFja2dyb3VuZC0tYWN0aXZlO1xyXG4gIH1cclxuXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyAjIyMgVGFibGUgIyMjXHJcbkBtaXhpbiB0YWJsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMXJlbTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAwIDAuMXJlbSAwLjNyZW0gMC4xcmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBib3JkZXItc3BhY2luZzogMHB4O1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxuXHJcbiAgJl9faGVhZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAmX19ib2R5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICB9XHJcblxyXG4gICZfX3JvdyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBoZWlnaHQ6IDd2aDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlcjogMC4wNXJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcblxyXG4gICAgJi0taGVhZCB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDAuMXJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxODUsIDE0MSwgMC41KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX25hbWUge1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGNlbGwge1xyXG4gIGZsZXg6IDEgMSAxMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgYm9yZGVyLXJpZ2h0OiAwLjAxcmVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuXHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuXHJcbiAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIH1cclxuXHJcbiAgJi0tZGF0YSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuXHJcbiAgJGJhY2tncm91bmQxOiByZ2JhKDIzMywgMTUyLCA2NywgMC4yKTtcclxuICAkYmFja2dyb3VuZDI6IHJnYmEoMjUyLCAxNzUsIDExLCAwLjIpO1xyXG5cclxuICAmLS1wcm9tby1uYW1lIHtcclxuICAgIGZsZXg6IDEgMSAxMzBweDtcclxuICB9XHJcblxyXG4gICYtLXByb21vLWRlc2NyaXB0aW9uIHtcclxuICAgIGZsZXg6IDEgMCAxNTBweDtcclxuICB9XHJcblxyXG4gICYtLXZlbmRvci1lbWFpbCB7XHJcbiAgICBmbGV4OiAxIDAgMTUwcHg7XHJcbiAgfVxyXG5cclxuICAmLS1hZGRyZXNzLXN0b3JlIHtcclxuICAgIGZsZXg6IDEgMSAxMzBweDtcclxuICB9XHJcblxyXG4gICYtLXByb21vLWRldGFpbHMge1xyXG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQxO1xyXG4gIH1cclxuICAmLS1wcml6ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDE7XHJcbiAgfVxyXG5cclxuICAmLS1xdWFudGl0eSB7XHJcbiAgICBmbGV4OiAxIDEgNTVweDtcclxuICB9XHJcblxyXG4gICYtLXBvaW50cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDE7XHJcbiAgICBmbGV4OiAxIDEgNTVweDtcclxuICB9XHJcblxyXG4gICYtLXBhcnRpY2lwYW50cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDE7XHJcbiAgfVxyXG5cclxuICAmLS1wYXJ0aWNpcGFudHMtdG90YWwge1xyXG4gICAgZmxleDogMSAxIDU1cHg7XHJcbiAgfVxyXG5cclxuICAmLS1wYXJ0aWNpcGFudHMtbGlzdCB7XHJcbiAgICBmbGV4OiAxIDEgNTVweDtcclxuICB9XHJcblxyXG4gICYtLW1ldGFkYXRhIHtcclxuICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kMTtcclxuICB9XHJcblxyXG4gICYtLWNyZWF0ZWQtb24ge1xyXG4gICAgZmxleDogMSAxIDU1cHg7XHJcbiAgfVxyXG5cclxuICAmLS1hY3RpdmUge1xyXG4gICAgZmxleDogMSAxIDQ1cHg7XHJcbiAgfVxyXG5cclxuICAmLS1hY3Rpb25zIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjI1LCAyMjUsIDIyNSwgMSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICZfX2xhYmVsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRhYmxlLWFjdGlvbi1sYWJlbCB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICB0ZXh0LXNoYWRvdzogMC4xMXJlbSAwLjExcmVtIDAuMXJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xyXG4gIHBhZGRpbmc6IDAuMjZlbSAwLjQyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXJnaW46IDAgMC4ycmVtO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG5cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEyNSUpO1xyXG4gIH1cclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDE1MCUpO1xyXG4gIH1cclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoKDIwMCUpKTtcclxuICB9XHJcblxyXG4gICYtLWVkaXQge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDU1LCAyMDAsIDEwMCk7XHJcbiAgfVxyXG5cclxuICAmLS1kZWxldGUge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMTAwLCAwKTtcclxuICB9XHJcblxyXG4gICYtLWxpc3Qge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDEwMCwgMTAwLCAyMjApO1xyXG4gIH1cclxuXHJcbiAgJi0tZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE1MCwgMTUwLCAxNTApO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRhYmxlLXBhcnRzIHtcclxuICAudGFibGUge1xyXG4gICAgQGluY2x1ZGUgdGFibGU7XHJcbiAgfVxyXG5cclxuICAuY2VsbCB7XHJcbiAgICBAaW5jbHVkZSBjZWxsO1xyXG4gIH1cclxuXHJcbiAgLmFjdGlvbi1sYWJlbCB7XHJcbiAgICBAaW5jbHVkZSB0YWJsZS1hY3Rpb24tbGFiZWw7XHJcbiAgfVxyXG5cclxuICAuY2VsbC0tZGF0YS5jZWxsLS1wcm9tby1kZXNjcmlwdGlvbixcclxuICAuY2VsbC0tZGF0YS5jZWxsLS1wcml6ZS1kZXNjcmlwdGlvbiB7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PromoParticipantsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-promo-participants',
                templateUrl: './promo-participants.component.html',
                styleUrls: ['./promo-participants.component.scss'],
            }]
    }], function () { return [{ type: src_app_fire_service__WEBPACK_IMPORTED_MODULE_3__["FireService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }]; }, { tableName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "cOYy":
/*!******************************************************************!*\
  !*** ./src/app/promos/vendor/give-prize/give-prize.component.ts ***!
  \******************************************************************/
/*! exports provided: GivePrizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GivePrizeComponent", function() { return GivePrizeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_coupon_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/coupon-generator */ "AJF1");
/* harmony import */ var src_app_fire_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/fire.service */ "L3EA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function GivePrizeComponent_form_1_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " 2. Niepoprawny kod lub typ kuponu. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function GivePrizeComponent_form_1_ng_container_15_p_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Ilo\u015B\u0107: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GivePrizeComponent_form_1_ng_container_15_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Nagroda:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GivePrizeComponent_form_1_ng_container_15_p_1_span_4_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.coupon == null ? null : ctx_r5.coupon.prize == null ? null : ctx_r5.coupon.prize.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.coupon.prize.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.coupon == null ? null : ctx_r5.coupon.prize == null ? null : ctx_r5.coupon.prize.quantity, " ");
} }
function GivePrizeComponent_form_1_ng_container_15_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GivePrizeComponent_form_1_ng_container_15_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r8.realise(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Zrealizuj - nagrod\u0119 wydano ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r6.form.valid);
} }
function GivePrizeComponent_form_1_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GivePrizeComponent_form_1_ng_container_15_p_1_Template, 6, 3, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " 2. Dopytaj Klienta, czy chce zrealizowa\u0107 nagrod\u0119 ju\u017C teraz oraz poinformuj o nagrodzie. Je\u015Bli nagroda posiada rodzaje, dopytaj Klienta kt\u00F3ry wariant woli dosta\u0107. Je\u015Bli Klient wyrazi\u0142 zgod\u0119 i wybra\u0142 nagrod\u0119 - wydaj mu j\u0105 i wci\u015Bnij poni\u017Cszy przycisk \"ZREALIZUJ - WYDANO NAGROD\u0118\". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GivePrizeComponent_form_1_ng_container_15_button_4_Template, 2, 1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.coupon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.verified);
} }
function GivePrizeComponent_form_1_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " 2. Kupon zosta\u0142 ju\u017C zrealizowany. Poinformuj o tym klienta. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function GivePrizeComponent_form_1_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Operacja zako\u0144czona sukcesem.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function GivePrizeComponent_form_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Nagroda - Weryfikacja ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " 1. Popro\u015B Uczestnika (Klienta) o podanie kodu kuponu z nagrod\u0105. Znajdzie go na swoim koncie w aplikacji. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Kod kuponu ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GivePrizeComponent_form_1_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.verify(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Zweryfikuj poprawno\u015B\u0107 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, GivePrizeComponent_form_1_ng_container_14_Template, 3, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, GivePrizeComponent_form_1_ng_container_15_Template, 5, 2, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, GivePrizeComponent_form_1_ng_container_16_Template, 3, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, GivePrizeComponent_form_1_ng_container_17_Template, 3, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.form.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.wrongCoupon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.verified && !ctx_r0.alreadyRealised);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.verified && ctx_r0.alreadyRealised);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.realisationComplete);
} }
class GivePrizeComponent {
    constructor(fire, fb, route) {
        this.fire = fire;
        this.fb = fb;
        this.route = route;
        this.verified = false;
        this.coupon = null;
        this.alreadyRealised = false;
        this.realisationComplete = false;
        this.wrongCoupon = false;
        let group = {};
        group['code'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(src_app_shared_coupon_generator__WEBPACK_IMPORTED_MODULE_2__["COUPON_CODE_LENGTH"]),
        ]);
        this.form = this.fb.group(group);
    }
    verify() {
        const { code } = this.form.getRawValue();
        this.fire.db.firestore
            .collection('coupons')
            .where('type', '==', 'prize')
            .where('code', '==', code)
            .get()
            .then((data) => {
            console.log(data.empty);
            if (data.empty === false) {
                console.log('data', data.empty);
                data.forEach((value) => {
                    console.log('data for each');
                    if (value) {
                        console.log('value');
                        const data = Object.assign({}, value.data());
                        this.coupon = data;
                        this.coupon.type === 'prize'
                            ? (this.wrongCoupon = false)
                            : (this.wrongCoupon = true);
                    }
                });
            }
            else {
                this.wrongCoupon = false;
            }
        })
            .finally(() => {
            if (this.coupon) {
                this.verified = true;
                if (this.coupon.realised) {
                    this.alreadyRealised = true;
                }
            }
            else {
                this.wrongCoupon = true;
            }
        });
    }
    realise() {
        let promo = null;
        let participant = null;
        if (this.coupon && this.coupon.realised === false) {
            this.coupon.realised = true;
            const updatedCoupon = Object.assign(Object.assign({}, this.coupon), { realised: true });
            const pureDTO = Object.assign({}, updatedCoupon);
            this.fire
                .getCouponsCollectionRef()
                .doc(pureDTO.id)
                .set(Object.assign({}, pureDTO))
                .then(() => { });
            this.fire
                .getPromosCollectionRef()
                .doc(pureDTO.promoId)
                .get()
                .toPromise()
                .then((data) => {
                promo = data.data();
                promo.participantsTable.forEach((p) => {
                    if (p.uid === pureDTO.customerId) {
                        p.prizeCounter += 1;
                    }
                });
            })
                .then(() => {
                const updatedPromo = Object.assign({}, Object.assign({}, promo));
                this.fire
                    .getPromosCollectionRef()
                    .doc(promo.pid)
                    .set(Object.assign({}, updatedPromo))
                    .finally(() => {
                    this.realisationComplete = true;
                });
            });
        }
    }
    updatePromo() { }
}
GivePrizeComponent.ɵfac = function GivePrizeComponent_Factory(t) { return new (t || GivePrizeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_fire_service__WEBPACK_IMPORTED_MODULE_3__["FireService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
GivePrizeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GivePrizeComponent, selectors: [["app-give-prize"]], decls: 2, vars: 1, consts: [[1, "wrapper"], [3, "formGroup", 4, "ngIf"], [3, "formGroup"], [1, "group"], [1, "group__label"], [1, "section"], [1, "info"], [1, "input-wrapper"], ["for", "code", 1, "label"], ["type", "text", "name", "code", "formControlName", "code"], [1, "buttons", 3, "disabled", "click"], [1, "section", "section--flex-start"], [4, "ngIf"], [1, "info", "info--coupon", "margin"], ["class", "info margin", 4, "ngIf"], [1, "info", "margin"], ["class", "buttons margin", "type", "submit", 3, "disabled", "click", 4, "ngIf"], [1, "info--coupon"], ["class", "info--coupon", 4, "ngIf"], ["type", "submit", 1, "buttons", "margin", 3, "disabled", "click"]], template: function GivePrizeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GivePrizeComponent_form_1_Template, 18, 6, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  align-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100%;\n  padding: 2rem;\n  background: #ffb98d;\n  background: linear-gradient(144deg, #ffe87f 0%, #ffb98d 100%);\n  overflow: hidden;\n  padding: 1rem;\n  height: 100%;\n}\n\n.label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 500;\n  letter-spacing: 0.02rem;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 90%;\n  padding: 0.4rem;\n  margin: 0.4rem;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  margin: 0.75rem 0;\n  text-transform: uppercase;\n  font: 400 0.9rem Roboto;\n  min-height: 5vh;\n  border-radius: 0.3rem;\n  border: 0.06rem solid rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n  background: #fff;\n}\n\n.buttons[_ngcontent-%COMP%]:hover {\n  background: #edebf3;\n}\n\n.buttons[_ngcontent-%COMP%]:focus {\n  background: #f2f0f8;\n}\n\n.buttons[_ngcontent-%COMP%]:active {\n  background: #f7f7fd;\n}\n\n.buttons[_ngcontent-%COMP%]:disabled {\n  background: lightgrey;\n}\n\n.group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow-y: scroll;\n  justify-content: flex-start;\n  align-items: center;\n  width: 40vw;\n  height: 86vh;\n  margin: 0.3rem;\n  padding: 1.5rem;\n  font-size: 0.75rem;\n  border: 0.1rem solid white;\n  border-radius: 0.1rem;\n  background: white;\n  box-shadow: 0 0.1rem 0.3rem 0.1rem rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n\n.group__label[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  text-transform: uppercase;\n  font-size: 0.9rem;\n  border-radius: 0.2rem;\n  padding: 0.25rem;\n  margin-bottom: 0.5rem;\n  width: 100%;\n  text-align: center;\n  color: #6464c8;\n  font-weight: 700;\n}\n\n.group--buttons[_ngcontent-%COMP%] {\n  box-shadow: none;\n}\n\n.group--result[_ngcontent-%COMP%] {\n  border: 0.1rem solid #c0bec6;\n}\n\n.section[_ngcontent-%COMP%] {\n  height: 50%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-content: center;\n  align-items: center;\n}\n\n.section--flex-start[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n\n.message-wrapper[_ngcontent-%COMP%] {\n  height: 5%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 0.8rem;\n  font-weight: 600;\n  line-break: strict;\n  box-shadow: none;\n  overflow: scroll;\n  height: auto;\n  margin-top: 1rem;\n  padding: 0.4rem;\n}\n\n.message[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  text-align: center;\n  box-shadow: none;\n  font-size: 1rem;\n}\n\n.message-prize[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  text-align: center;\n  box-shadow: none;\n  margin-top: 1rem;\n  font-size: 0.8rem;\n  color: red;\n}\n\n.code[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 900;\n  padding: 0.4rem;\n}\n\n.input-wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 90%;\n  margin: 0.75rem 0;\n}\n\ninput[_ngcontent-%COMP%] {\n  text-align: center;\n  border: 0.06rem solid rgba(0, 0, 0, 0.2);\n  background: #fff;\n  border-radius: 0.25rem;\n  width: 100%;\n  height: 8%;\n  padding: 0.8em;\n  font-size: 1rem;\n}\n\ninput.disabled[_ngcontent-%COMP%] {\n  background: #bbb;\n  color: #666;\n}\n\n.info[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n\n.info--coupon[_ngcontent-%COMP%] {\n  font-weight: 900;\n  font-size: 1rem;\n}\n\n.margin[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\n.quantity[_ngcontent-%COMP%] {\n  word-wrap: none;\n  word-break: keep-all;\n  white-space: nowrap;\n  font-weight: 900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvbW9zL3ZlbmRvci9naXZlLXByaXplL2dpdmUtcHJpemUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9zdHlsZXMvbWl4aW5zLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9zdHlsZXMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUNZRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2REFBQTtFQU1BLGdCQUFBO0VEdkJBLGFBQUE7RUFFQSxZQUFBO0FBS0Y7O0FBRkE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFLRjs7QUFGQTtFQ21VRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFFQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFFQSxlQUFBO0VBRUEscUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRGpVRjs7QUNrVUU7RUFDRSxtQkNuVzRCO0FGbUNoQzs7QUNtVUU7RUFDRSxtQkN0VzRCO0FGcUNoQzs7QUNvVUU7RUFDRSxtQkN6VzZCO0FGdUNqQzs7QUNxVUU7RUFDRSxxQkFBQTtBRG5VSjs7QUE3QkE7RUMyUkUsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EscURBQUE7RUR0U0EsZ0JBQUE7QUE2Q0Y7O0FDMFBFO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FEeFBKOztBQzBQRTtFQUNFLGdCQUFBO0FEeFBKOztBQzJQRTtFQUNFLDRCQUFBO0FEelBKOztBQTVEQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBOERGOztBQTVERTtFQUNFLDJCQUFBO0FBOERKOztBQTFEQTtFQzBQRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RURqUUEsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQXNFRjs7QUFuRUE7RUN5T0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFRDdPQSxlQUFBO0FBNEVGOztBQXpFQTtFQ29PRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VEeE9BLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FBa0ZGOztBQS9FQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFrRkY7O0FBL0VBO0VDaU5FLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FEOUhGOztBQWpGQTtFQ2tNRSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUQ3R0Y7O0FBeEZBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBMkZGOztBQXhGQTtFQUNFLGlCQUFBO0FBMkZGOztBQXpGRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQTJGSjs7QUF2RkE7RUFDRSxnQkFBQTtBQTBGRjs7QUF4RkE7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBMkZGIiwiZmlsZSI6InNyYy9hcHAvcHJvbW9zL3ZlbmRvci9naXZlLXByaXplL2dpdmUtcHJpemUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi8uLi8uLi8uLi9zaGFyZWQvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCI7XHJcbkBpbXBvcnQgXCIuLy4uLy4uLy4uL3NoYXJlZC9zdHlsZXMvbWl4aW5zLnNjc3NcIjtcclxuXHJcbi53cmFwcGVyIHtcclxuICBAaW5jbHVkZSB3cmFwcGVyLXllbGxvdy1mbGV4O1xyXG5cclxuICBwYWRkaW5nOiAxcmVtO1xyXG5cclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMnJlbTtcclxufVxyXG5cclxuLmJ1dHRvbnMge1xyXG4gIEBpbmNsdWRlIGZvcm0tcHJvbW8tYnV0dG9ucztcclxufVxyXG5cclxuLmdyb3VwIHtcclxuICBAaW5jbHVkZSBmb3JtLXByb21vLWdyb3VwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5zZWN0aW9uIHtcclxuICBoZWlnaHQ6IDUwJTtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAmLS1mbGV4LXN0YXJ0IHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICB9XHJcbn1cclxuXHJcbi5tZXNzYWdlLXdyYXBwZXIge1xyXG4gIEBpbmNsdWRlIGZvcm0tcHJvbW8tbWVzc2FnZS13cmFwcGVyO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIHBhZGRpbmc6IDAuNHJlbTtcclxufVxyXG5cclxuLm1lc3NhZ2Uge1xyXG4gIEBpbmNsdWRlIGZvcm0tcHJvbW8tbWVzc2FnZTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi5tZXNzYWdlLXByaXplIHtcclxuICBAaW5jbHVkZSBmb3JtLXByb21vLW1lc3NhZ2U7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uY29kZSB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgcGFkZGluZzogMC40cmVtO1xyXG59XHJcblxyXG4uaW5wdXQtd3JhcHBlciB7XHJcbiAgQGluY2x1ZGUgZm9ybS1wcm9tby1pbnB1dC13cmFwcGVyO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgQGluY2x1ZGUgZm9ybS1wcm9tby1pbnB1dDtcclxufVxyXG5cclxuaW5wdXQuZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQ6ICNiYmI7XHJcbiAgY29sb3I6ICM2NjY7XHJcbn1cclxuXHJcbi5pbmZvIHtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuXHJcbiAgJi0tY291cG9uIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG59XHJcblxyXG4ubWFyZ2luIHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcbi5xdWFudGl0eSB7XHJcbiAgd29yZC13cmFwOiBub25lO1xyXG4gIHdvcmQtYnJlYWs6IGtlZXAtYWxsO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG4iLCJAaW1wb3J0IFwiLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuQG1peGluIHdyYXBwZXIteWVsbG93IHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMTg1LCAxNDEpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDE0NGRlZyxcclxuICAgIHJnYmEoMjU1LCAxODUsIDE0MSwgMSkgMCUsXHJcbiAgICByZ2JhKDI1NSwgMjMyLCAxMjcsIDEpIDEwMCVcclxuICApO1xyXG59XHJcblxyXG5AbWl4aW4gd3JhcHBlci15ZWxsb3ctZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMTg1LCAxNDEpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDE0NGRlZyxcclxuICAgIHJnYmEoMjU1LCAyMzIsIDEyNywgMSkgMCUsXHJcbiAgICByZ2JhKDI1NSwgMTg1LCAxNDEsIDEpIDEwMCVcclxuICApO1xyXG5cclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5AbWl4aW4gd3JhcHBlci1ibHVlLWZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgxNTksIDE2OSwgMjE4LCAxKSAwJSwgcmdiKDkwLCA5MCwgMTgwKSAxMDAlKTtcclxuXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLy8gIyMjIEZPUk1TICMjI1xyXG5cclxuLy8gIyBGT1JNIC0gQVVUSCAjXHJcbkBtaXhpbiBmb3JtLWF1dGgge1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDMwdnc7XHJcbiAgYm94LXNoYWRvdzogMCAwLjFyZW0gMC4zcmVtIDAuMXJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBiYWNrZ3JvdW5kOiAkZm9ybS1iYWNrZ3JvdW5kO1xyXG4gIGJvcmRlcjogJGZvcm0tYm9yZGVyLXdpZHRoIHNvbGlkICRmb3JtLWJvcmRlci1jb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiAkZm9ybS1ib3JkZXItcmFkaXVzO1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDE4NSwgMTQxKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAxNDRkZWcsXHJcbiAgICByZ2JhKDI1NSwgMjMyLCAxMjcsIDEpIDAlLFxyXG4gICAgcmdiYSgyNTUsIDE4NSwgMTQxLCAxKSAxMDAlXHJcbiAgKTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxuICAmX19sYWJlbCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC40cmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAycmVtO1xyXG5cclxuICAgICYtLWltYWdlIHtcclxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBoZWlnaHQ6IDV2aDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgICYtLWltYWdlLXJlc3VsdCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGZvcm0tYXV0aC1pbnB1dC1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBtYXJnaW46IDAuM3JlbTtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zNXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgJi0tZXNzZW50aWFscyB7XHJcbiAgICBncmlkLXJvdzogMSAvIHNwYW4gMjtcclxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xyXG4gIH1cclxuXHJcbiAgJi0tcHJpemUge1xyXG4gICAgZ3JpZC1yb3c6IDMgLyBzcGFuIDI7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcclxuICB9XHJcbiAgJi0tcG9pbnRzIHtcclxuICAgIGdyaWQtcm93OiA1IC8gc3BhbiAyO1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7XHJcbiAgfVxyXG5cclxuICAmLS1pbWFnZSB7XHJcbiAgICBncmlkLXJvdzogMSAvIHNwYW4gMTtcclxuICAgIGdyaWQtY29sdW1uOiAzIC8gc3BhbiAyO1xyXG4gICAgcGFkZGluZzogMC40cmVtO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuXHJcbiAgJi0taW1hZ2UtcmVzdWx0IHtcclxuICAgIGdyaWQtcm93OiAzIC8gc3BhbiA1O1xyXG4gICAgZ3JpZC1jb2x1bW46IDMgLyBzcGFuIDQ7XHJcbiAgICBib3JkZXI6IDAuMDJyZW0gc29saWQgJGlucHV0LWJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICB9XHJcbiAgJi0tYnV0dG9ucyB7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBncmlkLXJvdzogMSAvIHNwYW4gMTtcclxuICAgIGdyaWQtY29sdW1uOiA1IC8gc3BhbiAyO1xyXG4gICAgcGFkZGluZzogMC40cmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxZW0gM2VtO1xyXG4gIH1cclxuXHJcbiAgJi0tcmVzdWx0IHtcclxuICAgIGdyaWQtcm93OiA1IC8gc3BhbiAyO1xyXG4gICAgZ3JpZC1jb2x1bW46IDMgLyBzcGFuIDI7XHJcbiAgICBib3JkZXI6ICRmb3JtLWJvcmRlci13aWR0aCBzb2xpZCAkZm9ybS1idXR0b24tYm9yZGVyLWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgJi0tbWVzc2FnZSB7XHJcbiAgICBncmlkLXJvdzogMiAvIHNwYW4gMTtcclxuXHJcbiAgICBncmlkLWNvbHVtbjogMyAvIHNwYW4gNDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGJhY2tncm91bmQ6ICRmb3JtLW1lc3NhZ2UtYmFja2dyb3VuZDtcclxuICAgIGJvcmRlcjogJGZvcm0tYm9yZGVyLXdpZHRoIHNvbGlkICRmb3JtLW1lc3NhZ2UtYmFja2dyb3VuZDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLWF1dGgtaW5wdXQtd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgbWFyZ2luOiAwLjJyZW0gMDtcclxufVxyXG5cclxuQG1peGluIGZvcm0tYXV0aC1tZXNzYWdlIHtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBoZWlnaHQ6IDR2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1hdXRoLWJ1dHRvbnMge1xyXG4gIGhlaWdodDogNnZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBtYXJnaW46IDAuNHJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XHJcbiAgYm9yZGVyOiAkZm9ybS1ib3JkZXItd2lkdGggc29saWQgJGZvcm0tYnV0dG9uLWJvcmRlci1jb2xvcjtcclxuICBib3JkZXI6IDAuMDZyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAkZm9ybS1idXR0b24tYmFja2dyb3VuZDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogJGZvcm0tYnV0dG9uLWJhY2tncm91bmQtLWhvdmVyO1xyXG4gIH1cclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZm9ybS1idXR0b24tYmFja2dyb3VuZC0tZm9jdXM7XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZm9ybS1idXR0b24tYmFja2dyb3VuZC0tYWN0aXZlO1xyXG4gIH1cclxuXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1hdXRoLWlucHV0IHtcclxuICBib3JkZXI6IDAuMDZyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICB3aWR0aDogMjR2dztcclxuICBwYWRkaW5nOiAwIDEuM3JlbTtcclxuICBoZWlnaHQ6IDd2aDtcclxuICBtYXJnaW46IDAuMzVyZW07XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbn1cclxuXHJcbi8vICMgRk9STSAtIFBST01PU1xyXG5cclxuQG1peGluIGZvcm0tcHJvbW8tYmFzZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG5cclxuICBoZWlnaHQ6IDkwdmg7XHJcbiAgd2lkdGg6IDkwdnc7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBib3gtc2hhZG93OiAwIDAuMXJlbSAwLjNyZW0gMC4xcmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGJvcmRlcjogJGZvcm0tYm9yZGVyLXdpZHRoIHNvbGlkICRmb3JtLWJvcmRlci1jb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiAkZm9ybS1ib3JkZXItcmFkaXVzO1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDE4NSwgMTQxKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAxNDRkZWcsXHJcbiAgICByZ2JhKDI1NSwgMjMyLCAxMjcsIDEpIDAlLFxyXG4gICAgcmdiYSgyNTUsIDE4NSwgMTQxLCAxKSAxMDAlXHJcbiAgKTtcclxuXHJcbiAgJl9fc2VjdGlvbiB7XHJcbiAgICB3aWR0aDogNDV2dztcclxuICAgIGhlaWdodDogODZ2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1wcm9tby1pbnB1dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlcjogMC4wNnJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogOCU7XHJcbiAgcGFkZGluZzogMC44ZW07XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1wcm9tby1pbnB1dC13cmFwcGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDAuNzVyZW0gMDtcclxufVxyXG5cclxuQG1peGluIGZvcm0tcHJvbW8tbWVzc2FnZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1wcm9tby1tZXNzYWdlLXdyYXBwZXIge1xyXG4gIGhlaWdodDogNSU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBsaW5lLWJyZWFrOiBzdHJpY3Q7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1wcm9tby1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogNDB2dztcclxuICBoZWlnaHQ6IDg2dmg7XHJcbiAgbWFyZ2luOiAwLjNyZW07XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICBib3JkZXI6IDAuMXJlbSBzb2xpZCB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAwLjFyZW07XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogMCAwLjFyZW0gMC4zcmVtIDAuMXJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgJl9fbGFiZWwge1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcclxuICAgIHBhZGRpbmc6IDAuMjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZ2IoMTAwLCAxMDAsIDIwMCk7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuICAmLS1idXR0b25zIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmLS1yZXN1bHQge1xyXG4gICAgYm9yZGVyOiAkZm9ybS1ib3JkZXItd2lkdGggc29saWQgJGZvcm0tYnV0dG9uLWJvcmRlci1jb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLXByb21vLWJ1dHRvbnMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogOTAlO1xyXG4gIHBhZGRpbmc6IDAuNHJlbTtcclxuICBtYXJnaW46IDAuNHJlbTtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgbWFyZ2luOiAwLjc1cmVtIDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250OiA0MDAgMC45cmVtIFJvYm90bztcclxuXHJcbiAgbWluLWhlaWdodDogNXZoO1xyXG5cclxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XHJcbiAgYm9yZGVyOiAwLjA2cmVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICRmb3JtLWJ1dHRvbi1iYWNrZ3JvdW5kLS1ob3ZlcjtcclxuICB9XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZDogJGZvcm0tYnV0dG9uLWJhY2tncm91bmQtLWZvY3VzO1xyXG4gIH1cclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogJGZvcm0tYnV0dG9uLWJhY2tncm91bmQtLWFjdGl2ZTtcclxuICB9XHJcblxyXG4gICY6ZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZDogbGlnaHRncmV5O1xyXG4gIH1cclxufVxyXG5cclxuLy8gIyMjIFRhYmxlICMjI1xyXG5AbWl4aW4gdGFibGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBib3JkZXI6IDAuMXJlbSBzb2xpZCB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAwLjFyZW07XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogMCAwLjFyZW0gMC4zcmVtIDAuMXJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgYm9yZGVyLXNwYWNpbmc6IDBweDtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcblxyXG4gICZfX2hlYWQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJl9fYm9keSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgfVxyXG5cclxuICAmX19yb3cge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgaGVpZ2h0OiA3dmg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXI6IDAuMDVyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG5cclxuICAgICYtLWhlYWQge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAwLjFyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTg1LCAxNDEsIDAuNSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBjZWxsIHtcclxuICBmbGV4OiAxIDEgMTAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGJvcmRlci1yaWdodDogMC4wMXJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcblxyXG4gICY6bGFzdC1vZi10eXBlIHtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICB9XHJcblxyXG4gICYtLWRhdGEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcblxyXG4gICRiYWNrZ3JvdW5kMTogcmdiYSgyMzMsIDE1MiwgNjcsIDAuMik7XHJcbiAgJGJhY2tncm91bmQyOiByZ2JhKDI1MiwgMTc1LCAxMSwgMC4yKTtcclxuXHJcbiAgJi0tcHJvbW8tbmFtZSB7XHJcbiAgICBmbGV4OiAxIDEgMTMwcHg7XHJcbiAgfVxyXG5cclxuICAmLS1wcm9tby1kZXNjcmlwdGlvbiB7XHJcbiAgICBmbGV4OiAxIDAgMTUwcHg7XHJcbiAgfVxyXG5cclxuICAmLS12ZW5kb3ItZW1haWwge1xyXG4gICAgZmxleDogMSAwIDE1MHB4O1xyXG4gIH1cclxuXHJcbiAgJi0tYWRkcmVzcy1zdG9yZSB7XHJcbiAgICBmbGV4OiAxIDEgMTMwcHg7XHJcbiAgfVxyXG5cclxuICAmLS1wcm9tby1kZXRhaWxzIHtcclxuICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kMTtcclxuICB9XHJcbiAgJi0tcHJpemUge1xyXG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQxO1xyXG4gIH1cclxuXHJcbiAgJi0tcXVhbnRpdHkge1xyXG4gICAgZmxleDogMSAxIDU1cHg7XHJcbiAgfVxyXG5cclxuICAmLS1wb2ludHMge1xyXG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQxO1xyXG4gICAgZmxleDogMSAxIDU1cHg7XHJcbiAgfVxyXG5cclxuICAmLS1wYXJ0aWNpcGFudHMge1xyXG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQxO1xyXG4gIH1cclxuXHJcbiAgJi0tcGFydGljaXBhbnRzLXRvdGFsIHtcclxuICAgIGZsZXg6IDEgMSA1NXB4O1xyXG4gIH1cclxuXHJcbiAgJi0tcGFydGljaXBhbnRzLWxpc3Qge1xyXG4gICAgZmxleDogMSAxIDU1cHg7XHJcbiAgfVxyXG5cclxuICAmLS1tZXRhZGF0YSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDE7XHJcbiAgfVxyXG5cclxuICAmLS1jcmVhdGVkLW9uIHtcclxuICAgIGZsZXg6IDEgMSA1NXB4O1xyXG4gIH1cclxuXHJcbiAgJi0tYWN0aXZlIHtcclxuICAgIGZsZXg6IDEgMSA0NXB4O1xyXG4gIH1cclxuXHJcbiAgJi0tYWN0aW9ucyB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIyNSwgMjI1LCAyMjUsIDEpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAmX19sYWJlbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0YWJsZS1hY3Rpb24tbGFiZWwge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgdGV4dC1zaGFkb3c6IDAuMTFyZW0gMC4xMXJlbSAwLjFyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcclxuICBwYWRkaW5nOiAwLjI2ZW0gMC40MmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbWFyZ2luOiAwIDAuMnJlbTtcclxuICB3aWR0aDogYXV0bztcclxuICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMjUlKTtcclxuICB9XHJcblxyXG4gICY6YWN0aXZlIHtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxNTAlKTtcclxuICB9XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKCgyMDAlKSk7XHJcbiAgfVxyXG5cclxuICAmLS1lZGl0IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYig1NSwgMjAwLCAxMDApO1xyXG4gIH1cclxuXHJcbiAgJi0tZGVsZXRlIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDEwMCwgMCk7XHJcbiAgfVxyXG5cclxuICAmLS1saXN0IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxMDAsIDEwMCwgMjIwKTtcclxuICB9XHJcblxyXG4gICYtLWRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxNTAsIDE1MCwgMTUwKTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0YWJsZS1wYXJ0cyB7XHJcbiAgLnRhYmxlIHtcclxuICAgIEBpbmNsdWRlIHRhYmxlO1xyXG4gIH1cclxuXHJcbiAgLmNlbGwge1xyXG4gICAgQGluY2x1ZGUgY2VsbDtcclxuICB9XHJcblxyXG4gIC5hY3Rpb24tbGFiZWwge1xyXG4gICAgQGluY2x1ZGUgdGFibGUtYWN0aW9uLWxhYmVsO1xyXG4gIH1cclxuXHJcbiAgLmNlbGwtLWRhdGEuY2VsbC0tcHJvbW8tZGVzY3JpcHRpb24sXHJcbiAgLmNlbGwtLWRhdGEuY2VsbC0tcHJpemUtZGVzY3JpcHRpb24ge1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIH1cclxufVxyXG4iLCIkZm9ybS1iYWNrZ3JvdW5kOiByZ2JhKDI0MCwgMjQwLCAyNDAsIDEpO1xyXG4kZm9ybS1ib3JkZXItY29sb3I6IHJnYmEoMTUwLCAxNTAsIDE1MCwgMSk7XHJcbiRmb3JtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiRmb3JtLWJvcmRlci13aWR0aDogMC4xcmVtO1xyXG4kZm9ybS1ib3JkZXItcmFkaXVzOiAwLjJyZW07XHJcbiRmb3JtLWJ1dHRvbi1iYWNrZ3JvdW5kOiByZ2JhKDIzMiwgMjMwLCAyMzgsIDEpO1xyXG4kZm9ybS1idXR0b24tYmFja2dyb3VuZC0taG92ZXI6IHJnYmEoMjM3LCAyMzUsIDI0MywgMSk7XHJcbiRmb3JtLWJ1dHRvbi1iYWNrZ3JvdW5kLS1mb2N1czogcmdiYSgyNDIsIDI0MCwgMjQ4LCAxKTtcclxuJGZvcm0tYnV0dG9uLWJhY2tncm91bmQtLWFjdGl2ZTogcmdiYSgyNDcsIDI0NywgMjUzLCAxKTtcclxuJGZvcm0tYnV0dG9uLWJvcmRlci1jb2xvcjogcmdiYSgxOTIsIDE5MCwgMTk4LCAxKTtcclxuXHJcbiRmb3JtLW1lc3NhZ2UtYmFja2dyb3VuZDogcmdiYSgyMTIsIDIxMCwgMjE4LCAxKTtcclxuXHJcbiRpbnB1dC1ib3JkZXItY29sb3I6IHJnYmEoMTIwLCAxMjAsIDEyMCwgMSk7XHJcbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAwLjJyZW07XHJcblxyXG4kaW5wdXQtYm9yZGVyLXdpZHRoOiAwLjA1cmVtO1xyXG4kaW5wdXQtYm9yZGVyLXdpZHRoLS1mb2N1czogMC4wOHJlbTtcclxuXHJcbiRpbnB1dC1ncm91cC1iYWNrZ3JvdW5kOiByZ2JhKDIyMCwgMjIwLCAyMjAsIDEpO1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GivePrizeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-give-prize',
                templateUrl: './give-prize.component.html',
                styleUrls: ['./give-prize.component.scss'],
            }]
    }], function () { return [{ type: src_app_fire_service__WEBPACK_IMPORTED_MODULE_3__["FireService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "ohTQ":
/*!************************************************************************!*\
  !*** ./src/app/promos/vendor/vendor-promos/vendor-promos.component.ts ***!
  \************************************************************************/
/*! exports provided: VendorPromosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorPromosComponent", function() { return VendorPromosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/auth */ "i6m5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_fire_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/fire.service */ "L3EA");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/auth.service */ "qXBG");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








const _c0 = function (a1) { return ["/vendor/promo/participants", a1]; };
const _c1 = function (a1) { return ["/vendor/promo/edit", a1]; };
function VendorPromosComponent_ng_container_0_ng_container_4_tr_29_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Lista ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " EDYTUJ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VendorPromosComponent_ng_container_0_ng_container_4_tr_29_Template_label_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const promo_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r5.delete(promo_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " USU\u0143 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const promo_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", promo_r4.promoName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", promo_r4.promoDescription, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", promo_r4.prizeDescription, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", promo_r4.prizeQuantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", promo_r4.pointsEntry, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", promo_r4.pointsRedeem, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", promo_r4.participantsTotal, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, promo_r4.pid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, promo_r4.pid));
} }
function VendorPromosComponent_ng_container_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Nazwa promocji ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Opis promocji ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Opis nagrody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Ilo\u015B\u0107 (nagrody) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Punkty startowe ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Punkty wymagane ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Aktywni uczestnicy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Operacje - Promocje");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tbody", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, VendorPromosComponent_ng_container_0_ng_container_4_tr_29_Template, 29, 13, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.promos);
} }
function VendorPromosComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VendorPromosComponent_ng_container_0_ng_container_4_Template, 30, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.tableName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.promos && ctx_r0.promos.length);
} }
class VendorPromosComponent {
    constructor(router, fire, auth, store) {
        this.router = router;
        this.fire = fire;
        this.auth = auth;
        this.store = store;
        this.user$ = this.store.select(src_app_auth__WEBPACK_IMPORTED_MODULE_1__["selectAuthUserProfile"]);
        this.vendorId = '';
        this.customerId = '';
        this.tableName = 'PROMOCJE TWOJEGO SKLEPU';
        this.promos$ = this.fire.getPromosCollectionRef().valueChanges();
    }
    ngOnInit() {
        this.store.select(src_app_auth__WEBPACK_IMPORTED_MODULE_1__["selectAuthUserProfile"]).subscribe((data) => {
            if (data && data.uid) {
                this.vendorId = data.uid;
                this.promos$.subscribe((promos) => {
                    if (this.vendorId) {
                        this.promos = promos.filter((promo) => promo.vendorId === this.vendorId);
                    }
                    else {
                        this.promos = promos;
                    }
                });
            }
        });
    }
    delete(promo) {
        console.log('PROMO TO DELETE', promo.pid);
        let promises = [];
        let promises2 = [];
        if (confirm('Czy na pewno chcesz usunąć promocję?')) {
            this.fire
                .getPromosCollectionRef()
                .doc(promo.pid)
                .get()
                .toPromise()
                .then(() => {
                var promoCouponsQuery = this.fire.db.firestore
                    .collection('coupons')
                    .where('promoId', '==', promo.pid);
                let couponUsers = [];
                promoCouponsQuery
                    .get()
                    .then(function (querySnapshot) {
                    querySnapshot.forEach(function (doc) {
                        couponUsers.push({
                            coupon: doc.data(),
                            couponRef: doc.ref,
                            userId: doc.data().customerId,
                        });
                    });
                })
                    .then(() => {
                    const uniqueUsersToUpdate = new Set([
                        ...couponUsers.map(({ userId }) => userId),
                    ]);
                    uniqueUsersToUpdate.forEach((user) => {
                        promises.push(this.fire.db.firestore
                            .collection('users')
                            .where('uid', '==', user)
                            .get());
                    });
                    let usersDTOsToBeUpdated = [];
                    Promise.all(promises)
                        .then((values) => {
                        console.log(values);
                        values.forEach((value) => {
                            if (value) {
                                value.forEach((v) => {
                                    const data = Object.assign({}, v.data());
                                    usersDTOsToBeUpdated.push(data);
                                });
                            }
                        });
                    })
                        .then(() => {
                        usersDTOsToBeUpdated.forEach((user) => {
                            const updatedPromos = user.promos.filter((p) => p !== promo.pid);
                            const couponsToDel = couponUsers.filter((u) => u.userId === user.uid);
                            const couponsToDelIds = couponsToDel.map((u) => u.coupon.id);
                            let newCoupons = [];
                            user.coupons.forEach((uc) => {
                                if (!couponsToDelIds.includes(uc)) {
                                    newCoupons.push(uc);
                                }
                            });
                            const updatedUser = Object.assign(Object.assign({}, user), { promos: updatedPromos, coupons: newCoupons });
                            const updatedUserPure = Object.assign({}, updatedUser);
                            promises2.push(this.fire
                                .getUsersCollectionRef()
                                .doc(updatedUser.uid)
                                .set(Object.assign({}, updatedUserPure)));
                        });
                    })
                        .then(() => {
                        Promise.all(promises2).then((data) => {
                            couponUsers.forEach((cu) => {
                                cu.couponRef.delete();
                            });
                        });
                    })
                        .then(() => {
                        this.fire.getPromosCollectionRef().doc(promo.pid).delete();
                    });
                });
            })
                .catch((err) => console.error(err));
        }
    }
    edit(promo) {
        this.router.navigate(['promos/edit-promo', { pid: promo.pid }]);
    }
}
VendorPromosComponent.ɵfac = function VendorPromosComponent_Factory(t) { return new (t || VendorPromosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_fire_service__WEBPACK_IMPORTED_MODULE_3__["FireService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"])); };
VendorPromosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VendorPromosComponent, selectors: [["app-vendor-promos"]], inputs: { customerId: "customerId", tableName: "tableName" }, decls: 2, vars: 3, consts: [[4, "ngIf"], [1, "wrapper"], [1, "table__name"], [1, "table"], [1, "table__head"], [1, "table__row", "table__row--head"], [1, "cell", "cell--header", "cell--promo-details", "cell--promo-name"], [1, "cell__label"], [1, "cell", "cell--header", "cell--promo-details", "cell--promo-description"], [1, "cell", "cell--header", "cell--prize", "cell--prize-description"], [1, "cell", "cell--header", "cell--prize", "cell--quantity"], [1, "cell", "cell--header", "cell--points"], [1, "cell", "cell--header", "cell--participants", "cell--participants-total"], [1, "cell", "cell--actions"], [1, "table__body"], ["class", "table__row table__row--body", 4, "ngFor", "ngForOf"], [1, "table__row", "table__row--body"], [1, "cell", "cell--data", "cell--promo-details", "cell--promo-name"], [1, "cell", "cell--data", "cell--promo-details", "cell--promo-description"], [1, "cell", "cell--data", "cell--prize", "cell--prize-description"], [1, "cell", "cell--data", "cell--prize", "cell--quantity"], [1, "cell", "cell--data", "cell--points"], [1, "cell", "cell--data", "cell--participants", "cell--participants-total"], [1, "action-label", "action-label--list", 3, "routerLink"], [1, "action-label", "action-label--edit", 3, "routerLink"], [1, "action-label", "action-label--delete", 3, "click"]], template: function VendorPromosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, VendorPromosComponent_ng_container_0_Template, 5, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.user$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100%;\n  padding: 1rem;\n  background: #ffb98d;\n  background: linear-gradient(144deg, #ffb98d 0%, #ffe87f 100%);\n  overflow: hidden;\n}\n\n.table[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  width: 100%;\n  padding: 1rem;\n  border: 0.1rem solid white;\n  border-radius: 0.1rem;\n  background: white;\n  box-shadow: 0 0.1rem 0.3rem 0.1rem rgba(0, 0, 0, 0.2);\n  border-spacing: 0px;\n  border-collapse: collapse;\n  table-layout: fixed;\n}\n\n.table__head[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n}\n\n.table__body[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  flex-wrap: wrap;\n}\n\n.table__row[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  height: 7vh;\n  align-content: center;\n  align-items: center;\n  font-family: Roboto;\n  font-size: 0.9rem;\n  font-weight: 400;\n  border-radius: 0;\n  border: 0.05rem solid rgba(0, 0, 0, 0.2);\n}\n\n.table__row--head[_ngcontent-%COMP%] {\n  border-radius: 0;\n  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.2);\n  background: rgba(255, 185, 141, 0.5);\n}\n\n.table__name[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin-bottom: 1em;\n}\n\n.cell[_ngcontent-%COMP%] {\n  flex: 1 1 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  align-content: center;\n  height: 100%;\n  overflow: hidden;\n  border-right: none;\n  font-size: 0.8rem;\n  border-right: 0.01rem solid rgba(0, 0, 0, 0.2);\n  border-radius: 0;\n}\n\n.cell[_ngcontent-%COMP%]:last-of-type {\n  border-right: none;\n}\n\n.cell--data[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.cell--promo-name[_ngcontent-%COMP%] {\n  flex: 1 1 130px;\n}\n\n.cell--promo-description[_ngcontent-%COMP%] {\n  flex: 1 0 150px;\n}\n\n.cell--vendor-email[_ngcontent-%COMP%] {\n  flex: 1 0 150px;\n}\n\n.cell--address-store[_ngcontent-%COMP%] {\n  flex: 1 1 130px;\n}\n\n.cell--promo-details[_ngcontent-%COMP%] {\n  background: rgba(233, 152, 67, 0.2);\n}\n\n.cell--prize[_ngcontent-%COMP%] {\n  background: rgba(233, 152, 67, 0.2);\n}\n\n.cell--quantity[_ngcontent-%COMP%] {\n  flex: 1 1 55px;\n}\n\n.cell--points[_ngcontent-%COMP%] {\n  background: rgba(233, 152, 67, 0.2);\n  flex: 1 1 55px;\n}\n\n.cell--participants[_ngcontent-%COMP%] {\n  background: rgba(233, 152, 67, 0.2);\n}\n\n.cell--participants-total[_ngcontent-%COMP%] {\n  flex: 1 1 55px;\n}\n\n.cell--participants-list[_ngcontent-%COMP%] {\n  flex: 1 1 55px;\n}\n\n.cell--metadata[_ngcontent-%COMP%] {\n  background: rgba(233, 152, 67, 0.2);\n}\n\n.cell--created-on[_ngcontent-%COMP%] {\n  flex: 1 1 55px;\n}\n\n.cell--active[_ngcontent-%COMP%] {\n  flex: 1 1 45px;\n}\n\n.cell--actions[_ngcontent-%COMP%] {\n  background: #e1e1e1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  text-align: center;\n  align-content: center;\n}\n\n.cell__label[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  font-size: 0.8rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  align-content: center;\n}\n\n.action-label[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 0.8rem;\n  text-shadow: 0.11rem 0.11rem 0.1rem rgba(0, 0, 0, 0.2);\n  border-radius: 0.2rem;\n  padding: 0.26em 0.42em;\n  font-weight: 400;\n  margin: 0 0.2rem;\n  width: auto;\n  color: #fff;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.action-label[_ngcontent-%COMP%]:hover {\n  filter: brightness(125%);\n}\n\n.action-label[_ngcontent-%COMP%]:active {\n  filter: brightness(150%);\n}\n\n.action-label[_ngcontent-%COMP%]:focus {\n  filter: brightness(200%);\n}\n\n.action-label--edit[_ngcontent-%COMP%] {\n  background: #37c864;\n}\n\n.action-label--delete[_ngcontent-%COMP%] {\n  background: #ff6400;\n}\n\n.action-label--list[_ngcontent-%COMP%] {\n  background: #6464dc;\n}\n\n.action-label--disabled[_ngcontent-%COMP%] {\n  background: #969696;\n}\n\n.cell--data.cell--promo-description[_ngcontent-%COMP%], .cell--data.cell--prize-description[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n}\n\n.table[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-y: scroll;\n}\n\n.table__name[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.give-prize[_ngcontent-%COMP%] {\n  padding: 0.26em 0.42em;\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvbW9zL3ZlbmRvci92ZW5kb3ItcHJvbW9zL3ZlbmRvci1wcm9tb3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9zdHlsZXMvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUNBRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZEQUFBO0VERkEsZ0JBQUE7QUFFRjs7QUMyakJFO0VBdk1BLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxREFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBRGhYRjs7QUNrWEU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBRGhYSjs7QUNtWEU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QURqWEo7O0FDb1hFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3Q0FBQTtBRGxYSjs7QUNvWEk7RUFDRSxnQkFBQTtFQUNBLDhDQUFBO0VBQ0Esb0NBQUE7QURsWE47O0FDc1hFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FEcFhKOztBQ2doQkU7RUF2SkEsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4Q0FBQTtFQUVBLGdCQUFBO0FEdFhGOztBQ3dYRTtFQUNFLGtCQUFBO0FEdFhKOztBQ3lYRTtFQUNFLGFBQUE7QUR2WEo7O0FDNlhFO0VBQ0UsZUFBQTtBRDNYSjs7QUM4WEU7RUFDRSxlQUFBO0FENVhKOztBQytYRTtFQUNFLGVBQUE7QUQ3WEo7O0FDZ1lFO0VBQ0UsZUFBQTtBRDlYSjs7QUNpWUU7RUFDRSxtQ0FwQlk7QUQzV2hCOztBQ2lZRTtFQUNFLG1DQXZCWTtBRHhXaEI7O0FDa1lFO0VBQ0UsY0FBQTtBRGhZSjs7QUNtWUU7RUFDRSxtQ0EvQlk7RUFnQ1osY0FBQTtBRGpZSjs7QUNvWUU7RUFDRSxtQ0FwQ1k7QUQ5VmhCOztBQ3FZRTtFQUNFLGNBQUE7QURuWUo7O0FDc1lFO0VBQ0UsY0FBQTtBRHBZSjs7QUN1WUU7RUFDRSxtQ0FoRFk7QURyVmhCOztBQ3dZRTtFQUNFLGNBQUE7QUR0WUo7O0FDeVlFO0VBQ0UsY0FBQTtBRHZZSjs7QUMwWUU7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FEeFlKOztBQzJZRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUR6WUo7O0FDaWNFO0VBbkRBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzREFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFFQSxlQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBRDNZRjs7QUM2WUU7RUFDRSx3QkFBQTtBRDNZSjs7QUM4WUU7RUFDRSx3QkFBQTtBRDVZSjs7QUMrWUU7RUFDRSx3QkFBQTtBRDdZSjs7QUNnWkU7RUFDRSxtQkFBQTtBRDlZSjs7QUNpWkU7RUFDRSxtQkFBQTtBRC9ZSjs7QUNrWkU7RUFDRSxtQkFBQTtBRGhaSjs7QUNtWkU7RUFDRSxtQkFBQTtBRGpaSjs7QUNrYUU7O0VBRUUsa0JBQUE7QUQvWko7O0FBeEtBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBMktGOztBQXpLRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQTJLSjs7QUF2S0E7RUFDRSxzQkFBQTtFQUNBLGVBQUE7QUEwS0YiLCJmaWxlIjoic3JjL2FwcC9wcm9tb3MvdmVuZG9yL3ZlbmRvci1wcm9tb3MvdmVuZG9yLXByb21vcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLy4uLy4uLy4uL3NoYXJlZC9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtcclxuQGltcG9ydCBcIi4vLi4vLi4vLi4vc2hhcmVkL3N0eWxlcy9taXhpbnMuc2Nzc1wiO1xyXG5cclxuLndyYXBwZXIge1xyXG4gIEBpbmNsdWRlIHdyYXBwZXIteWVsbG93O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbkBpbmNsdWRlIHRhYmxlLXBhcnRzO1xyXG4udGFibGUge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcblxyXG4gICZfX25hbWUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbn1cclxuXHJcbi5naXZlLXByaXplIHtcclxuICBwYWRkaW5nOiAwLjI2ZW0gMC40MmVtO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG4iLCJAaW1wb3J0IFwiLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuQG1peGluIHdyYXBwZXIteWVsbG93IHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMTg1LCAxNDEpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDE0NGRlZyxcclxuICAgIHJnYmEoMjU1LCAxODUsIDE0MSwgMSkgMCUsXHJcbiAgICByZ2JhKDI1NSwgMjMyLCAxMjcsIDEpIDEwMCVcclxuICApO1xyXG59XHJcblxyXG5AbWl4aW4gd3JhcHBlci15ZWxsb3ctZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMTg1LCAxNDEpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDE0NGRlZyxcclxuICAgIHJnYmEoMjU1LCAyMzIsIDEyNywgMSkgMCUsXHJcbiAgICByZ2JhKDI1NSwgMTg1LCAxNDEsIDEpIDEwMCVcclxuICApO1xyXG5cclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5AbWl4aW4gd3JhcHBlci1ibHVlLWZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgxNTksIDE2OSwgMjE4LCAxKSAwJSwgcmdiKDkwLCA5MCwgMTgwKSAxMDAlKTtcclxuXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLy8gIyMjIEZPUk1TICMjI1xyXG5cclxuLy8gIyBGT1JNIC0gQVVUSCAjXHJcbkBtaXhpbiBmb3JtLWF1dGgge1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDMwdnc7XHJcbiAgYm94LXNoYWRvdzogMCAwLjFyZW0gMC4zcmVtIDAuMXJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBiYWNrZ3JvdW5kOiAkZm9ybS1iYWNrZ3JvdW5kO1xyXG4gIGJvcmRlcjogJGZvcm0tYm9yZGVyLXdpZHRoIHNvbGlkICRmb3JtLWJvcmRlci1jb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiAkZm9ybS1ib3JkZXItcmFkaXVzO1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDE4NSwgMTQxKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAxNDRkZWcsXHJcbiAgICByZ2JhKDI1NSwgMjMyLCAxMjcsIDEpIDAlLFxyXG4gICAgcmdiYSgyNTUsIDE4NSwgMTQxLCAxKSAxMDAlXHJcbiAgKTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxuICAmX19sYWJlbCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC40cmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAycmVtO1xyXG5cclxuICAgICYtLWltYWdlIHtcclxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBoZWlnaHQ6IDV2aDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgICYtLWltYWdlLXJlc3VsdCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGZvcm0tYXV0aC1pbnB1dC1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBtYXJnaW46IDAuM3JlbTtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zNXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgJi0tZXNzZW50aWFscyB7XHJcbiAgICBncmlkLXJvdzogMSAvIHNwYW4gMjtcclxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xyXG4gIH1cclxuXHJcbiAgJi0tcHJpemUge1xyXG4gICAgZ3JpZC1yb3c6IDMgLyBzcGFuIDI7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcclxuICB9XHJcbiAgJi0tcG9pbnRzIHtcclxuICAgIGdyaWQtcm93OiA1IC8gc3BhbiAyO1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7XHJcbiAgfVxyXG5cclxuICAmLS1pbWFnZSB7XHJcbiAgICBncmlkLXJvdzogMSAvIHNwYW4gMTtcclxuICAgIGdyaWQtY29sdW1uOiAzIC8gc3BhbiAyO1xyXG4gICAgcGFkZGluZzogMC40cmVtO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuXHJcbiAgJi0taW1hZ2UtcmVzdWx0IHtcclxuICAgIGdyaWQtcm93OiAzIC8gc3BhbiA1O1xyXG4gICAgZ3JpZC1jb2x1bW46IDMgLyBzcGFuIDQ7XHJcbiAgICBib3JkZXI6IDAuMDJyZW0gc29saWQgJGlucHV0LWJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICB9XHJcbiAgJi0tYnV0dG9ucyB7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBncmlkLXJvdzogMSAvIHNwYW4gMTtcclxuICAgIGdyaWQtY29sdW1uOiA1IC8gc3BhbiAyO1xyXG4gICAgcGFkZGluZzogMC40cmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxZW0gM2VtO1xyXG4gIH1cclxuXHJcbiAgJi0tcmVzdWx0IHtcclxuICAgIGdyaWQtcm93OiA1IC8gc3BhbiAyO1xyXG4gICAgZ3JpZC1jb2x1bW46IDMgLyBzcGFuIDI7XHJcbiAgICBib3JkZXI6ICRmb3JtLWJvcmRlci13aWR0aCBzb2xpZCAkZm9ybS1idXR0b24tYm9yZGVyLWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgJi0tbWVzc2FnZSB7XHJcbiAgICBncmlkLXJvdzogMiAvIHNwYW4gMTtcclxuXHJcbiAgICBncmlkLWNvbHVtbjogMyAvIHNwYW4gNDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGJhY2tncm91bmQ6ICRmb3JtLW1lc3NhZ2UtYmFja2dyb3VuZDtcclxuICAgIGJvcmRlcjogJGZvcm0tYm9yZGVyLXdpZHRoIHNvbGlkICRmb3JtLW1lc3NhZ2UtYmFja2dyb3VuZDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLWF1dGgtaW5wdXQtd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgbWFyZ2luOiAwLjJyZW0gMDtcclxufVxyXG5cclxuQG1peGluIGZvcm0tYXV0aC1tZXNzYWdlIHtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBoZWlnaHQ6IDR2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1hdXRoLWJ1dHRvbnMge1xyXG4gIGhlaWdodDogNnZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBtYXJnaW46IDAuNHJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XHJcbiAgYm9yZGVyOiAkZm9ybS1ib3JkZXItd2lkdGggc29saWQgJGZvcm0tYnV0dG9uLWJvcmRlci1jb2xvcjtcclxuICBib3JkZXI6IDAuMDZyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAkZm9ybS1idXR0b24tYmFja2dyb3VuZDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogJGZvcm0tYnV0dG9uLWJhY2tncm91bmQtLWhvdmVyO1xyXG4gIH1cclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZm9ybS1idXR0b24tYmFja2dyb3VuZC0tZm9jdXM7XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZm9ybS1idXR0b24tYmFja2dyb3VuZC0tYWN0aXZlO1xyXG4gIH1cclxuXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1hdXRoLWlucHV0IHtcclxuICBib3JkZXI6IDAuMDZyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICB3aWR0aDogMjR2dztcclxuICBwYWRkaW5nOiAwIDEuM3JlbTtcclxuICBoZWlnaHQ6IDd2aDtcclxuICBtYXJnaW46IDAuMzVyZW07XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbn1cclxuXHJcbi8vICMgRk9STSAtIFBST01PU1xyXG5cclxuQG1peGluIGZvcm0tcHJvbW8tYmFzZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG5cclxuICBoZWlnaHQ6IDkwdmg7XHJcbiAgd2lkdGg6IDkwdnc7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBib3gtc2hhZG93OiAwIDAuMXJlbSAwLjNyZW0gMC4xcmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGJvcmRlcjogJGZvcm0tYm9yZGVyLXdpZHRoIHNvbGlkICRmb3JtLWJvcmRlci1jb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiAkZm9ybS1ib3JkZXItcmFkaXVzO1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDE4NSwgMTQxKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAxNDRkZWcsXHJcbiAgICByZ2JhKDI1NSwgMjMyLCAxMjcsIDEpIDAlLFxyXG4gICAgcmdiYSgyNTUsIDE4NSwgMTQxLCAxKSAxMDAlXHJcbiAgKTtcclxuXHJcbiAgJl9fc2VjdGlvbiB7XHJcbiAgICB3aWR0aDogNDV2dztcclxuICAgIGhlaWdodDogODZ2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1wcm9tby1pbnB1dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlcjogMC4wNnJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogOCU7XHJcbiAgcGFkZGluZzogMC44ZW07XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1wcm9tby1pbnB1dC13cmFwcGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDAuNzVyZW0gMDtcclxufVxyXG5cclxuQG1peGluIGZvcm0tcHJvbW8tbWVzc2FnZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1wcm9tby1tZXNzYWdlLXdyYXBwZXIge1xyXG4gIGhlaWdodDogNSU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBsaW5lLWJyZWFrOiBzdHJpY3Q7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1wcm9tby1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogNDB2dztcclxuICBoZWlnaHQ6IDg2dmg7XHJcbiAgbWFyZ2luOiAwLjNyZW07XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICBib3JkZXI6IDAuMXJlbSBzb2xpZCB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAwLjFyZW07XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogMCAwLjFyZW0gMC4zcmVtIDAuMXJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgJl9fbGFiZWwge1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcclxuICAgIHBhZGRpbmc6IDAuMjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZ2IoMTAwLCAxMDAsIDIwMCk7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuICAmLS1idXR0b25zIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmLS1yZXN1bHQge1xyXG4gICAgYm9yZGVyOiAkZm9ybS1ib3JkZXItd2lkdGggc29saWQgJGZvcm0tYnV0dG9uLWJvcmRlci1jb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLXByb21vLWJ1dHRvbnMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogOTAlO1xyXG4gIHBhZGRpbmc6IDAuNHJlbTtcclxuICBtYXJnaW46IDAuNHJlbTtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgbWFyZ2luOiAwLjc1cmVtIDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250OiA0MDAgMC45cmVtIFJvYm90bztcclxuXHJcbiAgbWluLWhlaWdodDogNXZoO1xyXG5cclxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XHJcbiAgYm9yZGVyOiAwLjA2cmVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICRmb3JtLWJ1dHRvbi1iYWNrZ3JvdW5kLS1ob3ZlcjtcclxuICB9XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZDogJGZvcm0tYnV0dG9uLWJhY2tncm91bmQtLWZvY3VzO1xyXG4gIH1cclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogJGZvcm0tYnV0dG9uLWJhY2tncm91bmQtLWFjdGl2ZTtcclxuICB9XHJcblxyXG4gICY6ZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZDogbGlnaHRncmV5O1xyXG4gIH1cclxufVxyXG5cclxuLy8gIyMjIFRhYmxlICMjI1xyXG5AbWl4aW4gdGFibGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBib3JkZXI6IDAuMXJlbSBzb2xpZCB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAwLjFyZW07XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogMCAwLjFyZW0gMC4zcmVtIDAuMXJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgYm9yZGVyLXNwYWNpbmc6IDBweDtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcblxyXG4gICZfX2hlYWQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJl9fYm9keSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgfVxyXG5cclxuICAmX19yb3cge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgaGVpZ2h0OiA3dmg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXI6IDAuMDVyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG5cclxuICAgICYtLWhlYWQge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAwLjFyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTg1LCAxNDEsIDAuNSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBjZWxsIHtcclxuICBmbGV4OiAxIDEgMTAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGJvcmRlci1yaWdodDogMC4wMXJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcblxyXG4gICY6bGFzdC1vZi10eXBlIHtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICB9XHJcblxyXG4gICYtLWRhdGEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcblxyXG4gICRiYWNrZ3JvdW5kMTogcmdiYSgyMzMsIDE1MiwgNjcsIDAuMik7XHJcbiAgJGJhY2tncm91bmQyOiByZ2JhKDI1MiwgMTc1LCAxMSwgMC4yKTtcclxuXHJcbiAgJi0tcHJvbW8tbmFtZSB7XHJcbiAgICBmbGV4OiAxIDEgMTMwcHg7XHJcbiAgfVxyXG5cclxuICAmLS1wcm9tby1kZXNjcmlwdGlvbiB7XHJcbiAgICBmbGV4OiAxIDAgMTUwcHg7XHJcbiAgfVxyXG5cclxuICAmLS12ZW5kb3ItZW1haWwge1xyXG4gICAgZmxleDogMSAwIDE1MHB4O1xyXG4gIH1cclxuXHJcbiAgJi0tYWRkcmVzcy1zdG9yZSB7XHJcbiAgICBmbGV4OiAxIDEgMTMwcHg7XHJcbiAgfVxyXG5cclxuICAmLS1wcm9tby1kZXRhaWxzIHtcclxuICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kMTtcclxuICB9XHJcbiAgJi0tcHJpemUge1xyXG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQxO1xyXG4gIH1cclxuXHJcbiAgJi0tcXVhbnRpdHkge1xyXG4gICAgZmxleDogMSAxIDU1cHg7XHJcbiAgfVxyXG5cclxuICAmLS1wb2ludHMge1xyXG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQxO1xyXG4gICAgZmxleDogMSAxIDU1cHg7XHJcbiAgfVxyXG5cclxuICAmLS1wYXJ0aWNpcGFudHMge1xyXG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQxO1xyXG4gIH1cclxuXHJcbiAgJi0tcGFydGljaXBhbnRzLXRvdGFsIHtcclxuICAgIGZsZXg6IDEgMSA1NXB4O1xyXG4gIH1cclxuXHJcbiAgJi0tcGFydGljaXBhbnRzLWxpc3Qge1xyXG4gICAgZmxleDogMSAxIDU1cHg7XHJcbiAgfVxyXG5cclxuICAmLS1tZXRhZGF0YSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDE7XHJcbiAgfVxyXG5cclxuICAmLS1jcmVhdGVkLW9uIHtcclxuICAgIGZsZXg6IDEgMSA1NXB4O1xyXG4gIH1cclxuXHJcbiAgJi0tYWN0aXZlIHtcclxuICAgIGZsZXg6IDEgMSA0NXB4O1xyXG4gIH1cclxuXHJcbiAgJi0tYWN0aW9ucyB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIyNSwgMjI1LCAyMjUsIDEpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAmX19sYWJlbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0YWJsZS1hY3Rpb24tbGFiZWwge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgdGV4dC1zaGFkb3c6IDAuMTFyZW0gMC4xMXJlbSAwLjFyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcclxuICBwYWRkaW5nOiAwLjI2ZW0gMC40MmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbWFyZ2luOiAwIDAuMnJlbTtcclxuICB3aWR0aDogYXV0bztcclxuICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMjUlKTtcclxuICB9XHJcblxyXG4gICY6YWN0aXZlIHtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxNTAlKTtcclxuICB9XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKCgyMDAlKSk7XHJcbiAgfVxyXG5cclxuICAmLS1lZGl0IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYig1NSwgMjAwLCAxMDApO1xyXG4gIH1cclxuXHJcbiAgJi0tZGVsZXRlIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDEwMCwgMCk7XHJcbiAgfVxyXG5cclxuICAmLS1saXN0IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxMDAsIDEwMCwgMjIwKTtcclxuICB9XHJcblxyXG4gICYtLWRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxNTAsIDE1MCwgMTUwKTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0YWJsZS1wYXJ0cyB7XHJcbiAgLnRhYmxlIHtcclxuICAgIEBpbmNsdWRlIHRhYmxlO1xyXG4gIH1cclxuXHJcbiAgLmNlbGwge1xyXG4gICAgQGluY2x1ZGUgY2VsbDtcclxuICB9XHJcblxyXG4gIC5hY3Rpb24tbGFiZWwge1xyXG4gICAgQGluY2x1ZGUgdGFibGUtYWN0aW9uLWxhYmVsO1xyXG4gIH1cclxuXHJcbiAgLmNlbGwtLWRhdGEuY2VsbC0tcHJvbW8tZGVzY3JpcHRpb24sXHJcbiAgLmNlbGwtLWRhdGEuY2VsbC0tcHJpemUtZGVzY3JpcHRpb24ge1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VendorPromosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-vendor-promos',
                templateUrl: './vendor-promos.component.html',
                styleUrls: ['./vendor-promos.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_fire_service__WEBPACK_IMPORTED_MODULE_3__["FireService"] }, { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }]; }, { customerId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], tableName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "r/J5":
/*!********************************************************!*\
  !*** ./src/app/promos/vendor/vendor-routing.module.ts ***!
  \********************************************************/
/*! exports provided: VendorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorRoutingModule", function() { return VendorRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.guard */ "P+IX");
/* harmony import */ var _generate_coupon_generate_coupon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generate-coupon/generate-coupon.component */ "4hdW");
/* harmony import */ var _give_prize_give_prize_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./give-prize/give-prize.component */ "cOYy");
/* harmony import */ var _promo_add_promo_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./promo-add/promo-add.component */ "9PYH");
/* harmony import */ var _promo_edit_promo_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./promo-edit/promo-edit.component */ "r6UW");
/* harmony import */ var _promo_participants_promo_participants_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./promo-participants/promo-participants.component */ "Q7Y0");
/* harmony import */ var _vendor_promos_vendor_promos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vendor-promos/vendor-promos.component */ "ohTQ");











const routes = [
    {
        path: '',
        children: [
            {
                path: 'promos',
                component: _vendor_promos_vendor_promos_component__WEBPACK_IMPORTED_MODULE_8__["VendorPromosComponent"],
                canActivate: [src_app_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
                data: {
                    exptectedRoles: ['vendor'],
                },
            },
            {
                path: 'promos/add',
                component: _promo_add_promo_add_component__WEBPACK_IMPORTED_MODULE_5__["PromoAddComponent"],
                canActivate: [src_app_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
                data: {
                    exptectedRoles: ['vendor'],
                },
            },
            {
                path: 'promo/edit/:pid',
                component: _promo_edit_promo_edit_component__WEBPACK_IMPORTED_MODULE_6__["PromoEditComponent"],
                canActivate: [src_app_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
                data: {
                    exptectedRoles: ['vendor'],
                },
            },
            {
                path: 'promo/participants/:pid',
                component: _promo_participants_promo_participants_component__WEBPACK_IMPORTED_MODULE_7__["PromoParticipantsComponent"],
                canActivate: [src_app_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
                data: {
                    exptectedRoles: ['vendor'],
                },
            },
            {
                path: 'promo/generate-coupon',
                component: _generate_coupon_generate_coupon_component__WEBPACK_IMPORTED_MODULE_3__["GenerateCouponComponent"],
                canActivate: [src_app_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
                data: {
                    exptectedRoles: ['vendor'],
                },
            },
            {
                path: 'promo/give-prize',
                component: _give_prize_give_prize_component__WEBPACK_IMPORTED_MODULE_4__["GivePrizeComponent"],
                canActivate: [src_app_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
                data: {
                    exptectedRoles: ['vendor'],
                },
            },
        ],
    },
];
class VendorRoutingModule {
}
VendorRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VendorRoutingModule });
VendorRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VendorRoutingModule_Factory(t) { return new (t || VendorRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VendorRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VendorRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "r6UW":
/*!******************************************************************!*\
  !*** ./src/app/promos/vendor/promo-edit/promo-edit.component.ts ***!
  \******************************************************************/
/*! exports provided: PromoEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromoEditComponent", function() { return PromoEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_fire_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/fire.service */ "L3EA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_promo_form_promo_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/promo-form/promo-form.component */ "TXrg");







function PromoEditComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-promo-form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("userEdit", function PromoEditComponent_ng_container_0_Template_app_promo_form_userEdit_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.userEdit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("promo", ctx_r0.promo);
} }
class PromoEditComponent {
    constructor(router, route, store, fire) {
        this.router = router;
        this.route = route;
        this.store = store;
        this.fire = fire;
        this.promo = null;
        this.promos$ = this.fire.getPromosCollectionRef().valueChanges();
        this.pid = null;
        const pid = this.route.snapshot.paramMap.get('pid');
        this.pid = pid;
        this.promos$.subscribe((promos) => {
            let foundPromo = promos.find((promo) => promo.pid === this.pid);
            this.promo = foundPromo;
        });
    }
    ngOnInit() { }
    userEdit(event) { }
}
PromoEditComponent.ɵfac = function PromoEditComponent_Factory(t) { return new (t || PromoEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_fire_service__WEBPACK_IMPORTED_MODULE_3__["FireService"])); };
PromoEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PromoEditComponent, selectors: [["app-promo-edit"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "promo", "userEdit"]], template: function PromoEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PromoEditComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.promo);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_components_promo_form_promo_form_component__WEBPACK_IMPORTED_MODULE_5__["PromoFormComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PromoEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-promo-edit',
                templateUrl: './promo-edit.component.html',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }, { type: src_app_fire_service__WEBPACK_IMPORTED_MODULE_3__["FireService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=vendor-vendor-module.js.map