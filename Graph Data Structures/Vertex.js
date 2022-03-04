/*Introduction to Graphs
In this lesson, we’ll take an object-oriented approach to build an implementation of the graph data structure in JavaScript. With three classes, Edge, Vertex, and Graph, we can implement a variety of graphs that satisfy the requirements of many algorithms. Remember that a Graph consists of vertices and their corresponding edges.

For this lesson, we want our Graph class to be flexible enough to support directed, undirected, weighted, and unweighted graphs. We will provide you with an Edge class that connects two vertices, along with the weight of the connection (to support weighted graphs).

With this in mind, we will create our Graph with the following requirements:

A Vertex can store any data.

A Vertex maintains a list of connections to other vertices, represented by a list of Edge instances.

A Vertex can add and remove edges going to another Vertex.

A Graph stores all of its vertices, represented by a list of Vertex instances.

A Graph knows if it is directed or undirected.

A Graph knows if it is weighted or unweighted.

A Graph can add and remove its own vertices.

A Graph can add and remove edges between stored vertices.

Let’s start with familiarizing ourselves with the classes that we will build in Vertex.js and Graph.js. 
We already set up .print() methods for you that will print out the state of the graph structure. 
Don’t worry about the class in Edge.js yet. We will use it to connect the vertices in a later exercise.

To keep the concepts grounded in a real-world application, we’ll build a transportation network of railroads and train stations as we go. */


const Edge = require('./Edge.js');

class Vertex {
    /*Let’s start by setting up the constructor for our Vertex class. When a vertex is first created, it should hold any given data, and it should have an empty list of edges because it does not have any connections.

    In the constructor, expect a data parameter and set it to the data class property. Then, set the edges class property to an empty array. */
    constructor(data) { // create a constructor with data as a parameter
        this.data = data; // set it to the data class property
        this.edges = []; // set the edges class property to an empty array
      }
      // Connecting Vertices with Edges
      /*In our Vertex class, create the .addEdge() method that expects a vertex parameter, which will represent the other end of the edge. It must be an instanceof a Vertex, otherwise we should throw an error. 
      Then, create an Edge instance to represent the connection from this vertex to the ending vertex.
      Add the Edge instance to the vertex’s list of edges to open up our first connection from one vertex to another. */
      addEdge(vertex) {
        if(vertex instanceof Vertex) {
          this.edges.push(new Edge(this, vertex));
        } else {
          throw new Error('Edge start and end must both be Vertex');
        }
      }
  
  print() {
    const edgeList = this.edges.map(edge =>
        edge.weight !== null ? `${edge.end.data} (${edge.weight})` : edge.end.data) || [];

    const output = `${this.data} --> ${edgeList.join(', ')}`;
    console.log(output);
  }
}

module.exports = Vertex;