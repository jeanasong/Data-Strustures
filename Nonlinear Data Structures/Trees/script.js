const TreeNode = require('./TreeNode');

// This is for Pretty Print, Depth-first Tree Traversal and Breadth-first Tree Traversal.
const tree = new TreeNode(1);
const randomize = () => Math.floor(Math.random() * 20);

////////

const tree = new TreeNode(1); //instantiate a TreeNode class with argument of 1 and assign it to a const variable tree.
console.log(tree); //Display the contents of tree with console.log.


// Adding a child
tree.addChild(15); // Add a child of value 15 to the tree object.
console.log(tree); // Display the output of tree in the terminal


// Add this child to the tree object.
tree.addChild(new TreeNode(30)); // Add another child by creating a TreeNode for it with value 30
console.log(tree); // Display the output of tree on the terminal


// Removing a Child from a tree
console.log(tree); // Display the output of the tree.
tree.removeChild(15); // Remove the element in the tree by data and display the tree.
console.log(tree); // display the tree.
tree.removeChild(node); // Remove the element in the tree by TreeNode and display the tree.
console.log(tree); // display the tree.


// Pretty Print
// add first-level children
for (let i = 0; i < 3; i++) {
    tree.addChild(randomize());
  }
  
  // add second-level children
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
      tree.children[i].addChild(randomize());
    }
  }
  
  // add third-level children
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
      for (let k = 0; k < 2; k++) {
        tree.children[i].children[j].addChild(randomize());
      }
    }
  }
  
  // pretty-print the tree
  tree.print();


  // Depth-first Tree Traversal

  // add first-level children
for (let i = 0; i < 3; i++) {
    tree.addChild(randomize());
  }
  
  // add second-level children
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
      tree.children[i].addChild(randomize());
    }
  }
  
  tree.print(); // Display the sample tree provided using the .print() method.
  tree.depthFirstTraversal() // Then, traverse the sample tree using the traversal method you have just created.
  //Study the results by comparing the output from .print() and .depthFirstTraversal(). Did you notice anything particular about the ordering of data from both methods?


  // Breadth-first Tree Traversal

  // add first-level children
for (let i = 0; i < 3; i++) {
    tree.addChild(randomize());
  }
  
  // add second-level children
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
      tree.children[i].addChild(randomize());
    }
  }
  
  tree.print() // Display the sample tree provided using the pretty print method.
  tree.breadthFirstTraversal(); // Then, traverse the sample tree using the traversal method you have just created.
  // Study the results by comparing the output from .print() and .breadthFirstTraversal().



  const entries = {
  'Breakfast' : [ 'Cereal', 'BBQ Chicken', 'Oatmeal' ],
  'Lunch' : [ 'Soup', 'Sandwich', 'Lasagna' ],
  'Dinner' : [ 'Yogurt', 'Filet Mignon', 'Fish Florentine' ]
};

const meals = Object.keys(entries);
for (let meal=0; meal < meals.length; meal++){
  menu.addChild(meals[meal]);
  const entrylist = entries[meals[meal]];
  entrylist.forEach( entry => {
    menu.children[meal].addChild(entry);
  });
}

menu.print();
// tree.Corrected Menu;
menu.removeChild('BBQ Chicken');
// add BBQ Chicken to Dinner
menu.children[2].addChild('BBQ Chicken');

// remove Yogurt from Dinner
menu.removeChild('Yogurt');
// add Yogurt to Breakfast
menu.children[0].addChild('Yogurt');

console.log('------- Corrected Menu');
menu.print();

menu.depthFirstTraversal();