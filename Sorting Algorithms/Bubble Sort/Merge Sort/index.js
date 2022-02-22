/* Splitting: Base Case
In this implementation of merge sort, you will build a recursive function, called mergeSort(), that splits the input array until each element is in its own array. 

So, if the input array is:

[3, 5, 2]
splitting these elements into their own arrays will look like:

[3]
[5]
[2]
The base case of this recursive function is when the input array has only one element in it. Below is a pseudocode implementation of the base case:

function mergeSort(arr)
  if the length of arr equals 1
    return arr */

const mergeSort = (startArray) => {
    // Splitting: Base Case
    const length = startArray.length; // add a line that saves the length of startArray to a constant called length.
    if(length === 1) { // Add an if statement that checks if length is equal to 1. If it is, return startArray.
        console.log(startArray); // a console.log() statement to the if block, so you should see each element of the input array ([3, 5, 2, 90, 4, 7]) printed to the console when you run your code.
        return startArray; // If it is, return startArray.
    }
    // Splitting: Recursive Case
    const mid = Math.floor(length / 2); // Create a constant variable called mid and set it equal to the floor of length / 2.
    // Now you are going to create the left and right arrays.
    const leftArray = startArray.slice(0, mid); // Create a variable called leftArray and set it equal to a new array of elements from startArray, from 0 to mid.
    const rightArray = startArray.slice(mid, length); // Create a variable called rightArray and set it equal to the elements of startArray from mid to length.
    return merge(mergeSort(leftArray), mergeSort(rightArray)); // In mergeSort() return a call to merge(). Pass mergeSort(leftArray) and mergeSort(rightArray) as the first and second arguments.

    /*On two separate lines, pass leftArray into mergeSort() and rightArray into mergeSort().
    We added a console.log() statement to the if block, so you should see each element of the input array ([3, 5, 2, 90, 4, 7]) printed to the console when you run your code. */
    mergeSort(leftArray); // pass leftArray into mergeSort()
    mergeSort(rightArray); // pass rightArray into mergeSort()

  }

  // We added a merge() function to index.js that prints leftArray and rightArray to the console.
  const merge = (leftArray, rightArray) => {
      /*You will implement the entire merge() function in this checkpoint. Follow the steps below to do so:

        Implement a while loop that continues until leftArray and rightArray are empty.
        Add an if statement that checks if leftArray[0] is less than rightArray[0]. If it is, append that number to sortedArray and remove it from leftArray
        Add an else statement that appends rightArray[0] to sortedArray and then removes that number from rightArray.
        Once the while loop has completed, return the sortedArray with leftArray and rightArray concatenated. */
        const sortedArray = [];

        while(leftArray.length > 0 && rightArray.length > 0) { // Implement a while loop that continues until leftArray and rightArray are empty.
            if(leftArray[0] < rightArray[0]) { // Add an if statement that checks if leftArray[0] is less than rightArray[0]
                sortedArray.push(leftArray[0]); // If it is, append that number to sortedArray and remove it from leftArray
                leftArray.shift(); // remove it from leftArray
            } else { // Add an else statement that appends rightArray[0] to sortedArray and then removes that number from rightArray.
                sortedArray.push(rightArray[0]); // Add an else statement that appends rightArray[0] to sortedArray
                rightArray.shift(); // then removes that number from rightArray
            }
        }
        // Once the while loop has completed, return the sortedArray with leftArray and rightArray concatenated.
        return sortedArray.concat(leftArray).concat(rightArray);
  }
  
  const inputArr = [3, 5, 2, 90, 4, 7];

  
  console.log(mergeSort(inputArr));
  
  module.exports = {
    mergeSort
  };