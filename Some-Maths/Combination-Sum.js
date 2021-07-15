// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

// It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

 

// Example 1:

// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.

let combinationSum = function (candidates, target) {

    candidates.sort((a, b) =>  a-b)

    let paths = [];

    let find = function (t, p, i) {
        console.log('target',t)
        console.log('path', p)
        console.log('index', i)
        if (t === 0) {
            paths.push(p);
            return
        }
        else if (t < 0) {
            console.log('Will we ever reach here ?')
            return
        }
        else {
            while (t - candidates[i] >= 0 && i < candidates.length) {
                find(t - candidates[i], [...p,candidates[i]], i)
                i ++
            }
        }
    }

    find(target, [], 0)
    return paths
}

console.log(combinationSum([2,3,6,7], 10))