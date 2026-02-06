package arrays

import "testing"

func TestValidAnagram(t *testing.T) {
	tests := []struct {
		name     string
		s, t     string
		expected bool
	}{
		{"valid anagram", "anagram", "nagaram", true},
		{"not anagram", "rat", "car", false},
		{"empty strings", "", "", true},
		{"different lengths", "a", "ab", false},
		{"duplicate chars", "aab", "baa", true},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := ValidAnagram(tt.s, tt.t)
			if result != tt.expected {
				t.Errorf("got %v, want %v", result, tt.expected)
			}
		})
	}
}
