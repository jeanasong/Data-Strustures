/* Step One: Create the Array 
First, we’ll create the array. In this case, we’ll create an array to represent all numbers up to the input limit, but we’ll use the array index to represent the number, and its value (true/false) to represent whether it is prime or not. 
The original algorithm said to use an array of 2, ..., n, but since we’re using indices to represent the actual number, we’ll start the array from 0 and essentially ignore the values of array[0] and array[1].

For example, after running our sieve, an array representing the primes up to 7 would look like this, with elements at [2], [3], [5], and [7] marked true:

[false, false, true, true, false, true, false, true] 

Fill in the blanks of the sieveOfEratosthenes() function to create an array with the correct size and use the correct Array method to fill it with the value true. 
Mark the numbers 0 and 1 as non-prime. */

/* Step Two: Iterate
Now we’ll implement the bulk of the algorithm to iterate and mark numbers as non-prime. We’ll do this in two steps:

Create an outer loop to iterate from 2 to the limit.
Inside, check if the current number is still marked prime. If it is, we’ll mark all its multiples using another loop. */

/* Step Three: Return Values
Now it’s time to pare down our array and only return the actual primes. There are many ways to do this, so we’re going to let you figure out an approach to this part of the algorithm isolated from the rest of the code. 
Complete the findTrueIndices() function. It should have a single parameter (an array), and return a new array of all indices in the input that are true.

For instance,

[false, false, true, true, false, true, false, true]
should return [2, 3, 5, 7].

You can assume that all array elements will be either true or false.*/
// Step One
const sieveOfEratosthenes = (limit) => {
    // Step One
    const output = new Array(limit + 1).fill(true);
    // Mark 0 and 1 as non-prime
    output[0] = false;
    output[1] = false;

    // Step Two
    // Iterate up to the square root of the limit
    for(let i = 2; i <= limit; i++) {
        if(output[i] === true) {
            // Mark all multiples of i as non-prime
            for(let j = i * 2; j <= limit; j = j +1) {
                output[j] = false;
            }
        }
    }
}