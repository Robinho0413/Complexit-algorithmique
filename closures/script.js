
let f = function () {
    let name = "Bob";
    let age = 5;

    return {
        setAge: function (newAge) {
            age = newAge;
        },
        getAge: function () {
            return age;
        },
        setName: function (newName) {
            name = newName;
        },
        getName: function () {
            return name;
        }
    }
}

let cat = f();