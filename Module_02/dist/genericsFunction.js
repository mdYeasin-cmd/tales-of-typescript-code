"use strict";
{
    // 
    // function with generics
    const createArray = (param) => {
        return [param];
    };
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const result1 = createArray("Bangladesh");
    const resGeneric = createArrayWithGeneric("Bangladesh");
    const resGenericObj = createArrayWithGeneric({ id: 1, name: "Asif" });
    const createArrayWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const resTuple1 = createArrayWithTuple("Bangldesh", 2024);
    const resTuple2 = createArrayWithTuple("Bangladesh", { name: "Asia" });
    const addCourseToStudent = (student) => {
        const course = "Next Level Web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({ name: "Dihan", computerType: "Mac", email: "dihan@gmail.com" });
    const student2 = addCourseToStudent({ name: "Ayman", email: "ayman@gmail.com" });
    // 
}
