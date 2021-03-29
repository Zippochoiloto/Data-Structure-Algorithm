// (1)	Traverse the left subtree, 
// (2)	Visit the root
// (3)	Traverse the right subtree


function inorderTraversal(root) {
    const stack = [];
    const res = [];

    while (root || stack.length) {
        if (root) {
            stack.push(root);
            root = root.left
        } else {
            root = stack.pop();
            res.push(root.val)
            root = root.right;
        }
    }

    return res;
}

function IterativeTraversal(root) {
    if (!root) return;
    IterativeTraversal(root.left)
    console.log(root.val);
    IterativeTraversal(root.right)
}