"use strict";
{
    // 
    // oop - inheritence
    class Person {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numberOfHOurs) {
            console.log(`${this.name} will sleep ${numberOfHOurs}`);
        }
    }
    class Student extends Person {
        constructor(name, age, address) {
            super(name, age, address);
        }
    }
    const student1 = new Student("Rajub", 23, "Khulna");
    student1.getSleep(3);
    class Teacher extends Person {
        constructor(name, age, address, designaion) {
            super(name, age, address);
            this.designation = designaion;
        }
        takeClass(numberOfClass) {
            console.log(`${this.name} sir will take ${numberOfClass} classes`);
        }
    }
    const teacher1 = new Teacher("Rahat", 26, "Mirsarai", "Tutor");
    teacher1.takeClass(1);
    // 
}
