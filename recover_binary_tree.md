## [Problem](https://leetcode.com/problems/recover-binary-search-tree/)

## Solution

First, use Inorder Traversal to convert the binary tree to an array.

For BST(Binary Search Tree), the printed node values in the array should be in sequence.

![Inorder Traversal](https://github.com/AmenZhou/code_challenge_exercies/blob/main/pic/recover_binary_tree.png)

Then, memorize those 2 wrong nodes and swap them when both nodes are found.
