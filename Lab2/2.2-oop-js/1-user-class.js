const name = prompt("Enter the name: ");
const age = Number(prompt("Enter the age: "));

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    hello() {
        console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old.`);
    }
}

const user = new User(name, age);
user.hello();
