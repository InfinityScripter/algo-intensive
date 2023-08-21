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



describe('Prime Numbers', () => {
    test('Prime Numbers', () => {
        expect(primeNumbers(2)).toEqual([2]);
        expect(primeNumbers(6)).toEqual([2, 3, 5]);
        expect(primeNumbers(13)).toEqual([2, 3, 5, 7, 11, 13]);
        expect(primeNumbers(30)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
    });
});