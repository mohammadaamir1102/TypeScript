function createUser({ userName: string, age: number, isActive: boolean }) { }

createUser({
    userName: "Aamir Khan",
    age: 24,
    isActive: true
});

function createCourse(courseName: string, price: number):{}{
    return {
        courseName: "Spring Boot",
        price:20000
    };
}