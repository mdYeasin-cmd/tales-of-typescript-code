"use strict";
{
    const addCourseToStudent = (student) => {
        const course = "Next Level Web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({ id: 45, name: "Dihan", computerType: "Mac", email: "dihan@gmail.com" });
    const student2 = addCourseToStudent({ id: 56, name: "Ayman", email: "ayman@gmail.com" });
    // 
}
