{
    // 
    // type guards

    // typeof  ---> type guard
    type Alphanumeric = number | string;

    const add = (num1: Alphanumeric, num2: Alphanumeric): Alphanumeric => {
        if (typeof num1 === "number" && typeof num2 === "number") {
            return num1 + num2;
        } else {
            return num1.toString() + num2.toLocaleString();
        };
    };

    const result1 = add(3, "6");
    console.log(result1);

    // in ---> type guard
    type NormalUser = {
        name: string;
    }

    type AdminUser = {
        name: string;
        role: "admin";
    }

    const getUser = (user: NormalUser | AdminUser) => {
        if ("role" in user) {
            console.log(`My name is ${user.name} and my role is ${user.role}`);
        } else {
            console.log(`My name is ${user.name}`);
        }
    }

    const normalUser: NormalUser = {
        name: "Yeasin"
    }

    const adminUser: AdminUser = {
        name: "Arafat",
        role: "admin"
    }

    getUser(adminUser);

    // 
}