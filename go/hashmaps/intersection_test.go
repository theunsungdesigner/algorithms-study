package hashmaps

import (
	"slices"
	"testing"
)

func TestIntersection(t *testing.T) {
	tests := []struct {
		name     string
		nums1    []int
		nums2    []int
		expected []int
	}{
		{"basic", []int{1, 2, 2, 1}, []int{2, 2}, []int{2}},
		{"no intersection", []int{4, 9, 5}, []int{9, 4, 9, 8, 4}, []int{4, 9}},
		{"empty result", []int{1, 2, 3}, []int{4, 5, 6}, []int{}},
		{"duplicates in input", []int{1, 1, 1}, []int{1, 1, 1}, []int{1}},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := Intersection(tt.nums1, tt.nums2)
			slices.Sort(result)
			slices.Sort(tt.expected)
			if !slices.Equal(result, tt.expected) {
				t.Errorf("got %v, want %v", result, tt.expected)
			}
		})
	}
}
