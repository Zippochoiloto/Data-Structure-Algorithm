class HashTable {
    constructor() {
        this.table = new Array(137);
        this.values = [];
    }

    //Define the hashing function which allows a string to be used as a key
    hash(string) {
        const H = 37;
        let total = 0;

        for (let i = 0; i < string.length; i++) {
            total += H * total + string.charCodeAt(i);
        }

        total %= this.table.length;
        if (total < 1) {
            this.table.length - 1
        }

        return parseInt(total);
    }

    showDistro() {
        for (const key in this.table) {
            if (this.table[key]) {
                console.log(key, ' : ', this.table[key])
            }
        }
    }

    put(data) {
        const pos = this.hash(data);
        this.table[pos] = data;
    }

    get(key) {
        return this.table[this.hash(key)]
    }

}
    //HashTable with Build Chains technique of collision-resolution

class HashTableChains extends HashTable {
    constructor() {
        super();
        this.buildChains();
    }

    buildChains() {
        for (let i = 0; i < this.table.length; i++) {
            this.table[i] = new Array()
        }
    }

    showDistro() {
        for (const key in this.table) {
            if (this.table[key][0]) {
                console.log(key, ' : ', this.table[key])
            }
        }
    }

    put(key, data) {
        const pos = this.hash(key)
        let index = 0
        if (!this.table[pos][index]) {
            this.table[pos][index] = data
        } else {
            ++index;
        }
        while (this.table[pos][index]) {
            index++;
        }
        this.table[pos][index] = data;
    }

    get(key) {
        const pos = this.hash(key);
        let index = 0;
        while (this.table[pos][index] !== key) {
            return this.table[pos][index]
        }
    }

    
}

//HashTable with Open Addressing

class HashTableOpenAddressing extends HashTable{
    constructor() {
        super();
        this.values = new Array()
    }

    put(key, data) {
        const pos = this.hash(key);
        if (!this.table[pos]) {
            this.table[pos] = key
            this.values[pos] = data;
        }

        else {
             while (this.table[pos]) {
                 pos++;
             }
             this.table[pos] = key
             this.values[pos] = data
        }
    }

    get(key) {
        const hash = this.hash(key);
        if (hash > -1) {
            for (let i = hash; this.table[i]; i++) {
                if (this.table[i] === key) {
                    return this.values[i]
                }
            }
        }
        return undefined
    }
    
    showDistro() {
        for (const key in this.table) {
            if (this.table[key]) {
                console.log(key, ' : ', this.values[key])
            }
        }
    }
}