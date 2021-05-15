package main

import (
	"fmt"
	"unicode"
)

// You are given a string word that consists of digits and lowercase English letters.

// You will replace every non-digit character with a space. For example, "a123bc34d8ef34" will become " 123  34 8  34". Notice that you are left with some integers that are separated by at least one space: "123", "34", "8", and "34".

// Return the number of different integers after performing the replacement operations on word.

// Two integers are considered different if their decimal representations without any leading zeros are different.

func main() {
	fmt.Printf("%d", numDifferentIntergers("aaaa123aa1234"))
}

func numDifferentIntergers(word string) int {
	const NaN = -1
	number := NaN
	seen := make(map[int]bool)

	for _, c := range word {
		if unicode.IsDigit(c) {
			if number != NaN {
				number = number*10 + int(c-'0')
			} else {
				number = int(c - '0')
			}
		} else {
			if number != NaN {
				seen[number] = true
				number = NaN
			}
		}
	}
	if number != NaN {
		seen[number] = true
	}
	return len(seen)
}

func isDigit(b byte) bool {
	if '0' <= b && b <= '9' {
		return true
	}
	return false
}
