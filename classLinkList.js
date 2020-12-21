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
        this.size = 0;
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
        this.size++;
        return this;
    }

    pushBack(item) {
        let node = new ListNode(item);
        this.size++;
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
    if (index > this.size) return;
    if (index <= 0) {
      return this.addAtHead(val);
    }
    if (index === this.size) {
      return this.addAtTail(val);
    }
  
    let cur = this.head;  
    for (let i = 0; i < index - 1; i++) {
        cur = cur.next;
    }
    newNode.next = cur.next ? cur.next : null;
    cur.next = newNode;
    this.size++;
    return this;
    }
}

let node1 = new ListNode(3)
let node2 = new ListNode(5)
node1.next = node2
let list = new LinkedList(node1)
console.log(list.pushFront(4))
console.log(list.pushBack(5))
console.log(list.insert(1,200))

console.log(list.valueAt(1))
console.log(list.getSize())
