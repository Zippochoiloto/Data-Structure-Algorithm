//The add method has two while loops. The first looks for an appropriate place to insert an element and the second iterates through the remaining characters of the string, filling out the trie.
// The search method returns the depth of the given key or -1 if it does not find any.
// If the string in question is present in the trie, the remove method recurses down to the node that represents the last character of the string and removes nodes associated with the characters in the string only if they have no sub nodes dependent on them.
let node = {
    key : null,
    value : null,
    children : []
}

function Trie () {
    this.head = {
        key: '',
        children: {}
    }
}

Trie.prototype.add = function(key) {
    let curNode = this.head, newNode = null, curChar = key.slice(0,1)
    key = key.slice(1);

    while (typeof curNode.children[curChar] !== 'undefined' && curChar.length > 0) {
        curNode = curNode.children[curChar];
        curChar = key.slice(0,1);
        key = key.slice(1);
    }

    while (curChar.length > 0) {
        newNode = {
            key: curChar,
            value: key.length === 0 ? null : undefined,
            children: {}
        }

        curNode.children[curChar] = newNode;
        curNode = newNode;
        curChar = key.slice(0,1);
        key = key.slice(1)
    }

    Trie.prototype.search = function(key) {
        let curNode = this.head, curChar = key.slice(0,1) ,d = 0
        key = key.slice(1);

        while (typeof curNode.children[curChar] !== "undefined" && curChar.length > 0) {
            curNode = curNode.children[curChar];
            curChar = key.slice(0,1)
            key = key.slice(1);
            d += 1;
        }
    }

    Trie.prototype.remove = function(key) {
        let d = this.search(key);
        if (d > -1) {
            removeH(this.head, key, d)
        }
    }

    function removeH(node, key, depth) {
        if (depth === 0 && Object.keys(node.children).length === 0) {
            return true
        }
    }

    let curChar = key.slice(0,1)

    if (removeH(node.children[curChar], key.slice(1), depth - 1)) {
        delete node.children[curChar];
        if (Object.keys(node.children).length === 0 ) {
            return true
        } else {
            return false
        }
    }
    else {
        return false;
    }
    }
