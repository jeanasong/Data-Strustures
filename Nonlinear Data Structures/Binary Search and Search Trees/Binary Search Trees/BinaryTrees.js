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
      this.left = null; // Define left and right instance properties to represent pointers to the left and right binary tree nodes and assign each one to null.
      this.right = null; // Define left and right instance properties to represent pointers to the left and right binary tree nodes and assign each one to null.
    }


    // Inserting a Value

    insert(value) { // Define a method, .insert(), with a parameter, value, below the constructor.
        
        /* We want to know where to place the target value. If the target value is less than the root node’s value, we will need to place it in a left child node. 
        Before doing so, we need to check if a left child node already exists. If so, we will call the .insert() method for the left child node. 
        If not, we will add another level to our binary tree by creating a left binary tree with the target value and a new depth. */

        if(value < this.value) { // The if statement should check if the target value is less than the root node’s value.
          if(!this.left) { // Inside the outer if statement block, write an inner if else statement block. The if statement should check if a left child node exists
          this.left = new BinaryTree(value, this.depth + 1); // If it doesn’t exist, instantiate a BinaryTree with the target value and a new depth and assign it to the left pointer
        } else {
          this.left.insert(value); // If it exists, call its .insert() method passing on value
        }
        /* Alternatively, if the target value is not less than the root node’s value, then we will place it in the right child node. Before doing so, we need to check if a right child node already exists. 
        If so, we will call the .insert() method of the right child node. 
        If not, we will add another level to our binary tree by creating a right binary tree with the target value and a new depth. */
      } else {
        if(!this.right) { // Inside the outer else statement block from the previous step, write an if statement that checks if a right child node exists
          this.right = new BinaryTree(value, this.depth + 1); // If it doesn’t exist, instantiate a BinaryTree with the target value and a new depth and assign it to the right pointer
        } else {
          this.right.insert(value); // If it exists, call its .insert() method passing on value
        }
      }
      }


      // Retrieve a Node by Value

      getNodeByValue(value) { // Define a new method, .getNodeByValue(), below the .insert() method that takes one parameter, value.
        if(this.value === value){ // The first thing we do is to compare the target value with the root node’s value. If they are the same, return the node. This is the base case.
          return this;
          /* If the target value cannot be found in the root node, we want to navigate further down the binary tree. 
          We start with the left child node if it exists and recursively search in the left subtree. 
          To traverse the left tree, we need to make sure the target value is less than the root node’s value. 
          */
        } else if((this.left) && (value < this.value)) { // Write an else if statement that checks: if the left child node exists, and if the target value is less than this.value
          return this.left.getNodeByValue(value); // Inside the else if block, return with a call to .getNodeByValue() method of the left child node.
          /* Next, we want to implement the recursive step for the right child node if it exists.

            Write an else if block that:

            checks if the right child node exists, and
            return with a call to .getNodeByValue() method for the right child node if it exists */
        } else if(this.right) { // checks if the right child node exists
          return this.right.getNodeByValue(value); // return with a call to .getNodeByValue() method for the right child node if it exists
        } else { // Create an else block that returns null.
          return null; // If the target value does not exist in the binary tree, we should return null.
        }
      }



      // Traversing a Binary Tree

      depthFirstTraversal() { // Define the method, .depthFirstTraversal() below .getNodeByValue(). It takes no parameters.
        /*Using inorder traversal, we will traverse the left child node followed by the root node and the right child node. Inside .depthFirstTraversal():

        Check to see if the left child node exists
        If it does, call this method on the left child node */
        if (this.left) { // Check to see if the left child node exists
          this.left.depthFirstTraversal(); // If it does, call this method on the left child node
        }
        // We have just traversed the left subtree. Now we want to look at the root node. We can simply print out the data it contains and the tree level of the root node. Log the value of the root node to the console.
        console.log(`Depth=${this.depth}, Value=${this.value}`); // Log the value of the root node to the console.
        /*The next step would be to traverse the right subtree. Like in the step before last, we want to:

        Check to see if the right child node exists
        If it does, call this method on the right child node */
        if (this.right) { // Check to see if the right child node exists
          this.right.depthFirstTraversal(); // If it does, call this method on the right child node
        }
      }
  };
  
  module.exports = BinaryTree;
  