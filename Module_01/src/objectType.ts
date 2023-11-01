// Reference Type --> Object

/* 

    1. Literal
    2. Optional
    3. access modifier (readonly)

*/

const user: {
    readonly company: "Cat Home", // literal types --> when a value is behave like data types that will cat literal types
    firstName: string,
    middleName?: string,
    lastName: string,
    isStudent: boolean
} = {
    company: "Cat Home",
    firstName: "Yeasin",
    lastName: "Shuvo",
    isStudent: true
}