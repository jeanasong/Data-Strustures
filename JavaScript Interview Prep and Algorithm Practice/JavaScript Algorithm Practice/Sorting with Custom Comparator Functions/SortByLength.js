/* We have handled situations when a and b have different lengths, but what if they have the same length? 
Following the logic we currently have, the function would place each group of elements with the same length together in the same order they were in the original array. 
It would be nice to have those elements sorted in some way, and we can reuse our ascendingOrder() function from Sorted In Ascending file for that.

Create the sortByLength() comparator function. 
(Remember that you can use someVariable.length to access an array or string’s length!) 

*/

const sortByLength = (a, b) => {
    // sortByLength
    if (a.length < b.length) {
      return -1;
    } else if (a.length > b.length) {
      return 1;
    } else {
      return ascendingOrder(a, b);
    }
  }
  
  const ascendingOrder = (a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  }
  
  // Use this array to test your code:
  const testArray = ['car', 'train', 'plane', 'bike', 'skateboard', 'jet'];
  testArray.sort(sortByLength);
  console.log(testArray);
  
  module.exports = sortByLength;

  /* How do you think you would change the function to sort the array from the longest elements to the shortest? */