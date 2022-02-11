const BinaryTree = require('./BinaryTree');
// This is for the constructor below.


// create a BinaryTree here
const bt = new BinaryTree(15); // Instantiate a BinaryTree class with an initial value of 15 and assign it to a const variable bt.
console.log(bt); // Display the content of the binary tree, bt.


// This is for Inserting a Value.

// create a BinaryTree here
const bt = new BinaryTree(100); // A default BinaryTree has been created for you with an initial value of 100
/*Insert the following values to the tree in this order:
50
125
75
25
Display the content of this tree and study the terminal output. The result should match the tree illustration in the lesson. */
// insert values to the BinaryTree here
bt.insert(50);
bt.insert(125);
bt.insert(75);
bt.insert(25);
console.log(bt);



// This is for Retrieve a Node by Value.

// search for value 75 in BinaryTree
let node = bt.getNodeByValue(75);
console.log(node);

// search for a non-existent value in BianryTree
node = bt.getNodeByValue(55); // Search for a non-existent value of 55 in the same BinaryTree object and display the returned value.
console.log(node); // display the returned value.



// Traversing a Binary Tree


// run it to display a depth-first traversal of a binary tree example described in the Binary Serach Trees file.
const bt = new BinaryTree(15);
let numbers = [ 12, 20, 10, 13, 18, 22, 8, 11, 12, 14, 16, 19, 21, 25 ];

for (let i = 0; i < numbers.length; i++) {
  bt.insert(numbers[i]);
  console.log(`Insert ${numbers[i]} to binary tree`);
}

console.log('Depth First Traversal');
bt.depthFirstTraversal();