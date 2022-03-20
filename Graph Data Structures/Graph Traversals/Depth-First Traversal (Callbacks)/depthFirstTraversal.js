/* Depth-First Traversal (Callbacks)
Our current implementation of the depth-first traversal simply prints out the vertices of the graph as they are traversed. 
This would be useful in scenarios where we want to see the order that the traversal occurs in. 
For example, if the graph was an instruction list, we need the exact order that the steps will occur to determine which dependencies need to be resolved first.

However, there may be other instances where we want to do something other than printing out the traversal order. 
For example, if we just need to determine if a path exists, like seeing if a maze is solvable, we just need a true or false value. 
We can do this by opening up a callback parameter for the user. */
const testGraph = require('./testGraph.js');
/* Since we want to open up another parameter as a callback, add another parameter to depthFirstTraversal() called callback as the second parameter.

In the recursive call to depthFirstTraversal(), add the callback argument.

We want to avoid making the callback the third parameter to simplify depthFirstTraversal() for the user. 
This means they won’t be forced to supply the visitedVertices parameter if they also want to override the default callback argument. */
const depthFirstTraversal = (start, callback, visitedVertices = [start] ) => {
    /*To test the new callback, add a function as a second argument to depthFirstTraversal() at the bottom of depthFirstTraversal.js. This function should accept a vertex as an argument and print out the data property. Since we passed in a print function as our callback, we should still see the order that the vertices are traversed in.

    This wraps up our implementation of depth-first traversal! If you’re feeling up for it, here are some challenge tasks to tackle:

    This is currently a pre-order traversal. How would you modify the implementation to be a post-order traversal?
    How would you modify the implementation to use a queue instead of recursion? */
  callback(start); // Now let’s put the callback to work. Replace the call to console.log() with a call to callback() and pass in the start vertex.

  start.edges.forEach((edge) => {
    const neighbor = edge.end;

    if (!visitedVertices.includes(neighbor)) {
      visitedVertices.push(neighbor);
      depthFirstTraversal(neighbor, callback, visitedVertices);
    }
  });
};

depthFirstTraversal(testGraph.vertices[0], (vertex) => { console.log(vertex.data) });