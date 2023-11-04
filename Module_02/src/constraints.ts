{
    // 

    interface FilterStudent {
        id: number;
        name: string;
        email: string;
    }

    const addCourseToStudent = <T extends FilterStudent>(student: T) => {
        const course = "Next Level Web Development";

        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({ id: 45, name: "Dihan", computerType: "Mac", email: "dihan@gmail.com" });
    const student2 = addCourseToStudent({ id: 56, name: "Ayman", email: "ayman@gmail.com" });

    // 
}