import { twoSum } from './twoSum';

describe('twoSum', () => {
  it('should find two numbers that sum to target', () => {
    const result = twoSum([2, 7, 11, 15], 9);
    expect(result.sort()).toEqual([0, 1]);
  });

  it('should handle different order', () => {
    const result = twoSum([3, 2, 4], 6);
    expect(result.sort()).toEqual([1, 2]);
  });

  it('should return empty array if no solution', () => {
    const result = twoSum([1, 2, 3], 10);
    expect(result).toEqual([]);
  });

  it('should handle negative numbers', () => {
    const result = twoSum([-1, -2, -3, 5, 10], 7);
    expect(result.sort()).toEqual([3, 4]);
  });
});
