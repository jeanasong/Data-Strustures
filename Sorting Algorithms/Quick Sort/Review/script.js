/* Review
Congratulations on implementing the quicksort algorithm in JavaScript. To review:

Quicksort is a divide-and-conquer algorithm that splits an unsorted data set into two partitions recursively and sorts the partitioned arrays in-place until there is only one element left in a partition.
To determine the elements that belong in a partition, we need a pivot element, pivot, that is sandwiched between the two partitions and its location called the pivotIndex.
We implemented the partition() function which groups and swaps the elements either to the left or right of the pivot element and returns the leftIndex that is the same as the pivotIndex.
We implemented the quicksort() function that first calls partition() to determine the pivotIndex then recursively calls itself to sort the smaller partitions until there is only one element left in the partition. */


/*Open up script.js and run it. The size of the input array is 1,000,000 pre-sorted backwards. You should find the results sorted correctly. The results of running the script should look like this:

Before  quicksort number @ index      0 = 1000000
Before  quicksort number @ index 250000 = 750000
Before  quicksort number @ index 500000 = 500000
Before  quicksort number @ index 750000 = 250000
Before  quicksort number @ index 999999 = 1
---
After   quicksort number @ index      0 = 1
After   quicksort number @ index 249999 = 250000
After   quicksort number @ index 499999 = 500000
After   quicksort number @ index 749999 = 750000
After   quicksort number @ index 999999 = 1000000 */


const { quicksort, partition } = require('./quicksort');

let numbers = [];
let max = 1000000;
for (let i = max; i > 0; i--) {
  numbers.push(i);
}


console.log(`Before  quicksort number @ index      0 = ${numbers[0]}`);
console.log(`Before  quicksort number @ index ${max/4} = ${numbers[max/4]}`);
console.log(`Before  quicksort number @ index ${max/2} = ${numbers[max/2]}`);
console.log(`Before  quicksort number @ index ${3*max/4} = ${numbers[3*max/4]}`);
console.log(`Before  quicksort number @ index ${max-1} = ${numbers[max - 1]}`);
const sorted = quicksort(numbers);
console.log(`---`);
console.log(`After   quicksort number @ index      0 = ${sorted[0]}`);
console.log(`After   quicksort number @ index ${max/4-1} = ${sorted[max/4-1]}`);
console.log(`After   quicksort number @ index ${max/2-1} = ${sorted[max/2-1]}`);
console.log(`After   quicksort number @ index ${3*max/4-1} = ${sorted[3*max/4-1]}`);
console.log(`After   quicksort number @ index ${max-1} = ${sorted[max - 1]}`);
