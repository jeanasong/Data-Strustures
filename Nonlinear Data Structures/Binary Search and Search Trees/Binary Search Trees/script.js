const BinaryTree = require('./BinaryTree');
// This is for the constructor below.
// create a BinaryTree here
const bt = new BinaryTree(15); // Instantiate a BinaryTree class with an initial value of 15 and assign it to a const variable bt.
console.log(bt); // Display the content of the binary tree, bt.

// This is for the insert below.
// create a BinaryTree here
const bt = new BinaryTree(100);
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