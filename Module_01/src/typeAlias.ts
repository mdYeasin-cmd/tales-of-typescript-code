{
    // Type aliasing

    type CourseDetails = {
        institute: string;
        courseName: string;
        instructor: string;
        location?: string;
        isSixMonths: boolean;
    }

    const course1: CourseDetails = {
        institute: "CIT",
        courseName: "Web Design",
        instructor: "Mr. Zahid",
        location: "Chattogram",
        isSixMonths: true
    }

    const course2: CourseDetails = {
        institute: "PH",
        courseName: "Web Development",
        instructor: "Mr. Jhankar Mahbub",
        isSixMonths: true
    }

    type Name = string;
    type HaveFriends = boolean;

    const name: Name = "Yeasin";
    const haveFriends: HaveFriends = true;

    type Sub = (num1: number, num2: number) => number;

    const sub: Sub = (num1, num2) => num1 - num2;

}