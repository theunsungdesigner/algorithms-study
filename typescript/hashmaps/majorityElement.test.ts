import { majorityElement } from './majorityElement';

describe('majorityElement', () => {
  it('should find majority element in basic case', () => {
    expect(majorityElement([3, 2, 3])).toBe(3);
  });

  it('should handle single element', () => {
    expect(majorityElement([1])).toBe(1);
  });

  it('should find majority in larger array', () => {
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2);
  });

  it('should handle clear majority', () => {
    expect(majorityElement([1, 1, 1, 2])).toBe(1);
  });
});
