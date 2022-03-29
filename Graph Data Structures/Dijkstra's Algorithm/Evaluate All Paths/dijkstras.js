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

/* Setup
To begin, we need to provision our dijkstras() function with two parameters: graph and startingVertex. graph is the actual data structure instance. 
startingVertex indicates the starting point from which we will construct the paths.

In the dijkstras() function, specify the graph as the first parameter and startingVertex as the second parameter. */
const dijkstras = (graph, startingVertex) => {
    /*We will want to keep track of the total distances for the shortest paths to each vertex. In the dijkstras() function, create a distances variable and set it to an empty object. distances will be used to map each vertex to the distance of its path to the starting vertex. */
    const distances = {}; // create a distances variable and set it to an empty object. distances will be used to map each vertex to the distance of its path to the starting vertex.
    
    /*The last thing we want to track is the shortest paths to each vertex. Instead of recording the full path to every vertex, we just need the previous vertex. 
    This is because we are guaranteed that the vertices leading up to the previous vertex are also the shortest distance, and we can reconstruct the full path by tracing through each vertex’s previous vertex.
    
    After distances is created, create a variable, previous, and set it equal to an empty object. This will be a map of every vertex to its corresponding previous vertex. */
    const previous = {}; // After distances is created, create a variable, previous, and set it equal to an empty object. This will be a map of every vertex to its corresponding previous vertex.

    const queue = new PriorityQueue(); // Right after the previous object is instantiated, create a const variable, queue, and set it to a new instance of a PriorityQueue.

    /* Evaluate All Paths
    The first vertex we want to evaluate is the starting vertex. After instantiating the queue, make a call to .add() the starting vertex to the queue. Pass in an object with the vertex property set to the startingVertex, and the priority property set to 0. The priority is the vertex’s distance to the starting vertex. */
    queue.add({ vertex: startingVertex, priority: 0});

    /* Currently, we are iterating through the startingVertex’s edges and calculating the distance of the alternate path using the startingVertex’s distance. Now, we want to shift to evaluate the vertices in the queue.
    Instead of setting the vertex variable to the starting vertex, we want to set it to the vertex with the smallest priority in the queue, which will initially be the starting vertex. Dequeue the vertex with the smallest priority from the queue by calling the .popMin() method and declare the vertex variable by destructuring it from the resulting object. */
    const { vertex } = queue.popMin();


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
    /* Now, you may be wondering, “but the distance from the starting vertex to the starting vertex is 0, not Infinity!” Let’s resolve this by adjusting the initial distance for the starting vertex.
    After we finish iterating through the graph’s vertices, set the distance of the startingVertex.data in distances to 0. */
    distances[startingVertex.data] = 0;

    /* Evaluate All Paths
    Great! Our queue is running along, so we just need to set up a loop to go through all of the vertices in the queue. As long as there are vertices left in the queue, we should continue evaluating alternate paths.
    After the distance of startingVertex is set to 0, set up a while loop that continues to evaluate the distances as long as the queue is not empty. You can call .isEmpty() on queue to check if it is empty or not. This should come right before the vertices are popped from the queue and end right after we iterate through the neighbors. */
    while(!queue.isEmpty()) {


    /* Evaluate Paths to Starting Vertex’s Neighbors
    We have all of our records set up, so we can start traversing through the graph and evaluating the distances from the starting vertex to its neighbors.
    In the evaluation of each neighbor, we compare the distance of the new path to the distance of the previous path. If the distance of the new path is shorter, we will update our records of distances and previous vertices with the new path.

    Every time we evaluate an edge between a vertex and its neighbor, the if condition ensures that the record will always maintain the shortest path among the evaluations so far. This is why we can use the previously recorded distance for comparison in our evaluation.

    Let’s start evaluating the distances to the starting vertex’s neighbors by iterating through its list of edges.
    Right before we return the recorded results, create a const variable, vertex, and set it to startingVertex. Then use a .forEach() iterator to go through the vertex’s list of edges. We will use the edge argument for this iterator. */
    const vertex = startingVertex; // create a const variable, vertex, and set it to startingVertex.
    vertex.edges.forEach((edge) => { // Then use a .forEach() iterator to go through the vertex’s list of edges. We will use the edge argument for this iterator.
        /* Now we can compare the distance of the new alternate path to the distance of the last recorded path to the neighbor. The distance of the neighbor’s last recorded path is in the distances object at the neighbor’s data.
        Let’s use a variable to hold the key that we will use to access the neighbor’s distance in distances. This will help with code readability. */
        const alternate = edge.weight + distances[vertex.data]; // set it to the sum of the edge’s weight and the value of the vertex’s distance in distances.
        const neighborValue = edge.end.data; // Still in the .forEach(), create a const variable, neighborValue, and set it to the data property of the neighbor, which is located in the end property of the edge.
        if(alternate < distances[neighborValue]) { // Set up an if condition that checks if the alternate distance is shorter than the value at neighborValue in distances.
            /*If the condition is satisfied, then we have found a shorter path and should update the neighbor’s recorded distance and previous vertex.
            If the alternate path is shorter, set distances at the neighborValue to the new alternate cost. We also want to set the previous vertex at the neighborValue to vertex. */
            distances[neighborValue] = alternate; // If the alternate path is shorter, set distances at the neighborValue to the new alternate cost. We also want to set the previous vertex at the neighborValue to vertex.
            previous[neighborValue] = vertex; // We also want to set the previous vertex at the neighborValue to vertex.

            /* Evaluate All Paths
            For now, we only have the startingVertex queued up for evaluation. However, we also want to queue up any neighbors where a shorter distance from the vertex to the neighbor is found. This is because other paths that go through this neighbor could be shorter than what was previously recorded.
            If the alternate path to the neighbor is shorter than the previously recorded distance, .add() the vertex’s neighbor to the queue where the vertex property is set to the neighbor, and the priority is the new neighborValue in distances. */
            queue.add({vertex: edge.end, priority: distances[neighborValue]})

            /* When we evaluate the distances, we are determining if the path from the starting vertex to the neighbor is shorter than the previously evaluated distance. 
            Since we have not evaluated any paths to the neighbors yet, the previously recorded distances to all of the neighbors is Infinity.
            Run the code and look at the output of the function. The shortest paths evaluated so far should be the paths from the starting vertex to its neighbors. 
            In distances we should see the starting vertex with a distance of 0, its neighbors set to the evaluated distances, and all other vertices with Infinity distances. 
            In previous, we should see the neighbors with the starting vertex as their previous vertex, and all other vertices with null. */
        }
    })
}

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
