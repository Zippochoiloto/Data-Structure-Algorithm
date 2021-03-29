// (1)	Visit the root
// (2)	Traverse the left subtree, 
// (3)	Traverse the right subtree


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

function preOrderIterative(root) {
  if (!root) return
  console.log(node.val);
  preOrderIterative(node.left)
  preOrderIterative(node.right)
}