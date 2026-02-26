const n = Number(prompt("Введите нужное количество простых чисел: "));
let primes = [];

if (n <= 0) {
    alert(primes.join(""));
    self.close();
}

border = Math.floor(n * Math.log(n) + n * Math.log(Math.log(n) + 1)) + 4;
let sieve = new Array(border).fill(true);
for (let i = 2; i <= border; ++i) {
    if (sieve[i]) {
        for (let k = i * i; k <= border; k += i) {
            sieve[k] = false;
        }
    }
}

for (let i = 2; i < sieve.length; ++i) {
    if (sieve[i]) {
        primes.push(i);
    }
}

alert(primes.slice(0, n).join(" "));
