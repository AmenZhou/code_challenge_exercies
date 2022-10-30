// LeetCode https://leetcode.com/problems/binary-tree-level-order-traversal/submissions/


const traversal = (node, level, result) => {
  if (!node)
    return;

  if (!result[level])
    result[level] = [];

  result[level].push(node.val);
  traversal(node.left, level + 1, result);
  traversal(node.right, level + 1, result);
};

 var levelOrder = function(root) {
    const result = [];
    traversal(root, 0, result);
    return result;
};
