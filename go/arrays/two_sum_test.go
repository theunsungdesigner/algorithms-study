package arrays

import (
	"testing"
)

func TestTwoSum(t *testing.T) {
	tests := []struct {
		name     string
		nums     []int
		target   int
		expected []int
	}{
		{
			name:     "basic case",
			nums:     []int{2, 7, 11, 15},
			target:   9,
			expected: []int{0, 1},
		},
		{
			name:     "different order",
			nums:     []int{3, 2, 4},
			target:   6,
			expected: []int{1, 2},
		},
		{
			name:     "no solution",
			nums:     []int{1, 2, 3},
			target:   10,
			expected: []int{},
		},
		{
			name:     "negative numbers",
			nums:     []int{-1, -2, -3, 5, 10},
			target:   7,
			expected: []int{3, 4},
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := TwoSum(tt.nums, tt.target)
			if !equal(result, tt.expected) && !equal(result, []int{tt.expected[1], tt.expected[0]}) {
				t.Errorf("got %v, want %v", result, tt.expected)
			}
		})
	}
}

func equal(a, b []int) bool {
	if len(a) != len(b) {
		return false
	}
	for i := range a {
		if a[i] != b[i] {
			return false
		}
	}
	return true
}
