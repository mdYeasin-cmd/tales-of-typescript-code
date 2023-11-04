{
    // 

    /* 
        Difference between type assertion and type narrowing -
            Type assertion (a compile-time concept)
                1. Type assertion (or type casting) is a way to tell the TypeScript compiler that you know more about the type of a value than it can infer statically.

                2. It's a mechanism for overriding TypeScript's type inference for a specific value, allowing you to treat it as a different type.

                3. Type assertion is performed using the as keyword or the angle bracket syntax (<type>), such as (value as string) or <string>value.

            Type narrowing (a runtime concept)
                1. Type narrowing is a process that occurs during runtime based on certain conditions or checks within your code.

                2. It's a mechanism for refining the type of a variable within a specific code block or branch, making it more specific.

                3. Type narrowing relies on conditional statements (e.g., if, switch) or type guards to narrow the type based on runtime checks.

    */

    let everything: any;

    everything = "Hello World!";

    (everything as string).includes("!");

    everything = 56;

    (everything as number).toPrecision(3);

    const inchToFeet = (value: number | string) => {
        if(typeof value === "number") {
            return value / 12;
        } else if(typeof value === "string") {
            const convertNumber = parseFloat(value);
            return `The converted feet is ${convertNumber/ 12}`;
        }
    }

    const feetedValue1 = inchToFeet("60") as string;
    const feetedValue2 = inchToFeet(60) as number;

    type CustomError = {
        message: string
    }

    try {
        
    } catch (error) {
        console.log((error as CustomError).message);
    }

    // 
}