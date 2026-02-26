const inputString = prompt("Введите список натуральных чисел: ");
let nums = inputString.trim().split(/\s+/)
    .map(str => Number(str))
    .filter(num => Number.isInteger(num));

alert(nums.map(num => num % 5).join(" "));
