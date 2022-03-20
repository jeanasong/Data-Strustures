const { Graph } = require('./Graph.js');

/*Great, we have completed the depth-first traversal! It iterates down each path until it hits a dead end, continues down the next path at the neighboring vertex until it hits a dead end, and so on.

To see this in action, we have provided you with a sample graph called testGraph and passed it in our call to depthFirstTraversal(). 
You should see the traversal move in the following order: v0.0.0, v1.0.0, v1.1.0, v1.1.1, v1.1.2, v1.2.0, v1.2.1, v2.0.0, v2.1.0, and v2.1.1. */

const simpleGraph = new Graph(true, false);
const startNode = simpleGraph.addVertex('v0.0.0');
const v1 = simpleGraph.addVertex('v1.0.0');
const v2 = simpleGraph.addVertex('v2.0.0');

const v11 = simpleGraph.addVertex('v1.1.0');
const v12 = simpleGraph.addVertex('v1.2.0');
const v21 = simpleGraph.addVertex('v2.1.0');

const v111 = simpleGraph.addVertex('v1.1.1');
const v112 = simpleGraph.addVertex('v1.1.2');
const v121 = simpleGraph.addVertex('v1.2.1');
const v211 = simpleGraph.addVertex('v2.1.1');

simpleGraph.addEdge(startNode, v1);
simpleGraph.addEdge(startNode, v2);

simpleGraph.addEdge(v1, v11);
simpleGraph.addEdge(v1, v12);
simpleGraph.addEdge(v2, v21);

simpleGraph.addEdge(v11, v111);
simpleGraph.addEdge(v11, v112);
simpleGraph.addEdge(v12, v121);
simpleGraph.addEdge(v21, v211);

module.exports = simpleGraph;