{
    // 

    /* 
        In JavaScript question mark have different name - 
            1. ternary operator
            2. optional chaining
            3. nullish coalescing
    */

    // ternary operator
    const keyboardPrice: number = 850;

    if (keyboardPrice < 1000) {
        console.log("cheap rate keyboard");
    } else {
        console.log("expensive keyboard");
    }

    const keyboard = keyboardPrice < 1000 ? "shosta keyboard" : "dami keyboard";

    // console.log({ keyboard });

    // nullish coalescing operator
    const isBrandKeyBoard = "";

    const answer1 = isBrandKeyBoard ?? "Nam ghondo nai ei keyboard er";
    const answer2 = isBrandKeyBoard ? isBrandKeyBoard : "Non brand keyboard";

    console.log({ answer1, answer2 });

    // optional chaining

    type WebDeveloper = {
        role: string;
        designation: {
            frontend: string;
            backend: string;
            devOps?: string
        }
    }

    const newWebDeveloper: WebDeveloper = {
        role: "Frontned Developer",
        designation: {
            frontend: "React Developer",
            backend: "Express",
        }
    }

    const devOps = newWebDeveloper?.designation?.devOps ?? "haven't devOps experience";

    console.log({ devOps });


    // 
}