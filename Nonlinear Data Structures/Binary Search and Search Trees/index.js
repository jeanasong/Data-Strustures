const binarySearch = (arr, target) => {
    // Add left and right variables below
    let left = 0; // Create a let named left and set it equal to 0.
    let right = arr.length; // Create a let named right and set it equal to the length of arr.

    while (right > left) {
    // Add indexToCheck calculation below
    const indexToCheck = Math.floor((left + right) / 2); // Create a const called indexToCheck and set it equal to the floor integer of the average of left and right.
    const checking = arr[indexToCheck]; // 1. Create a constant called checking
    console.log(`indexToCheck equals: ${indexToCheck}`);
    if(checking === target) { // 2. Create a conditional below
        return indexToCheck;
    } else if (target > checking) { // Add else if and else blocks: Add else if and else blocks that set new values to left or right based on a comparison of target and checking.
        left = indexToCheck + 1;
      } else {
        right = indexToCheck;
      }
    }
    return indexToCheck; // Return indexToCheck. You should see 5 printed to the console.
  }
  
  // Change target, at the bottom of index.js to another value in the searchable array to see if your loop returns the correct index.
  const searchable = [1, 2, 7, 8, 22, 28, 41, 58, 67, 71, 94];
  const target = 67;
  
  console.log(binarySearch(searchable, target));
  
  module.exports = {binarySearch};