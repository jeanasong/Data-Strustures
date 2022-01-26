// What is the big O runtime of the following code?

function printEvenPairs(array) {
    for (let i = 0; i <= array.length; i++) {
      for (let j = 0; j <= array.length; j++) {
        if ((array[i] + array[j]) % 2 === 0) {
          console.log(array[i], array[j]);
        }
      }
    }
  }

  /* Answer
  Quadratic O(n^2)
  This code will loop through each element in the list, for each element in the list, so the big O runtime is O(n^2). */