// (1)	Traverse the left subtree,
// (2)	Traverse the right subtree,
// (3)	Visit the root


var postOrderTraversal = function(root) {
    if (!root) return [];

    var result = [], stack = [root];
    while (stack.length) {
        var node = stack.pop();
        // insert the node val to the front

        result.unshift(node.val);

        if (node.left) stack.push(node.left); //left firstHalf
        if (node.right) stack.push(node.right); //right
    }

    return result;
}

function postOrderIterative(root) {
    if (!root) return
    
    postOrderIterative(root.left)
    postOrderIterative(root.right)
    console.log(root.val)
}