import { Person } from "./person";
import Teacher, { promote } from "./teacher";

const person = new Person("Mosh");
const teacher = new Teacher("Mosh", "MSc");
console.log(person);
console.log(teacher);