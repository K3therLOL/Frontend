const inputString = prompt("Введите список натуральных чисел: ");
let nums = inputString.trim().split(/\s+/)
    .map(str => Number(str))
    .filter(num => Number.isInteger(num));

sorted = nums.sort((a, b) => a - b);
alert(sorted.join(" "));
