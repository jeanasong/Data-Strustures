/* Using the pseudocode above, finish the efficientSolution() function. 
Make sure you run it on the given array first! (If you run into an infinite loop, you can refresh the page to stop it.) */

// function efficientSolution(heights) {
//     let totalWater = 0;
//     let leftPointer = 0;
//     let rightPointer = heights.length - 1;
//     let leftBound = 0;
//     let rightBound = 0;
    
//     //
//     while (leftPointer < rightPointer) {
//       if (heights[leftPointer] <= heights[rightPointer]) {
//         leftBound = Math.max(heights[leftPointer], leftBound);
//         totalWater += leftBound - heights[leftPointer];
//         leftPointer++;
//       } else {
//         rightBound = Math.max(heights[rightPointer], rightBound);
//         totalWater += rightBound - heights[rightPointer];
//         rightPointer--;
//       }
//     }
//     return totalWater;
    
//   }
  
//   const testArray = [4, 2, 1, 3, 0, 1, 2];
//   console.log(efficientSolution(testArray));
//   // Our function would return 6
  
//   // Leave this so that we can test your code:
//   module.exports = efficientSolution;


  /* Congrats! You created the optimized solution to the capturing rain water problem. 
  This solution has a linear time complexity because it only loops through the array one time. 
  Additionally, both this and the naive solution have a constant space complexity of O(1). 
  There are other solutions that have also have linear time but then have a linear space complexity, like a solution that uses arrays to keep track of the left and right bounds. 
  How do you think that solution would work? */