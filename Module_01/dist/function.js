"use strict";
/*
    In JavaScript have two types of function
        1. Normal function
        2. Arrow function
*/
function multiply(num1, num2) {
    return num1 * num2;
}
multiply(6, 3);
var subtraction = function (num1, num2) { return num1 - num2; };
// object --> function --> method
var richFriend = {
    name: "Forkan",
    balance: 5000,
    addBalance: function (balance) {
        return "My friends current balace is ".concat(this.balance + balance);
    }
};
var ageOfBrothers = [23, 56, 67, 90];
var newAge = ageOfBrothers.map(function (element) { return element + element; });
