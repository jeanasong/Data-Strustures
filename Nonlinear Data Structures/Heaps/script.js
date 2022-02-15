const MinHeap = require('./MinHeap');

// make an instance of MinHeap and assign it to the const variable minHeap.
const minHeap = new MinHeap();

// display the heap content of minHeap.
console.log(minHeap.heap);

// call the .add() method with a value of 42. Run the test code within script.js to see the element 42 added to the heap.
minHeap.add(42);
