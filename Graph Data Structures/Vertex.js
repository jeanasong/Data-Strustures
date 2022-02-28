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

Let’s start with familiarizing ourselves with the classes that we will build in Vertex.js and Graph.js. We already set up .print() methods for you that will print out the state of the graph structure. Don’t worry about the class in Edge.js yet. We will use it to connect the vertices in a later exercise.

To keep the concepts grounded in a real-world application, we’ll build a transportation network of railroads and train stations as we go. */


const Edge = require('./Edge.js');

class Vertex {
  
  
  print() {
    const edgeList = this.edges.map(edge =>
        edge.weight !== null ? `${edge.end.data} (${edge.weight})` : edge.end.data) || [];

    const output = `${this.data} --> ${edgeList.join(', ')}`;
    console.log(output);
  }
}

module.exports = Vertex;