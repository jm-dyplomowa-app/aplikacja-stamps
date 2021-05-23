(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer-customer-module"],{

/***/ "+WK0":
/*!****************************************************!*\
  !*** ./src/app/promos/customer/customer.module.ts ***!
  \****************************************************/
/*! exports provided: CustomerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModule", function() { return CustomerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _customer_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-routing.module */ "eUn4");
/* harmony import */ var _customer_promos_customer_promos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-promos/customer-promos.component */ "maYy");
/* harmony import */ var _customer_promo_coupons_customer_promo_coupons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer-promo-coupons/customer-promo-coupons.component */ "a//k");






class CustomerModule {
}
CustomerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CustomerModule });
CustomerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CustomerModule_Factory(t) { return new (t || CustomerModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _customer_routing_module__WEBPACK_IMPORTED_MODULE_2__["CustomerRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CustomerModule, { declarations: [_customer_promos_customer_promos_component__WEBPACK_IMPORTED_MODULE_3__["CustomerPromosComponent"], _customer_promo_coupons_customer_promo_coupons_component__WEBPACK_IMPORTED_MODULE_4__["CustomerPromoCouponsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _customer_routing_module__WEBPACK_IMPORTED_MODULE_2__["CustomerRoutingModule"]], exports: [_customer_promos_customer_promos_component__WEBPACK_IMPORTED_MODULE_3__["CustomerPromosComponent"], _customer_promo_coupons_customer_promo_coupons_component__WEBPACK_IMPORTED_MODULE_4__["CustomerPromoCouponsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_customer_promos_customer_promos_component__WEBPACK_IMPORTED_MODULE_3__["CustomerPromosComponent"], _customer_promo_coupons_customer_promo_coupons_component__WEBPACK_IMPORTED_MODULE_4__["CustomerPromoCouponsComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _customer_routing_module__WEBPACK_IMPORTED_MODULE_2__["CustomerRoutingModule"]],
                exports: [_customer_promos_customer_promos_component__WEBPACK_IMPORTED_MODULE_3__["CustomerPromosComponent"], _customer_promo_coupons_customer_promo_coupons_component__WEBPACK_IMPORTED_MODULE_4__["CustomerPromoCouponsComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "a//k":
/*!********************************************************************************************!*\
  !*** ./src/app/promos/customer/customer-promo-coupons/customer-promo-coupons.component.ts ***!
  \********************************************************************************************/
/*! exports provided: CustomerPromoCouponsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPromoCouponsComponent", function() { return CustomerPromoCouponsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth */ "i6m5");
/* harmony import */ var src_app_shared_coupon_generator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/coupon-generator */ "AJF1");
/* harmony import */ var src_app_fire_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/fire.service */ "L3EA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function CustomerPromoCouponsComponent_ng_container_22_tr_1_label_11_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerPromoCouponsComponent_ng_container_22_tr_1_label_11_Template_label_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.realizeCoupon(item_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ZREALIZUJ KUPON ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerPromoCouponsComponent_ng_container_22_tr_1_label_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ZREALIZOWANO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerPromoCouponsComponent_ng_container_22_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CustomerPromoCouponsComponent_ng_container_22_tr_1_label_11_Template, 2, 0, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CustomerPromoCouponsComponent_ng_container_22_tr_1_label_12_Template, 2, 0, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r7.points, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r7.code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r7.realised ? "TAK" : "NIE", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r7.realised === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r7.realised === true);
} }
function CustomerPromoCouponsComponent_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomerPromoCouponsComponent_ng_container_22_tr_1_Template, 13, 5, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.coupons.points);
} }
function CustomerPromoCouponsComponent_ng_container_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.currentParticipant == null ? null : ctx_r1.currentParticipant.currentPoints);
} }
function CustomerPromoCouponsComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Masz za ma\u0142o punkt\u00F3w.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerPromoCouponsComponent_button_38_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerPromoCouponsComponent_button_38_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.generateCodeAndSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Zamie\u0144 punkty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerPromoCouponsComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Operacja powiod\u0142a si\u0119.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerPromoCouponsComponent_ng_container_58_tr_1_label_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ODBIERZ U SPRZEDAWCY ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerPromoCouponsComponent_ng_container_58_tr_1_label_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ZREALIZOWANO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerPromoCouponsComponent_ng_container_58_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CustomerPromoCouponsComponent_ng_container_58_tr_1_label_13_Template, 2, 0, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CustomerPromoCouponsComponent_ng_container_58_tr_1_label_14_Template, 2, 0, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r16 == null ? null : item_r16.prize == null ? null : item_r16.prize.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r16.prize.quantity ? "x " : "", " ", item_r16 == null ? null : item_r16.prize == null ? null : item_r16.prize.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r16.code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r16.realised ? "TAK" : "NIE", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16.realised === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16.realised === true);
} }
function CustomerPromoCouponsComponent_ng_container_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomerPromoCouponsComponent_ng_container_58_tr_1_Template, 15, 7, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.coupons.prize);
} }
class CustomerPromoCouponsComponent {
    constructor(fire, route, store) {
        this.fire = fire;
        this.route = route;
        this.store = store;
        this.pid = null;
        this.uid = null;
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.user$ = this.store.select(src_app_auth__WEBPACK_IMPORTED_MODULE_2__["selectAuthUserProfile"]);
        this.data = [];
        this.coupons = {
            points: [],
            prize: [],
        };
        this.currentPromo = null;
        this.currentUser = null;
        this.currentParticipant = null;
        this.canRedeem = false;
        this.redeemSuccess = false;
        this.exchangingProcess = false;
        this.sub.add(this.user$.subscribe((user) => {
            this.currentUser = user;
        }));
        this.sub.add(this.route.queryParams.subscribe((data) => {
            this.pid = data.pid;
            this.uid = data.uid;
            this.reqPromo();
            this.reqCustomerPromoCoupons();
        }));
    }
    reqPromo() {
        this.fire.db.firestore
            .collection('promos')
            .where('pid', '==', this.pid)
            .get()
            .then((data) => {
            data.forEach((item) => {
                this.currentPromo = item.data();
                this.currentParticipant = this.findParticipant();
            });
        });
    }
    reqCustomerPromoCoupons() {
        let promisePromos = [];
        let promiseCoupons = [];
        Promise.all([
            this.fire.db.firestore
                .collection('coupons')
                .where('customerId', '==', this.uid)
                .where('promoId', '==', this.pid)
                .get(),
            ,
            this.fire.db.firestore.collection('promos').get(),
        ])
            .then((values) => {
            values.forEach((value) => {
                if (value) {
                    value.forEach((v) => {
                        const data = Object.assign({}, v.data());
                        let item = null;
                        if (data['pid']) {
                            item = data;
                            promisePromos.push(item);
                        }
                        if (data['promoId']) {
                            item = data;
                            promiseCoupons.push(item);
                        }
                    });
                }
            });
        })
            .then(() => {
            this.data = [];
            this.coupons.points = [];
            this.coupons.prize = [];
            promiseCoupons.forEach((coupon) => {
                let item = null;
                promisePromos.forEach((promo) => {
                    if (coupon.promoId === promo.pid) {
                        item = Object.assign(Object.assign({}, coupon), { promoName: promo.promoName });
                        this.data.push(item);
                        this.currentPromo = promo;
                        this.currentParticipant = this.findParticipant();
                    }
                });
            });
        })
            .finally(() => {
            this.separateCoupons();
            this.setCanRedeem();
        });
    }
    findParticipant() {
        var _a;
        const part = (_a = this.currentPromo) === null || _a === void 0 ? void 0 : _a.participantsTable.find((p) => p.uid === this.uid);
        return part;
    }
    setCanRedeem() {
        var _a, _b;
        this.canRedeem =
            ((_a = this.currentParticipant) === null || _a === void 0 ? void 0 : _a.currentPoints) >= ((_b = this.currentPromo) === null || _b === void 0 ? void 0 : _b.pointsRedeem);
    }
    configureCouponPureDTO() {
        const code = Object(src_app_shared_coupon_generator__WEBPACK_IMPORTED_MODULE_3__["generateCouponCode"])();
        const prize = {
            description: this.currentPromo.prizeDescription,
            quantity: this.currentPromo.prizeQuantity,
        };
        const promoId = this.pid;
        const customerId = this.uid;
        const coupon = {
            promoId,
            customerId,
            code,
            prize,
            realised: false,
            id: '',
            type: 'prize',
        };
        const couponPureDTO = Object.assign({}, coupon);
        return couponPureDTO;
    }
    configurePromoPureDTO() {
        let promo = Object.assign({}, this.currentPromo);
        promo.participantsTable.forEach((p) => {
            if (p.uid === this.uid) {
                p.currentPoints -= promo.pointsRedeem;
            }
        });
        const promoPureDTO = Object.assign({}, promo);
        return promoPureDTO;
    }
    generateCodeAndSubmit() {
        const couponPure = this.configureCouponPureDTO();
        const promoPure = this.configurePromoPureDTO();
        Promise.all([
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
                    .set(Object.assign({}, newDocumentPure));
            }),
            this.fire
                .getPromosCollectionRef()
                .doc(promoPure.pid)
                .set(Object.assign({}, promoPure)),
        ]).finally(() => {
            this.reqCustomerPromoCoupons();
        });
    }
    separateCoupons() {
        this.data.forEach((coupon) => {
            this.coupons[coupon.type].push(coupon);
        });
    }
    realizeCoupon(coupon) {
        if (!coupon.realised) {
            this.exchangingProcess = true;
            const promo = this.currentPromo;
            let coupons = [];
            const participants = promo.participantsTable.map((p) => {
                if (p.uid === this.uid) {
                    p.currentPoints = Number(p.currentPoints) + Number(coupon.points);
                    return p;
                }
                else
                    return p;
            });
            this.fire
                .getPromosCollectionRef()
                .doc(promo.pid)
                .update({ participantsTable: participants })
                .then(() => {
                this.fire
                    .getCouponsCollectionRef()
                    .doc(coupon.id)
                    .update({ realised: true })
                    .then(() => {
                    this.fire.db.firestore
                        .collection('coupons')
                        .where('customerId', '==', this.uid)
                        .where('promoId', '==', promo.pid)
                        .get()
                        .then((value) => {
                        if (value) {
                            value.forEach((v) => {
                                const data = Object.assign({}, v.data());
                                coupons.push(data);
                            });
                        }
                    });
                })
                    .finally(() => {
                    this.data = coupons;
                    this.currentPromo = promo;
                    this.reqCustomerPromoCoupons();
                    this.exchangingProcess = false;
                });
            });
        }
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
CustomerPromoCouponsComponent.ɵfac = function CustomerPromoCouponsComponent_Factory(t) { return new (t || CustomerPromoCouponsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_fire_service__WEBPACK_IMPORTED_MODULE_4__["FireService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"])); };
CustomerPromoCouponsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomerPromoCouponsComponent, selectors: [["app-customer-promo-coupons"]], decls: 59, vars: 8, consts: [[1, "wrapper"], [1, "table__name"], [1, "tables"], [1, "table"], [1, "label"], [1, "table__head"], [1, "table__row", "table__row--head"], [1, "cell", "cell--header"], [1, "cell__label"], [1, "cell", "cell--actions"], [1, "table__body"], [4, "ngIf"], [1, "points-exchange"], [1, "prizes"], [1, "detail"], [1, "detail__label"], [1, "detail__value"], ["class", "message-wrapper", 4, "ngIf"], ["class", "buttons", 3, "click", 4, "ngIf"], ["class", "table__row table__row--body", 4, "ngFor", "ngForOf"], [1, "table__row", "table__row--body"], [1, "cell", "cell--data", "cell--participant-details"], ["class", "action-label action-label--edit", 3, "click", 4, "ngIf"], ["class", "disabled-label", 4, "ngIf"], [1, "action-label", "action-label--edit", 3, "click"], [1, "disabled-label"], [1, "message-wrapper"], [1, "message"], [1, "buttons", 3, "click"], [1, "cell", "cell--data", "cell--participant-details", "prize-description"], [1, "quantity"]], template: function CustomerPromoCouponsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " TWOJE KUPONY PUNKTOWE ORAZ KUPONY NA NAGRODY W PROMOCJI ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Kupony punktowe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Punkty na kuponie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Kod kuponu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Czy kupon zosta\u0142 zrealizowany?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Operacje - Kupony ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tbody", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CustomerPromoCouponsComponent_ng_container_22_Template, 2, 1, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Wymiana punkt\u00F3w na kupon z nagrod\u0105");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Twoje punkty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, CustomerPromoCouponsComponent_ng_container_31_Template, 3, 1, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Punkty potrzebne do uzyskania nagrody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, CustomerPromoCouponsComponent_div_37_Template, 3, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, CustomerPromoCouponsComponent_button_38_Template, 2, 0, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, CustomerPromoCouponsComponent_div_39_Template, 3, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Kupony z nagrodami");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "thead", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Nagroda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Kod kuponu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Czy kupon zosta\u0142 zrealizowany?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Operacje - Kupony ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "tbody", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, CustomerPromoCouponsComponent_ng_container_58_Template, 2, 1, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.coupons.points && ctx.coupons.points.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Ilo\u015B\u0107 nagr\u00F3d odebranych dotychczas w tej promocji: ", ctx.currentParticipant == null ? null : ctx.currentParticipant.prizeCounter, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentParticipant);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentPromo == null ? null : ctx.currentPromo.pointsRedeem);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.canRedeem);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canRedeem);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.redeemSuccess);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.coupons.prize && ctx.coupons.prize.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100%;\n  padding: 1rem;\n  background: #ffb98d;\n  background: linear-gradient(144deg, #ffb98d 0%, #ffe87f 100%);\n  overflow: hidden;\n}\n\n.message[_ngcontent-%COMP%] {\n  margin: 1rem 0 0 0;\n}\n\n.disabled-label[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 0.8rem;\n  text-shadow: 0.11rem 0.11rem 0.1rem rgba(0, 0, 0, 0.2);\n  border-radius: 0.2rem;\n  padding: 0.26em 0.42em;\n  font-weight: 400;\n  margin: 0 0.2rem;\n  width: auto;\n  color: #fff;\n  -webkit-user-select: none;\n          user-select: none;\n  background: #969696;\n}\n\n.table[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  width: 100%;\n  padding: 1rem;\n  border: 0.1rem solid white;\n  border-radius: 0.1rem;\n  background: white;\n  box-shadow: 0 0.1rem 0.3rem 0.1rem rgba(0, 0, 0, 0.2);\n  border-spacing: 0px;\n  border-collapse: collapse;\n  table-layout: fixed;\n}\n\n.table__head[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n}\n\n.table__body[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  flex-wrap: wrap;\n}\n\n.table__row[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  height: 7vh;\n  align-content: center;\n  align-items: center;\n  font-family: Roboto;\n  font-size: 0.9rem;\n  font-weight: 400;\n  border-radius: 0;\n  border: 0.05rem solid rgba(0, 0, 0, 0.2);\n}\n\n.table__row--head[_ngcontent-%COMP%] {\n  border-radius: 0;\n  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.2);\n  background: rgba(255, 185, 141, 0.5);\n}\n\n.table__name[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin-bottom: 1em;\n}\n\n.cell[_ngcontent-%COMP%] {\n  flex: 1 1 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  align-content: center;\n  height: 100%;\n  overflow: hidden;\n  border-right: none;\n  font-size: 0.8rem;\n  border-right: 0.01rem solid rgba(0, 0, 0, 0.2);\n  border-radius: 0;\n}\n\n.cell[_ngcontent-%COMP%]:last-of-type {\n  border-right: none;\n}\n\n.cell--data[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.cell--promo-name[_ngcontent-%COMP%] {\n  flex: 1 1 130px;\n}\n\n.cell--promo-description[_ngcontent-%COMP%] {\n  flex: 1 0 150px;\n}\n\n.cell--vendor-email[_ngcontent-%COMP%] {\n  flex: 1 0 150px;\n}\n\n.cell--address-store[_ngcontent-%COMP%] {\n  flex: 1 1 130px;\n}\n\n.cell--promo-details[_ngcontent-%COMP%] {\n  background: rgba(233, 152, 67, 0.2);\n}\n\n.cell--prize[_ngcontent-%COMP%] {\n  background: rgba(233, 152, 67, 0.2);\n}\n\n.cell--quantity[_ngcontent-%COMP%] {\n  flex: 1 1 55px;\n}\n\n.cell--points[_ngcontent-%COMP%] {\n  background: rgba(233, 152, 67, 0.2);\n  flex: 1 1 55px;\n}\n\n.cell--participants[_ngcontent-%COMP%] {\n  background: rgba(233, 152, 67, 0.2);\n}\n\n.cell--participants-total[_ngcontent-%COMP%] {\n  flex: 1 1 55px;\n}\n\n.cell--participants-list[_ngcontent-%COMP%] {\n  flex: 1 1 55px;\n}\n\n.cell--metadata[_ngcontent-%COMP%] {\n  background: rgba(233, 152, 67, 0.2);\n}\n\n.cell--created-on[_ngcontent-%COMP%] {\n  flex: 1 1 55px;\n}\n\n.cell--active[_ngcontent-%COMP%] {\n  flex: 1 1 45px;\n}\n\n.cell--actions[_ngcontent-%COMP%] {\n  background: #e1e1e1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  text-align: center;\n  align-content: center;\n}\n\n.cell__label[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  font-size: 0.8rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  align-content: center;\n}\n\n.action-label[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 0.8rem;\n  text-shadow: 0.11rem 0.11rem 0.1rem rgba(0, 0, 0, 0.2);\n  border-radius: 0.2rem;\n  padding: 0.26em 0.42em;\n  font-weight: 400;\n  margin: 0 0.2rem;\n  width: auto;\n  color: #fff;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.action-label[_ngcontent-%COMP%]:hover {\n  filter: brightness(125%);\n}\n\n.action-label[_ngcontent-%COMP%]:active {\n  filter: brightness(150%);\n}\n\n.action-label[_ngcontent-%COMP%]:focus {\n  filter: brightness(200%);\n}\n\n.action-label--edit[_ngcontent-%COMP%] {\n  background: #37c864;\n}\n\n.action-label--delete[_ngcontent-%COMP%] {\n  background: #ff6400;\n}\n\n.action-label--list[_ngcontent-%COMP%] {\n  background: #6464dc;\n}\n\n.action-label--disabled[_ngcontent-%COMP%] {\n  background: #969696;\n}\n\n.cell--data.cell--promo-description[_ngcontent-%COMP%], .cell--data.cell--prize-description[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n}\n\n.table[_ngcontent-%COMP%] {\n  width: 38%;\n  height: 100%;\n  overflow-y: scroll;\n}\n\n.tables[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: space-around;\n  align-content: center;\n  align-items: center;\n}\n\n.label[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  text-transform: uppercase;\n  font-size: 0.9rem;\n  border-radius: 0.2rem;\n  padding: 0.25rem;\n  margin-bottom: 0.5rem;\n  width: 100%;\n  text-align: center;\n  color: #6464c8;\n  font-weight: 700;\n}\n\n.points-exchange[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  justify-content: space-evenly;\n  width: 18%;\n  height: 80%;\n  padding: 1rem;\n  border: 0.1rem solid white;\n  border-radius: 0.1rem;\n  background: white;\n  box-shadow: 0 0.1rem 0.3rem 0.1rem rgba(0, 0, 0, 0.2);\n}\n\n.detail[_ngcontent-%COMP%] {\n  text-align: center;\n  background: #fff;\n  border-radius: 0.25rem;\n  padding: 2rem;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.detail__label[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 0.8rem;\n  border-radius: 0.2rem;\n  padding: 0.25rem;\n  margin-bottom: 0.5rem;\n  width: 100%;\n  color: #323264;\n  font-weight: 700;\n}\n\n.detail__value[_ngcontent-%COMP%] {\n  border: 0.06rem solid rgba(0, 0, 0, 0.2);\n  padding: 0.5rem 0.7rem;\n  border-radius: 0.2rem;\n}\n\n.message-wrapper[_ngcontent-%COMP%] {\n  height: 5%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 0.8rem;\n  font-weight: 600;\n  line-break: strict;\n  box-shadow: none;\n  overflow: scroll;\n  height: auto;\n  padding: 0.4rem;\n}\n\n.message[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  text-align: center;\n  box-shadow: none;\n  font-size: 0.8rem;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 90%;\n  padding: 0.4rem;\n  margin: 0.4rem;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  margin: 0.75rem 0;\n  text-transform: uppercase;\n  font: 400 0.9rem Roboto;\n  min-height: 5vh;\n  border-radius: 0.3rem;\n  border: 0.06rem solid rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n  background: #fff;\n  align-self: center;\n}\n\n.buttons[_ngcontent-%COMP%]:hover {\n  background: #edebf3;\n}\n\n.buttons[_ngcontent-%COMP%]:focus {\n  background: #f2f0f8;\n}\n\n.buttons[_ngcontent-%COMP%]:active {\n  background: #f7f7fd;\n}\n\n.buttons[_ngcontent-%COMP%]:disabled {\n  background: lightgrey;\n}\n\n.prize-description[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-y: scroll;\n}\n\n.quantity[_ngcontent-%COMP%] {\n  word-wrap: none;\n  word-break: keep-all;\n  white-space: nowrap;\n  font-weight: 900;\n}\n\n.prizes[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 900;\n  padding: 0.4rem;\n  margin: 1rem 0;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvbW9zL2N1c3RvbWVyL2N1c3RvbWVyLXByb21vLWNvdXBvbnMvY3VzdG9tZXItcHJvbW8tY291cG9ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3N0eWxlcy9taXhpbnMuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3N0eWxlcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQ0FFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkRBQUE7RURGQSxnQkFBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7QUFFRjs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzREFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFFQSx5QkFBQTtVQUFBLGlCQUFBO0VBRUEsbUJBQUE7QUFBRjs7QUN5aUJFO0VBdk1BLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxREFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBRDlWRjs7QUNnV0U7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBRDlWSjs7QUNpV0U7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUQvVko7O0FDa1dFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3Q0FBQTtBRGhXSjs7QUNrV0k7RUFDRSxnQkFBQTtFQUNBLDhDQUFBO0VBQ0Esb0NBQUE7QURoV047O0FDb1dFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FEbFdKOztBQzhmRTtFQXZKQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDhDQUFBO0VBRUEsZ0JBQUE7QURwV0Y7O0FDc1dFO0VBQ0Usa0JBQUE7QURwV0o7O0FDdVdFO0VBQ0UsYUFBQTtBRHJXSjs7QUMyV0U7RUFDRSxlQUFBO0FEeldKOztBQzRXRTtFQUNFLGVBQUE7QUQxV0o7O0FDNldFO0VBQ0UsZUFBQTtBRDNXSjs7QUM4V0U7RUFDRSxlQUFBO0FENVdKOztBQytXRTtFQUNFLG1DQXBCWTtBRHpWaEI7O0FDK1dFO0VBQ0UsbUNBdkJZO0FEdFZoQjs7QUNnWEU7RUFDRSxjQUFBO0FEOVdKOztBQ2lYRTtFQUNFLG1DQS9CWTtFQWdDWixjQUFBO0FEL1dKOztBQ2tYRTtFQUNFLG1DQXBDWTtBRDVVaEI7O0FDbVhFO0VBQ0UsY0FBQTtBRGpYSjs7QUNvWEU7RUFDRSxjQUFBO0FEbFhKOztBQ3FYRTtFQUNFLG1DQWhEWTtBRG5VaEI7O0FDc1hFO0VBQ0UsY0FBQTtBRHBYSjs7QUN1WEU7RUFDRSxjQUFBO0FEclhKOztBQ3dYRTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUR0WEo7O0FDeVhFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBRHZYSjs7QUMrYUU7RUFuREEseUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNEQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUVBLGVBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0FEelhGOztBQzJYRTtFQUNFLHdCQUFBO0FEelhKOztBQzRYRTtFQUNFLHdCQUFBO0FEMVhKOztBQzZYRTtFQUNFLHdCQUFBO0FEM1hKOztBQzhYRTtFQUNFLG1CQUFBO0FENVhKOztBQytYRTtFQUNFLG1CQUFBO0FEN1hKOztBQ2dZRTtFQUNFLG1CQUFBO0FEOVhKOztBQ2lZRTtFQUNFLG1CQUFBO0FEL1hKOztBQ2daRTs7RUFFRSxrQkFBQTtBRDdZSjs7QUFyS0E7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBd0tGOztBQXJLQTtFQUNFLFlBQUE7RUFFQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBdUtGOztBQXBLQTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQXVLRjs7QUFwS0E7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxREFBQTtBQXVLRjs7QUFwS0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUF1S0Y7O0FBcktFO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBdUtKOztBQXBLRTtFQUNFLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkVoR2lCO0FGc1FyQjs7QUFsS0E7RUMyTEUsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VEbE1BLFlBQUE7RUFDQSxlQUFBO0FBOEtGOztBQTNLQTtFQzJLRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VEL0tBLGlCQUFBO0FBb0xGOztBQWxMQTtFQ2tPRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFFQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFFQSxlQUFBO0VBRUEscUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFRG5QQSxrQkFBQTtBQW9NRjs7QUNnREU7RUFDRSxtQkNuVzRCO0FGcVRoQzs7QUNpREU7RUFDRSxtQkN0VzRCO0FGdVRoQzs7QUNrREU7RUFDRSxtQkN6VzZCO0FGeVRqQzs7QUNtREU7RUFDRSxxQkFBQTtBRGpESjs7QUE3TUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFnTkY7O0FBN01BO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQWdORjs7QUE3TUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBZ05GIiwiZmlsZSI6InNyYy9hcHAvcHJvbW9zL2N1c3RvbWVyL2N1c3RvbWVyLXByb21vLWNvdXBvbnMvY3VzdG9tZXItcHJvbW8tY291cG9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLy4uLy4uLy4uL3NoYXJlZC9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtcclxuQGltcG9ydCBcIi4vLi4vLi4vLi4vc2hhcmVkL3N0eWxlcy9taXhpbnMuc2Nzc1wiO1xyXG5cclxuLndyYXBwZXIge1xyXG4gIEBpbmNsdWRlIHdyYXBwZXIteWVsbG93O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5tZXNzYWdlIHtcclxuICBtYXJnaW46IDFyZW0gMCAwIDA7XHJcbn1cclxuXHJcbi5kaXNhYmxlZC1sYWJlbCB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICB0ZXh0LXNoYWRvdzogMC4xMXJlbSAwLjExcmVtIDAuMXJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xyXG4gIHBhZGRpbmc6IDAuMjZlbSAwLjQyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXJnaW46IDAgMC4ycmVtO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG5cclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgYmFja2dyb3VuZDogcmdiKDE1MCwgMTUwLCAxNTApO1xyXG59XHJcblxyXG5AaW5jbHVkZSB0YWJsZS1wYXJ0cztcclxuXHJcbi50YWJsZSB7XHJcbiAgd2lkdGg6IDM4JTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4udGFibGVzIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sYWJlbCB7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcclxuICBwYWRkaW5nOiAwLjI1cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHJnYigxMDAsIDEwMCwgMjAwKTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4ucG9pbnRzLWV4Y2hhbmdlIHtcclxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgd2lkdGg6IDE4JTtcclxuICBoZWlnaHQ6IDgwJTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMXJlbTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAwIDAuMXJlbSAwLjNyZW0gMC4xcmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuLmRldGFpbCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgJl9fbGFiZWwge1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcclxuICAgIHBhZGRpbmc6IDAuMjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiByZ2IoNTAsIDUwLCAxMDApO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcblxyXG4gICZfX3ZhbHVlIHtcclxuICAgIGJvcmRlcjogMC4wNnJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC43cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGZvcm0tYm9yZGVyLXJhZGl1cztcclxuICB9XHJcbn1cclxuXHJcbi5tZXNzYWdlLXdyYXBwZXIge1xyXG4gIEBpbmNsdWRlIGZvcm0tcHJvbW8tbWVzc2FnZS13cmFwcGVyO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBwYWRkaW5nOiAwLjRyZW07XHJcbn1cclxuXHJcbi5tZXNzYWdlIHtcclxuICBAaW5jbHVkZSBmb3JtLXByb21vLW1lc3NhZ2U7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbn1cclxuLmJ1dHRvbnMge1xyXG4gIEBpbmNsdWRlIGZvcm0tcHJvbW8tYnV0dG9ucztcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wcml6ZS1kZXNjcmlwdGlvbiB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuLnF1YW50aXR5IHtcclxuICB3b3JkLXdyYXA6IG5vbmU7XHJcbiAgd29yZC1icmVhazoga2VlcC1hbGw7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG59XHJcblxyXG4ucHJpemVzIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiIsIkBpbXBvcnQgXCIuL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG5AbWl4aW4gd3JhcHBlci15ZWxsb3cge1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAxODUsIDE0MSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgMTQ0ZGVnLFxyXG4gICAgcmdiYSgyNTUsIDE4NSwgMTQxLCAxKSAwJSxcclxuICAgIHJnYmEoMjU1LCAyMzIsIDEyNywgMSkgMTAwJVxyXG4gICk7XHJcbn1cclxuXHJcbkBtaXhpbiB3cmFwcGVyLXllbGxvdy1mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAxODUsIDE0MSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgMTQ0ZGVnLFxyXG4gICAgcmdiYSgyNTUsIDIzMiwgMTI3LCAxKSAwJSxcclxuICAgIHJnYmEoMjU1LCAxODUsIDE0MSwgMSkgMTAwJVxyXG4gICk7XHJcblxyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbkBtaXhpbiB3cmFwcGVyLWJsdWUtZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDE1OSwgMTY5LCAyMTgsIDEpIDAlLCByZ2IoOTAsIDkwLCAxODApIDEwMCUpO1xyXG5cclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4vLyAjIyMgRk9STVMgIyMjXHJcblxyXG4vLyAjIEZPUk0gLSBBVVRIICNcclxuQG1peGluIGZvcm0tYXV0aCB7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogYXV0bztcclxuICB3aWR0aDogMzB2dztcclxuICBib3gtc2hhZG93OiAwIDAuMXJlbSAwLjNyZW0gMC4xcmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGJhY2tncm91bmQ6ICRmb3JtLWJhY2tncm91bmQ7XHJcbiAgYm9yZGVyOiAkZm9ybS1ib3JkZXItd2lkdGggc29saWQgJGZvcm0tYm9yZGVyLWNvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6ICRmb3JtLWJvcmRlci1yYWRpdXM7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMTg1LCAxNDEpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDE0NGRlZyxcclxuICAgIHJnYmEoMjU1LCAyMzIsIDEyNywgMSkgMCUsXHJcbiAgICByZ2JhKDI1NSwgMTg1LCAxNDEsIDEpIDEwMCVcclxuICApO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblxyXG4gICZfX2xhYmVsIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjRyZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJyZW07XHJcblxyXG4gICAgJi0taW1hZ2Uge1xyXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGhlaWdodDogNXZoO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgJi0taW1hZ2UtcmVzdWx0IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1hdXRoLWlucHV0LWdyb3VwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIG1hcmdpbjogMC4zcmVtO1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjM1cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAmLS1lc3NlbnRpYWxzIHtcclxuICAgIGdyaWQtcm93OiAxIC8gc3BhbiAyO1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7XHJcbiAgfVxyXG5cclxuICAmLS1wcml6ZSB7XHJcbiAgICBncmlkLXJvdzogMyAvIHNwYW4gMjtcclxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xyXG4gIH1cclxuICAmLS1wb2ludHMge1xyXG4gICAgZ3JpZC1yb3c6IDUgLyBzcGFuIDI7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcclxuICB9XHJcblxyXG4gICYtLWltYWdlIHtcclxuICAgIGdyaWQtcm93OiAxIC8gc3BhbiAxO1xyXG4gICAgZ3JpZC1jb2x1bW46IDMgLyBzcGFuIDI7XHJcbiAgICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG5cclxuICAmLS1pbWFnZS1yZXN1bHQge1xyXG4gICAgZ3JpZC1yb3c6IDMgLyBzcGFuIDU7XHJcbiAgICBncmlkLWNvbHVtbjogMyAvIHNwYW4gNDtcclxuICAgIGJvcmRlcjogMC4wMnJlbSBzb2xpZCAkaW5wdXQtYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG5cclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gIH1cclxuICAmLS1idXR0b25zIHtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGdyaWQtcm93OiAxIC8gc3BhbiAxO1xyXG4gICAgZ3JpZC1jb2x1bW46IDUgLyBzcGFuIDI7XHJcbiAgICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDFlbSAzZW07XHJcbiAgfVxyXG5cclxuICAmLS1yZXN1bHQge1xyXG4gICAgZ3JpZC1yb3c6IDUgLyBzcGFuIDI7XHJcbiAgICBncmlkLWNvbHVtbjogMyAvIHNwYW4gMjtcclxuICAgIGJvcmRlcjogJGZvcm0tYm9yZGVyLXdpZHRoIHNvbGlkICRmb3JtLWJ1dHRvbi1ib3JkZXItY29sb3I7XHJcbiAgfVxyXG5cclxuICAmLS1tZXNzYWdlIHtcclxuICAgIGdyaWQtcm93OiAyIC8gc3BhbiAxO1xyXG5cclxuICAgIGdyaWQtY29sdW1uOiAzIC8gc3BhbiA0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYmFja2dyb3VuZDogJGZvcm0tbWVzc2FnZS1iYWNrZ3JvdW5kO1xyXG4gICAgYm9yZGVyOiAkZm9ybS1ib3JkZXItd2lkdGggc29saWQgJGZvcm0tbWVzc2FnZS1iYWNrZ3JvdW5kO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGZvcm0tYXV0aC1pbnB1dC13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAuNHJlbTtcclxuICBtYXJnaW46IDAuMnJlbSAwO1xyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1hdXRoLW1lc3NhZ2Uge1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGhlaWdodDogNHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLWF1dGgtYnV0dG9ucyB7XHJcbiAgaGVpZ2h0OiA2dmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIG1hcmdpbjogMC40cmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcclxuICBib3JkZXI6ICRmb3JtLWJvcmRlci13aWR0aCBzb2xpZCAkZm9ybS1idXR0b24tYm9yZGVyLWNvbG9yO1xyXG4gIGJvcmRlcjogMC4wNnJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQ6ICRmb3JtLWJ1dHRvbi1iYWNrZ3JvdW5kO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZm9ybS1idXR0b24tYmFja2dyb3VuZC0taG92ZXI7XHJcbiAgfVxyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQ6ICRmb3JtLWJ1dHRvbi1iYWNrZ3JvdW5kLS1mb2N1cztcclxuICB9XHJcblxyXG4gICY6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICRmb3JtLWJ1dHRvbi1iYWNrZ3JvdW5kLS1hY3RpdmU7XHJcbiAgfVxyXG5cclxuICAmOmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLWF1dGgtaW5wdXQge1xyXG4gIGJvcmRlcjogMC4wNnJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gIHdpZHRoOiAyNHZ3O1xyXG4gIHBhZGRpbmc6IDAgMS4zcmVtO1xyXG4gIGhlaWdodDogN3ZoO1xyXG4gIG1hcmdpbjogMC4zNXJlbTtcclxuICBmb250LXNpemU6IDEuNHJlbTtcclxufVxyXG5cclxuLy8gIyBGT1JNIC0gUFJPTU9TXHJcblxyXG5AbWl4aW4gZm9ybS1wcm9tby1iYXNlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIGhlaWdodDogOTB2aDtcclxuICB3aWR0aDogOTB2dztcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGJveC1zaGFkb3c6IDAgMC4xcmVtIDAuM3JlbSAwLjFyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgYm9yZGVyOiAkZm9ybS1ib3JkZXItd2lkdGggc29saWQgJGZvcm0tYm9yZGVyLWNvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6ICRmb3JtLWJvcmRlci1yYWRpdXM7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMTg1LCAxNDEpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDE0NGRlZyxcclxuICAgIHJnYmEoMjU1LCAyMzIsIDEyNywgMSkgMCUsXHJcbiAgICByZ2JhKDI1NSwgMTg1LCAxNDEsIDEpIDEwMCVcclxuICApO1xyXG5cclxuICAmX19zZWN0aW9uIHtcclxuICAgIHdpZHRoOiA0NXZ3O1xyXG4gICAgaGVpZ2h0OiA4NnZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLXByb21vLWlucHV0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiAwLjA2cmVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA4JTtcclxuICBwYWRkaW5nOiAwLjhlbTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLXByb21vLWlucHV0LXdyYXBwZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogMC43NXJlbSAwO1xyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1wcm9tby1tZXNzYWdlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLXByb21vLW1lc3NhZ2Utd3JhcHBlciB7XHJcbiAgaGVpZ2h0OiA1JTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGxpbmUtYnJlYWs6IHN0cmljdDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLXByb21vLWdyb3VwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiA0MHZ3O1xyXG4gIGhlaWdodDogODZ2aDtcclxuICBtYXJnaW46IDAuM3JlbTtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMXJlbTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAwIDAuMXJlbSAwLjNyZW0gMC4xcmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAmX19sYWJlbCB7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xyXG4gICAgcGFkZGluZzogMC4yNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHJnYigxMDAsIDEwMCwgMjAwKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG4gICYtLWJ1dHRvbnMge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcblxyXG4gICYtLXJlc3VsdCB7XHJcbiAgICBib3JkZXI6ICRmb3JtLWJvcmRlci13aWR0aCBzb2xpZCAkZm9ybS1idXR0b24tYm9yZGVyLWNvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGZvcm0tcHJvbW8tYnV0dG9ucyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgcGFkZGluZzogMC40cmVtO1xyXG4gIG1hcmdpbjogMC40cmVtO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBtYXJnaW46IDAuNzVyZW0gMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQ6IDQwMCAwLjlyZW0gUm9ib3RvO1xyXG5cclxuICBtaW4taGVpZ2h0OiA1dmg7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcclxuICBib3JkZXI6IDAuMDZyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogJGZvcm0tYnV0dG9uLWJhY2tncm91bmQtLWhvdmVyO1xyXG4gIH1cclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZm9ybS1idXR0b24tYmFja2dyb3VuZC0tZm9jdXM7XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZm9ybS1idXR0b24tYmFja2dyb3VuZC0tYWN0aXZlO1xyXG4gIH1cclxuXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyAjIyMgVGFibGUgIyMjXHJcbkBtaXhpbiB0YWJsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMXJlbTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAwIDAuMXJlbSAwLjNyZW0gMC4xcmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBib3JkZXItc3BhY2luZzogMHB4O1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxuXHJcbiAgJl9faGVhZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAmX19ib2R5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICB9XHJcblxyXG4gICZfX3JvdyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBoZWlnaHQ6IDd2aDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlcjogMC4wNXJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcblxyXG4gICAgJi0taGVhZCB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDAuMXJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxODUsIDE0MSwgMC41KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX25hbWUge1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGNlbGwge1xyXG4gIGZsZXg6IDEgMSAxMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgYm9yZGVyLXJpZ2h0OiAwLjAxcmVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuXHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuXHJcbiAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIH1cclxuXHJcbiAgJi0tZGF0YSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuXHJcbiAgJGJhY2tncm91bmQxOiByZ2JhKDIzMywgMTUyLCA2NywgMC4yKTtcclxuICAkYmFja2dyb3VuZDI6IHJnYmEoMjUyLCAxNzUsIDExLCAwLjIpO1xyXG5cclxuICAmLS1wcm9tby1uYW1lIHtcclxuICAgIGZsZXg6IDEgMSAxMzBweDtcclxuICB9XHJcblxyXG4gICYtLXByb21vLWRlc2NyaXB0aW9uIHtcclxuICAgIGZsZXg6IDEgMCAxNTBweDtcclxuICB9XHJcblxyXG4gICYtLXZlbmRvci1lbWFpbCB7XHJcbiAgICBmbGV4OiAxIDAgMTUwcHg7XHJcbiAgfVxyXG5cclxuICAmLS1hZGRyZXNzLXN0b3JlIHtcclxuICAgIGZsZXg6IDEgMSAxMzBweDtcclxuICB9XHJcblxyXG4gICYtLXByb21vLWRldGFpbHMge1xyXG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQxO1xyXG4gIH1cclxuICAmLS1wcml6ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDE7XHJcbiAgfVxyXG5cclxuICAmLS1xdWFudGl0eSB7XHJcbiAgICBmbGV4OiAxIDEgNTVweDtcclxuICB9XHJcblxyXG4gICYtLXBvaW50cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDE7XHJcbiAgICBmbGV4OiAxIDEgNTVweDtcclxuICB9XHJcblxyXG4gICYtLXBhcnRpY2lwYW50cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDE7XHJcbiAgfVxyXG5cclxuICAmLS1wYXJ0aWNpcGFudHMtdG90YWwge1xyXG4gICAgZmxleDogMSAxIDU1cHg7XHJcbiAgfVxyXG5cclxuICAmLS1wYXJ0aWNpcGFudHMtbGlzdCB7XHJcbiAgICBmbGV4OiAxIDEgNTVweDtcclxuICB9XHJcblxyXG4gICYtLW1ldGFkYXRhIHtcclxuICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kMTtcclxuICB9XHJcblxyXG4gICYtLWNyZWF0ZWQtb24ge1xyXG4gICAgZmxleDogMSAxIDU1cHg7XHJcbiAgfVxyXG5cclxuICAmLS1hY3RpdmUge1xyXG4gICAgZmxleDogMSAxIDQ1cHg7XHJcbiAgfVxyXG5cclxuICAmLS1hY3Rpb25zIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjI1LCAyMjUsIDIyNSwgMSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICZfX2xhYmVsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRhYmxlLWFjdGlvbi1sYWJlbCB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICB0ZXh0LXNoYWRvdzogMC4xMXJlbSAwLjExcmVtIDAuMXJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xyXG4gIHBhZGRpbmc6IDAuMjZlbSAwLjQyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXJnaW46IDAgMC4ycmVtO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG5cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEyNSUpO1xyXG4gIH1cclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDE1MCUpO1xyXG4gIH1cclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoKDIwMCUpKTtcclxuICB9XHJcblxyXG4gICYtLWVkaXQge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDU1LCAyMDAsIDEwMCk7XHJcbiAgfVxyXG5cclxuICAmLS1kZWxldGUge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMTAwLCAwKTtcclxuICB9XHJcblxyXG4gICYtLWxpc3Qge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDEwMCwgMTAwLCAyMjApO1xyXG4gIH1cclxuXHJcbiAgJi0tZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE1MCwgMTUwLCAxNTApO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRhYmxlLXBhcnRzIHtcclxuICAudGFibGUge1xyXG4gICAgQGluY2x1ZGUgdGFibGU7XHJcbiAgfVxyXG5cclxuICAuY2VsbCB7XHJcbiAgICBAaW5jbHVkZSBjZWxsO1xyXG4gIH1cclxuXHJcbiAgLmFjdGlvbi1sYWJlbCB7XHJcbiAgICBAaW5jbHVkZSB0YWJsZS1hY3Rpb24tbGFiZWw7XHJcbiAgfVxyXG5cclxuICAuY2VsbC0tZGF0YS5jZWxsLS1wcm9tby1kZXNjcmlwdGlvbixcclxuICAuY2VsbC0tZGF0YS5jZWxsLS1wcml6ZS1kZXNjcmlwdGlvbiB7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgfVxyXG59XHJcbiIsIiRmb3JtLWJhY2tncm91bmQ6IHJnYmEoMjQwLCAyNDAsIDI0MCwgMSk7XHJcbiRmb3JtLWJvcmRlci1jb2xvcjogcmdiYSgxNTAsIDE1MCwgMTUwLCAxKTtcclxuJGZvcm0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuJGZvcm0tYm9yZGVyLXdpZHRoOiAwLjFyZW07XHJcbiRmb3JtLWJvcmRlci1yYWRpdXM6IDAuMnJlbTtcclxuJGZvcm0tYnV0dG9uLWJhY2tncm91bmQ6IHJnYmEoMjMyLCAyMzAsIDIzOCwgMSk7XHJcbiRmb3JtLWJ1dHRvbi1iYWNrZ3JvdW5kLS1ob3ZlcjogcmdiYSgyMzcsIDIzNSwgMjQzLCAxKTtcclxuJGZvcm0tYnV0dG9uLWJhY2tncm91bmQtLWZvY3VzOiByZ2JhKDI0MiwgMjQwLCAyNDgsIDEpO1xyXG4kZm9ybS1idXR0b24tYmFja2dyb3VuZC0tYWN0aXZlOiByZ2JhKDI0NywgMjQ3LCAyNTMsIDEpO1xyXG4kZm9ybS1idXR0b24tYm9yZGVyLWNvbG9yOiByZ2JhKDE5MiwgMTkwLCAxOTgsIDEpO1xyXG5cclxuJGZvcm0tbWVzc2FnZS1iYWNrZ3JvdW5kOiByZ2JhKDIxMiwgMjEwLCAyMTgsIDEpO1xyXG5cclxuJGlucHV0LWJvcmRlci1jb2xvcjogcmdiYSgxMjAsIDEyMCwgMTIwLCAxKTtcclxuJGlucHV0LWJvcmRlci1yYWRpdXM6IDAuMnJlbTtcclxuXHJcbiRpbnB1dC1ib3JkZXItd2lkdGg6IDAuMDVyZW07XHJcbiRpbnB1dC1ib3JkZXItd2lkdGgtLWZvY3VzOiAwLjA4cmVtO1xyXG5cclxuJGlucHV0LWdyb3VwLWJhY2tncm91bmQ6IHJnYmEoMjIwLCAyMjAsIDIyMCwgMSk7XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerPromoCouponsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-customer-promo-coupons',
                templateUrl: './customer-promo-coupons.component.html',
                styleUrls: ['./customer-promo-coupons.component.scss'],
            }]
    }], function () { return [{ type: src_app_fire_service__WEBPACK_IMPORTED_MODULE_4__["FireService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }]; }, null); })();


/***/ }),

/***/ "eUn4":
/*!************************************************************!*\
  !*** ./src/app/promos/customer/customer-routing.module.ts ***!
  \************************************************************/
/*! exports provided: CustomerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerRoutingModule", function() { return CustomerRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.guard */ "P+IX");
/* harmony import */ var _customer_promo_coupons_customer_promo_coupons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-promo-coupons/customer-promo-coupons.component */ "a//k");
/* harmony import */ var _customer_promos_customer_promos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer-promos/customer-promos.component */ "maYy");







