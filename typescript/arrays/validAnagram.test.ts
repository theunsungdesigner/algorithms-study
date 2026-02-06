import { validAnagram } from './validAnagram';

describe('validAnagram', () => {
  it('should return true for valid anagram', () => {
    expect(validAnagram('anagram', 'nagaram')).toBe(true);
  });

  it('should return false for non-anagram', () => {
    expect(validAnagram('rat', 'car')).toBe(false);
  });

  it('should return true for empty strings', () => {
    expect(validAnagram('', '')).toBe(true);
  });

  it('should return false for different lengths', () => {
    expect(validAnagram('a', 'ab')).toBe(false);
  });

  it('should handle duplicate characters', () => {
    expect(validAnagram('aab', 'baa')).toBe(true);
  });
});
