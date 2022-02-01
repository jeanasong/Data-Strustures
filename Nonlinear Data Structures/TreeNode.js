// Working with Data Structure in trees

class TreeNode {
    constructor(data) { // Define a constructor that takes one parameter, data. Inside the constructor:
      this.data = data; // define a data class property and assign it to the parameter, data
      this.children = []; // define a children class property and assign it to an empty array.
    }

    // Adding a Child to a tree
    addChild(child) {
      if(child instanceof TreeNode) { // check if child is an instance of TreeNode
        this.children.push(child); // If it is, add child to the end of the children array
      } else {
        this.children.push(new TreeNode(child)); // Otherwise, create a TreeNode instance for it before adding it to the children array.

      }
    }


    // Removing a Child from a tree
    removeChild(childToRemove) { //Define a new method, .removeChild(), that takes one parameter, childToRemove.
      const length = this.children.length; //
      // Use the JavaScript .filter() method to filter out the elements that do not match the target child and reassign the array returned by .filter() back to the children array.
      this.children = this.children.filter(child => { //Call the .filter() method on the children array and supply a callback function with a single argument, child, that does the following:
        if(childToRemove instanceof TreeNode) { // If childToRemove is a TreeNode, return true if childToRemove is not equal to child, else return false.
          return childToRemove !== child; //f childToRemove is not equal to child, else return false.
        } else {
          return child.data !== childToRemove; // If childToRemove is not a TreeNode, return true if childToRemove is not equal to child‘s data, else return false.
        }
      });
  
      if(length === this.children.length) { // Compare length with the updated children‘s length after filtering. If they are the same, recursively call .removeChild() for each child in the children array.
        this.children.forEach(child => child.removeChild(childToRemove));
      }
    }


    /* Wouldn’t it be nice to be able to display the structure of our tree in a captivating visual way? We have provided a helpful method, .print() that will give you a formatted text display of our tree.
    For example, a tree with 3 levels starting with root node 15, children 3, 12, 0, and grandchildren 6, 9, 19, 8, 10, 19 is displayed below: */
    // Pretty Print
    print(level = 0) { // This method takes one parameter, level, which is initialized to 0, to enable printing the entire tree structure from the top to the bottom.
      let result = '';
      for (let i = 0; i < level; i++) {
        result += '-- ';
      }
      console.log(`${result}${this.data}`);
      this.children.forEach(child => child.print(level + 1));
    }


    // Depth-first Tree Traversal
    depthFirstTraversal() { // define a method, .depthFirstTraversal() below .print() that takes no parameters.
      console.log(this.data); // Inside .depthFirstTraversal(), display the data of the current node with console.log.
      this.children.forEach(child => child.depthFirstTraversal()); // For each child in the children array, call .depthFirstTraversal() recursively.
    }
  };
  
  module.exports = TreeNode;