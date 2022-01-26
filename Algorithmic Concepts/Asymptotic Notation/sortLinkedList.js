/* Sorting a Linked List
We also often sort data structures in order to organize the values stored in them. In this exercise, you will sort a linked list from the smallest value to the largest value.

There are many ways to sort a linked list, but one way is as follows:

Instantiate a new linked list
Find the maximum value of the linked list input
Insert the maximum to the beginning of the new linked list
Remove the maximum value from the linked list input
Repeat steps 2-4 until the linked list input is empty
Return the new linked list */


/* Fill in the sortLinkedList() function such that you return a new linked list that is sorted from smallest to largest. 
The function uses findMax() from above to return the largest element in the list. */

function sortLinkedList(list) {
    let newList = new LinkedList();
    while (list.head !== null) {
      let currentMax = findMax(list);
      list.remove(currentMax);
      newList.addToHead(currentMax);
    }
    return newList;
  }

  /* What is the big O runtime? Remember that findMax() is called within the sortLinkedList() function. 
  (For the sake of this function, assume that .remove() has a big O runtime of 1.)

  Answer: Since there are nested while loops (one in findMax() and one in sortLinkedList()), the big O runtime is n^2.
  polynomial: Θ(N^2) */