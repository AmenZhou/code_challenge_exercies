// https://leetcode.com/problems/symmetric-tree/

const areSameTree = (node1, node2, result) => {
  if(!node1 && !node2)
    return true;

  if(!node1 || !node2)
    return false;

  if(node1.val !== node2.val)
    return false;

  if(!result)
    return false;

  // Left compares with Right, Right comares to Left
  result = areSameTree(node1.left, node2.right, result) && areSameTree(node1.right, node2.left, result);
  return result;
};

var isSymmetric = function(root) {
  const result = true;

  return areSameTree(root.left, root.right, result);
};
