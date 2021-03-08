const quickSort = (arr, start = 0, end = arr.length) => {
    let pivotIndex = pivot(arr, start,end)

    if (start >= end) return arr;
    quickSort(arr, start, pivotIndex);
    quickSort(arr, pivotIndex + 1, end);

    return arr
}