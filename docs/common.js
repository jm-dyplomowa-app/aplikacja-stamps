(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "AJF1":
/*!********************************************!*\
  !*** ./src/app/shared/coupon-generator.ts ***!
  \********************************************/
/*! exports provided: COUPON_CODE_LENGTH, generateCouponCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUPON_CODE_LENGTH", function() { return COUPON_CODE_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateCouponCode", function() { return generateCouponCode; });
const COUPON_CODE_LENGTH = 8;
function generateCouponCode() {
    const codeCharactersBase = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz123456789_-+!';
    const codeCharacters = codeCharactersBase + codeCharactersBase;
    let couponCode = '';
    for (let i = 0; i < COUPON_CODE_LENGTH; i++) {
        couponCode += codeCharacters.charAt(Math.floor(Math.random() * codeCharacters.length));
    }
    return couponCode;
}


/***/ })

}]);
//# sourceMappingURL=common.js.map