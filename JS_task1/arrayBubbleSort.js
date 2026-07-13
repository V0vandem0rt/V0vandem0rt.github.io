function bubbleSort(arr) {
  let isSorted;
  for (let j = 0; j < arr.length - 1; j++) {
    isSorted = false;
    for (let i = 0; i < arr.length - 1 - j; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        isSorted = true;
      }
    }
    if (!isSorted) {
      break;
    }
  }

  return arr;
}

const numbers = [64, 25, 12, 22, 11, 90, 70, 5, 3, 8, 15, 1, 2, 4, 6, 7, 9, 10];
console.log(bubbleSort(numbers));
