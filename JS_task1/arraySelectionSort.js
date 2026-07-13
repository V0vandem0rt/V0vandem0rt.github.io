function insertionSort(arr) {
    let minIndex
    for (let i = 0; i < arr.length - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

const numbers = [64, 25, 12, 22, 11, 90, 70, 5, 3, 8, 15, 1, 2, 4, 6, 7, 9, 10];
console.log(insertionSort(numbers));