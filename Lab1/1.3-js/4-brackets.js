function isValid(brackets) {
    if (brackets.length % 2) {
        return false;
    }

    let stack = [];
    for (const bracket of brackets) {
        if (bracket === ")" && !stack.length) {
            return false;
        } else if (bracket === ")" && stack.length) {
            stack.pop();
        } else if (bracket === "(") {
            stack.push(bracket);
        } else {
            return false;
        }
    }

    return stack.length === 0;
}

let brackets = prompt("Введите последовательность открывающихся и закрывающихся круглых скобок: ");
alert(isValid(brackets) ? "Правильная" : "Неправильная");
