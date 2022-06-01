const fizzbuzz = require('fizzbuzz');

describe('fizzbuzz', () => {
  test('should print 1 if it receives 1', () => {
    const result = fizzbuzz(1);
    expect(result).toBe(1);
  });

  test('should print fizz if it receives a multiple of 3', () => {
    const result = fizzbuzz(6);
    expect(result).toBe('fizz');
  });

  test('should print buzz if it receives a multiple of 5', () => {
    const result = fizzbuzz(5);
    expect(result).toBe('buzz');
  });

  test('should print fizzbuzz if it receives a multiple of 3 and 5', () => {
    const result = fizzbuzz(15);
    expect(result).toBe('fizzbuzz');
  });

  test('should ask for a number if the parameter is not a number', () => {
    const result = fizzbuzz('x');
    expect(result).toBe('You should enter a number');
  });

  test('should print a message if the parameter is 0', () => {
    const result = fizzbuzz(0);
    expect(result).toBe('0 is not a multiple of any number');
  });
});
