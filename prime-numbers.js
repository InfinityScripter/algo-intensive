const PrimeNumbers = (num) => {
    let primeNumbers = [];
    for (let i = 2; i <= num; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
            }
        }
        if (isPrime) primeNumbers.push(i);
    }
    return primeNumbers;
}

console.log(PrimeNumbers(2)); 