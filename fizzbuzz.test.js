const fizzbuzz = require('./fizzbuzz');

test('return fizz if number is divisible by 3', () => {
  expect(fizzbuzz(3)).toBe("Fizz");
});
test('return buzz if number is divisible by 5', () => {
  expect(fizzbuzz(10)).toBe("Buzz");
});
test('return fizzBuzz if number is divisible by 3 and 5', () => {
  expect(fizzbuzz(15)).toBe("FizzBuzz");
});
test('returne o número se não for divisível por 3 e 5', () => {
  expect(fizzbuzz(2)).toBe(2);
});