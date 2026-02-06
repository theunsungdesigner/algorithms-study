# Quick Start Guide

## Initial Setup

### For Go
```bash
cd go
go test ./...  # Run all tests to verify setup
```

### For TypeScript
```bash
cd typescript
npm install
npm test      # Run all tests to verify setup
```

## How to Solve a Problem

1. **Choose a problem** (start with arrays/twoSum)
2. **Read the problem** in the skeleton file
3. **Read EXPLANATION.md** in the same folder
4. **Write pseudocode** first - outline the algorithm
5. **Implement the function** - fill in the TODO
6. **Run tests**:
   ```bash
   # Go
   cd go/arrays
   go test -v  # -v for verbose output
   
   # TypeScript
   cd typescript
   npm test -- twoSum.test.ts
   ```
7. **Debug if tests fail** - read error messages carefully
8. **Check the explanation** if stuck - but try to solve it first!
9. **Move to the next problem**

## Testing Tips

- **Red-Green-Refactor**: Watch tests fail → implement → watch pass
- **Edge cases**: Test with empty input, single element, duplicates
- **Performance**: Once working, think about optimizations

## Language Comparison

As you solve problems in both Go and TypeScript:

| Concept | Go | TypeScript |
|---------|----|----|
| Hash Map | `map[type]value{}` | `new Map()` |
| Set/Dedup | `map[type]bool` | `new Set()` |
| Iterate | `for i, v := range arr` | `for (const v of arr)` |
| Length | `len(arr)` | `arr.length` |
| Append | `append(slice, val)` | `arr.push(val)` |

## Example: Solving Two Sum

### Go
```go
func TwoSum(nums []int, target int) []int {
    seen := make(map[int]int)
    for i, num := range nums {
        complement := target - num
        if idx, exists := seen[complement]; exists {
            return []int{idx, i}
        }
        seen[num] = i
    }
    return []int{}
}
```

### TypeScript
```typescript
export function twoSum(nums: number[], target: number): number[] {
    const seen = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (seen.has(complement)) {
            return [seen.get(complement)!, i];
        }
        seen.set(nums[i], i);
    }
    return [];
}
```

Notice the pattern is the same - just different syntax!

## Next Steps After Arrays

1. ✓ Complete all array problems
2. ✓ Complete all hashmap problems
3. Start strings (coming soon)
4. Stacks & queues
5. Linked lists

---

**You've got this!** Start with Two Sum in either language and message back when you need help.
