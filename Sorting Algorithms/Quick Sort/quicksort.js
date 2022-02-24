const swap = require('./swap');
// Recursive Quicksort
// Add 3 parameters: array, leftBound and rightBound to it.
const quicksort = (array, leftBound = 0, rightBound = array.length -1) => {
    /* Recall that quicksort will stop recursing when there is only one element left. When this happens, we return the sorted array. Let’s implement the recursive case where the array has more than one element.
    Inside quicksort(), write an if statement where the input array has more than one element. Since we will always pass the same array and do in-place swaps, the array .length property won’t change between calls. To tell if the array has more than one element, check if rightBound is greater than leftBound.
    Inside the if block, do the following: 
    create a const variable, pivotIndex and assign it to the return value of calling partition() with the input array, leftBound and rightBound.
    Outside of the if block, return the input array. */
    if(rightBound > leftBound) { // write an if statement where the input array has more than one element. Since we will always pass the same array and do in-place swaps, the array .length property won’t change between calls. To tell if the array has more than one element, check if rightBound is greater than leftBound.
        const pivotIndex = partition(array, leftBound, rightBound); // create a const variable, pivotIndex and assign it to the return value of calling partition() with the input array, leftBound and rightBound.
        // Once we have determined the location of the pivot element, we can now call quicksort() to recursively sort the left array partition excluding the pivot element.
        quicksort(array, leftBound, pivotIndex - 1); // Inside your if statement, below the declaration of pivotIndex, call quicksort() with the input array, leftBound and pivotIndex - 1 as parameters.
        // We will also call quicksort() to recursively sort the elements in the right array partition inclusive of the pivot element.
        quicksort(array, pivotIndex, rightBound); // Inside the same if statement, call quicksort() with the input array, pivotIndex and rightBound as parameters.
      }
      return array; // Outside of the if block, return the input array.
}

// Partitioning Part I - The Pivot Element

/* Define partition() here */
const partition = (array, leftIndex, rightIndex) => { // Add three parameters: array, leftIndex, and rightIndex to it.
    /*Inside partition():
    define a const variable, pivot, to be the pivot element
    assign pivot to be the middle element of the input array
    round pivot down to produce a whole number.
    temporarily return pivot for now */

    const pivot = array[Math.floor((rightIndex + leftIndex) / 2)]; // 
    //return pivot; // temporarily return pivot for now

    // Partitioning Part II - The Left and Right Indices
    while(leftIndex <= rightIndex) { // In the function, partition(), below the declaration of pivot, write a while loop that will execute as long as leftIndex is less than or equal to rightIndex.
        while(array[leftIndex] < pivot) { // Inside this while loop, write another while loop that increments leftIndex as long as the element at leftIndex is less than pivot.
          leftIndex++; // increments leftIndex as long as the element at leftIndex is less than pivot.
        }
        while(array[rightIndex] > pivot) { // Below the inner while loop, write a while loop that decrements rightIndex as long as the element at rightIndex is greater than pivot.
          rightIndex--; // decrements rightIndex as long as the element at rightIndex is greater than pivot.
        }

        // Partitioning Part III - Swapping
        
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