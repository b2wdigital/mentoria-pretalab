const fizzbuzz = require('./fizzbuzz');

test('return fizz if number is divisible by 3', () => {
  expect(fizzbuzz(3)).toBe("fizz");
});