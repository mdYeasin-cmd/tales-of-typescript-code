{
    // 

    /* 
        For write more clear code we should use 
            1. type alias for write array and function type
            2. interface for object type

        For intersect tow type
            1. In type alis use "&" sign
            2. In interface use "extends" keyword
    
        # All primitive types use type alias
        # All object types can use interface but if object type want use type alias he can and primitive type can not use interface.
    */

    // interface
    type User1 = {
        name: string;
        age: number
    }

    type RollNumber = number;

    type UserWithRole = User1 & { role: string }

    const user1: UserWithRole = {
        name: "Yeasin",
        age: 23,
        role: "Junior Web Developer"
    }

    interface User2 {
        name: string;
        age: number;
    }

    interface UserWithRole2 extends User2 {
        role: string;
    }

    const user2: UserWithRole2 = {
        name: "Asif",
        age: 25,
        role: "Student"
    }

    // js -> object, array -> object, funciton -> object

    type Roll1 = number[];

    interface Roll2 {
        [index: number]: number;
    }

    const roll1: Roll2 = [1, 3, 4, 5];

    type Add = (num1: number, num2: number) => number
    interface Add2 {
        (num1: number, num2: number): number
    }

    const add: Add2 = (num1, num2) => num1 + num2;

    // 
}