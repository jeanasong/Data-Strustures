/* Take a moment to look at the helper function in swap.js. 
Notice that swap() takes 3 arguments: the input array, the index of the current element, and finally, the index of the next element in the input array. */
const swap = (arr, indexOne, indexTwo) => {
    const temp = arr[indexTwo]; // Create a constant called temp and store the value of the element at the indexTwo position in the input array so it can be referenced later.
    arr[indexTwo] = arr[indexOne]; // Change the element at indexTwo of the input array to the value of the element at indexOne.
    arr[indexOne] = temp; // Change the element at indexOne of the input array to the original value of the element at indexTwo.
}

module.exports = swap;