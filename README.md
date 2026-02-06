# Algorithms Study Repository

A comprehensive study guide for fundamental algorithms and data structures in **Go** and **TypeScript**.

## Overview

This repository is designed for systematic learning of core algorithms starting from the fundamentals. Each problem includes:
- **Skeleton code** to implement
- **Unit tests** for validation
- **Time/Space complexity analysis**
- **Example usage** and explanations

## Structure

```
algorithms-study/
├── go/              # Go implementations
│   ├── arrays/
│   ├── hashmaps/
│   └── go.mod
├── typescript/      # TypeScript implementations
│   ├── arrays/
│   ├── hashmaps/
│   ├── package.json
│   └── tsconfig.json
└── README.md
```

## Topics

### 1. Arrays
- Two Sum
- Contains Duplicate
- Valid Anagram
- Group Anagrams
- Top K Frequent Elements

### 2. Hash Maps
- Two Sum with HashMap
- Majority Element
- Intersection of Two Arrays
- LRU Cache (intro)

## Getting Started

### Go Setup
```bash
cd go
go test ./...
```

### TypeScript Setup
```bash
cd typescript
npm install
npm test
```

## How to Use This Repository

1. Pick a problem from a topic
2. Open the skeleton file (e.g., `arrays/two_sum.go`)
3. Read the problem description and constraints
4. Implement the function (marked with `TODO`)
5. Run tests to validate your solution
6. Check `EXPLANATION.md` to understand the approach
7. Move to the next problem

## Difficulty Progression

- **Beginner**: Two Sum, Contains Duplicate, Valid Anagram
- **Intermediate**: Group Anagrams, Top K Frequent Elements, Majority Element
- **Advanced**: LRU Cache, Intersection of Arrays

## Tips for Success

- **Focus on fundamentals first**: Master array/hashmap operations before moving on
- **Write pseudocode**: Plan your approach before coding
- **Test edge cases**: Empty inputs, duplicates, negative numbers
- **Optimize iteratively**: Get it working first, then optimize
- **Compare solutions**: See how Go and TypeScript differ

---

Ready to start learning? Pick a topic above and begin with the first problem!
