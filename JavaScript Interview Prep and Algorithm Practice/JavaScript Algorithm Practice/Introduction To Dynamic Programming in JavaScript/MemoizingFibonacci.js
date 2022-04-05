/* Introduction To Dynamic Programming in JavaScript
Learn how to use dynamic programming to solve complex recursive problems. 

Memoizing Fibonacci 

To begin, we’ll use a plain JavaScript object to store the memoized values. 
We’ll set keys using n and values to store the result of that Fibonacci number. 
Then, whenever we need to calculate a number, if it’s already been calculated, we can retrieve the value from the object in O(1) time.

const memo = {};
In pseudocode, our approach to memoization will look something like this:

Create a memo object

function fibonacci(n)
  if n key exists in memo object
    return memo[n]
  else
    calculate current fibonacci number
    store value in memo
    return value
Let’s implement it in JavaScript! 

Create a memoized fibonacci() function. This function should return the nth Fibonacci number.

Note: To avoid an infinite loop, either handle the edge case of negative numbers in your function, or don’t call it using negative numbers. */

const memo = {};

const fibonacci = num => {
  let returnValue;
  
  if (memo[num]) {
    returnValue = memo[num];
  } else if (num === 0 || num === 1) {
    returnValue = num;
  } else {
    returnValue = fibonacci(num - 1) + fibonacci(num - 2);
    memo[num] = returnValue;
  }
  return returnValue;
}

// Test your code with calls here:
console.log(fibonacci(20));
console.log(fibonacci(200));

/* Ecpected results below.
 6765
 2.8057117299251016e+41 */



