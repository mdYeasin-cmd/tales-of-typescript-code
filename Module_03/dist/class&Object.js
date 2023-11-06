"use strict";
{
    // 
    // OOP --> class
    class Person {
        // name: string;
        // profession: string;
        // location: string;
        constructor(name, profession, location) {
            this.name = name;
            this.profession = profession;
            this.location = location;
            // this.name = nane;
            // this.profession = profession;
            // this.location = location;
        }
        checkProfession() {
            console.log(`Currently ${this.name} working as a ${this.profession}`);
        }
    }
    const person1 = new Person("Rakb", "HR", "Dhaka");
    const person2 = new Person("Forkan", "Engineer", "Chattogram");
    person1.checkProfession();
    person2.checkProfession();
    // 
}
