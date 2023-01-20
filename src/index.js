const first = { name: "Mosh"};
const second = { job: "Instructor" }

const combine = { ...first, ...second, location: "Austrailia" }
console.log(combine);

const clone = { ...first }
console.log(clone);