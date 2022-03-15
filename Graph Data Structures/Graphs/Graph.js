const Edge = require('./Graphs/Edge.js');
const Vertex = require('./Vertex.js');

class Graph {
    /*Moving on to the constructor for our Graph class, a graph is essentially a collection of vertices and edges. Our graph only needs to keep track of a list of vertices.
    In the Graph class in Graph.js, create a constructor that takes no parameters. Since a graph doesn’t have any vertices when it is first created, set the vertices property to an empty array in the constructor. 
    
    Weighted Graphs
    The current implementation of our Graph class is unweighted, where there is no cost associated with the edge that connects the vertices together. Since we want our Graph to be flexible, we should give the option for weights to be added to the edge when a new edge is created.
    In the Graph class, add an isWeighted boolean parameter in the constructor for the user to designate that the graph is weighted. It should default to false if no argument is given.
    Set the argument to the isWeighted class property.
    
    Directed Graphs
    The main difference between the undirected graph and directed graph is that our undirected graph uses two edges going in opposite directions to indicate that there is a connection between two vertices.
    */
    constructor(isWeighted = false, isDirected = false) { // add an isWeighted boolean parameter in the constructor for the user to designate that the graph is weighted. It should default to false if no argument is given.
        this.vertices = []; // Since a graph doesn’t have any vertices when it is first created, set the vertices property to an empty array in the constructor.
        this.isWeighted = isWeighted; // Set the argument to the isWeighted class property.
        this.isDirected = isDirected; // Set the argument to the isDirected class property
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
      Otherwise, throw an error if either of them are not. 
      
      Weighted Graphs
      Next, we should feed in the weight argument to the calls to Vertex‘s .addEdge() method from the Graph‘s .addEdge() method if the graph is weighted.
      In the Graph class, add a third parameter for weight in the .addEdge() method. Create a variable edgeWeight, and set it to the weight argument if the graph is weighted, otherwise set it to null. 
      Pass edgeWeight to the calls that create edges between the given vertices. Remember to do this for both calls.
      
      Directed Graphs
      We only want to create one edge that points in one direction between two vertices for directed graphs.
      Modify the Graph‘s .addEdge() method to create the edge from vertexTwo to vertexOne only if this isDirected property is false.*/
      addEdge(vertexOne, vertexTwo, weight) {
        if(vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
          vertexOne.addEdge(vertexTwo, weight); // Pass edgeWeight to the calls that create edges between the given vertices. Remember to do this for both calls.
          // vertexTwo.addEdge(vertexOne, weight); // Pass edgeWeight to the calls that create edges between the given vertices. Remember to do this for both calls.
          if(!this.isDirected) { // Modify the Graph‘s .addEdge() method to create the edge from vertexTwo to vertexOne only if this isDirected property is false.
            vertexTwo.addEdge(vertexOne, edgeWeight);
          }
        } else {
          throw new Error('Expected Vertex arguments');
        }
      }

      /* Removing Vertex Connections
      We’re ready to remove an edge between vertices through our Graph class. In the Graph class, create the .removeEdge() method that removes the edge between two given vertices.
      It should expect the vertices as two parameters: vertexOne and vertexTwo. Throw an error if either of them are not Vertex instances. 
      Then use the vertices’ .removeEdge() method to remove the edge between the other vertex. Remember to do this for both vertices. 
      
      Directed Graphs
      Just as we only want to create one edge between vertices in a directed graph, we also want to remove only one edge between vertices.
      Modify the Graph‘s .removeEdge() method to remove the edge from vertexTwo to vertexOne if this isDirected property is false.*/
      removeEdge(vertexOne, vertexTwo) {
        if(vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
          vertexOne.removeEdge(vertexTwo);
          // vertexTwo.removeEdge(vertexOne);
          if(!this.isDirected) {
            vertexTwo.removeEdge(vertexOne);
          }
        } else {
          throw new Error('Expected Vertex arguments');
        }
      }
  
  print() {
    const vertexList = this.vertices || [];
    vertexList.forEach(vertex => vertex.print());
  }
}

/* Directed Graphs
Finally, let’s modify our train network to only travel in one direction: from New York to Atlanta. Modify the trainNetwork to be unweighted and directed. Pass false for the first argument and true for the second.
We should see only one edge connection going from Atlanta to New York. New York should have no edges going out. */
const trainNetwork = new Graph(false, true); // Modify the trainNetwork to be unweighted and directed. Pass false for the first argument and true for the second.
const atlantaStation = trainNetwork.addVertex('Atlanta');
const newYorkStation = trainNetwork.addVertex('New York');

/* Weighted Graphs
Let’s verify that the Graph can add weights to the edges by adding an edge between atlantaStation and newYorkStation. In Graph.js, edit trainNetwork to be weighted. 
Then call the its .addEdge() method and pass in a value of 800 as an argument, to represent the number of miles between the two train stations.
When we call the trainNetwork’s .print() method to print out the resulting graph, we should see that the edge between Atlanta and New York has a value of 800. */
trainNetwork.addEdge(atlantaStation, newYorkStation, 800);

/*
Underneath our Graph class, let’s remove the Atlanta vertex we added in the previous exercise using the trainNetwork‘s .removeVertex() method. 
Remember to do it before the call to .print() so we can see what the resulting graph looks like.
We should see our graph with only the New York vertex remaining, and no edges. */
//trainNetwork.removeVertex(atlantaStation);

/* Connecting Vertices with Edges 
Let’s verify that we can successfully create an edge between two vertices through the Graph class. Under the Graph class, there are two Vertex instances: atlantaStation and newYorkStation.
Before the trainNetwork is printed, use the trainNetwork’s .addEdge() method to create an edge between the two vertices. We should see Atlanta connect to New York, and New York connect to Atlanta. */
trainNetwork.addEdge(atlantaStation, newYorkStation);

/* Let’s verify that we can successfully remove an edge between two vertices through the Graph class. 
After the edge between Atlanta and New York is added, remove the edges between the two cities. 
Call the trainNetwork’s .removeEdge() with atlantaStation and newYorkStation.
We should see that the atlantaStation and newYorkStation vertices have no edge connections. 

Directed Graphs
Last, but not least, we should test out our edge removal. Call .removeEdge() on the trainNetwork graph to remove the edge between atlantaStation and newYorkStation.
When we print out the resulting graph, Atlanta and New York should have no connections.*/
trainNetwork.removeEdge(atlantaStation, newYorkStation);

trainNetwork.print();

module.exports = Graph;