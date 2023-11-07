{
    // 
    // oop - abstraction
    /* 
        # there are two ways for make abstraction
            1. interface
            2. abstraction class
        # abstraction means you will get idea, but you don't know how implement it.
        # Like React and Express --> We don't know what have behind them, but we use them.
    */

    // using interface 
    // idea
    interface Vehicle1 {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }

    // real implementation
    class Car implements Vehicle1 {
        startEngine(): void {
            console.log("I'm starting the car");
        }
        stopEngine(): void {
            console.log("I'm stoping the car");
        }
        move(): void {
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
    abstract class Car2 {
        abstract startEngine(): void;
        abstract stopEngine(): void;
        abstract move(): void
    }

    // real implementation
    class ToyotaCar extends Car2 {
        startEngine(): void {
            console.log("I'm starting the car engine");
        }
        stopEngine(): void {
            console.log("I'm stoping the car engine");
        }
        move(): void {
            console.log("I'm moved the car engine");
        }
    }

    const car3 = new ToyotaCar();
    car3.startEngine();
    // 
}