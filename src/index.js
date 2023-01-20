class Person {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log("walk");
    }
} ;

const person = new Person("Mosh");

class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }

    teach() {
        console.log("teach");
    }
};

const teacher = new Teacher("Mosh", "MSc");