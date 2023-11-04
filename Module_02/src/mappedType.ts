{
    // 
    // mapped type
    const arrayOfNumbers: number[] = [1, 2, 3, 4, 5];

    const arrayOfStrings: string[] = arrayOfNumbers.map(number => number.toString());

    console.log(arrayOfStrings);

    type AreaNumber = {
        hegiht: number;
        width: number;
    }

    // type AreaString = {
    //     height: string;
    //     width: string;
    // }

    type AreaString<T> = {
        [key in keyof T]: T[key]
    }

    const area: AreaString<{ height: number, width: string }> = {
        height: 100,
        width: "100"
    }

    // 
}