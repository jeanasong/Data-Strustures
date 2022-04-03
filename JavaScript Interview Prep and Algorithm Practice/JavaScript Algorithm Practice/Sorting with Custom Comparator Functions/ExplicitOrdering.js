/* Explicit Ordering
Let’s try a more complicated custom comparator. Given an input array, we want to sort the array given to an explicit order. 
If elements aren’t in the given explicit order, put them at the back in the same order they appeared in. 
For example, given:

const inputArray = ['a', 'b', 'c', 'd', 'e', 'f', 'n', 'y', 'g'];
const order = ['a', 'n', 'd', 'y'];

the comparator function explicitSort(inputArray, order) should return:
['a', 'n', 'd', 'y', 'b', 'c', 'e', 'f', 'g']

In order to do this, we are going to use an explicitSortWithComparator() function that takes inputArray and order as parameters, 
and has an internal explicitComparator() function, which is what will take a and b. At the end of explicitSortWithComparator(), 
we will call .sort(explicitComparator) on inputArray and return the result.

The explicitComparator() function will find the indices of a and b in the order array (if they exist) and return the difference between them:

indexA and indexB are initialized to the length of the order array
if a is in order
  indexA = a's index in order
if b is in order
  indexB = b's index in order
return indexA - indexB


Finish the explicitComparator() function to complete the explicitSortWithComparator() function. 
Remember that you can use someArray.indexOf(someElement) to find the index of an element in the array, and someArray.includes(someElement) to see if that element exists in the array. */


const explicitSortWithComparator = (inputArray, order) => {
  
    // Write your code here:
    const explicitComparator = (a, b) => {
    let indexA = order.length;
    let indexB = order.length;
    if (order.includes(a)) {
      indexA = order.indexOf(a);
    }
    if (order.includes(b)) {
      indexB = order.indexOf(b);
    }
    return indexA - indexB;
  }
  
  return inputArray.sort(explicitComparator).slice();
}

// Use this array to test your code:
const inputArray = ['a', 'b', 'c', 'd', 'e', 'f', 'n', 'y', 'g']
const order = ['a', 'n', 'd', 'y']
console.log(explicitSortWithComparator(inputArray, order));

module.exports = explicitSortWithComparator;