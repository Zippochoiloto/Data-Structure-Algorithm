var threeSumCloset = function(nums, target) {
    let result = nums[0] + nums[1] + nums[nums.length -1]

    nums.sort((a, b) => a-b)
    for (let i = 0; i < nums.length; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            if (sum < target) left ++
            if (sum > target) right --
            if (Math.abs(sum-target) < Math.abs(result - target)) result = sum

        }
    }

    return result
}