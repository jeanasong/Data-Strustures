const PriorityQueue = require('./PriorityQueue.js');
const testGraph = require('./testGraph.js');

/* Evaluate All Paths
Currently, we’re evaluating the distances to the neighbors of the starting vertex, but we want to expand this to every connected vertex in the graph. 
Every time we discover a shorter path to a neighbor, we should queue up the neighbor to explore its connections and evaluate them.

This will accomplish two things:

Any paths that have not yet been explored will be explored
For vertices that already have a path found, we will re-evaluate if the alternate path through the neighbor will result in a shorter distance.
We are guaranteed that every vertex is evaluated because whenever a path is found to a vertex, then it will be queued up and its neighbors will be evaluated. 
The only way for a vertex to escape evaluation is if there are no connections to the vertex.

For our queue, we will use a priority queue. 
A priority queue is a specialized form of a min-heap, where the priority of a piece of data is stored alongside data, and elements are popped based on the priority value. 
We have provided the MinHeap.js file for you in case you want a refresher on a basic heap data structure. 
In the meantime, take a look through PriorityQueue.js to familiarize yourself with the data structure. 
We mainly need the .add() method to queue up elements with a priority, and the .popMin() method to grab the element with the lowest priority.

This priority queue is better than a regular queue since it allows us to evaluate the vertices with the shortest distances first. 
This way we can avoid unnecessarily re-evaluating paths later in the queue since it is less likely that a longer path will result in a shorter distance. */

const dijkstras = (graph, startingVertex) => {
	const distances = {};
    const previous = {};
    /* First, let’s set up the Priority Queue that we will use to hold the vertices we will evaluate as we traverse through the graph.
    Right after the previous object is instantiated, create a const variable, queue, and set it to a new instance of a PriorityQueue. */
    const queue = new PriorityQueue();


    queue.add({ vertex: startingVertex, priority: 0});
    
	graph.vertices.forEach((vertex) => {
		distances[vertex.data] = Infinity;
		previous[vertex.data] = null;
    });
    
    /* The first vertex we want to evaluate is the starting vertex. 
    After instantiating the queue, make a call to .add() the starting vertex to the queue. 
    Pass in an object with the vertex property set to the startingVertex, and the priority property set to 0. 
    The priority is the vertex’s distance to the starting vertex. */
    distances[startingVertex.data] = 0;
    
    /* Great! Our queue is running along, so we just need to set up a loop to go through all of the vertices in the queue. As long as there are vertices left in the queue, we should continue evaluating alternate paths.
    After the distance of startingVertex is set to 0, set up a while loop that continues to evaluate the distances as long as the queue is not empty. You can call .isEmpty() on queue to check if it is empty or not. 
    This should come right before the vertices are popped from the queue and end right after we iterate through the neighbors. */
    while(!queue.isEmpty()) {

        /* Currently, we are iterating through the startingVertex’s edges and calculating the distance of the alternate path using the startingVertex’s distance. 
        Now, we want to shift to evaluate the vertices in the queue.
        Instead of setting the vertex variable to the starting vertex, we want to set it to the vertex with the smallest priority in the queue, which will initially be the starting vertex. 
        Dequeue the vertex with the smallest priority from the queue by calling the .popMin() method and declare the vertex variable by destructuring it from the resulting object. */
        const { vertex } = queue.popMin();

	    vertex.edges.forEach((edge) => {

		    const alternate = edge.weight + distances[vertex.data];
		    const neighborValue = edge.end.data;

		    if (alternate < distances[neighborValue]) {

			    distances[neighborValue] = alternate;
                previous[neighborValue] = vertex;

                /* For now, we only have the startingVertex queued up for evaluation. However, we also want to queue up any neighbors where a shorter distance from the vertex to the neighbor is found. 
                This is because other paths that go through this neighbor could be shorter than what was previously recorded.

                If the alternate path to the neighbor is shorter than the previously recorded distance, .add() the vertex’s neighbor to the queue where the vertex property is set to the neighbor, and the priority is the new neighborValue in distances. */
                queue.add({vertex: edge.end, priority: distances[neighborValue]})
		    }
	    })
    }
	return { distances, previous };
};

/* Awesome job! We’ve gotten through the basis of Dijkstra’s. Run the function on the test graph and print out the result, you should see the following shortest distances:

A: 0
B: 3
C: 7
D: 4
E: 12
F: 22
G: -38
These should be the following previous vertices:

A: null
B: A
C: D
D: A
E: D
F: E
G: E */

const results = dijkstras(testGraph, testGraph.vertices[0]);
console.log(results);

module.exports = dijkstras;
