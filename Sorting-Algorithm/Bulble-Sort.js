let bubbbleSort = (inputArr) => {
    let len = inputArr.length;
    do {
        swapped = false;
        for(let i = 0; i < len; i++) {
            if (inputArr[i] > inputArr[i + 1]) {
                [inputArr[i], inputArr[i + 1]] = [inputArr[i+1], inputArr[i]]
                swapped = true
            }
        }
    } while(swapped);
    return inputArr
}

let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                [inputArr[j], inputArr[j + 1]] = [inputArr[j+1], inputArr[j]]
            }
        }
    }
    return inputArr;
};

console.log(bubbbleSort([1,3,5,4,2]))