const routes = [
    {
        path: '',
        children: [
            {
                path: 'promos',
                component: _customer_promos_customer_promos_component__WEBPACK_IMPORTED_MODULE_4__["CustomerPromosComponent"],
                canActivate: [src_app_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
                data: {
                    exptectedRoles: ['customer'],
                },
            },
            {
                path: 'promo/coupons',
                component: _customer_promo_coupons_customer_promo_coupons_component__WEBPACK_IMPORTED_MODULE_3__["CustomerPromoCouponsComponent"],
                canActivate: [src_app_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
                data: {
                    exptectedRoles: ['customer'],
                },
            },
        ],
    },
];
class CustomerRoutingModule {
}
CustomerRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CustomerRoutingModule });
CustomerRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CustomerRoutingModule_Factory(t) { return new (t || CustomerRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CustomerRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "maYy":
/*!******************************************************************************!*\
  !*** ./src/app/promos/customer/customer-promos/customer-promos.component.ts ***!
  \******************************************************************************/
/*! exports provided: CustomerPromosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPromosComponent", function() { return CustomerPromosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth */ "i6m5");
/* harmony import */ var src_app_auth_auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.actions */ "2JUs");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_fire_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/fire.service */ "L3EA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");









const _c0 = function () { return ["/customer/promo/coupons"]; };
const _c1 = function (a0, a1, a2) { return { pid: a0, uid: a1, promo: a2 }; };
function CustomerPromosComponent_ng_container_3_tbody_22_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Lista ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerPromosComponent_ng_container_3_tbody_22_tr_1_Template_label_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const promo_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r4.resign(promo_r3, ctx_r4.user); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " zrezygnuj ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const promo_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", promo_r3.promoName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", promo_r3.prizeDescription, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r2.getParticipantPoints(promo_r3), " / ", promo_r3.pointsRedeem, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", promo_r3.pointsEntry ? promo_r3.pointsEntry : "Nie by\u0142o", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](8, _c1, promo_r3.pid, ctx_r2.user.uid, promo_r3));
} }
function CustomerPromosComponent_ng_container_3_tbody_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomerPromosComponent_ng_container_3_tbody_22_tr_1_Template, 19, 12, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.customerPromos);
} }
function CustomerPromosComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Nazwa promocji");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Opis nagrody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Twoje punkty / Potrzebne ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Punkty na start ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Przyznane kupony ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Operacje - Promocje");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CustomerPromosComponent_ng_container_3_tbody_22_Template, 2, 1, "tbody", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.customerPromos);
} }
class CustomerPromosComponent {
    constructor(store, fire) {
        this.store = store;
        this.fire = fire;
        this.user$ = this.store.select(src_app_auth__WEBPACK_IMPORTED_MODULE_2__["selectAuthUserProfile"]);
        this.user = null;
        this.tableName = 'PROMOCJE W KTÓRYCH UCZESTNICZYSZ';
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.promos$ = this.fire
            .getPromosCollectionRef()
            .valueChanges();
        this.customerPromos = [];
        this.sub.add(this.user$.subscribe((data) => {
            this.user = data;
            if (this.user) {
                this.sub.add(this.promos$.subscribe((promos) => {
                    const customerPromos = promos.filter((promo) => {
                        return promo.participantsTable.find((part) => part.uid === this.user.uid);
                    });
                    this.customerPromos = customerPromos;
                }));
            }
        }));
    }
    ngOnInit() { }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    getParticipantPoints(promo) {
        let participant = promo.participantsTable.find((p) => p.uid === this.user.uid);
        return participant.currentPoints;
    }
    resign(promo, user) {
        var _a, _b;
        if (confirm('Czy na pewno chcesz zrezygnować?')) {
            let resignPromo = this.customerPromos.find((p) => promo.pid === p.pid);
            if (resignPromo) {
                const newPromoParticipants = (_a = resignPromo === null || resignPromo === void 0 ? void 0 : resignPromo.participantsTable) === null || _a === void 0 ? void 0 : _a.filter((pt) => pt.uid !== user.uid);
                const newCustomerPromosRefs = (_b = user === null || user === void 0 ? void 0 : user.promos) === null || _b === void 0 ? void 0 : _b.filter((pr) => pr !== promo.pid);
                const newPromo = Object.assign(Object.assign({}, resignPromo), { participantsTable: newPromoParticipants, participantsTotal: (newPromoParticipants === null || newPromoParticipants === void 0 ? void 0 : newPromoParticipants.length) || 0 });
                Promise.all([
                    this.fire.getPromosCollectionRef().doc(promo.pid).update(newPromo),
                    this.fire
                        .getUsersCollectionRef()
                        .doc(user.uid)
                        .update({ promos: newCustomerPromosRefs }),
                ])
                    .then((values) => {
                    const newUser = Object.assign(Object.assign({}, user), { promos: newCustomerPromosRefs });
                    this.user = newUser;
                    this.store.dispatch(Object(src_app_auth_auth_actions__WEBPACK_IMPORTED_MODULE_3__["updateAuthUserData"])({ user: user }));
                    this.customerPromos = this.customerPromos.filter((cpr) => cpr.pid !== promo.pid);
                })
                    .catch((e) => console.log(e));
            }
        }
    }
}
CustomerPromosComponent.ɵfac = function CustomerPromosComponent_Factory(t) { return new (t || CustomerPromosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_fire_service__WEBPACK_IMPORTED_MODULE_5__["FireService"])); };
CustomerPromosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomerPromosComponent, selectors: [["app-customer-promos"]], decls: 4, vars: 2, consts: [[1, "wrapper"], [1, "table__name"], [4, "ngIf"], [1, "table"], [1, "table__head"], [1, "table__row", "table__row--head"], [1, "cell", "cell--header", "cell--promo-details", "cell--promo-name"], [1, "cell__label"], [1, "cell", "cell--header", "cell--prize"], [1, "cell", "cell--header", "cell--points"], [1, "cell", "cell--actions"], ["class", "table__body", 4, "ngIf"], [1, "table__body"], ["class", "table__row table__row--body", 4, "ngFor", "ngForOf"], [1, "table__row", "table__row--body"], [1, "cell", "cell--data", "cell--promo-details", "cell--promo-name"], [1, "cell", "cell--data", "cell--prize", "cell--prize-description"], [1, "cell", "cell--data", "cell--points"], [1, "cell", "cell--data", "cell--participants", "cell--participants-total"], [1, "action-label", "action-label--list", 3, "routerLink", "queryParams"], [1, "action-label", "action-label--delete", 3, "click"]], template: function CustomerPromosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CustomerPromosComponent_ng_container_3_Template, 23, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.tableName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customerPromos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100%;\n  padding: 1rem;\n  background: #ffb98d;\n  background: linear-gradient(144deg, #ffb98d 0%, #ffe87f 100%);\n  overflow: hidden;\n}\n\n.table[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  width: 100%;\n  padding: 1rem;\n  border: 0.1rem solid white;\n  border-radius: 0.1rem;\n  background: white;\n  box-shadow: 0 0.1rem 0.3rem 0.1rem rgba(0, 0, 0, 0.2);\n  border-spacing: 0px;\n  border-collapse: collapse;\n  table-layout: fixed;\n}\n\n.table__head[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n}\n\n.table__body[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  flex-wrap: wrap;\n}\n\n.table__row[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  height: 7vh;\n  align-content: center;\n  align-items: center;\n  font-family: Roboto;\n  font-size: 0.9rem;\n  font-weight: 400;\n  border-radius: 0;\n  border: 0.05rem solid rgba(0, 0, 0, 0.2);\n}\n\n.table__row--head[_ngcontent-%COMP%] {\n  border-radius: 0;\n  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.2);\n  background: rgba(255, 185, 141, 0.5);\n}\n\n.table__name[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin-bottom: 1em;\n}\n\n.cell[_ngcontent-%COMP%] {\n  flex: 1 1 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  align-content: center;\n  height: 100%;\n  overflow: hidden;\n  border-right: none;\n  font-size: 0.8rem;\n  border-right: 0.01rem solid rgba(0, 0, 0, 0.2);\n  border-radius: 0;\n}\n\n.cell[_ngcontent-%COMP%]:last-of-type {\n  border-right: none;\n}\n\n.cell--data[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.cell--promo-name[_ngcontent-%COMP%] {\n  flex: 1 1 130px;\n}\n\n.cell--promo-description[_ngcontent-%COMP%] {\n  flex: 1 0 150px;\n}\n\n.cell--vendor-email[_ngcontent-%COMP%] {\n  flex: 1 0 150px;\n}\n\n.cell--address-store[_ngcontent-%COMP%] {\n  flex: 1 1 130px;\n}\n\n.cell--promo-details[_ngcontent-%COMP%] {\n  background: rgba(233, 152, 67, 0.2);\n}\n\n.cell--prize[_ngcontent-%COMP%] {\n  background: rgba(233, 152, 67, 0.2);\n}\n\n.cell--quantity[_ngcontent-%COMP%] {\n  flex: 1 1 55px;\n}\n\n.cell--points[_ngcontent-%COMP%] {\n  background: rgba(233, 152, 67, 0.2);\n  flex: 1 1 55px;\n}\n\n.cell--participants[_ngcontent-%COMP%] {\n  background: rgba(233, 152, 67, 0.2);\n}\n\n.cell--participants-total[_ngcontent-%COMP%] {\n  flex: 1 1 55px;\n}\n\n.cell--participants-list[_ngcontent-%COMP%] {\n  flex: 1 1 55px;\n}\n\n.cell--metadata[_ngcontent-%COMP%] {\n  background: rgba(233, 152, 67, 0.2);\n}\n\n.cell--created-on[_ngcontent-%COMP%] {\n  flex: 1 1 55px;\n}\n\n.cell--active[_ngcontent-%COMP%] {\n  flex: 1 1 45px;\n}\n\n.cell--actions[_ngcontent-%COMP%] {\n  background: #e1e1e1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  text-align: center;\n  align-content: center;\n}\n\n.cell__label[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  font-size: 0.8rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  align-content: center;\n}\n\n.action-label[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 0.8rem;\n  text-shadow: 0.11rem 0.11rem 0.1rem rgba(0, 0, 0, 0.2);\n  border-radius: 0.2rem;\n  padding: 0.26em 0.42em;\n  font-weight: 400;\n  margin: 0 0.2rem;\n  width: auto;\n  color: #fff;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.action-label[_ngcontent-%COMP%]:hover {\n  filter: brightness(125%);\n}\n\n.action-label[_ngcontent-%COMP%]:active {\n  filter: brightness(150%);\n}\n\n.action-label[_ngcontent-%COMP%]:focus {\n  filter: brightness(200%);\n}\n\n.action-label--edit[_ngcontent-%COMP%] {\n  background: #37c864;\n}\n\n.action-label--delete[_ngcontent-%COMP%] {\n  background: #ff6400;\n}\n\n.action-label--list[_ngcontent-%COMP%] {\n  background: #6464dc;\n}\n\n.action-label--disabled[_ngcontent-%COMP%] {\n  background: #969696;\n}\n\n.cell--data.cell--promo-description[_ngcontent-%COMP%], .cell--data.cell--prize-description[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n}\n\n.table[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvbW9zL2N1c3RvbWVyL2N1c3RvbWVyLXByb21vcy9jdXN0b21lci1wcm9tb3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9zdHlsZXMvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUNBRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZEQUFBO0VERkEsZ0JBQUE7QUFFRjs7QUMyakJFO0VBdk1BLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxREFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBRGhYRjs7QUNrWEU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBRGhYSjs7QUNtWEU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QURqWEo7O0FDb1hFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3Q0FBQTtBRGxYSjs7QUNvWEk7RUFDRSxnQkFBQTtFQUNBLDhDQUFBO0VBQ0Esb0NBQUE7QURsWE47O0FDc1hFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FEcFhKOztBQ2doQkU7RUF2SkEsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4Q0FBQTtFQUVBLGdCQUFBO0FEdFhGOztBQ3dYRTtFQUNFLGtCQUFBO0FEdFhKOztBQ3lYRTtFQUNFLGFBQUE7QUR2WEo7O0FDNlhFO0VBQ0UsZUFBQTtBRDNYSjs7QUM4WEU7RUFDRSxlQUFBO0FENVhKOztBQytYRTtFQUNFLGVBQUE7QUQ3WEo7O0FDZ1lFO0VBQ0UsZUFBQTtBRDlYSjs7QUNpWUU7RUFDRSxtQ0FwQlk7QUQzV2hCOztBQ2lZRTtFQUNFLG1DQXZCWTtBRHhXaEI7O0FDa1lFO0VBQ0UsY0FBQTtBRGhZSjs7QUNtWUU7RUFDRSxtQ0EvQlk7RUFnQ1osY0FBQTtBRGpZSjs7QUNvWUU7RUFDRSxtQ0FwQ1k7QUQ5VmhCOztBQ3FZRTtFQUNFLGNBQUE7QURuWUo7O0FDc1lFO0VBQ0UsY0FBQTtBRHBZSjs7QUN1WUU7RUFDRSxtQ0FoRFk7QURyVmhCOztBQ3dZRTtFQUNFLGNBQUE7QUR0WUo7O0FDeVlFO0VBQ0UsY0FBQTtBRHZZSjs7QUMwWUU7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FEeFlKOztBQzJZRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUR6WUo7O0FDaWNFO0VBbkRBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzREFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFFQSxlQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBRDNZRjs7QUM2WUU7RUFDRSx3QkFBQTtBRDNZSjs7QUM4WUU7RUFDRSx3QkFBQTtBRDVZSjs7QUMrWUU7RUFDRSx3QkFBQTtBRDdZSjs7QUNnWkU7RUFDRSxtQkFBQTtBRDlZSjs7QUNpWkU7RUFDRSxtQkFBQTtBRC9ZSjs7QUNrWkU7RUFDRSxtQkFBQTtBRGhaSjs7QUNtWkU7RUFDRSxtQkFBQTtBRGpaSjs7QUNrYUU7O0VBRUUsa0JBQUE7QUQvWko7O0FBeEtBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBMktGIiwiZmlsZSI6InNyYy9hcHAvcHJvbW9zL2N1c3RvbWVyL2N1c3RvbWVyLXByb21vcy9jdXN0b21lci1wcm9tb3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi8uLi8uLi8uLi9zaGFyZWQvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCI7XHJcbkBpbXBvcnQgXCIuLy4uLy4uLy4uL3NoYXJlZC9zdHlsZXMvbWl4aW5zLnNjc3NcIjtcclxuXHJcbi53cmFwcGVyIHtcclxuICBAaW5jbHVkZSB3cmFwcGVyLXllbGxvdztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5AaW5jbHVkZSB0YWJsZS1wYXJ0cztcclxuLnRhYmxlIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcbiIsIkBpbXBvcnQgXCIuL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG5AbWl4aW4gd3JhcHBlci15ZWxsb3cge1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAxODUsIDE0MSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgMTQ0ZGVnLFxyXG4gICAgcmdiYSgyNTUsIDE4NSwgMTQxLCAxKSAwJSxcclxuICAgIHJnYmEoMjU1LCAyMzIsIDEyNywgMSkgMTAwJVxyXG4gICk7XHJcbn1cclxuXHJcbkBtaXhpbiB3cmFwcGVyLXllbGxvdy1mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAxODUsIDE0MSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgMTQ0ZGVnLFxyXG4gICAgcmdiYSgyNTUsIDIzMiwgMTI3LCAxKSAwJSxcclxuICAgIHJnYmEoMjU1LCAxODUsIDE0MSwgMSkgMTAwJVxyXG4gICk7XHJcblxyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbkBtaXhpbiB3cmFwcGVyLWJsdWUtZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDE1OSwgMTY5LCAyMTgsIDEpIDAlLCByZ2IoOTAsIDkwLCAxODApIDEwMCUpO1xyXG5cclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4vLyAjIyMgRk9STVMgIyMjXHJcblxyXG4vLyAjIEZPUk0gLSBBVVRIICNcclxuQG1peGluIGZvcm0tYXV0aCB7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogYXV0bztcclxuICB3aWR0aDogMzB2dztcclxuICBib3gtc2hhZG93OiAwIDAuMXJlbSAwLjNyZW0gMC4xcmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGJhY2tncm91bmQ6ICRmb3JtLWJhY2tncm91bmQ7XHJcbiAgYm9yZGVyOiAkZm9ybS1ib3JkZXItd2lkdGggc29saWQgJGZvcm0tYm9yZGVyLWNvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6ICRmb3JtLWJvcmRlci1yYWRpdXM7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMTg1LCAxNDEpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDE0NGRlZyxcclxuICAgIHJnYmEoMjU1LCAyMzIsIDEyNywgMSkgMCUsXHJcbiAgICByZ2JhKDI1NSwgMTg1LCAxNDEsIDEpIDEwMCVcclxuICApO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblxyXG4gICZfX2xhYmVsIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjRyZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJyZW07XHJcblxyXG4gICAgJi0taW1hZ2Uge1xyXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGhlaWdodDogNXZoO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgJi0taW1hZ2UtcmVzdWx0IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1hdXRoLWlucHV0LWdyb3VwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIG1hcmdpbjogMC4zcmVtO1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjM1cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAmLS1lc3NlbnRpYWxzIHtcclxuICAgIGdyaWQtcm93OiAxIC8gc3BhbiAyO1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7XHJcbiAgfVxyXG5cclxuICAmLS1wcml6ZSB7XHJcbiAgICBncmlkLXJvdzogMyAvIHNwYW4gMjtcclxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xyXG4gIH1cclxuICAmLS1wb2ludHMge1xyXG4gICAgZ3JpZC1yb3c6IDUgLyBzcGFuIDI7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcclxuICB9XHJcblxyXG4gICYtLWltYWdlIHtcclxuICAgIGdyaWQtcm93OiAxIC8gc3BhbiAxO1xyXG4gICAgZ3JpZC1jb2x1bW46IDMgLyBzcGFuIDI7XHJcbiAgICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG5cclxuICAmLS1pbWFnZS1yZXN1bHQge1xyXG4gICAgZ3JpZC1yb3c6IDMgLyBzcGFuIDU7XHJcbiAgICBncmlkLWNvbHVtbjogMyAvIHNwYW4gNDtcclxuICAgIGJvcmRlcjogMC4wMnJlbSBzb2xpZCAkaW5wdXQtYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG5cclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gIH1cclxuICAmLS1idXR0b25zIHtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGdyaWQtcm93OiAxIC8gc3BhbiAxO1xyXG4gICAgZ3JpZC1jb2x1bW46IDUgLyBzcGFuIDI7XHJcbiAgICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDFlbSAzZW07XHJcbiAgfVxyXG5cclxuICAmLS1yZXN1bHQge1xyXG4gICAgZ3JpZC1yb3c6IDUgLyBzcGFuIDI7XHJcbiAgICBncmlkLWNvbHVtbjogMyAvIHNwYW4gMjtcclxuICAgIGJvcmRlcjogJGZvcm0tYm9yZGVyLXdpZHRoIHNvbGlkICRmb3JtLWJ1dHRvbi1ib3JkZXItY29sb3I7XHJcbiAgfVxyXG5cclxuICAmLS1tZXNzYWdlIHtcclxuICAgIGdyaWQtcm93OiAyIC8gc3BhbiAxO1xyXG5cclxuICAgIGdyaWQtY29sdW1uOiAzIC8gc3BhbiA0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYmFja2dyb3VuZDogJGZvcm0tbWVzc2FnZS1iYWNrZ3JvdW5kO1xyXG4gICAgYm9yZGVyOiAkZm9ybS1ib3JkZXItd2lkdGggc29saWQgJGZvcm0tbWVzc2FnZS1iYWNrZ3JvdW5kO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGZvcm0tYXV0aC1pbnB1dC13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAuNHJlbTtcclxuICBtYXJnaW46IDAuMnJlbSAwO1xyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1hdXRoLW1lc3NhZ2Uge1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGhlaWdodDogNHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLWF1dGgtYnV0dG9ucyB7XHJcbiAgaGVpZ2h0OiA2dmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIG1hcmdpbjogMC40cmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcclxuICBib3JkZXI6ICRmb3JtLWJvcmRlci13aWR0aCBzb2xpZCAkZm9ybS1idXR0b24tYm9yZGVyLWNvbG9yO1xyXG4gIGJvcmRlcjogMC4wNnJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQ6ICRmb3JtLWJ1dHRvbi1iYWNrZ3JvdW5kO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZm9ybS1idXR0b24tYmFja2dyb3VuZC0taG92ZXI7XHJcbiAgfVxyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQ6ICRmb3JtLWJ1dHRvbi1iYWNrZ3JvdW5kLS1mb2N1cztcclxuICB9XHJcblxyXG4gICY6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICRmb3JtLWJ1dHRvbi1iYWNrZ3JvdW5kLS1hY3RpdmU7XHJcbiAgfVxyXG5cclxuICAmOmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLWF1dGgtaW5wdXQge1xyXG4gIGJvcmRlcjogMC4wNnJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gIHdpZHRoOiAyNHZ3O1xyXG4gIHBhZGRpbmc6IDAgMS4zcmVtO1xyXG4gIGhlaWdodDogN3ZoO1xyXG4gIG1hcmdpbjogMC4zNXJlbTtcclxuICBmb250LXNpemU6IDEuNHJlbTtcclxufVxyXG5cclxuLy8gIyBGT1JNIC0gUFJPTU9TXHJcblxyXG5AbWl4aW4gZm9ybS1wcm9tby1iYXNlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIGhlaWdodDogOTB2aDtcclxuICB3aWR0aDogOTB2dztcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGJveC1zaGFkb3c6IDAgMC4xcmVtIDAuM3JlbSAwLjFyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgYm9yZGVyOiAkZm9ybS1ib3JkZXItd2lkdGggc29saWQgJGZvcm0tYm9yZGVyLWNvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6ICRmb3JtLWJvcmRlci1yYWRpdXM7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMTg1LCAxNDEpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDE0NGRlZyxcclxuICAgIHJnYmEoMjU1LCAyMzIsIDEyNywgMSkgMCUsXHJcbiAgICByZ2JhKDI1NSwgMTg1LCAxNDEsIDEpIDEwMCVcclxuICApO1xyXG5cclxuICAmX19zZWN0aW9uIHtcclxuICAgIHdpZHRoOiA0NXZ3O1xyXG4gICAgaGVpZ2h0OiA4NnZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLXByb21vLWlucHV0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiAwLjA2cmVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA4JTtcclxuICBwYWRkaW5nOiAwLjhlbTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLXByb21vLWlucHV0LXdyYXBwZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogMC43NXJlbSAwO1xyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1wcm9tby1tZXNzYWdlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLXByb21vLW1lc3NhZ2Utd3JhcHBlciB7XHJcbiAgaGVpZ2h0OiA1JTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGxpbmUtYnJlYWs6IHN0cmljdDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLXByb21vLWdyb3VwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiA0MHZ3O1xyXG4gIGhlaWdodDogODZ2aDtcclxuICBtYXJnaW46IDAuM3JlbTtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMXJlbTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAwIDAuMXJlbSAwLjNyZW0gMC4xcmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAmX19sYWJlbCB7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xyXG4gICAgcGFkZGluZzogMC4yNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHJnYigxMDAsIDEwMCwgMjAwKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG4gICYtLWJ1dHRvbnMge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcblxyXG4gICYtLXJlc3VsdCB7XHJcbiAgICBib3JkZXI6ICRmb3JtLWJvcmRlci13aWR0aCBzb2xpZCAkZm9ybS1idXR0b24tYm9yZGVyLWNvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGZvcm0tcHJvbW8tYnV0dG9ucyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgcGFkZGluZzogMC40cmVtO1xyXG4gIG1hcmdpbjogMC40cmVtO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBtYXJnaW46IDAuNzVyZW0gMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQ6IDQwMCAwLjlyZW0gUm9ib3RvO1xyXG5cclxuICBtaW4taGVpZ2h0OiA1dmg7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcclxuICBib3JkZXI6IDAuMDZyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogJGZvcm0tYnV0dG9uLWJhY2tncm91bmQtLWhvdmVyO1xyXG4gIH1cclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZm9ybS1idXR0b24tYmFja2dyb3VuZC0tZm9jdXM7XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZm9ybS1idXR0b24tYmFja2dyb3VuZC0tYWN0aXZlO1xyXG4gIH1cclxuXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyAjIyMgVGFibGUgIyMjXHJcbkBtaXhpbiB0YWJsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMXJlbTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAwIDAuMXJlbSAwLjNyZW0gMC4xcmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBib3JkZXItc3BhY2luZzogMHB4O1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxuXHJcbiAgJl9faGVhZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAmX19ib2R5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICB9XHJcblxyXG4gICZfX3JvdyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBoZWlnaHQ6IDd2aDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlcjogMC4wNXJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcblxyXG4gICAgJi0taGVhZCB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDAuMXJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxODUsIDE0MSwgMC41KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX25hbWUge1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGNlbGwge1xyXG4gIGZsZXg6IDEgMSAxMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgYm9yZGVyLXJpZ2h0OiAwLjAxcmVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuXHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuXHJcbiAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIH1cclxuXHJcbiAgJi0tZGF0YSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuXHJcbiAgJGJhY2tncm91bmQxOiByZ2JhKDIzMywgMTUyLCA2NywgMC4yKTtcclxuICAkYmFja2dyb3VuZDI6IHJnYmEoMjUyLCAxNzUsIDExLCAwLjIpO1xyXG5cclxuICAmLS1wcm9tby1uYW1lIHtcclxuICAgIGZsZXg6IDEgMSAxMzBweDtcclxuICB9XHJcblxyXG4gICYtLXByb21vLWRlc2NyaXB0aW9uIHtcclxuICAgIGZsZXg6IDEgMCAxNTBweDtcclxuICB9XHJcblxyXG4gICYtLXZlbmRvci1lbWFpbCB7XHJcbiAgICBmbGV4OiAxIDAgMTUwcHg7XHJcbiAgfVxyXG5cclxuICAmLS1hZGRyZXNzLXN0b3JlIHtcclxuICAgIGZsZXg6IDEgMSAxMzBweDtcclxuICB9XHJcblxyXG4gICYtLXByb21vLWRldGFpbHMge1xyXG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQxO1xyXG4gIH1cclxuICAmLS1wcml6ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDE7XHJcbiAgfVxyXG5cclxuICAmLS1xdWFudGl0eSB7XHJcbiAgICBmbGV4OiAxIDEgNTVweDtcclxuICB9XHJcblxyXG4gICYtLXBvaW50cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDE7XHJcbiAgICBmbGV4OiAxIDEgNTVweDtcclxuICB9XHJcblxyXG4gICYtLXBhcnRpY2lwYW50cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDE7XHJcbiAgfVxyXG5cclxuICAmLS1wYXJ0aWNpcGFudHMtdG90YWwge1xyXG4gICAgZmxleDogMSAxIDU1cHg7XHJcbiAgfVxyXG5cclxuICAmLS1wYXJ0aWNpcGFudHMtbGlzdCB7XHJcbiAgICBmbGV4OiAxIDEgNTVweDtcclxuICB9XHJcblxyXG4gICYtLW1ldGFkYXRhIHtcclxuICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kMTtcclxuICB9XHJcblxyXG4gICYtLWNyZWF0ZWQtb24ge1xyXG4gICAgZmxleDogMSAxIDU1cHg7XHJcbiAgfVxyXG5cclxuICAmLS1hY3RpdmUge1xyXG4gICAgZmxleDogMSAxIDQ1cHg7XHJcbiAgfVxyXG5cclxuICAmLS1hY3Rpb25zIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjI1LCAyMjUsIDIyNSwgMSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICZfX2xhYmVsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRhYmxlLWFjdGlvbi1sYWJlbCB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICB0ZXh0LXNoYWRvdzogMC4xMXJlbSAwLjExcmVtIDAuMXJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xyXG4gIHBhZGRpbmc6IDAuMjZlbSAwLjQyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXJnaW46IDAgMC4ycmVtO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG5cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEyNSUpO1xyXG4gIH1cclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDE1MCUpO1xyXG4gIH1cclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoKDIwMCUpKTtcclxuICB9XHJcblxyXG4gICYtLWVkaXQge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDU1LCAyMDAsIDEwMCk7XHJcbiAgfVxyXG5cclxuICAmLS1kZWxldGUge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMTAwLCAwKTtcclxuICB9XHJcblxyXG4gICYtLWxpc3Qge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDEwMCwgMTAwLCAyMjApO1xyXG4gIH1cclxuXHJcbiAgJi0tZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE1MCwgMTUwLCAxNTApO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRhYmxlLXBhcnRzIHtcclxuICAudGFibGUge1xyXG4gICAgQGluY2x1ZGUgdGFibGU7XHJcbiAgfVxyXG5cclxuICAuY2VsbCB7XHJcbiAgICBAaW5jbHVkZSBjZWxsO1xyXG4gIH1cclxuXHJcbiAgLmFjdGlvbi1sYWJlbCB7XHJcbiAgICBAaW5jbHVkZSB0YWJsZS1hY3Rpb24tbGFiZWw7XHJcbiAgfVxyXG5cclxuICAuY2VsbC0tZGF0YS5jZWxsLS1wcm9tby1kZXNjcmlwdGlvbixcclxuICAuY2VsbC0tZGF0YS5jZWxsLS1wcml6ZS1kZXNjcmlwdGlvbiB7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerPromosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-customer-promos',
                templateUrl: './customer-promos.component.html',
                styleUrls: ['./customer-promos.component.scss'],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }, { type: src_app_fire_service__WEBPACK_IMPORTED_MODULE_5__["FireService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=customer-customer-module.js.map