{
    // 
    // oop - inheritence
    class Person {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }

        getSleep(numberOfHOurs: number) {
            console.log(`${this.name} will sleep ${numberOfHOurs}`);
        }
    }

    class Student extends Person {
        constructor(name: string, age: number, address: string) {
            super(name, age, address);
        }
    }

    const student1 = new Student("Rajub", 23, "Khulna");
    student1.getSleep(3);

    class Teacher extends Person {
        designation: string;

        constructor(name: string, age: number, address: string, designaion: string) {
            super(name, age, address);
            this.designation = designaion;
        }

        takeClass(numberOfClass: number) {
            console.log(`${this.name} sir will take ${numberOfClass} classes`);
        }
    }

    const teacher1 = new Teacher("Rahat", 26, "Mirsarai", "Tutor");
    teacher1.takeClass(1);
    // 
}