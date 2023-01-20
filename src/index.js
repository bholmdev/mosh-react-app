const person = {
    name: "Mosh",
    walk: function() {},
    talk() {}
};

person.talk();
person.name="";

const targetMember = "name";
person[targetMember.value] = "John";