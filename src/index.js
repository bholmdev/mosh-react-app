const person = {
    talk() {
        var self = this;
        setTimeout(() => {
            console.log("this", this);
        }, 1000)
    }
};

person.talk();