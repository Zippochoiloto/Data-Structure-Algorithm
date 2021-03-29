

// •	Breadth-first search: Explores all of the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level

function BreadthFirstSearch(root) {
    let stack = [root];  

    while (q.length > 0) {
        node = stack.pop();
        console.log(node.value);
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }
}