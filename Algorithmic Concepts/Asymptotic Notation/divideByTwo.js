// public class Main() { 
//     void int addUpTo(int n) {
//       int total = 0;
//       for (int i = 1; i <= n; i++) {
//         total += i;
//       }
//     return total;
//     } 
//   }

// Analyzing Runtimes

function divideByTwo(n) {
    let countIterations = 0;
    while (n > 1) {
      n = n / 2;
      countIterations++;
    }
    return countIterations;
  }
   
  console.log(divideByTwo(1));
  console.log(divideByTwo(2));
  console.log(divideByTwo(4));
  console.log(divideByTwo(8));
  console.log(divideByTwo(16));
  console.log(divideByTwo(32));
  console.log(divideByTwo(64));


  // Which of the following is the big O runtime of this algorithm? Answer log n

  // Do you notice a pattern forming? With n being divided by 2 each iteration, 
  //we can use that to establish a big O runtime.

  /* divideByTwo() has a big O runtime of log n because the function divides n by two every iteration, and terminates when n is 1. 
  countIterations counts how many times the while loop runs, and you can see in the output that it is log2(n). 
  Since we drop constants for asymptotic notation, the big O runtime is just log n. */