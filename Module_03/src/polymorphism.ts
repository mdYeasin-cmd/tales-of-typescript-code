{
    // 
    // oop - polymorphism
    /* 
        # poly means many
        # polymorphism means different charactaristic depends on situation
        # depends on situtation give different types of output
    */

    class Person {
        getSleep() {
            console.log(`I am sleeping for 8 hours.`);
        }
    }

    class Student extends Person {
        getSleep() {
            console.log(`I am sleeping for 7 hours.`);
        }
    }

    class Developer extends Person {
        getSleep() {
            console.log(`I am sleeping for 6 hours.`);
        }
    }

    const getsleepingHours = (param: Person) => {
        param.getSleep();
    }

    const person1 = new Person();
    const person2 = new Student();
    const person3 = new Developer();

    // console.log(person1.getSleep());
    // console.log(person2.getSleep());
    // console.log(person3.getSleep());
    getsleepingHours(person1);
    getsleepingHours(person2);
    getsleepingHours(person3);

    class Shape {
        getArea(): number {
            return 0;
        }
    }

    // pi * radius * radius
    class Circle extends Shape {
        radius: number;

        constructor(radius: number) {
            super();
            this.radius = radius;
        }

        getArea(): number {
            return Math.PI * this.radius * this.radius;
        }
    }

    // height * width
    class Rectangle extends Shape {
        height: number;
        width: number;

        constructor(height: number, width: number) {
            super();
            this.height = height;
            this.width = width;
        }

        getArea(): number {
            return this.height * this.width;
        }
    }

    const getShapeArea = (param: Shape) => {
        console.log(param.getArea())
    }

    const shape1 = new Shape();
    const shape2 = new Circle(15);
    const shape3 = new Rectangle(6, 7);

    getShapeArea(shape1);
    getShapeArea(shape2);
    getShapeArea(shape3);
    // 
}