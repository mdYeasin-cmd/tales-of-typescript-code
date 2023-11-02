{
    // destructuring

    // object destructuring
    const creativeIt = {
        location: "Chittagong",
        instructorsList: {
            webDesign: "Mr. Zahid",
            graphicDesign: "Mr. Rubel",
            dm: "Mr. Selim"
        },
        CoontactInfo: "01813568923"
    }

    const { instructorsList: { webDesign }, location } = creativeIt;

    // array destructuring
    const fruits = ["Mango", "Banana", "Orange", "Apple", "Jackfruits", "Litche"];

    const [,,, favourite, ...rest] = fruits;
}