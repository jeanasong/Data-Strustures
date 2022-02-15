/*MinHeap Class
Our MinHeap class will store two pieces of information:

An array of elements within the heap.
A count of the elements within the heap.
To make our lives easier, we’ll always keep one element at the beginning of the array with the value null. By doing this, we can simplify our coding by always referencing our minimum element at index 1 instead of 0 and our last element at index this.size instead of this.size - 1.

const minHeap = new MinHeap();
console.log(minHeap.heap);
// [ null ]
console.log(minHeap.size);
// 0 */

class MinHeap {
    constructor() { // Within MinHeap.js, define the MinHeap class constructor with no parameter. Inside the constructor:
      this.heap = [null]; // define a heap property as an array containing null
      this.size = 0; // define a size property instantiated to 0
    }

    /* Bubble Up Part I
    Our MinHeap needs to satisfy two conditions:

    The element at index 1 is the minimum value in the entire list.
    Every child element in the list must be larger than its parent.
    Let’s define an .add() method which will allow us to add elements into the .heap array. We will also define .bubbleUp() which will do the work of maintaining the heap conditions as we add additional elements. */

    add(value) { // define a MinHeap class method, .add(), below the constructor to add an element to its heap. Within .add(): define a parameter, value
      this.heap.push(value); // add value to end of the array in this.heap
      console.log(`.. Adding ${value}`); // display in .add(): a message showing the value to be added,
      console.log(this.heap); // the current content of the heap before method returns
      this.size++; // After we added an element to the heap, we want to increase its heap count. Increment the size property by one.
      this.bubbleUp(); // We want to call .bubbleUp() each time we add an element. Return to the .add() method, and make a call to .bubbleUp()
    }

    bubbleUp() { // Define another MinHeap class method, .bubbleUp(), below .add() whose task is to preserve the heap properties after an element is added to the heap.
      console.log('Bubble Up'); // For now, log a message 'Bubble Up' inside the method.
    }
  
  }
  module.exports = MinHeap;