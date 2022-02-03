/* In this lesson, you have successfully built a tree data structure in JavaScript. You have implemented:

a TreeNode class that contains data and maintains a collection of TreeNode classes called children.
an .addChild() method that adds a child to the tree as either data or TreeNode
a .removeChild() method that removes a child from the tree as either data or TreeNode
a .depthFirstTraversal() recursive method that fully traverses the tree with a top-down approach for each child of the tree
a .breadthFirstTraversal() iterative method that fully traverses the tree a level at a time, instead of a child at a time */


/* In this exercise, we’ve constructed a sample menu tree, however some of the meal items are in the wrong category. Can you spot which ones and place them in the correct locations? */

const TreeNode = require('./TreeNode');

const menu = new TreeNode('Menu');

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

// Two entries in the menu tree are dislocated. Write code to move each one to the correct location. Print the tree under the title Corrected Menu.


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
menu.print(); // Choose a tree traversal method whose output resembles the ordering of .print() and call it.

menu.depthFirstTraversal();
