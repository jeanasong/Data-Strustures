// Finding the Maximum Value in a Linked List


// Fill in the findMax() function such that you return the maximum value in list by only traversing it once.

function findMax(list) {
    let current = list.head;
    let max = current.data;
    while (current.getNextNode() !== null) {
      current = current.getNextNode();
      let val = current.data;
      if (val > max) {
        max = val;
      }
    }
    return max;
  }

  /* Since you only traversed the list once to find the maximum value, 
  what is the big O runtime of the findMax() function? 
  
  Answer: The big O runtime is n since you iterate through the list one time.
  Linear: Θ(N) */
