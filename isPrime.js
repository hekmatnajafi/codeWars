function isPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num > 1;
}

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(17));
console.log(isPrime(30));