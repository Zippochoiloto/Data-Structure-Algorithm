class HashMap {
    constructor(size, map) {
        size = 0
        map = {}
    }

    containsKey(key) {
        return this.map.hasOwnProperty(key)
    }

    containsValue(value) {
        for (let key in this.map) {
            if (this.map.hasOwnProperty(key)) {
                return this.map[key] === value
            }
        }
    }

    put(key, value) {
        if (!this.containsKey(key)) {
            this.size++
        }
        this.map[key] = value
    }

    remove(key) {
        if (this.containsKey(key)) {
            this.size--
            let value = this.map[key]
            delete this.map[key]
            return value
        }
        return null
    }

    get(key) {
        return this.containsKey(key) ? this.map(key) : null
    }

    clear() {
        this.size = 0;
        this.map = {}
    }

    getSize() {
        return this.size
    }


}