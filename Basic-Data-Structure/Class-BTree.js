export class BTreeNode {
    constructor(isLeaf) {
        // list of values in the nodes
        this.values = [];
        this.leaf = isLeaf;
        // Reference to the tree its belong
        this.children = [];
        this.tree = null;       
        this.parent = null;
    }

    // Number of values
    get n() {
        return this.values.length;
    }

    // Add value
    addValue(value) {
        if (!value) {
            return;
        }

        let pos = 0;
        while (pos < this.n && this.values[pos] < value) {
            pos++;
        }

        this.values.splice(pos, 0 ,value);
    }

    removeValue(value) {
        if (pos >= this.n) {
            return null;
        }

        return this.values.splice(pos, 1)[0];
    }

    // Add child node at position pos 
    addChild(node, pos) {
        this.children.splice(pos, 0, node);
        node.parent = this;
    }

    removeChild(pos) {
        return this.children.splice(pos, 1)[0];
    }
}


//BTree Class ( 2-3 )
export class Btree {
    constructor(order) {
        this.order = order;
        this.root = null;
    }

    searchValue(node, value) {
        if (node.values.includes(value)) {
            return node;
        }

        if (node.leaf) {
            // Value was not found 
            return null;
        }

        let child = 0;
        while (child < node.n && node.values[child] < parseInt(value, 10)) {
            child++;
        }

        return this.searchValue(node.children[child])
    }

    insert(value) {
        const actual = this.root
        if (actual.n === 2 * this.order - 1) {
            // Create new node to become the root
            // Append the old root to the new node

            const temp = new BTreeNode(false);
            temp.tree = this;
            this.root = temp;
            temp.addChild(actual, 0)
            this.split(actual, temp, 1);
            this.insertNonFull(temp, parseInt(value))
        } else {
            this.insertNonFull(actual, parseInt(value))
        }
    }

    split(child, parent, pos) {
        const newChild = new BTreeNode(child.leaf)
        newChild.tree = this.root.tree;

        // Create new child
        // Pass value from old child to the new

        for (let k = 1; k < this.order; k++) {
            newChild.addValue(child.removeValue(this.order))
        }

        // Trasspass child nodes from the old child to the new node
        if (!child.leaf) {
            for (let k = 1; k <= this.order; k++) {
                newChild.addChild(child.deleteChild(this.order), k - 1)
            }
        }

        // Add new child to the parent node
        parent.addChild(newChild, pos);
        // Pass value to parent node
        parent.addValue(child.removeValue(this.order - 1));
        parent.leaf = false;
    }

    // Insert a value in a not-full node

    insertNonFull (node, value) {
        if (node.leaf) {
            node.addValue(value);
            return;
        }

        let temp = node.n
        while( temp >= 1 && value < node.values[temp - 1]) {
            temp = temp - 1;
        }

        if (node.children[temp].n === 2 * this.order - 1) {
            this.split(node.children[temp], node, temp + 1)
            if (value > node.values[temp]) temp = temp + 1
        }
        this.insertNonFull(node.children[temp], value)
    }


}
