/* 
    In JavaScript have two types of function 
        1. Normal function
        2. Arrow function
*/

function multiply(num1: number, num2: number): number {
    return num1 * num2;
}

multiply(6, 3);

const subtraction = (num1: number, num2: number): number => num1 - num2; 

// object --> function --> method

const richFriend = {
    name: "Forkan",
    balance: 5000,
    addBalance(balance: number): string {
        return `My friends current balace is ${this.balance + balance}`;
    }
}

const ageOfBrothers: Array<number> = [23, 56, 67, 90];

const newAge: number[] = ageOfBrothers.map((element: number) => element + element);