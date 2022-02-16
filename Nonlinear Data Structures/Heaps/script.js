// import MinHeap class
const MinHeap = require('./MinHeap');

// make an instance of MinHeap and assign it to the const variable minHeap.
const minHeap = new MinHeap();

// display the heap content of minHeap.
console.log(minHeap.heap);

// call the .add() method with a value of 42. Run the test code within script.js to see the element 42 added to the heap.
minHeap.add(42);


// This is for Buuble Up Part II

// helper function to return a random integer
function randomize() { return Math.floor(Math.random() * 40); }

// populate minHeap with random numbers
for (let i=0; i < 6; i++) {
  minHeap.add(randomize());
}

// display the bubbled up numbers in the heap
console.log('Bubbled Up', minHeap.heap);


// remove the minimum value from heap
// minHeap.popMin();

// remove the minimum value from heap
for (let i=0; i < 6; i++) {
    minHeap.popMin();
    console.log('Heapified', minHeap.heap);
}