// 1.	Array is a data structure that contains group of elements. Typically these elements are all of the same data type

class CustomArray {
    createdArray = new Array();
    constructor(capacity) {
        this.capacity = capacity
        this.createdArray = new Array(this.capacity)
    }

    size() {
        let count = 0;
        for (item of this.createdArray) {
            if (item) {
                count += 1
            }
        }
        return count
    }

    capcity() {
        return this.capcity
    }

    isEmpty() {
        return this.size() === 0
    }

    itemAt(index) {
        return this.createdArray[index]
    }

    cloneArray(newArray, oldArray, capacity) {
        for (let i = 0 ; i < capacity; i++) {
            newArray[i] = oldArray[i]
        }
    }

    append(item) {
        const newArray = new Array(this.capacity + 1)
        this.cloneArray(newArray, this.createdArray)
        newArray[this.createdArray.length] = item
        return newArray
    }

    insert(item, indexArray) {
        const newArray = new Array(this.capacity * 2)
        this.cloneArray(newArray, this.createdArray, this.capacity)
        for (let index = 0;  index < this.createdArray.length; index++) {
            if(index === indexArray) {
                for (let j = this.createdArray.length; j === index; j--) {
                    this.newArray[j+1] = this.newArray[j]
                }
            }
        }
        newArray[indexArray] = item
        return newArray
    }

    pop() {
        const newArray = new Array(this.capacity - 1)
        this.cloneArray(newArray, this.createdArray, this.capacity - 1)
        return newArray
    }
}

let a = new CustomArray(3)
console.log(a.pop())
