/* Sieve of Eratosthenes 
Step Three: Return Values
Now it’s time to pare down our array and only return the actual primes. There are many ways to do this, so we’re going to let you figure out an approach to this part of the algorithm isolated from the rest of the code.

Create a results array, iterate through the input array, and add the correct index if its value is true.
Use a combination of .map() and .filter() to capture indices where the value is true and remove the rest.
Use .reduce() and include the third optional index callback argument to construct a results array. 


Complete the findTrueIndices() function. It should have a single parameter (an array), and return a new array of all indices in the input that are true.

For instance,

[false, false, true, true, false, true, false, true]
should return [2, 3, 5, 7].

You can assume that all array elements will be either true or false.*/

const findTrueIndices = (arr) => {
    const result = [];
    arr.forEach((value, index) => {
      if (value === true) {
        result.push(index);
      }
    });
    return result;
  }
  
  
  const test = findTrueIndices([false, false, true, true, false, true, false, true]);
  // should return [2, 3, 5, 7]
  console.log(test);
  
  // Leave this line for testing:
  module.exports = findTrueIndices;