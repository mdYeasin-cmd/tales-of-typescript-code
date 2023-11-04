{
    // 

    // function with generics
    const createArray = (param: string): string[] => {
        return [param];
    }

    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param];
    }

    interface User {
        id: number;
        name: string;
    }

    const result1 = createArray("Bangladesh");
    const resGeneric = createArrayWithGeneric<string>("Bangladesh");
    const resGenericObj = createArrayWithGeneric<User>({ id: 1, name: "Asif" });

    const createArrayWithTuple = <X, Y>(param1: X, param2: Y): [X, Y] => {
        return [param1, param2];
    }

    const resTuple1 = createArrayWithTuple<string, number>("Bangldesh", 2024);
    const resTuple2 = createArrayWithTuple<string, { name: string }>("Bangladesh", { name: "Asia" });

    const addCourseToStudent = <T>(student: T) => {
        const course = "Next Level Web Development";

        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({ name: "Dihan", computerType: "Mac", email: "dihan@gmail.com" });
    const student2 = addCourseToStudent({ name: "Ayman", email: "ayman@gmail.com" });

    // 
}