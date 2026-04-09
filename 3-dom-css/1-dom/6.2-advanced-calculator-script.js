let display = document.getElementById('display');

function append(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function precedence(op) {
    if (op === '+' || op === '-') {
        return 1;
    }
    if (op === '*' || op === '/') {
        return 2;
    }

    return 0;
}

function tokenize(expr) {
    let tokens = [];
    let number = '';

    for (let i = 0; i < expr.length; i++) {
        let ch = expr[i];

        if (/[0-9.]/.test(ch)) {
            number += ch;
        } else {
            if (number) {
                tokens.push(number);
                number = '';
            }

            if (ch === '-' && (i === 0 || /[+\-*/(]/.test(expr[i - 1]))) { 
                // -(...) => -1*(...)
                if (expr[i + 1] === '(') {
                    tokens.push('-1');
                    tokens.push('*');
                } else {
                    number = '-';
                }
            } else {
                tokens.push(ch);
            }
        }
    }

    if (number) {
        tokens.push(number);
    }

    return tokens;
}

function toRPN(expr) {
    let output = [];
    let stack = [];
    let tokens = tokenize(expr);

    tokens.forEach(token => {
        if (!isNaN(token)) {
            output.push(token);
        } else if (token === '(') {
            stack.push(token);
        } else if (token === ')') {
            while (stack.length && stack[stack.length - 1] !== '(') {
                output.push(stack.pop());
            }
            stack.pop();
        } else {
            while (stack.length && precedence(stack[stack.length - 1]) >= precedence(token)) {
                output.push(stack.pop());
            }
            stack.push(token);
        }
    });

    while (stack.length) {
        output.push(stack.pop());
    }

    return output;
}

function evalRPN(rpn) {
    let stack = [];

    rpn.forEach(token => {
        if (!isNaN(token)) {
            stack.push(parseFloat(token));
        } else {
            let b = stack.pop();
            let a = stack.pop();
            switch (token) {
                case '+': 
                    stack.push(a + b); 
                    break;
                case '-': 
                    stack.push(a - b); 
                    break;
                case '*': 
                    stack.push(a * b); 
                    break;
                case '/':
                    if (b === 0) {
                        throw new Error('Division by zero');
                    }
                    stack.push(a / b);
                    break;
            }
        }
    });

    return stack[0];
}

function calculate() {
    try {
        let expr = display.value;
        let rpn = toRPN(expr);
        let result = evalRPN(rpn);
        if (!Number.isInteger(result)) {
            result = parseFloat(result.toFixed(4)); // 4 digits after dot
        }
        display.value = result;
    } catch (e) {
        display.value = 'Error';
    }
}
