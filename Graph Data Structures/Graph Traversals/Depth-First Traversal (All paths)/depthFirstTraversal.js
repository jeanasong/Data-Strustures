/*Depth-First Traversal (All paths)
We’ve gotten the hang of traversing down one path, but we want to traverse down all the paths (not just the first possible path). 
We will modify our existing implementation to iterate down all the other paths by using a .forEach() loop to iterate through all of the start vertex’s edges.

We won’t have to worry about iterating through all the neighbors before going down the neighbor’s first connected vertex. 
This is because the recursive call occurs before the next iteration of the for loop. */

const testGraph = require('./testGraph.js');

/*To traverse down all paths, we no longer need the if statement to check if there are edges to traverse. 
Instead, we will use an iterator to go through all of the vertex’s edges. If there are no edges, then the edges array would be empty and nothing would happen. */
const depthFirstTraversal = (start, visitedVertices = [start]) => {
  console.log(start.data);

  start.edges.forEach(edge => { //Replace the if statement with a .forEach() iterator that iterates through the start vertex’s list of edges.
    const neighbor = edge.end;
    if (!visitedVertices.includes(neighbor)) {
      visitedVertices.push(neighbor);
      depthFirstTraversal(neighbor, visitedVertices);
    }
  })
};

depthFirstTraversal(testGraph.vertices[0]);