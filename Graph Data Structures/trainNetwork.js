/* GRAPHS: JAVASCRIPT
Graph Review
Let’s put our Graph class to use and build out our train network. This time we will use it to map out all the train stations and routes that our rail service operates. We will also want to make sure that our routes can track the distance between each station.

For this exercise, we will build out the train network inside trainNetwork.js. */

const Graph = require('./Graph.js');

const trainNetwork = new Graph(true, true); // Start by creating the train network as a weighted and directed Graph instance and assigning it to trainNetwork.
/*We just got funding to build out 6 train stations. Using the graph’s .addVertex() method, add the following station vertices to our trainNetwork with the names:
Los Angeles
San Francisco
New York
Atlanta
Denver
Calgary */
const laStation = trainNetwork.addVertex('Los Angeles');
const sfStation = trainNetwork.addVertex('San Francisco');
const nyStation = trainNetwork.addVertex('New York');
const atlStation = trainNetwork.addVertex('Atlanta');
const denStation = trainNetwork.addVertex('Denver');
const calStation = trainNetwork.addVertex('Calgary');

/*We only want to service the routes our customers will travel the most, so let’s use .addEdge() to add the following route edges to the graph:

From San Francisco to Los Angeles, which is 400mi
From Los Angeles to San Francisco, which is 400mi
From New York to Denver, which is 1800mi
From Denver to New York, which is 1800mi
From Calgary to Denver, which is 1000mi
From Denver to Calgary, which is 1000mi
From Los Angeles to Atlanta, which is 2100mi
From Atlanta to Los Angeles, which is 2100mi */

trainNetwork.addEdge(sfStation,laStation, 400);
trainNetwork.addEdge(laStation, sfStation, 400);
trainNetwork.addEdge(nyStation, denStation, 1800);
trainNetwork.addEdge(denStation, nyStation, 1800);
trainNetwork.addEdge(calStation, denStation, 1000);
trainNetwork.addEdge(denStation, calStation, 1000);
trainNetwork.addEdge(laStation, atlStation, 2100);
trainNetwork.addEdge(atlStation, laStation, 2100);

/*Darn! As we were building out our routes, there was a huge snowstorm that hit Calgary and New York. We were able to salvage the route from Denver to New York, but all of the routes to and from Calgary broke down.

Using the graph’s .removeEdge() and .removeVertex() methods, remove the route from New York to Denver, all the routes to and from Calgary, and the Calgary station. */

trainNetwork.removeEdge(nyStation, denStation);
trainNetwork.removeEdge(calStation, denStation);
trainNetwork.removeEdge(denStation, calStation);
trainNetwork.removeVertex(calStation);

/*We’re finally all aboard the same page. Print out our final graph and check that we built the following routes:

San Francisco to and from Los Angeles
Los Angeles to and from Atlanta
Denver to New York */

trainNetwork.print()


/*This wraps up our graph implementation! There are still some edge (pardon the pun) cases that we have not yet accounted for. If you’re feeling up for it, try to challenge yourself with the following:

Currently, it is possible to add duplicate edges between two vertices. How will you improve this Graph implementation to avoid adding duplicate edges?
How would you iterate through a directed graph? What about an undirected graph?
How would you create a cycle with a directed graph? */