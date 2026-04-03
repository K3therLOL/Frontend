const name = prompt("Enter the name: ");
const age = Number(prompt("Enter the age: "));

function User(name, age) {
    this.name = name;
    this.age = age;

    this.hello = function() {
        console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old.`);
    };
}

const user = new User(name, age);
user.hello();
