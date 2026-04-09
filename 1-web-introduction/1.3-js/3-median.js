function sum(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}

function median(...nums) {
    let sorted = nums.sort((a, b) => a - b);
    let mid = Math.trunc(sorted.length / 2);
    if (sorted.length % 2) {
        return sum(sorted.slice(mid, mid + 1));
    }
    return sum(sorted.slice(mid - 1, mid + 1)) / 2;
}

alert(median(-5, -1, 0, 3, 10)) // Output: 0
args = [6, 1, 4, 2, 3, 5]
alert(median(...args)) // Output: 3.5
