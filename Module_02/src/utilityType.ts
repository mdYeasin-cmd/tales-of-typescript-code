{
    // 

    /* 
        # Utility types
            1. Pick
            2. Omit
            3. Required
            4. Partial
            5. Readonly
            6. Record
    */

    type Person = {
        name: string;
        age: number;
        email?: string;
        contacNo: string
    }

    // Pick
    type NameAge = Pick<Person, "name" | "age">

    // Omit
    type ContactInfo = Omit<Person, "name" | "age">

    // Required
    type RequiredUser = Required<Person>

    // Partial 
    type PartialUser = Partial<Person>

    // Read Only
    type ReadOnlyUser = Readonly<Person>

    const person1: ReadOnlyUser = {
        name: "Yeasin",
        age: 23,
        contacNo: "018"
    }

    // Record
    // type MyObj = {
    //     a: string;
    //     b: string;
    // }

    type MyObj = Record<string, string>

    const emptyObj: Record<string, unknown> = {};

    const obj1: MyObj = {
        a: "aa",
        b: "bb",
        c: "cc",
    }

    // 
}