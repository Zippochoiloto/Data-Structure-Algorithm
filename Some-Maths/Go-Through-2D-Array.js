let input = [[1,2,3],[3,4,5]]

let goThroughArray = (inputArr) => {
    for (let i = 0; i < inputArr.length; i++) {
        let subArr = inputArr[i]
        for (let j = 0; j < subArr.length; j++) {
            console.log('j', subArr[j])
        }
    }
}

goThroughArray(input)