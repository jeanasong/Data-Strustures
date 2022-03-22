/*Breadth-First Traversal (First layer)
Now it’s time to focus on breadth-first traversal! Just as a reminder, breadth-first iterates through the whole graph in layers by going down one layer, which comprises the start vertex’s direct neighbors. 
Then it proceeds down to the next layer which consists of all the vertices that are neighbors of the vertices in the previous layer.

For this exercise, let’s focus on traversing down one layer. We will take a similar approach as we did with the depth-first traversal by keeping an array of visitedVertices to prevent us from iterating through the same vertices.

However, we will iterate through all of the direct neighbor vertices instead of iterating down the neighbor’s first edge. 
We will also use a queue to traverse through the graph instead of recursion to explore the different ways we can implement the traversals. */
const testGraph = require('./testGraph.js');

/*Let’s start by creating our breadthFirstTraversal() function. We should expect for the graph to be provided in the form of the starting vertex.
Add the start vertex as a parameter to breadthFirstTraversal() . */
const breadthFirstTraversal = (start) => { // Add the start vertex as a parameter to breadthFirstTraversal()

};

breadthFirstTraversal(testGraph.vertices[0]);