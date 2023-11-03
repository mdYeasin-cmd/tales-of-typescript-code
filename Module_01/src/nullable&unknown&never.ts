{
    // 

    // nullable type
    const searchMobile = (value: string | null) => {
        if(typeof value === "string") {
            console.log("Searching barnd new phone for you...");
        } else {
            console.log("We can't find you phone brand name");
        }
    }

    searchMobile(null);

    // unknown type ---> typeof operator
    const getParameterType = (value: unknown) => {
        if(typeof value === "string") {
            console.log("Your parameter type is string");
        } else if (typeof value === "number") {
            console.log("Your parameter type is number");
        } else {
            console.log("We check only number and string type. You give any other type which we not check yet for our system. thank you.")
        }
    }

    getParameterType(0);

    // never type
    const sendMessage = (msg: string) => {
        throw msg;
    }

    sendMessage("Hey ki koros ekhane");

    // 
}