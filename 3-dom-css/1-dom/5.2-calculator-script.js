let firstOperand = "";
let secondOperand = "";
let currentOperator = null;
let shouldResetScreen = false;

const display = document.getElementById('display');

function appendNumber(number) {
    if (display.value === "0" || shouldResetScreen) {
        display.value = number;
        shouldResetScreen = false;
    } else {
        display.value += number;
    }
}

function setOperator(operator) {
    // If an operator is already set and we type another one, calculate first
    if (currentOperator !== null && !shouldResetScreen) {
        calculate(); // Calculate the previous operation
    }
    firstOperand = display.value;
    currentOperator = operator;
    shouldResetScreen = true; // Prepare to reset for the second number
}

function clearDisplay() {
    display.value = "0";
    firstOperand = "";
    secondOperand = "";
    currentOperator = null;
    shouldResetScreen = false; // Reset flag too
}

function calculate() {
    // If no operator is set, or if we just pressed an operator and haven't entered the second number yet
    if (currentOperator === null || shouldResetScreen) return;

    secondOperand = display.value;
    let result = 0;
    let num1 = parseFloat(firstOperand);
    let num2 = parseFloat(secondOperand);

    switch (currentOperator) {
        case '+': 
            result = num1 + num2; 
            break;
        case '-': 
            result = num1 - num2; 
            break;
        case '*': 
            result = num1 * num2; 
            break;
        case '/': 
            if (num2 === 0) {
                alert("Error: Division by zero is not allowed");
                clearDisplay();
                return;
            }
            result = num1 / num2; 
            break;
    }

    // Display the result. If result is not a finite number (e.g. NaN from invalid input), display 0 or error.
    display.value = isFinite(result) ? result : "Error";

    // Reset for the next operation, allowing the result to be the first operand
    firstOperand = result; // The result becomes the first operand for potential chained operations
    currentOperator = null; // Clear operator until a new one is pressed
    shouldResetScreen = true; // Next number pressed should clear the display
}

clearDisplay();
