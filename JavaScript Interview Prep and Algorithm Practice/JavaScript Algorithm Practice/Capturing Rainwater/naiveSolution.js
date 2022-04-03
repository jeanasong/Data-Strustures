/* The Naive Solution
The naive solution to the problem is to:

1. Traverse every element in the array
2. Find the highest left bound for that index
3. Find the highest right bound for that index
4. Take the lower of those two values
5. Subtract the height of that index from that minimum
6. Add the difference to the total amount of water
In JavaScript this looks like this: */

// In JavaScript this looks like this:
function naiveSolution(heights) {
    let totalWater = 0;
    for (let i = 1; i < heights.length - 1; i++) {
      let leftBound = 0;
      let rightBound = 0;
      // We only want to look at the elements to the left of i, which are the elements at the lower indices
      for (let j = 0; j <= i; j++) { 
        leftBound = Math.max(leftBound, heights[j]);
      }
      // Likewise, we only want the elements to the right of i, which are the elements at the higher indices
      for (let j = i; j < heights.length; j++) {
        rightBound = Math.max(rightBound, heights[j]);
      }
      totalWater += Math.min(leftBound, rightBound) - heights[i];
    }
    return totalWater;
  }

  /* While this is a functional solution, it requires nested for loops, which means it has a big O runtime of O(n^2). 
  Let’s look at a solution with a more efficient runtime. */