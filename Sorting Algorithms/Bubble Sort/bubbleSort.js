/* Loops
In order to sort an array, we’ll need to visit pairs of elements and check if they should be moved or kept at their current index. To accomplish this we’ll use two loops:

One loop that will execute an inner loop depending on the state of a variable representing whether the input array might be sorted or not
An inner loop to compare and swap pairs of elements in the array */

const swap = require('./swap');

const bubbleSort = input => {
  /*To start sorting, we will use a variable to store the condition of the input array as a Boolean value: true, 
  meaning our input array might still be unsorted and need additional swaps of elements and we’ll later change it to false, 
  meaning the input array does not need anymore swapping to sort it. */
  let swapping = true; // Add a variable inside bubbleSort() called swapping and assign it the value true.
  /*Below the line where you declared swapping, create a while loop. This is the outer loop of our program that only runs if the input array might not be sorted and needs swapping, (the condition stored in swapping).
  Use swapping which is currently set to true as the while condition.
  This ensures that we’ll start running the while loop and run it at least once, since we need to loop through the input array at least one time to determine if it’s already sorted or needs swapping. */
  while(swapping = true) { // Use swapping which is currently set to true as the while condition.
    /*If we find that we don’t need to swap any of the elements, it means that the array is already sorted from smallest to largest and we can stop running our code and return the sorted array. To stop our while loop we only need to change the while condition to false.
    Inside of the while loop we created, set swapping to false.
    (We’ll add code later that will restart the loop if we might have to keep swapping to “bubble up” elements to the end of the array.) */
    swapping = false; // Inside of the while loop we created, set swapping to false.
    /*Create a for loop nested inside the while loop under the line where you reassigned the value of swapping.
    The for loop should visit every element in the input array starting from the first element and stopping at the second-to-last element. 
    Setting the condition for the loop this way allows us to stay within the bounds of our input array and only check elements that exist.
    Since the index is going to change, make sure to make it a let variable. */
    for(let i = 0; i < input.length - 1; i++) { // The for loop should visit every element in the input array starting from the first element and stopping at the second-to-last element.
      /* Compare
      We have a loop to run our algorithm, and another that visits each element in the input array but if we were to run this as is, it would only iterate through the array once.
      Let’s add some additional logic to our code in the bubbleSort.js file that will compare neighboring elements and swap them if necessary. For this exercise, you’ll only be adding code inside of the for loop of bubbleSort(). */
      if(input[i] > input[i + 1]) { // Inside of the for loop we added, create a conditional that checks if the element at the current index is greater than the element one index after it.
        // Let’s begin adding the logic for the swapping action. To see how we’re changing our input array by swapping elements, add the following inside of the if statement you created:
        console.log(`Swapping pair ${input[i]}, ${input[i+1]} in [${input}]`); // This code will log a message for every swap made when we execute bubbleSort().
        swap(input, i, i + 1); // Swap unordered pairs. After our logging statement, add a call to swap(), the helper function that handles changing the position of pairs of elements. Take a look at the parameters of swap() in the swap.js file to see what arguments you need to call it with.
        // If we make a swap, we want to loop through the array again to see if we need to make additional swaps to continue “bubbling up” elements in the wrong position. Keep our while loop running by changing the value of the while condition variable so that it evaluates as true.
        swapping = true; // Keep our while loop running by changing the value of the while condition variable so that it evaluates as true.
      }
    }
  }
  /*Lastly, bubbleSort() should return a sorted input array, (we’ll do the actual sorting in a later exercise).
  Add code to return the sorted input array if we’ve exited our while loop. */
  return input; // return the sorted input array if we’ve exited our while loop.

};

module.exports = bubbleSort;

