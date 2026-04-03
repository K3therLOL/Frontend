const name = prompt("Enter the name: ");
const age = Number(prompt("Enter the age: "));
const tel = prompt("Enter the telephone number: ");

class User {
    #tel;

    constructor(name, age, tel) {
        this.tel = tel;
        this.name = name;
        this.age = age;
    }

    set tel(tel) {
        if (tel.length !== 12 || !tel.startsWith("+7") || !(/^\d+$/.test(tel.slice(1)))) {
            throw new Error("Invalid telephone format.");
        }
        this.#tel = tel;
    }

    get tel() {
        return this.#tel;
    }
    
    hello() {
        console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old.`);
    }
}

try {
    const user = new User(name, age, tel);
    user.hello();
} catch(err) {
    console.log(err.message);
}
