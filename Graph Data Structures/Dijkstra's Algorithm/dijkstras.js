/*Setup
Dijkstra’s Algorithm is used for evaluating the shortest paths between vertices in a graph. 
The general strategy is to iterate through the vertices in such a way that will always allow us to only consider the shorter path at each vertex and maintain every possible shortest path as we go.

We will first implement the algorithm to find the shortest distance to every vertex. Our implementation will take the following steps:

1. Evaluate the distances between the starting vertex and its neighbors

2. If the new distance to the neighbor is lower than the previous distance, record it, and queue up the neighbor

3. Dequeue the next vertex to evaluate

4. Repeat steps 2 - 3 until there are no more vertices left in the queue.

In this exercise, we will set up the objects that will keep track of the shortest distances between the starting vertex and each other vertex, and the shortest paths.

We will be using a priority queue, which is a specialized heap data structure, to maintain the vertices we need to evaluate next. 
We’ll explain in a later exercise exactly what it is and the reason for using it instead of a regular queue.

We have also set up a test graph for you in testGraph.js to test the output of the function as you complete the exercises. */

const testGraph = require('./testGraph.js');

/*To begin, we need to provision our dijkstras() function with two parameters: graph and startingVertex. graph is the actual data structure instance. 
startingVertex indicates the starting point from which we will construct the paths.

In the dijkstras() function, specify the graph as the first parameter and startingVertex as the second parameter. */
const dijkstras = (graph, startingVertex) => {
    /*We will want to keep track of the total distances for the shortest paths to each vertex. In the dijkstras() function, create a distances variable and set it to an empty object. distances will be used to map each vertex to the distance of its path to the starting vertex. */
    const distances = {}; // create a distances variable and set it to an empty object. distances will be used to map each vertex to the distance of its path to the starting vertex.
    
    /*The last thing we want to track is the shortest paths to each vertex. Instead of recording the full path to every vertex, we just need the previous vertex. 
    This is because we are guaranteed that the vertices leading up to the previous vertex are also the shortest distance, and we can reconstruct the full path by tracing through each vertex’s previous vertex.
    
    After distances is created, create a variable, previous, and set it equal to an empty object. This will be a map of every vertex to its corresponding previous vertex. */
    const previous = {}; // After distances is created, create a variable, previous, and set it equal to an empty object. This will be a map of every vertex to its corresponding previous vertex.

    graph.vertices.forEach((vertex) => { // Iterate through the graph’s vertices using .forEach()
        /*Before we can start evaluating the paths, we also need to initialize each vertex’s distance to Infinity. Any connection will be shorter than Infinity, no matter how large the weight is. 
        As long as there is a connection between two vertices, the connection will always be recognized as part of the shortest path over Infinity.
        Iterate through the graph’s vertices using .forEach() 
        In the distances object, assign each vertex’s data to Infinity. We want the key to be the vertex’s data property and not the vertex itself to make it easier to read and access*/
        distances[vertex.data] = Infinity; // in the distances object, assign each vertex’s data to Infinity. We want the key to be the vertex’s data property and not the vertex itself to make it easier to read and access.
        
        /*We will also need to initialize the vertices in the previous object. In the iterator and after the distances are initialized, map each vertex’s data in the previous object to null. 
        This accounts for situations where the graph is disconnected, or there are vertices that do not have edges leading to them. */
        previous[vertex.data] = null; // In the iterator and after the distances are initialized, map each vertex’s data in the previous object to null. This accounts for situations where the graph is disconnected, or there are vertices that do not have edges leading to them.
    });
    /*Now, you may be wondering, “but the distance from the starting vertex to the starting vertex is 0, not Infinity!” Let’s resolve this by adjusting the initial distance for the starting vertex.
    After we finish iterating through the graph’s vertices, set the distance of the startingVertex.data in distances to 0. */
    distances[startingVertex.data] = 0;

    /* Great! Now we want to return the results of our evaluations in distances and previous. This allows for the user who makes a call to our function to use these computed values.
    You can return both values by returning an object with distances and previous keys set to their respective variables.*/
    return{distances, previous};
};

const results = dijkstras(testGraph, testGraph.vertices[0]);
/*Let’s go ahead and check our output for dijkstras() to make sure we set up our distances and previous paths correctly.
After the dijkstras() function, we have already set up a call to the function with the testGraph and the first vertex in the graph, A, as the starting vertex. The output is stored in results.
Print out the results. In the distances, we should see A with a distance of 0 and the remaining vertices in the graph mapped to Infinity. In previous, we should see every vertex in the graph mapped to null. */
console.log(results);
module.exports = dijkstras;
