class MinHeap {
    constructor() {
        this.heap = [null]
    }

    getMin() {
        return this.heap[1]
    }

    insert(node) {
        // Inserting new node at the end of the array 
        this.heap.push(number.toFixed())

        // Finding the correct position for the new node 
        if (this.heap.length > 1) {
            let current = this.heap.length - 1

            // Traversing up the parent node until the current node (current) is greater than the parent(current / 2)
            while (current > 1 && this.heap[Math.floor(current / 2)] > this.heap[current]) {

                // Swapping two nodes
                [this.heap[Math.floor(current / 2)], this.heap[current]] = [this.heap[current], this.heap[Math.floor(current / 2)]]
                current = Math.floor(current / 2)
            }
        }
    }

    remove() {
        // Smallest element is at the index 1 in the heap array 
        let smallest = this.heap[1]

        if (this.heap.length > 2) {
            this.heap[1] = this.heap[this.heap.length - 1]
            this.heap.splice(this.heap.length - 1)

            if (this.heap.length === 3) {
                if (this.heap[1] > this.heap[2]) {
                    [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]]
                }
                return smallest
            }


            let current = 1
            let leftChildIndex = current * 2
            let rightChildIndex = current * 2 + 1

            while (this.heap[leftChildIndex] && this.heap[rightChildIndex] &&
                (this.heap[current] > this.heap[leftChildIndex] || this.heap[current] > this.heap[rightChildIndex])) {
                if (this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
                    current = leftChildIndex
                } else {
                    [this.heap[current], this.heap[rightChildIndex]] = [this.heap[rightChildIndex], this.heap[current]]
                    current = rightChildIndex
                }

                leftChildIndex = current * 2
                rightChildIndex = current * 2 + 1
            }
        }
        else if (this.heap.length === 2) {
            this.heap.slice(1, 1)
        } else {
            return null
        }

    }

}