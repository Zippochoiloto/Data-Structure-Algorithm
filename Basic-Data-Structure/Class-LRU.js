// LRU cache:

// •	Create a data structure to hold the cache data with the initial limit
// •	Provide functionalities for adding to cache, getting an element from the cache, removing the least used element from the cache and iterating though the cache
// •	We implement the functionality by mimicking Doubly LinkedList and a Map(Object)
// Read and write operations has to be in O(1) time complexity.
// DoublyLinkedList for write/remove and Map(object) for read operation makes this possible

class Node {
  constructor(key, value, next = null, prev = null) {
    this.key = key;
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LRU {
  // set default limit of 10 if limit is not passed in
  constructor(limit = 10) {
    this.size = 0;
    this.limit = limit;
    this.head = null;
    this.tail = null;
    this.cache = {};
  }

  // Write Node to head of LinkedList
  // Update cache with Node key and Node reference
  write(key, value) {
    this.ensureLimit();

    if (!this.head) {
      this.head = this.tail = new Node(key, value);
    } else {
      const node = new Node(key, value, this.head);
      this.head.prev = node;
      this.head = node;
    }

    // Update the cache map
    this.cache[key] = this.head;
    this.head = node;
  }

  ensureLimit() {
    if (this.size === this.limit) {
      this.remove(this.tail.key);
    }
  }

  // Read from cache map and make that node as new Head of LinkedList
  read(key) {
    if (this.cache[key]) {
      const value = this.cache[key].value;

      //node removed from it's position and cache
      this.remove(key);
      // write node again to the head of LinkedList to make it most recently used
      this.write(key, value);
      return value;
    }

    console.log(`Item not avaiable in cache for key ${key}`);
  }

  remove(key) {
      const node = this.cache[key];

      if (node.prev !== null) {
          node.prev.next = node.next;
      } else {
          this.head = node.next;
      }

      if (node.next !== null) {
          node.next.prev = node.prev;
      } else {
          this.tail = node.prev
      }

      delete this.cache[key];
      this.size--;
  }

  clear() {
      this.head = null;
      this.tail = null;
      this.size = 0;
      this.cache = {};
  }

}
