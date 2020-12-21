class ListNode {
    constructor(data) {
        this.data = data
        this.next = null                
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
        this.tail = null;
    }

    getSize() {
        let count = 0; 
        let node = this.head;
        while (node) {
            count++;
            node = node.next
        }
        return count;
    }

    clear() {
        this.head = null;
    }

    back() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode
    }

    front() {
        return this.head;
    }

    valueAt(index) {
        let count = 0; 
        let node = this.head;
        if (index > this.getSize()) {
            return ('out of range')
        }
        while (count === index) {
            count++;
            node = node.next
        }
        return node.data;
    }

    pushFront(item) {
        let newNode =  new ListNode(item)
        
        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode
        }
        return this;
    }

    pushBack(item) {
        let node = new ListNode(item);
        if (this.head == null) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
    }

    insert(index, val) {
        const newNode = new ListNode(val);
    if (index > this.getSize()){
        return 'out of range'

    }
    if (index <= 0) {
      return this.addAtHead(val);
    }
    if (index === this.getSize()) {
      return this.addAtTail(val);
    }
  
    let cur = this.head;  
    for (let i = 0; i < index - 1; i++) {
        cur = cur.next;
    }
    newNode.next = cur.next ? cur.next : null;
    cur.next = newNode;
    return this;
    }

    removeFrom(index) 
{ 
    if (index > 0 && index > this.size) 
        return -1; 
    else { 
        var curr, prev, it = 0; 
        curr = this.head; 
        prev = curr; 
  
        // deleting first element 
        if (index === 0) { 
            this.head = curr.next; 
        } else { 
            // iterate over the list to the 
            // position to removce an element 
            while (it < index) { 
                it++; 
                prev = curr; 
                curr = curr.next; 
            } 
  
            // remove the element 
            prev.next = curr.next; 
        } 
        // return the remove element 
        return curr.element; 
    } 
} 
}

let node1 = new ListNode(3)
let node2 = new ListNode(5)
let node3 = new ListNode(6)
let node4 = new ListNode(7)
node1.next = node2
node2.next = node3
node3.next = node4
let list = new LinkedList(node1)
console.log(list.insert(3,200))

