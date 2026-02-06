import { intersection } from './intersection';

describe('intersection', () => {
  it('should find intersection of two arrays', () => {
    const result = intersection([1, 2, 2, 1], [2, 2]);
    expect(result.sort()).toEqual([2]);
  });

  it('should handle multiple intersections', () => {
    const result = intersection([4, 9, 5], [9, 4, 9, 8, 4]);
    expect(result.sort()).toEqual([4, 9]);
  });

  it('should return empty array if no intersection', () => {
    const result = intersection([1, 2, 3], [4, 5, 6]);
    expect(result).toEqual([]);
  });

  it('should avoid duplicates in result', () => {
    const result = intersection([1, 1, 1], [1, 1, 1]);
    expect(result).toEqual([1]);
  });
});
