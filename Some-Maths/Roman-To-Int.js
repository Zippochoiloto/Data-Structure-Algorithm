/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let mapper = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let total = 0
    for (let i = 0; i < s.length ;  i ++) {
        if (mapper[s[i]] < mapper[s[i+1]]) {
            total  -= mapper[s[i]]            
        }
        else {
            total += mapper[s[i]]
        }
        
        
    }
    return total
};