"use strict";
var _a, _b;
{
    // 
    /*
        In JavaScript question mark have different name -
            1. ternary operator
            2. optional chaining
            3. nullish coalescing
    */
    // ternary operator
    var keyboardPrice = 850;
    if (keyboardPrice < 1000) {
        console.log("cheap rate keyboard");
    }
    else {
        console.log("expensive keyboard");
    }
    var keyboard = keyboardPrice < 1000 ? "shosta keyboard" : "dami keyboard";
    // console.log({ keyboard });
    // nullish coalescing operator
    var isBrandKeyBoard = "";
    var answer1 = isBrandKeyBoard !== null && isBrandKeyBoard !== void 0 ? isBrandKeyBoard : "Nam ghondo nai ei keyboard er";
    var answer2 = isBrandKeyBoard ? isBrandKeyBoard : "Non brand keyboard";
    console.log({ answer1: answer1, answer2: answer2 });
    var newWebDeveloper = {
        role: "Frontned Developer",
        designation: {
            frontend: "React Developer",
            backend: "Express",
        }
    };
    var devOps = (_b = (_a = newWebDeveloper === null || newWebDeveloper === void 0 ? void 0 : newWebDeveloper.designation) === null || _a === void 0 ? void 0 : _a.devOps) !== null && _b !== void 0 ? _b : "haven't devOps experience";
    console.log({ devOps: devOps });
    // 
}
