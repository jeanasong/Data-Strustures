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

      // Removing Vertices
      /* We also want our Graph to manage its own vertex removal, just like how it handles its own vertex creation.
      We will use the .removeVertex() method to look for the requested vertex and remove it from the list of vertices.
      
      Inside the Graph class, implement the .removeVertex() method that accepts the vertex to be removed as a parameter. 
      Iterate through the list of vertices and remove the vertex that is strictly equal to the vertex given in the parameter. */
      removeVertex(vertex) {
        // Iterate through the list of vertices and remove the vertex that is strictly equal to the vertex given in the parameter.
        this.vertices = this.vertices.filter(v => v !== vertex);
      }

      /* Connecting Vertices with Edges
      We’re ready to connect vertices with edges through our Graph class. In the Graph class, create an .addEdge() method, which will create edges between the parameters, vertexOne and vertexTwo.
      If the parameters are both an instanceof a Vertex, use the vertices’ .addEdge() method to create an edge between the other vertex. Remember to add edges between both vertices.
      Otherwise, throw an error if either of them are not. */
      addEdge(vertexOne, vertexTwo) {
        if(vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
          vertexOne.addEdge(vertexTwo);
          vertexTwo.addEdge(vertexOne);
        } else {
          throw new Error('Expected Vertex arguments');
        }
      }
  
  print() {
    const vertexList = this.vertices || [];
    vertexList.forEach(vertex => vertex.print());
  }
}

const trainNetwork = new Graph();
const atlantaStation = trainNetwork.addVertex('Atlanta');
const newYorkStation = trainNetwork.addVertex('New York');

/* Underneath our Graph class, let’s remove the Atlanta vertex we added in the previous exercise using the trainNetwork‘s .removeVertex() method. 
Remember to do it before the call to .print() so we can see what the resulting graph looks like.
We should see our graph with only the New York vertex remaining, and no edges. */
//trainNetwork.removeVertex(atlantaStation);

/*Let’s verify that we can successfully create an edge between two vertices through the Graph class. Under the Graph class, there are two Vertex instances: atlantaStation and newYorkStation.
Before the trainNetwork is printed, use the trainNetwork’s .addEdge() method to create an edge between the two vertices. We should see Atlanta connect to New York, and New York connect to Atlanta. */
trainNetwork.addEdge(atlantaStation, newYorkStation);

trainNetwork.print();

module.exports = Graph;