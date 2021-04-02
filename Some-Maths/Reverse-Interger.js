// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    if (x > 0x7FFFFFFF) return 0
    if (x < -1 * 0x7FFFFFFF) return 0
    const strVer = x.toString()
        let reverseNum = 0
        let result = 0
        if ( x > 0) {
            for (let i = 0 ; i < strVer.length; i++) {
            reverseNum = +strVer[i] * Math.pow(10, i)
            result += reverseNum
            }
        return result > (Math.pow(2,31) - 1 ) ? 0 : result
        }
        for (let i = 1 ; i < strVer.length; i++) {
            reverseNum = +strVer[i] * Math.pow(10, i - 1)
            result += reverseNum
        }
        return result > (Math.pow(2,31) - 1 ) ? 0 : result * -1
        
    };