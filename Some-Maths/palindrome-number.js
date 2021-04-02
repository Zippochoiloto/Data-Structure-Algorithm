var isPalindrome = function(x) {
    if (Math.abs(x) > Math.pow(2,31) - 1) return false
    const strVer = x.toString()
    for (let i = 0; i <= strVer.length / 2; i++) {
        if (strVer.charAt(i) !== strVer.charAt(strVer.length - i - 1)) return false
    }
    
    return true
};

var isPalindrome2 = function(x) {
    if (Math.abs(x) > Math.pow(2,31) - 1) return false
    const strVer = x.toString()
    for (let i = 0; i <= strVer.length / 2 + 1; i++) {
        if (strVer[i] !== strVer[strVer.length - i - 1]) return false
    }
    
    return true
};

console.log(isPalindrome(121))
console.log(isPalindrome2(121))