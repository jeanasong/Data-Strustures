/* The Knapsack Problem
Recursive and dynamic programming approaches to the classic knapsack problem in JavaScript.

An Example
Let’s say that you have a knapsack that can only carry 5 pounds, and the house you’re robbing has three items that you want to steal:

A ring that weighs 1 pound with a value of $250
Earrings that weigh 3 pounds with a value of $300
A necklace that weighs 5 pounds with a value of $500

The Recursive Solution
The brute force solution to this problem is to look at every subset of the items that has a total weight less than weightCap. 
Then you simply take the maximum of those subsets, giving you the optimized subset with the highest value possible.

You will need an additional parameter, i, that tells us where we are in the list of items. 
With each step, we will break the problem down into subproblems, and compare them to find the maximum value. 
There are three possibilities for every call of the function:

1. weightCap or i are zero, meaning the knapsack can hold no weight, or there are no more items to look at. In either case, we return 0.
2. The weight of the item we’re looking at exceeds weightCap, in which case we just move on, calling the function on the next item.
3. If neither of the above are true, that means we have to consider whether or not the item we are at (i) should be included in the optimal solution.

Steps 1 and 2 from above can be solved as follows:

const recursiveKnapsack = function(weightCap, weights, values, i) {
  if (weightCap === 0 || i === 0) {
    return 0;
  } else if (weights[i - 1] > weightCap) {
    return recursiveKnapsack(weightCap, weights, values, i - 1);
  } 
};
For step 3, we need to look at both situations and determine if we want to include this item in our optimized solution or not.

Fill in the code to solve step 3 and finish the recursiveKnapsack() function.
*/
const recursiveKnapsack = function(weightCap, weights, values, i) {
    if (weightCap === 0 || i === 0) {
      return 0;
    } else if (weights[i - 1] > weightCap) {
      return recursiveKnapsack(weightCap, weights, values, i - 1);
    } else {
      const includeItem = values[i - 1] + recursiveKnapsack(weightCap - weights[i - 1], weights, values, i - 1);
      const excludeItem = recursiveKnapsack(weightCap, weights, values, i - 1);
      return Math.max(includeItem, excludeItem);
    }
  };

/* While this recursive solution works, it has a big O runtime of O(2^n). 
In the worst case, each step would require us to evaluate two subproblems, sometimes repeatedly, as there’s overlap between subproblems. 
We can drastically improve on this runtime by using dynamic programming. */