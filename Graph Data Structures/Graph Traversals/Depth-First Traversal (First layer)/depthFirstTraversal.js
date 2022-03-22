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
    /*Great! Now we should set up our list of visitedVertices so we can mark the neighbor vertex as “visited”. We won’t need to provide the visitedVertices as an argument since we are using a queue to traverse through the graph instead of recursion.
    Inside the function and before the forEach loop, create a const variable, visitedVertices. Set it to an array with the start vertex as the first element. */
    const visitedVertices = [start];
    /* Next, we will go down one layer and traverse all of the start vertex’s neighbor. Set up a .forEach() iterator to iterate through all of its edges.
    Each edge contains the neighboring vertex in its end property, which will be our neighbor. Create a const variable, neighbor, and set it to the end property of each edge. */
    start.edges.forEach(edge => {
        const neighbor = edge.end;
        /* Almost there! Before we can mark the neighbor as “visited”, we need to check that the visitedVertices does not already include the neighbor vertex. 
        Otherwise, we could end up “visiting” the vertices multiple times by adding duplicates of the vertex in our visitedVertices list.
        After the neighbor vertex is declared, add an if statement that checks that the neighbor is not included in the visitedVertices. If the neighbor is not, then we can mark it as “visited” by adding it to the list of visitedVertices.*/
        if(!visitedVertices.includes(neighbor)) {
            visitedVertices.push(neighbor);
        }
    })
    /*We’ve now successfully iterated through all of the start vertex’s neighbors. To check that we are “visiting” the vertices in the correct order, print out the visitedVertices right before the end of the function.
    When we run the function with our test graph, we should see the vertices in the following order: v0.0.0, v1.0.0, and v2.0.0. */
  console.log(visitedVertices);
};

breadthFirstTraversal(testGraph.vertices[0]);