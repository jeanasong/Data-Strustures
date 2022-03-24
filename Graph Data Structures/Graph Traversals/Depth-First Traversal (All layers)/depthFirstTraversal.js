/*Breadth-First Traversal (All layers)
So far, we can iterate down one layer, but we have yet to iterate down the remaining layers. In order to do so, we will introduce a queue that will keep track of all of the vertices to visit.

As we iterate through the neighbors, we will add its connected vertices to the end of the queue, pull off the next neighbor from the queue, add its connected vertices, and so on. 
This way allows us to maintain the visiting order; we will visit the vertices across the same layer while queueing up the next layer. 
When there are no vertices left in the current layer, the vertices of the next layer are already queued up, so we move down and iterate across the next layer.

We will use our implementation of the Queue data structure that was covered in a previous course. It is located in Queue.js. Go ahead and take a quick look to refresh your memory of the data structure and the available methods. */

// Need to import Graph.js
const testGraph = require('./testGraph.js');
const Queue = require('./Queue.js');

const breadthFirstTraversal = (start) => {

  const visitedVertices = [start];
  /*We will create our queue with the start vertex as the first connected vertex to iterate through.
    Right after we create our list of visitedVertices, create a const variable, visitQueue. Instantiate a new Queue and assign it to the visitQueue.
    Then .enqueue() the start vertex to the queue. */
  const visitQueue = new Queue(); // create a const variable, visitQueue. Instantiate a new Queue and assign it to the visitQueue.
  visitQueue.enqueue(start); // Then .enqueue() the start vertex to the queue
  /*When we are looking at a vertex from visitQueue, we want to dequeue it so that we don’t look at it again. The visitedVertices array ensures that it does not get enqueued into visitQueue again.
  Before the .forEach() iterator, .dequeue() the next vertex from the visitQueue and assign it to the current variable with const. Go ahead and print out the data property of the current vertex so we can see which vertex we’re looking at. */
  visitQueue.enqueue(start);
  /*The queue holds all of the vertices that we have yet to iterate through. This means we want to continue iterating through these vertices as long as there are vertices left in the queue.
    After we enqueue the start vertex, add in a while loop that continues to run as long as the visitQueue is not empty. 
    Make sure that it includes dequeuing the next vertex and the forEach() iterator, since we also want to update visitedVertices if there are still vertices in the queue. */
    while(!visitQueue.isEmpty()) {
        const current = visitQueue.dequeue();
        console.log(current.data);
        /* Next, we want to iterate through the current vertex’s neighbors and enqueue them, not just the start vertex’s neighbors.
        Update the .forEach() iterator to iterate through the current vertex’s edges instead. Then, inside the .forEach() iterator, if the visitedVertices does not include the neighbor, we should enqueue the neighbor to the visitQueue. */
        current.edges.forEach((edge) => {
          const neighbor = edge.end;
          if (!visitedVertices.includes(neighbor)) {
            visitedVertices.push(neighbor);
            visitQueue.enqueue(neighbor); // if the visitedVertices does not include the neighbor, we should enqueue the neighbor to the visitQueue.
          }
        })
      } // End of while loop
    };

breadthFirstTraversal(testGraph.vertices[0]);


/*That’s it! When we run the graph traversal with the testGraph, we should see the vertices printed out in the following order: v0.0.0, v1.0.0, v2.0.0, v1.1.0, v1.2.0, v2.1.0, v1.1.1, v1.1.2, v1.2.1, and v2.1.1.

If you’re feeling up for a challenge, take a moment to consider the following:

How would you modify this to take a recursive approach?
How would you add in a callback to expand the utility of the function? */
