{
    // 

    // keyof and generics

    /* 
        # keyof keyword form union type value
    */

    type Cloths = {
        tshirt: string;
        shirt: string;
        panjabi: string;
    }

    type Person = "tshirt" | "shirt" | "panjabi";

    type Person2 = keyof Cloths;

    const person: Person2 = "tshirt";

    const getProperty = <A, B extends keyof A>(obj: A, key: B) => {
        return obj[key]
    }

    const person2 = {
        name: "Jarif",
        age: 8,
        isChildren: true
    }

    const person3 = {
        name: "Rihab",
        student: true,
        whereLive: "Itali"
    }

    const result = getProperty(person2, "age");
    const result2 = getProperty(person3, "whereLive");

    // 
}