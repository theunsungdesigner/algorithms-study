# Arrays - Implementation Tips

## Two Sum
- Create a Map to store number → index
- For each number, check if (target - number) exists in map
- Return indices when found

## Contains Duplicate
- Use a Set to track seen numbers
- If number already in set, return true
- If loop completes, return false

## Valid Anagram
- Count character frequencies in both strings
- Compare the frequency maps
- Or: sort both strings and compare

## Testing Your Solutions
```bash
npm test
```

## Running Individual Tests
```bash
npm test -- twoSum.test.ts
```
