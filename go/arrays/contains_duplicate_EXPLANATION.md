# Contains Duplicate

## Problem
Given an integer array `nums`, return `true` if any value appears at least twice in the array, and `false` if every element is distinct.

## Approach: Hash Set
- Use a set to track seen numbers
- For each number, check if it's already in the set
- If yes, return true
- If loop completes, return false

## Complexity
- **Time**: O(n)
- **Space**: O(n)

## Edge Cases
- Empty array → false
- Single element → false
- All duplicates → true (early return)
