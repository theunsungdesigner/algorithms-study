# Valid Anagram

## Problem
Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.

Two approaches:

### Approach 1: Count Characters (Recommended)
- Count frequency of each character in both strings
- Compare frequency maps
- O(n) time, O(1) space (max 26 letters)

### Approach 2: Sort and Compare
- Sort both strings
- Compare if they're equal
- O(n log n) time, O(1) space

## Complexity (Recommended)
- **Time**: O(n)
- **Space**: O(1) - fixed size alphabet

## Example
```
s = "anagram", t = "nagaram"
s counts: {a:3, n:1, g:1, r:1, m:1}
t counts: {n:1, a:3, g:1, r:1, m:1}
Match! Return true
```
