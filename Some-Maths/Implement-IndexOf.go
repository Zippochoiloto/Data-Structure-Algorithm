// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
package main

import "fmt"

func main() {
	strStr("aaaa", "aa")
	fmt.Print(strStr("aaba", "ba"))
}

func strStr(haystack string, needle string) int {
	if needle == "" {
		return 0
	}
	length := len(needle)

	for i := 0; i < len(haystack)-len(needle)+1; i++ {
		if haystack[i:i+length] == needle {
			return i
		}
	}

	return -1
}
