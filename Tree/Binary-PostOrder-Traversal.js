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