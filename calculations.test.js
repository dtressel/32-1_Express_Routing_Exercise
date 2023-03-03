const {calculateMean, calculateMedian, calculateMode} = require('./calculations');

test('calculateMean should properly return the mean of an array', () => {
  expect(calculateMean([1, 3, 6, 8, 9])).toBeCloseTo(5.4);
  expect(calculateMean([1, 3, 3, 7, 9, 103])).toBe(21);
  expect(calculateMean([135, 6, 12])).toBe(51);
  expect(calculateMean([12, 4, 5, 7])).toBe(7);
})

test('calculateMedian should properly return the median of an array with an even number of values', () => {
  expect(calculateMedian([1, 3, 3, 7, 9, 103])).toBe(5);
  expect(calculateMedian([12, 4, 5, 7])).toBe(6);
})

test('calculateMedian should properly return the median of an array with an odd number of values', () => {
  expect(calculateMedian([1, 3, 6, 8, 9])).toBe(6);
  expect(calculateMedian([135, 6, 12])).toBe(12);
})

test('calculateMode should properly return the mode of an array with one number occuring the most frequently', () => {
  expect(calculateMode([1, 3, 3, 7, 9, 103])).toBe(3);
})

test('calculateMode should properly return the mode of an array with several numbers occuring the most frequently', () => {
  expect(calculateMode([1, 3, 3, 7, 9, 103, 7, 103])).toEqual([3, 7, 103]);
})

test('calculateMode should properly return a mode of none for an array where each number occurs equally frequently', () => {
  expect(calculateMode([12, 4, 5, 7])).toBe('none');
})