{
    // 

    // union type
    type Vehicle = "Car" | "CNG" | "Motor Cycle";
    type LongJourneyVehicle = "Bus" | "Train" | "Air Plane";

    type favroutieVehicle = Vehicle | LongJourneyVehicle;

    const willGoCtg: Vehicle = "Car";
    const willGoBariyahat: Vehicle = "CNG";

    const willGoShylet: LongJourneyVehicle = "Train";
    const willGoUsa: LongJourneyVehicle = "Air Plane";
    const myFavroutie: favroutieVehicle = "Car";

    type TrainingCenter = {
        courses: "Web Design" | "Graphic Design" | "Digital Marketing";
        instructorName: string;
        isExpert: boolean;
        courseDuration: "6 months" | "3 months";
        email?: string;
    }

    const cit: TrainingCenter = {
        courses: "Web Design",
        instructorName: "Mr. Zahid",
        isExpert: true,
        courseDuration: "6 months"
    }

    // intersection type
    type GroceryShop = {
        listOfProduct: string[];
        shop1: "Grocery";
    }

    type VegetableShop = {
        listOfProduct: string[];
        shop2: "Vegetable"
    }

    type superMarket = GroceryShop & VegetableShop;

    const shwapnoSuperShop: superMarket = {
        listOfProduct: ["Egg", "Rice", "Bread", "Lal Shak", "Korola", "Begun"],
        shop1: "Grocery",
        shop2: "Vegetable"
    }

    // 
}