{
    // 

    // generic interface
    // reuseable interface

    interface Developer<T, X, House> {
        name: string;
        computer: {
            brand: string;
            model: string;
            yearOfUse: number;
        };
        smartWatch: T;
        car?: X;
        house: House
    }

    interface TitanWatch {
        brand: string;
        model: string;
    }

    interface JuniorDeveloerHouse {
        location: string;
        roomNumber: number;
        color: string;
        isAc: boolean;
    }

    const juinorDeveloper: Developer<TitanWatch, null, JuniorDeveloerHouse> = {
        name: "Arafat",
        computer: {
            brand: "HP",
            model: "elitebook 850 g6",
            yearOfUse: 1
        },
        smartWatch: {
            brand: "Titan",
            model: "t-56U"
        },
        house: {
            location: "Chattogram",
            roomNumber: 3,
            color: "White",
            isAc: false
        }
    }

    interface AppleWatch {
        brand: string;
        heartBeatTrack: boolean;
        sleepTrack: boolean
    }

    interface MithsubisiCar {
        model: string;
        color: string;
        buyingYear: number;
    }

    interface SeniorDeveloperHouse {
        appartmentTye: string;
        color: string;
        road: string;
        isNice: boolean;
    }

    const seniorDeveloper: Developer<AppleWatch, MithsubisiCar, SeniorDeveloperHouse> = {
        name: "Rasel Ahmed",
        computer: {
            brand: "Mac",
            model: "M1",
            yearOfUse: 3
        },
        smartWatch: {
            brand: "Apple Watch",
            heartBeatTrack: true,
            sleepTrack: true
        },
        car: {
            model: "Mb-678",
            color: "red",
            buyingYear: 2021
        },
        house: {
            appartmentTye: "Rental",
            color: "blue",
            road: "12/3 road",
            isNice: true
        }
    }

    // 
}