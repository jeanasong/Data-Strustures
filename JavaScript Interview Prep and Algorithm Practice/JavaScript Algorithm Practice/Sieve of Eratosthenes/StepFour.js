/* Step Four:

Complete Algorithm 
Now it’s time to implement the complete algorithm! Try your hand at it and test it with multiple inputs (it may take a while to run if you call it with a very large input).

Code Challenge
Implement the Sieve of Eratosthenes algorithm in JavaScript!

You can assume that your function is always called with a number. However, it should always return an array, even if there are no primes, so make sure to handle any edge case(s).

We’ve given you an example in the workspace along with the expected result. Run your code as you implement to see the results. */

const sieveOfEratosthenes = (limit) => {
    if (limit <= 1) {
      return [];
    }
    // Create the output
    const output = new Array(limit + 1).fill(true);
    // Mark 0 and 1 as non-prime
    output[0] = false;
    output[1] = false;
  
    // Iterate up to the square root of the limit
    for (let i = 2; i <= limit; i++) {
      if (output[i] === true) {
        // Mark all multiples of i as non-prime
        for (let j = i * 2; j <= limit; j = j + i) {
          output[j] = false;
        }
      }
    }
    // option 1:replace true values with the corresponding number value and filter out non-primes
    return output.reduce((primes, current, index) => {
      if (current) {
        primes.push(index);
      }
      return primes
    }, []);
  }
  
  const test = sieveOfEratosthenes(13);
  // should return [2, 3, 5, 7, 11, 13]
  console.log(test);
  
  // Leave this line for testing:
  module.exports = sieveOfEratosthenes;