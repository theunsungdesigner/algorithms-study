import { containsDuplicate } from './containsDuplicate';

describe('containsDuplicate', () => {
  it('should return true if array has duplicates', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
  });

  it('should return false if array has no duplicates', () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
  });

  it('should return true if all elements are same', () => {
    expect(containsDuplicate([1, 1, 1, 1])).toBe(true);
  });

  it('should return false for empty array', () => {
    expect(containsDuplicate([])).toBe(false);
  });

  it('should return false for single element', () => {
    expect(containsDuplicate([1])).toBe(false);
  });
});
