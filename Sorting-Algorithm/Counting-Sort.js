let countingSort = (arr, min, max) => {
    let i = min, j = 0, len = arr.length, count = [];

    for (i; i <= max; i++) {
        count[i] = 0
    }

    for (i = 0; i< len; i++) {
        count[arr[i]] += 1
    }

    for (i = min; i <= max; i++) {
        while (count[i] > 0) {
            arr[j] = i;
            j++;
            count[i]--
        }
    }

    return arr
}

console.log(countingSort([1,3,3,2,5,6,2,3],0, 7))