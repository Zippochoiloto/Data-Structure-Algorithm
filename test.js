// var removeElement = function(nums, val) {
//     let output = []
//     for (el of nums) {
//         if (el !== val) {
//             output.push(el)
//         }
//     }
//     return output
// };

// var replaceElements = function(arr) {
//     for (let i = arr.length - 1, mx = -1; i >= 0; --i)
//             mx = Math.max(arr[i], arr[i] = mx);
//         return arr;
// };

// console.log(replaceElements([17,18,5,4,6,1]))

let reduceArray = function(arr) {
    let length = arr.length ;
    arr[5] = arr[6]
    length-- ;
    return length ;
}


let deleteAlgrorithm = function(nums) {
    if (nums == null) {
        return 0;
    }

    let writePointer = 1;

    for (let readPointer = 1; readPointer < nums.length; readPointer++) {
        // If the current element we're reading is *different* to the previous
        // element...
        if (nums[readPointer] != nums[readPointer - 1]) {
            // Copy it into the next position at the front, tracked by writePointer.
            nums[writePointer] = nums[readPointer];
            // And we need to now increment writePointer, because the next element
            // should be written one space over.
            writePointer++;
        }
    }
    
    // This turns out to be the correct length value.
    return writePointer;
}

// let a = [1,1,2]

var preorderTraversal = function(root) {
    if (!root) return [];
    var result = [];
    var stack = [root];
    
    while(stack.length) {
      var node = stack.pop();
      result.push(node.val);
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    }
    return result;
  };

// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
//     }

//     let a = new TreeNode(1,null,2)
//     let b = new TreeNode()
// // console.log(preorderTraversal(a))

// console.log(deleteAlgrorithm(a))





// console.log(mergeSort([1,9,6,7,7]))

const pivot = (arr, start, end) => {
    const swap = (list, a, b) => [list[a], list[b]] = [list[b], list[a]]

    let pivot = arr[start],
    pointer = start

    for (let i = start; i < arr.length; i++) {
        if (arr[i] < pivot) {
            pointer++
            swap(arr, pointer, i)
        }
    }

    swap(arr, start, pointer);

    return pointer

}



// console.log(quickSort([1,5,3,4]))

var search = function(nums, target) {
    if (nums === null || nums.length === 0) return -1
    let left = 0;
    let right = nums.length - 1
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2) 
        if (nums[mid] === target) {
           return mid; 
        } 
        if (nums[mid] > target) {
            right = mid - 1;
        } 
        else {
          left = mid + 1  
        }
    }
    
    return -1;
};

// console.log(search([1,2,3,2],3))

let nums1 = [1,1,1,1,1]
let s = 3

var findTargetSumWays = function(nums, S) {
    let sums = new Map([[0, 1]]);
    
    for (let num of nums) {
        const next = new Map();
        
        for (let [sum, amount] of sums) {
            const plus = sum + num;
            const minus = sum - num;
        
            next.set(plus, next.has(plus) ? next.get(plus) + amount : amount);
            next.set(minus, next.has(minus) ? next.get(minus) + amount : amount);
        }
        
        sums = next;
    }
    
    return sums.has(S) ? sums.get(S) : 0;
    };


// console.log(findTargetSumWays(nums1, s))

const twoSum = function(nums, target) {
    const map = {}

    for (let i = 0; i < nums.length; i ++) {
        const another = target - nums[i]
        if (another in map) {
            return [map[another], i]
        }
        map[nums[i]] = i
    }

   

    return null
}

// console.log(twoSum([2,7,11,15,4,5], 9))

var isIsomorphic = function(s, t) {
    var obj = {};

    for(var i = 0; i < s.length; i++){
        if(!obj['s' + s[i]]) obj['s' + s[i]] = t[i];
        if(!obj['t' + t[i]]) obj['t' + t[i]] = s[i];
        if(t[i] != obj['s' + s[i]] || s[i] != obj['t' + t[i]]) return false;
    }
    return true;
};

// const test = () => {
//     const a = [1,2,3,4]
//     for (let value of a) {
//         console.log('value: ' + value)
//     }
// }

// console.log(test())

var searchInsert = function(nums, target) {
    let low = 0
    let high = nums.length - 1
    
    while (low <= high) {
        let mid = Math.floor((low + high) /2)
        if (nums[mid] === target) return mid
        if (nums[mid] > target) high = mid - 1
        if (nums[mid] < target) low = mid + 1
        
    }
    console.log('low:', low)
    return low
};

// searchInsert([1,2,4,6], 5)

const convertString = (input) => {
    const res = []
    let checkNumber = (inputNum) => {
        if (inputNum === ' ' || inputNum === '-') return false
        if (Number.isInteger(+inputNum)) return true
        return false
    }

    for (const el of input) {
        if (checkNumber(el) ) {
            // if (res.length > 0 && res.length % 4 == 3) res.push('-')
            // res.push(el)
            res.push(el)
        }
    }

    if (res.length % 3 == 0) {
        for (let i = 0; i < res.length; i++) {
            if (i % 3 == 0 && i > 0) res.splice(i,0, '-')
        }
        console.log('res', res)
    }

    if (res.length % 3 == 1) {
        for (let i = 0; i < res.length; i++) {
            if (i % 3 == 0  && i < res.length -5) res.splice(i,0, '')
            if (i >= res.length - 5 && i % 2 == 0) res.splice(i, 0, '-')
        }
        console.log('res', res)
    }
    
}

convertString('123-  456')