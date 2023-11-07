{
    // 
    // instanceof - type guard
    class Animal {
        name: string;
        species: string;

        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }

        makeSound() {
            console.log("I am making sound!");
        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        }

        makeBark() {
            console.log(`Burking dog.`);
        }
    }

    class Cat extends Animal {
        constructor(name: string, species: string) {
            super(name, species)
        }

        makeMeaw() {
            console.log("Meawing cat");
        }
    }

    // smart way for handle it
    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog;
    }

    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat;
    }

    const getAnimal = (animal: Animal) => {
        if (isDog(animal)) {
            return animal.makeBark();
        } else if (isCat(animal)) {
            return animal.makeMeaw();
        } else {
            return animal.makeSound();
        }
    }

    const dog = new Dog("Tommy", "dog");
    const cat = new Cat("Drill", "cat");

    getAnimal(cat);
    // 
}