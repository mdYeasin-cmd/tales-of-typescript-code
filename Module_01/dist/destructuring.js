"use strict";
{
    // destructuring
    // object destructuring
    var creativeIt = {
        location: "Chittagong",
        instructorsList: {
            webDesign: "Mr. Zahid",
            graphicDesign: "Mr. Rubel",
            dm: "Mr. Selim"
        },
        CoontactInfo: "01813568923"
    };
    var webDesign = creativeIt.instructorsList.webDesign, location_1 = creativeIt.location;
    // array destructuring
    var fruits = ["Mango", "Banana", "Orange", "Apple", "Jackfruits", "Litche"];
    var favourite = fruits[3], rest = fruits.slice(4);
}
