/*Depth-First Traversal (One path)
Traversals are incredibly useful when you are trying to find a particular value or a particular path in a graph. We’ll first explore the depth-first traversal function for traversing through a directed graph. 
To recap, depth-first traversals iterate down each vertex, one neighbor at a time, before going back up and looking at the neighbor’s connected vertices. 
In this exercise, we will focus on traversing down the full length of one path and logging each vertex’s data value.

For simplicity, we’ll implement the traversal iterator as a separate function instead of as a method on the Graph class. In other implementations, the iterator can be seen as a class method.

We have also set up a sample graph in testGraph.js for you to test the traversals against. Feel free to take a look at the file to familiarize yourself with the structure of the graph. */

const testGraph = require('./testGraph.js');

// Traversal throgh all the path

/*Let’s start by setting up our traversal function. Since it will be used to traverse a graph, we can expect for the graph to be provided in the form of the starting vertex.
We’ve provided an empty depthFirstTraversal() function. Add a vertex parameter, start, and print out the parameter’s data property so we can see which vertex we are on. 



Now that we have the first neighbor, we want to go down this neighbor’s first edge, and then traverse down that vertex’s first edge, and so on. 
To do that, we can leverage recursion to take care of the downward traversal by passing the neighbor vertex as the new starting vertex in the function call.

Call the depthFirstTraversal() function if the start vertex has neighbors left to traverse. Make sure to pass in the neighbor vertex to the recursive call so that we can go down the path and iterate through the neighbor’s first connected vertex.
Since we’re making a recursive call through the neighbors, we can remove the call to console.log that prints out the neighbor.data.

If there was a cycle, or if the neighbor’s first connected vertex is the neighbor, we would be stuck in an infinite loop, iterating between the same neighbors. 
To account for this, we can add an array to keep track of all the vertices that we have visited. We should pass it in every recursive call, to make sure we never visit the same vertex more than once.
Add a second parameter to the function called visitedVertices. By default, it should be set to an array that contains the start argument.*/

const depthFirstTraversal = (start, visitedVertices = [start]) => { // Add a vertex parameter, start and second argurment visitedVertices set to an array that contains the start argument.
    /*Since we’re making a recursive call through the neighbors, we can remove the call to console.log that prints out the neighbor.data. */
    // console.log(start.data) // print out the parameter’s data property so we can see which vertex we are on.
  
    /*Since we are only focusing on the full length of one path, the next vertex we want to traverse is the starting vertex’s first neighbor. 
    We cannot always assume that all vertices will have outgoing edges, so we will need to handle this case.

    After the start vertex’s data property is printed, add an if statement with a condition that checks if the start vertex has edges to traverse.

    Inside the if block, create a variable, neighbor and set it to the first neighbor, which can be found among the start vertex’s list of edges. Go ahead and print out the neighbor’s data to verify that we grabbed the right neighbor. */
    if(start.edges.length) { // add an if statement with a condition that checks if the start vertex has edges to traverse.
        const neighbor = start.edges[0].end; // create a variable, neighbor and set it to the first neighbor, which can be found among the start vertex’s list of edges.
        console.log(neighbor.data) // Go ahead and print out the neighbor’s data to verify that we grabbed the right neighbor.

        if(!visitedVertices.includes(neighbor)) { // Then, add an if statement to check if it does not include the neighbor vertex. We shouldn’t visit a vertex more than once, so make the recursive call if the neighbor is not included in the visitedVertices.
            /* Whenever we make another call to traverse down the paths, we are visiting a new vertex so we should update the list of visitedVertices to reflect that.
            Right before we make the recursive call to the depthFirstTraversal() function, add the neighbor vertex to the array of visitedVertices.
            The visitedVertices is now changed, so our recursive call should be aware of that. Pass the updated visitedVertices as the second argument to the call to depthFirstTraversal(). */
            visitedVertices.push(neighbor); // Right before we make the recursive call to the depthFirstTraversal() function, add the neighbor vertex to the array of visitedVertices.
            depthFirstTraversal(neighbor, visitedVertices); // Call the depthFirstTraversal() function if the start vertex has neighbors left to traverse. Make sure to pass in the neighbor vertex to the recursive call so that we can go down the path and iterate through the neighbor’s first connected vertex.
        }
      }
};

depthFirstTraversal(testGraph.vertices[0]);
