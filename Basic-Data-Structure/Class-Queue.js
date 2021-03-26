class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor () {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // enqueues a node
  enqueue(val) {
    let node = new Node(val)
    if (this.size === 0) {
      this.first = node
      this.last = node
    } else {
      this.last.next = node
      this.last = node
    }
  }

  // dequeue a node
  dequeue() {
    if (!this.first) {
      return null
    }

    let temp = this.first;
    if ( this.first === this.last) {
      this.last = null
    }

    this.first = this.first.next
    this.size--;
    return temp.value
  }
}
let a = new Queue()
a.enqueue(3)
a.enqueue(4)
a.dequeue(2)
console.log(a)