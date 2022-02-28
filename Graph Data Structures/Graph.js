const Edge = require('./Edge.js');
const Vertex = require('./Vertex.js');

class Graph {
    /*Moving on to the constructor for our Graph class, a graph is essentially a collection of vertices and edges. Our graph only needs to keep track of a list of vertices.

    In the Graph class in Graph.js, create a constructor that takes no parameters. Since a graph doesn’t have any vertices when it is first created, set the vertices property to an empty array in the constructor. */
    constructor() { // create a constructor that takes no parameters
        this.vertices = []; // Since a graph doesn’t have any vertices when it is first created, set the vertices property to an empty array in the constructor.
      }

      // Adding Vertices
      /*Now that we have set up our data structures, we can provide an easier way to manage the graph’s list of vertices. This gives us an opportunity to abstract out the places that use the Vertex class.
      Currently, we would have to manually create a new Vertex instance and add it into the Graph’s list of vertices to populate the graph. 
      If we create an .addVertex() method in the Graph class, it simplifies the process of adding a vertex to the graph. 
      This alleviates the burden of knowing how the Vertex class should interact with the Graph class for whoever is using our Graph. They only need to interact with the Graph class. 
      
      Inside the Graph class, add an .addVertex() method that expects a single parameter, data, which contains the data of vertex to create. Using this argument, create a Vertex instance and add it to the Graph’s list of vertices.
      We will want to return the newly created Vertex to signal to the method caller that a vertex was successfully created and added to the list.*/
      addVertex(data) { // add an .addVertex() method that expects a single parameter, data, which contains the data of vertex to create.
        const newVertex = new Vertex(data); // Using this argument, create a Vertex instance and add it to the Graph’s list of vertices.
        this.vertices.push(newVertex); // add it to the Graph’s list of vertices.
    
        return newVertex; // return the newly created Vertex to signal to the method caller that a vertex was successfully created and added to the list.
      }
  
  print() {
    const vertexList = this.vertices || [];
    vertexList.forEach(vertex => vertex.print());
  }
}

const trainNetwork = new Graph();
const atlantaStation = trainNetwork.addVertex('Atlanta');
const newYorkStation = trainNetwork.addVertex('New York');

trainNetwork.print();

module.exports = Graph;