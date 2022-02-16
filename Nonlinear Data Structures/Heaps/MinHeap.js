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

    // Removing the Min

    // To retrieve the minimum value of our heap, we need to define a class method.
    popMin() { // Define .popMin() below the constructor within our MinHeap class.
      if (this.size === 0) { // Within .popMin(), check if our heap is empty. If it is, return null.
        return null;
      }
      // Display: a message to show that the first element ${this.heap[1]} is swapped with the last element, ${this.heap[this.size]} (do this before the actual swap)
      console.log(`\n.. Swap ${this.heap[1]} with last element ${this.heap[this.size]}`);
      this.swap(1, this.size); // Next, we want to: exchange the last element of the heap with the minimum element at index 1 using .swap()
      const min = this.heap.pop(); // remove the last element from the heap, and save it in a const min variable
      this.size--; // decrement the heap size.
      console.log(`.. Removed ${min} from heap`, this.heap); // a message that shows that the minimum element has been removed followed by the content of the heap; use the stringRemove at the beginning of the message.
      // console.log('..',this.heap);
      this.heapify(); // Go back into .popMin() and make a call to .heapify() before we return min.
      return min; // Lastly, return the min variable in .popMin().
      
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

    /*.bubbleUp() is called by .add() which appends an element to the internal heap property. Hence, we need to keep track of the added element.
    Inside .bubbleUp(), declare a let current variable that will point to the added element’s index. Initialize current to the added element’s current location, which is the end of heap. */

    bubbleUp() { // Define another MinHeap class method, .bubbleUp(), below .add() whose task is to preserve the heap properties after an element is added to the heap.
      //console.log('Bubble Up'); // For now, log a message 'Bubble Up' inside the method.
      let current = this.size; // declare a let current variable that will point to the added element’s index. Initialize current to the added element’s current location, which is the end of heap.
      /*set up a while loop that will run as long as it meets these 2 conditions:
      There is a valid current index. A valid current index is anything greater than 1.
      The value at the current index is less than its parent’s value. This will violate the min-heap condition and will trigger swapping values. Use a helper method to derive the parent index. */
      while (current > 1 && this.heap[current] < this.heap[getParent(current)]) { // Condition 1 and Condition 2.

        /* swap the parent index and the current index using the helper method, .swap() that has been provided for you. Pass both current and parent indices to .swap().
        Optionally, display:
        the content of the current heap and
        a message that shows swapping will occur between the current index and its parent before the actual swap. */
        console.log('..', this.heap); // the content of the current heap
        console.log(`.. swap index ${current} with ${getParent(current)}`); // a message that shows swapping will occur between the current index and its parent before the actual swap.
        this.swap(current, getParent(current)); // swap the parent index and the current index using the helper method, .swap() that has been provided for you. Pass both current and parent indices to .swap().
        current = getParent(current); // The last thing to do inside the while loop is to update the current index to be its parent’s index, since we are progressing upwards, or bubbling up, the binary tree model of the min-heap.
      }
    }

    // Heapify I
    heapify() { // Define an empty .heapify() method below .bubbleUp() in MinHeap.
      // We are going to heapify beginning from the index that always points to the minimum value. Declare a let current which points to index 1. At this stage, index 1 is pointing to the out-of-place value we swapped in while removing the minimum.
      let current = 1; // Declare a let current which points to index 1
      // We are going to use .canSwap() as we traverse each element in our heap tree. Since .canSwap() takes 3 arguments: current index, left child index, and right child index, we need to add two more local variables.
      let leftChild = getLeft(current); // Declare two local variables leftChild and rightChild and assign them to their appropriate values.
      let rightChild = getRight(current); // Declare two local variables leftChild and rightChild and assign them to their appropriate values.
      while(this.canSwap(current, leftChild, rightChild)) { // Write a while loop that calls .canSwap()
        if(this.exists(leftChild) && this.exists(rightChild)) { // In .heapify() at the beginning of the while loop, check to see if leftChild and rightChild both exist. Use the helper method .exists() to check for the existence of an element at a particular index.
          // If both children exist, we need to only swap with the smaller of the two. Inside the if statement that checks for the existence of both children, compare the left child’s value with the right child’s value.
          if(this.heap[leftChild < this.heap[rightChild]]) { // If the left child is smaller than the right child:
            this.swap(current, leftChild); // swap the current element with the left child
          } else { // Otherwise, if the right child is smaller than the left child:
            this.swap(current, rightChild); // swap the current element with the right child
            current = rightChild; // update the current element index to be the right child
          }
        } else { // If only one child exists, it has to be the left child. Write an else block to the outer if statement that:
          this.swap(current, leftChild); // swap the current element with the left child
          current = leftChild; // update the current element index to be the left child
        }
        leftChild = getLeft(current); // At the bottom of the while loop, update the leftChild and rightChild to their appropriate values so that the loop will not run infinitely.
        rightChild = getRight(current); // At the bottom of the while loop, update the leftChild and rightChild to their appropriate values so that the loop will not run infinitely.
      }
    }


    exists(index) {
      return index <= this.size;
    }
  
    canSwap(current, leftChild, rightChild) {
      // Check that one of the possible swap conditions exists
      return (
        this.exists(leftChild) && this.heap[current] > this.heap[leftChild]
        || this.exists(rightChild) && this.heap[current] > this.heap[rightChild]
      );
    }

    
    swap(a, b) {
      [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
  
  }

  const getParent = current => Math.floor((current / 2));
  const getLeft = current => current * 2;
  const getRight = current => current * 2 + 1;

  module.exports = MinHeap;