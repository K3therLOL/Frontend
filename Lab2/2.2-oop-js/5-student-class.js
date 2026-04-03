const name = prompt("Enter the name: ");
const age = prompt("Enter the age: ");
const tel = prompt("Enter the telephone number: ");

class User {
    #age;
    #tel;

    constructor(name, age, tel) {
        this.tel = tel;
        this.name = name;
        this.age = age;
    }

    set age(val) {
        const age = Number(val);
        if (Number.isNaN(age) || age < 1 || age > 100) {
            throw new Error("Invalid age format.");
        }
        this.#age = age;
    }

    get age() {
        return this.#age;
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

class Student extends User {
    #knowledge = 0;

    constructor(name, age, tel) {
        super(name, age, tel);
    }

    hello() {
        console.log(`Hi! My name is ${this.name}. I am ${this.age} years old. And I am a student!`);
    }

    learn() {
        console.log(`knowledge equal ${this.#knowledge}`);
        this.#knowledge++;
    }
}

try {
    const student = new Student(name, age, tel);
    student.learn();
    student.learn();
} catch(err) {
    console.log(err.message);
}
