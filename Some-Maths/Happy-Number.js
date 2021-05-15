// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.

var isHappy = function(n) {
    let set = new Set();
     while (!set.has(n)) {
        set.add(n);
        let s = n.toString();
		n = 0;
        for (let i = 0; i < s.length; ++i) {
            n += Math.pow(+s[i],2);
        }
        if (n === 1) return true;
    }
    return false;
};