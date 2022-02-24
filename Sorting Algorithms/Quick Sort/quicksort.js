const swap = require('./swap');

/* Define partition() here */
const partition = (array, leftIndex, rightIndex) => { // Add three parameters: array, leftIndex, and rightIndex to it.
    /*Inside partition():
    define a const variable, pivot, to be the pivot element
    assign pivot to be the middle element of the input array
    round pivot down to produce a whole number.
    temporarily return pivot for now */
    const pivot = array[Math.floor((rightIndex + leftIndex) / 2)]; // 
    //return pivot; // temporarily return pivot for now
    //
    while(leftIndex <= rightIndex) { // In the function, partition(), below the declaration of pivot, write a while loop that will execute as long as leftIndex is less than or equal to rightIndex.
        while(array[leftIndex] < pivot) { // Inside this while loop, write another while loop that increments leftIndex as long as the element at leftIndex is less than pivot.
          leftIndex++; // increments leftIndex as long as the element at leftIndex is less than pivot.
        }
        while(array[rightIndex] > pivot) { // Below the inner while loop, write a while loop that decrements rightIndex as long as the element at rightIndex is greater than pivot.
          rightIndex--; // decrements rightIndex as long as the element at rightIndex is greater than pivot.
        }
        /* At this juncture, the leftIndex should be pointing at an element that is not less than the pivot element and the rightIndex should be pointing at an element that is not greater than the pivot element. 
        Since these elements are on the wrong side of the partition because they do not meet the heap condition, they need to be swapped. */
        if(leftIndex <= rightIndex) { // Inside the outer while loop, after the previous two loops, determine if the leftIndex and rightIndex can be swapped by checking if leftIndex is still less than or equal to rightIndex.

            swap(array, leftIndex, rightIndex); // swap the elements at both indices using the swap(arrayToSwap, indexOne, indexTwo) helper function.
            leftIndex++; // increment leftIndex
            rightIndex--; // decrement rightIndex
        }
      }
      return leftIndex; // Outside the outer while loop, before exiting partition(), return leftIndex.
}

module.exports = {
  partition
};