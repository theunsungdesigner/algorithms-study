package hashmaps

import "testing"

func TestMajorityElement(t *testing.T) {
	tests := []struct {
		name     string
		nums     []int
		expected int
	}{
		{"basic", []int{3, 2, 3}, 3},
		{"single", []int{1}, 1},
		{"large majority", []int{2, 2, 1, 1, 1, 2, 2}, 2},
		{"clear majority", []int{1, 1, 1, 2}, 1},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := MajorityElement(tt.nums)
			if result != tt.expected {
				t.Errorf("got %v, want %v", result, tt.expected)
			}
		})
	}
}
