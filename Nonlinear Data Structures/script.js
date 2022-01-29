const TreeNode = require('./TreeNode');

const tree = new TreeNode(1);

console.log(tree);

tree.addChild(15);
console.log(tree);

tree.addChild(new TreeNode(30));
// console.log(tree);
// How to remove a child from a tree

console.log(tree);
tree.removeChild(15);
console.log(tree);
tree.removeChild(node);
console.log(tree);