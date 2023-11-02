{
    /* 
    1. spread operator --> spread array element and object property
    2. rest operator --> collect element to an array.
*/

    // spread operator
    const dristrict1: string[] = ["Chittagong", "Feni", "Cumilla", "Cox's Bazar"];
    const dristrict2: string[] = ["Dhaka", "Gazipur", "Faridpur"];

    dristrict1.push(...dristrict2);

    const friends1 = {
        cpi: "Shifat",
        fpi: "Sakib",
        ctgpi: "Sijan"
    };

    const friends2 = {
        nu: "Yeasin",
        ctec: "Forkan",
        nsu: "Mahtab"
    }

    const friendsList = {
        ...friends1,
        ...friends2
    };

    // rest operator
    const sayThanks = (...friendsName: string[]) => {
        friendsName.forEach((friendName: string) => {
            console.log(`Hi ${friendName}`);
        });
    }
}



