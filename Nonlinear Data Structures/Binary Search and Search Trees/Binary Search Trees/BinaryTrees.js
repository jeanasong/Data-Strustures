/* Define a constructor that takes two parameters: value and depth where value is the data contained within a binary tree and depth indicates the level of the tree
Assign a default depth of 1 to depth in the parameter list
Declare an instance property, value, and assign this to the parameter value.
Declare another instance property, depth, and assign this to the parameter depth. */

class BinaryTree {
    /* Define a constructor that takes two parameters: value and depth where value is the data contained within a binary tree and depth indicates the level of the tree
Assign a default depth of 1 to depth in the parameter list */
    constructor(value, depth = 1) {
      this.value = value; // Declare an instance property, value, and assign this to the parameter value.
      this.depth = depth; // Declare another instance property, depth, and assign this to the parameter depth.
      this.left = null;
      this.right = null;
    }


    // Inserting a Value

    /* We want to know where to place the target value. If the target value is less than the root node’s value, we will need to place it in a left child node. 
    Before doing so, we need to check if a left child node already exists. If so, we will call the .insert() method for the left child node. 
    If not, we will add another level to our binary tree by creating a left binary tree with the target value and a new depth. */

    insert(value) { // Define a method, .insert(), with a parameter, value, below the constructor.
        if(value < this.value) { // The if statement should check if the target value is less than the root node’s value.
          if(!this.left) { // Inside the outer if statement block, write an inner if else statement block. The if statement should check if a left child node exists
          this.left = new BinaryTree(value, this.depth + 1); // If it doesn’t exist, instantiate a BinaryTree with the target value and a new depth and assign it to the left pointer
        } else {
          this.left.insert(value); // If it exists, call its .insert() method passing on value
        }
      } else {
        if(!this.right) { // Inside the outer else statement block from the previous step, write an if statement that checks if a right child node exists
          this.right = new BinaryTree(value, this.depth + 1); // If it doesn’t exist, instantiate a BinaryTree with the target value and a new depth and assign it to the right pointer
        } else {
          this.right.insert(value); // If it exists, call its .insert() method passing on value
        }
      }
      }
  };
  
  module.exports = BinaryTree;
  