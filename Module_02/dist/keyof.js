"use strict";
{
    const person = "tshirt";
    const getProperty = (obj, key) => {
        return obj[key];
    };
    const person2 = {
        name: "Jarif",
        age: 8,
        isChildren: true
    };
    const person3 = {
        name: "Rihab",
        student: true,
        whereLive: "Itali"
    };
    const result = getProperty(person2, "age");
    const result2 = getProperty(person3, "whereLive");
    // 
}
