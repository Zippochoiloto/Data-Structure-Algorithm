/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {

    nums.sort((a,b) => a-b);
    
    const res = []
    
    for (let i = 0 ; i < nums.length - 2; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i - 1] === nums[i]) continue
        let left = i + 1;
        let right = nums.length - 1
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            if (sum < 0) left+=1
            else if (sum > 0) right -= 1
            else {
                res.push([nums[i], nums[left], nums[right]])
                while (left < right && nums[left] === nums[left + 1]) left += 1
                while (left < right && nums[right] === nums[right - 1]) right -= 1
                left += 1
                right -= 1
            }
        }
    }
    
    return res
};