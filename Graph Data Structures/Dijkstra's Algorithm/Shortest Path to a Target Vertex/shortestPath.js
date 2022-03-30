const testGraph = require('./testGraph.js');
const dijkstras = require('./dijkstras.js');
/*Shortest Path to a Target Vertex
Our current implementation of Dijkstra’s returns the shortest paths for all of the vertices in the graph. 
We can build upon this to create a function in shortestPath.js that reconstructs the full path to one vertex.

We will need to make a call to dijkstras() to get the map of distances and previous vertices. 
From there we can grab the target vertex’s shortest distance from distances and build the entire path using the previous vertices.

We cannot do this while dijkstras() continues to calculate the paths, because we cannot guarantee that the first encounter of the target vertex is the shortest path. 
Doing it after all the paths have been evaluated covers the possibility that an alternate path later in the queue will be shorter than the first one, particularly when there are negative distances. */


/* We should first supply our shortestPathBetween() function with the graph, starting vertex, and target vertex.
Add 3 parameters to the shortestPathBetween() function: graph, startingVertex, and targetVertex. */
const shortestPathBetween = (graph, startingVertex, targetVertex) => {

    /*Now we should make a call to dijkstras() to retrieve the shortest distances and previous vertices.
    Call dijkstras() and pass the given graph and startingVertex as arguments. Destructure distances and previous from the resulting output. */
    const {distances, previous} = dijkstras(graph, startingVertex);

    /*We will want to return the shortest distance from the starting vertex to the target vertex. We can access this in distances using the targetVertex’s data.
    After the call to dijkstras(), create a distance variable and set it to the target vertex’s shortest distance in distances.
    Then, return the distance in an object with the distance property set to distance. */
    const distance = distances[targetVertex.data];

    /*We also want to construct the path and return it back. 
    Since each entry in previous is a reference to the previous vertex in the shortest path, we can walk backwards through the previous vertices and store the vertex in our path. 
    This is similar to a linked list traversal, just in reverse. 
    
    After the distance is created, create another variable, path, and set it to an empty array. Go ahead and add the path to the return object.*/
    const path = [];

    // Then create a temporary variable, vertex, and set it to the targetVertex. This is the end of the path where we will start our backwards traversal.
    let vertex = targetVertex;

    /*We will add the vertex into the path, set the next vertex to the previous vertex, and repeat until there are no vertices left in the path. To do this, we will set up a while loop to control the iterations.
    When there are no vertices left, then the vertex will be null. After the temporary vertex is initialized, set up a while loop that continues to run as long as vertex is not null. */
    while(vertex) {
        // Inside the loop, .unshift() the vertex into the path. This will allow the vertex to be inserted at the beginning of the array instead of the end.
        path.unshift(vertex);
        // We will also want to update the vertex to be the previous vertex so it can get added in. Set vertex to the vertex’s data in previous.
        vertex = previous[vertex.data];
      }

    // Then, return the distance in an object with the distance property set to distance.
    // Go ahead and add the path to the return object
    return {distance, path};

};

// Retrieve shortest path between vertices A and G
const a = testGraph.getVertexByValue('A');
const g = testGraph.getVertexByValue('G');
const results = shortestPathBetween(testGraph, a, g);

/* All that’s left is to print out our results of calling shortestPathBetween() on vertices A and G. 
Add in a statement to print out results. We should see the distance is -38 and the path is A, D, E, and G. */
console.log(results);

module.exports = shortestPathBetween;
