package arrays

import "testing"

func TestContainsDuplicate(t *testing.T) {
	tests := []struct {
		name     string
		nums     []int
		expected bool
	}{
		{"has duplicate", []int{1, 2, 3, 1}, true},
		{"no duplicate", []int{1, 2, 3, 4}, false},
		{"all same", []int{1, 1, 1, 1}, true},
		{"empty", []int{}, false},
		{"single element", []int{1}, false},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := ContainsDuplicate(tt.nums)
			if result != tt.expected {
				t.Errorf("got %v, want %v", result, tt.expected)
			}
		})
	}
}
