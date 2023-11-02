"use strict";
var __assign = (this && this.__assign) || function () {
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
{
    /*
    1. spread operator --> spread array element and object property
    2. rest operator --> collect element to an array.
*/
    // spread operator
    var dristrict1 = ["Chittagong", "Feni", "Cumilla", "Cox's Bazar"];
    var dristrict2 = ["Dhaka", "Gazipur", "Faridpur"];
    dristrict1.push.apply(dristrict1, dristrict2);
    var friends1 = {
        cpi: "Shifat",
        fpi: "Sakib",
        ctgpi: "Sijan"
    };
    var friends2 = {
        nu: "Yeasin",
        ctec: "Forkan",
        nsu: "Mahtab"
    };
    var friendsList = __assign(__assign({}, friends1), friends2);
    // rest operator
    var sayThanks = function () {
        var friendsName = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            friendsName[_i] = arguments[_i];
        }
        friendsName.forEach(function (friendName) {
            console.log("Hi ".concat(friendName));
        });
    };
}
