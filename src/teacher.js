import { Person } from "./person";

export const promote = () => {}

class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }

    teach() {
        console.log("teach");
    }
};

export default Teacher;