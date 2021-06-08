// Given a string s, return the longest palindromic substring in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"

/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    let checkPalindromic = (s) => {
        if (s.length === 1) return true
        let left = 0
        let right = s.length - 1
        while (left < right) {
            if (s[left] === s[right]) {
                left ++
                right --
            } else {
               return false 
            }
            
        }
        return true
    }
    let max = -1
    let res = ''
    for (let i = 0 ; i <= s.length;i++) {
        for (let j= i + 1; j <= s.length; j++) {
            if (checkPalindromic(s.slice(i,j)) && j - i > max) {
                max = j -i
                res = s.slice(i,j)
            }
        }
    }
    
    return res
};