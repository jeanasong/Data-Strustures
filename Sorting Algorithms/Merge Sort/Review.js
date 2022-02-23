const mergeSort = (startArray) => {
    const length = startArray.length;
    if (length === 1) {
      return startArray;
    }
    
    const mid = Math.floor(length / 2);
    const leftArray = startArray.slice(0, mid);
    const rightArray = startArray.slice(mid, length);
  
    return merge(mergeSort(leftArray), mergeSort(rightArray))
  }
  
  const merge = (leftArray, rightArray) => {
    const sortedArray = [];
    while (leftArray.length > 0 && rightArray.length > 0) {
        /*In index.js, we included the solution code from the last exercise. 
        If you’re up for the challenge, see if you can combine the two lines in your if and else blocks into one line to make your code look a little cleaner. */
        if (leftArray[0] < rightArray[0]) {
        sortedArray.push(leftArray[0]), leftArray.shift();
      } else {
        sortedArray.push(rightArray[0]), rightArray.shift();
      }
    }
    
    return sortedArray.concat(leftArray).concat(rightArray);
  }
  
  
  const inputArr = [3, 5, 2, 90, 4, 7];
  
  console.log(mergeSort(inputArr));
  
  module.exports = {
    mergeSort
  };