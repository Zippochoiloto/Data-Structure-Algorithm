const n1 = new TreeNode(1)
const n2 = new TreeNode(2)
const n3 = new TreeNode(3)
const n4 = new TreeNode(4)

n1.right = n2
n2.right = n3;
n3.right = n4;

function leftRotation(node) {
    const newParent = node.right
    const grandparent = node.parent
}

function swapParentChild(oldChild, newChild, parent) {
    if (parent) {
        const side = oldChild.isParentRightChild ? 'right' : 'left'
        //  this set parent chihld AND also

        parent[side] = newChild
    } else {
        newChild.parent = null
    }
}

function rightRotation(node) {
    const newParent = node.left;
    const grandparent = node.parent;

    swapParentChild(node, newParent,grandparent);

    newParent.right = node;
    node.left = undefined
    return newParent
}