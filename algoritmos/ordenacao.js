/**
 * @param {Array} array
 */
function bubbleSort(array) {
  let temp = 0;
  for (let i = 0; i < array.length; i++) {
    for (j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}

// /**
//  * @param {Array} array
//  */
// function selectionSort(array) {}

// /**
//  * @param {Array} array
//  */
// function insertionSort(array) {}

module.exports = { bubbleSort };