# Hash Maps - Implementation Tips

## Majority Element
- Create a Map to count element frequencies
- Track the element with count > n/2
- Return that element

## Intersection of Two Arrays
- Create a Set from nums1
- Iterate through nums2
- If element exists in set and not already in result, add it
- Remove from set after adding to avoid duplicates

## Testing Your Solutions
```bash
npm test
```

## Key Differences from Go
- TypeScript uses `Map` and `Set` (similar to Go maps)
- No need for explicit type conversions
- Use `for...of` loops for cleaner iteration
