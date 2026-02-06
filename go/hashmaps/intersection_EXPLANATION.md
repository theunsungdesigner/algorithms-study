# Intersection of Two Arrays

## Problem
Given two integer arrays `nums1` and `nums2`, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

## Approach: Hash Set
1. Create a set from nums1
2. Iterate through nums2
3. If element exists in set, add to result (and remove from set to avoid duplicates)
4. Return result

## Complexity
- **Time**: O(n + m)
- **Space**: O(min(n, m))

## Example
```
nums1 = [1, 2, 2, 1], nums2 = [2, 2]
Set from nums1: {1, 2}
Check nums2:
  - 2 in set? Yes, add to result and remove
Result: [2]
```
