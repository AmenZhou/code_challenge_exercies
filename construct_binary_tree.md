# Construct a Binary Tree
### [See the problem at LeetCode](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)


## Diagram of Solution
![Diagram](https://github.com/AmenZhou/code_challenge_exercies/blob/main/pic/construct_binary_tree.png)


```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */


var buildTree = function (preorder, inorder) {
  if (preorder.length === 0)
    return;

  if (inorder.length === 1)
    return new TreeNode(inorder[0]);

  const rootVal = preorder[0];
  const rootIndex = inorder.findIndex(ele => ele === rootVal);
  const root = new TreeNode(rootVal);

  const left = buildTree(preorder.slice(1, rootIndex + 1), inorder.slice(0, rootIndex));
  if (left)
    root.left = left;
  const right = buildTree(preorder.slice(rootIndex + 1, preorder.length), inorder.slice(rootIndex + 1, inorder.length));
  if (right)
    root.right = right;

  return root;
};
```
