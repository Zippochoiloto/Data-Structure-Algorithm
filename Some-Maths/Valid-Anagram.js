/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    let mapper = new Map()
    
    for (let i of s) {
        if (mapper.has(i)) {
            mapper.set(i, mapper.get(i) + 1)
        } else {
            mapper.set(i, 1)
        }
    }
    
    for (let i of t) {
        if (mapper.has(i)) {
            mapper.set(i, mapper.get(i) - 1)
        } else {
            return false
        }
    }
    
    for (let value of mapper.values()) {
        if (value > 0) return false
    }
    
    return true
};