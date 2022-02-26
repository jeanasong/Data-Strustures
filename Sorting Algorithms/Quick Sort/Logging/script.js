/*Logging
Let’s put our implementation of the quicksort algorithm into practice. In order to understand what is going on internally inside each call to quicksort() and partition(), we have inserted log statements at various steps to illustrate the following events:

a recursive call is about to occur
partitioning is taking place
leftIndex and rightIndex are incremented
swapping has taken place */

/* Open script.js and run it. Each run will produce a randomized input array. 
Study the output statements to get a better understanding of the quicksort implementation. 
Open quicksort.js to study the implementation of the log statements. */

const { quicksort, partition } = require('./quicksort');

const randomize = () => Math.floor(Math.random() * 40);

let numbers = [];

for (let i = 0; i < 5; i++) {
  numbers.push(randomize());
}

console.log('Before quicksort:', numbers);
const sorted = quicksort(numbers);
console.log('After  quicksort:', sorted);
