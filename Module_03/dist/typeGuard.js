"use strict";
{
    const add = (num1, num2) => {
        if (typeof num1 === "number" && typeof num2 === "number") {
            return num1 + num2;
        }
        else {
            return num1.toString() + num2.toLocaleString();
        }
        ;
    };
    const result1 = add(3, "6");
    console.log(result1);
    const getUser = (user) => {
        if ("role" in user) {
            console.log(`My name is ${user.name} and my role is ${user.role}`);
        }
        else {
            console.log(`My name is ${user.name}`);
        }
    };
    const normalUser = {
        name: "Yeasin"
    };
    const adminUser = {
        name: "Arafat",
        role: "admin"
    };
    getUser(adminUser);
    // 
}
