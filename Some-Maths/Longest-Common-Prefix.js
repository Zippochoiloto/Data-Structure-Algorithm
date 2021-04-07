/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let prefixStr = ''
    if (!strs.length) return ''
    if (strs.length === 1) return strs[0]
    
    let checkPrefixEl = (str) => {
        for (let el of strs) {
            if (!el.startsWith(str)) {
                return false
            }
        }
        return true
    }
    
    for (let i = 0; i <= strs[0].length; i++) {
        let str = strs[0].slice(0, i)
       if (!checkPrefixEl(str)) {
           return prefixStr
       }
        prefixStr = str
    }
    return prefixStr
};