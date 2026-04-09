const originalReverse = Array.prototype.reverse;

Array.prototype.reverse = function() {
    this.push(...this);
}

const arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr);
