# Majority Element

## Problem
Given an array `nums` of size `n`, return the element that appears more than `n/2` times. You may assume the majority element always exists.

## Approaches

### Approach 1: Hash Map (Simplest)
- Count frequency of each element
- Return element with frequency > n/2
- O(n) time, O(n) space

### Approach 2: Sorting (O(n log n) time)
- Sort the array
- Return middle element (it must be majority)

### Approach 3: Boyer-Moore Voting Algorithm (Advanced)
- O(n) time, O(1) space
- Don't implement yet - learn approach 1 first

## Complexity (Recommended)
- **Time**: O(n)
- **Space**: O(n)

## Example
```
nums = [3, 2, 3]
n = 3, need more than 1.5 occurrences
count: {3: 2, 2: 1}
3 appears 2 times > 1.5, return 3
```
