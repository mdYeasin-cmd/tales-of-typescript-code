{
    // 

    // generic type

    type GenericArry<T> = Array<T>;

    // const doctorSerial: number[] = [2, 5, 10, 29];
    const doctorSerial: GenericArry<number> = [2, 5, 10, 29];

    // const shopkeeper: string[] = ["Nazrul", "Raju", "Alamgir", "Nasir"];
    const shopkeeper: GenericArry<string> = ["Nazrul", "Raju", "Alamgir", "Nasir"];

    // const commitment: boolean[] = [true, false, true, true];
    const commitment: GenericArry<boolean> = [true, false, true, true];

    const user: GenericArry<{ name: string, age: number }> = [
        {
            name: "Yeasin",
            age: 23
        },
        {
            name: "Asif",
            age: 18
        }
    ]

    // generic tuple
    type GenericTuple<x, y> = [x, y];

    const human: GenericTuple<string, string> = ["Home", "Office"];

    const student: GenericTuple<number, { name: string, age: number, email: string }> = [203, { name: "Nisan", age: 23, email: "nisan@gmail.com" }];
    
    // 
}