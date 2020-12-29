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
    console.log(arr)
    console.log(arr.length)
    return length ;
}

var removeDuplicates = function(nums) {
    if(nums.length === 0) {
        return 0
    }
    let result = 1, i = 0, j = 1;
    
    while(i < nums.length && j < nums.length) {
        if(nums[j] === nums[i]) {
            j++;
        } else {
            result += 1;
            i++;
            nums[i] = nums[j];
            j++;
        }
    }
    console.log(nums)
    return result;
};

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

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
    }

    let a = new TreeNode(1,null,2)
    let b = new TreeNode()
// console.log(preorderTraversal(a))

// console.log(deleteAlgrorithm(a))

function merge(arr1, arr2) {
    let result = []
    let i = 0;
    let j = 0 ;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] > arr2[j]) {
            result.push(arr2[j]);
            j++;

        } else {
            result.push(arr1[i])
            i++;
        }
    }

    while(i < arr1.length) {
        result.push(arr1[i])
        i++
    }

    while(j < arr2.length) {
        result.push(arr2[j])
        j++
    }
    console.log('result', result)
    return result
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let halfPoint = Math.ceil(arr.length / 2)

    let firstHalf = mergeSort(arr.splice(0, halfPoint))

    let secondHalf = mergeSort(arr.splice(-halfPoint))

    return merge(firstHalf, secondHalf)
}

console.log(mergeSort([1,9,6,7]))