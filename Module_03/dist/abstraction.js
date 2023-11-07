"use strict";
{
    // real implementation
    class Car {
        startEngine() {
            console.log("I'm starting the car");
        }
        stopEngine() {
            console.log("I'm stoping the car");
        }
        move() {
            console.log("I'm moving the car");
        }
        test() {
            console.log(`I'm just testing here`);
        }
    }
    const toyotaCar = new Car();
    toyotaCar.startEngine();
    // usign abstract class
    // idea
    class Car2 {
    }
    // real implementation
    class ToyotaCar extends Car2 {
        startEngine() {
            console.log("I'm starting the car engine");
        }
        stopEngine() {
            console.log("I'm stoping the car engine");
        }
        move() {
            console.log("I'm moved the car engine");
        }
    }
    const car3 = new ToyotaCar();
    car3.startEngine();
    // 
}
