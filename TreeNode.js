const LEFT = 0
const RIGHT = 1;

class TreeNode {
    constructor(value) {
        this.value = value
        this.descendants = []
        this.parent = null;
    }

    get left() {
        return this.descendants[LEFT]
    }

    set left(node) {
        this.descendants[LEFT] = node;
        if (node) {
            node.parent = this
        }
    }

    get right() {
        return this.descendants[RIGHT]
    }

    set right(node) {
        this.descendants[RIGHT] = node;
        if (node) {
            node.parent = this;
        }
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null;
        this.size = 0
    }

    //helper

    findNodeAndParent(value) {
        let node = this.root
        let parent;

        while (node) {
            if (node.value === value) {
                break;
            }

            parent = node;
            node = (value >= node) ? node.right : node.left
        }

        return { found: node, parent }
    }

    add(value) {
        const newNode = new TreeNode(value);
        if (this.root) {
            const { found, parent } = this.findNodeAndParent(value)
            if (found) { //duplicated: value already exist on the tree
                found.meta.multiplicity = (found.meta.multiplicity || 1) + 1
            } else if (value < parent.value) {
                parent.left = newNode
            } else {
                parent.right = newNode
            }
        } else {
            this.root = newNode
        }

        this.size += 1
        return newNode

    }

    find(value) {
        let node = this.root
        while (node) {
            if (node.value === value) {
                return value
            }

            parent = node;
            node = (value >= node) ? node.right : node.left
        }
        return false
    }

    remove(value) {
        const nodeToRemove = this.find(value)
        if (!nodeToRemove) return false

        // Combine left and right children into one subtree without node to remove
        const nodeToRemoveChildren = this.combineLeftIntoRightSubtree(nodeToRemove)
        if (nodeToRemove.meta.multiplicity && nodeToRemove.meta.multiplicity > 1) {
            nodeToRemove.meta.multiplicity -= 1 //handle duplicated
        } else if (nodeToRemove === this.root) {
            // Replace (root) node to delete with the combined subtree
            this.root = nodeToRemoveChildren
            this.root.parent = null
        } else {
            const side = nodeToRemove.isParentLeftChild ? 'left' : 'right'
            const { parent } = nodeToRemove

            // Replace node to delete with the combined subtree

            parent[side] = nodeToRemoveChildren
        }

        this.size -= 1;
        return true;
    }

    combineLeftIntoRightSubtree(node) {
        if (node.right) {
            const leftmost = this.getLeftMost(node.right)
            leftmost.left = node.left
            return node.right
        }

        return node.left
    }

    getLeftMost(node) {
        let left
        while(node.left) {
            left = node.left
        }

        return left
    }

    isParentLeftChild(node) {
        if (node.left) {
            return true
        }
        return false
    }

    // inOrderTraversal (node = this.root) {
    //     if (this.root.left) {yield this.inOrderTraversal(node.left)}
    //     yield node;

    //     if (node.right) {yield this.inOrderTraversal(node.right)}
    // }
}

function* foo(index) {
    while (index < 2) {
      yield index;
      index++;
    }
  }
  
  const iterator = foo(0);
  
  console.log(iterator.next().value);
  // expected output: 0
  
  console.log(iterator.next().value);

let b = new BinarySearchTree()
let node1 = new TreeNode(1)
b.add(node1)

console.log('a', iterator.next().value)
