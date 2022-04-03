/* Sorted in Ascending Order
We’re going to start with one of the most intuitive orderings: ascending. This sort will yield the same results as using a sorting algorithm like quicksort or merge sort. The first step is to create the comparator function. Given inputs a and b, the pseudocode is as follows:

if a is less than b
  return negative number
if a is greater than b
  return positive number
if a is equal to b
  return 0 */


//Using the pseudocode above, create the ascendingOrder() comparator function.

const ascendingOrder = (a, b) => {
    if(a < b) {
      return -1;
    } else if(a > b) {
      return 1;
    } else {
      return 0;
    }
  }
  
  // Use this array to test your code:
  const testArray = [10, 43, 5, 0, -2, -20, 4, 3, 2, 1, 11];
  testArray.sort(ascendingOrder);
  console.log(testArray);
  
  module.exports = ascendingOrder;

  /* While you could create the ascendingOrder() function using three if statements, you could optimize it by simply returning a - b. 
  This will return a negative number if a is smaller, a positive number if b is smaller, and zero if they are equal. 
  Likewise, if you wanted to sort an array in descending order, the function could simply return b - a. */