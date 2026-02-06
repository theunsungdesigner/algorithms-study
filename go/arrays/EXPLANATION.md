# Two Sum

## Problem
Given an array of integers `nums` and an integer `target`, return the indices of the two numbers that add up to `target`. You may assume each input has exactly one solution, and you cannot use the same element twice.

## Approaches

### Brute Force (Not Recommended)
- Check every pair: `O(n²)` time, `O(1)` space
- Too slow for interviews

### Optimal: Hash Map
- First pass: Store each number and its index in a map
- Second pass: For each number, check if `target - num` exists in the map
- `O(n)` time, `O(n)` space

## Implementation Tips
1. Create a map: `map[value]index`
2. Iterate through nums
3. Check if `target - current` is in map
4. If yes, return the indices
5. If no, add current number to map

## Complexity
- **Time**: O(n) - single pass through array
- **Space**: O(n) - hashmap storage

## Example
```
nums = [2, 7, 11, 15], target = 9
Map: {}
i=0, num=2: 9-2=7 not in map, add {2: 0}
i=1, num=7: 9-7=2 in map at index 0! Return [0, 1]
```
