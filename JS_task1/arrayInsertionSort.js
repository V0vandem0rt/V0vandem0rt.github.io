function insertionSort(arr) {
  let currentElement;

  for (let i = 1; i < arr.length; i++) {
    currentElement = arr[i];
    let j = i - 1;
    while (j >= 0 && currentElement < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentElement;
  }

  return arr;
}

const numbers = [64, 25, 12, 22, 11, 90, 70, 5, 3, 8, 15, 1, 2, 4, 6, 7, 9, 10];
console.log(insertionSort(numbers));
