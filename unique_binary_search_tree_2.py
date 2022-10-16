# LeeCode
# https://leetcode.com/problems/unique-binary-search-trees-ii/

# Disclaimer - This is a solution from someone, not me.

# How it works?
# level: 3
# current root: TreeNode{val: 3, left: None, right: None}
# all trees: 
#  **TreeNode{val: 3, left: None, right: None}

# --------
# level: 2
# current root: TreeNode{val: 2, left: None, right: TreeNode{val: 3, left: None, right: None}}
# all trees: 
#  **TreeNode{val: 2, left: None, right: TreeNode{val: 3, left: None, right: None}}

# --------
# level: 3
# current root: TreeNode{val: 2, left: None, right: None}
# all trees: 
#  **TreeNode{val: 2, left: None, right: None}

# --------
# level: 2
# current root: TreeNode{val: 3, left: TreeNode{val: 2, left: None, right: None}, right: None}
# all trees: 
#  **TreeNode{val: 2, left: None, right: TreeNode{val: 3, left: None, right: None}}
#  *** TreeNode{val: 3, left: TreeNode{val: 2, left: None, right: None}, right: None}

# --------
# level: 1
# current root: TreeNode{val: 1, left: None, right: TreeNode{val: 3, left: TreeNode{val: 2, left: None, right: None}, right: None}}
# all trees: 
#  **TreeNode{val: 1, left: None, right: TreeNode{val: 2, left: None, right: TreeNode{val: 3, left: None, right: None}}}
#  *** TreeNode{val: 1, left: None, right: TreeNode{val: 3, left: TreeNode{val: 2, left: None, right: None}, right: None}}

# --------
# level: 2
# current root: TreeNode{val: 1, left: None, right: None}
# all trees: 
#  **TreeNode{val: 1, left: None, right: None}

# --------
# level: 2
# current root: TreeNode{val: 3, left: None, right: None}
# all trees: 
#  **TreeNode{val: 3, left: None, right: None}

# --------
# level: 1
# current root: TreeNode{val: 2, left: TreeNode{val: 1, left: None, right: None}, right: TreeNode{val: 3, left: None, right: None}}
# all trees: 
#  **TreeNode{val: 1, left: None, right: TreeNode{val: 2, left: None, right: TreeNode{val: 3, left: None, right: None}}}
#  *** TreeNode{val: 1, left: None, right: TreeNode{val: 3, left: TreeNode{val: 2, left: None, right: None}, right: None}}
#  *** TreeNode{val: 2, left: TreeNode{val: 1, left: None, right: None}, right: TreeNode{val: 3, left: None, right: None}}

# --------
# level: 3
# current root: TreeNode{val: 2, left: None, right: None}
# all trees: 
#  **TreeNode{val: 2, left: None, right: None}

# --------
# level: 2
# current root: TreeNode{val: 1, left: None, right: TreeNode{val: 2, left: None, right: None}}
# all trees: 
#  **TreeNode{val: 1, left: None, right: TreeNode{val: 2, left: None, right: None}}

# --------
# level: 3
# current root: TreeNode{val: 1, left: None, right: None}
# all trees: 
#  **TreeNode{val: 1, left: None, right: None}

# --------
# level: 2
# current root: TreeNode{val: 2, left: TreeNode{val: 1, left: None, right: None}, right: None}
# all trees: 
#  **TreeNode{val: 1, left: None, right: TreeNode{val: 2, left: None, right: None}}
#  *** TreeNode{val: 2, left: TreeNode{val: 1, left: None, right: None}, right: None}

# --------
# level: 1
# current root: TreeNode{val: 3, left: TreeNode{val: 2, left: TreeNode{val: 1, left: None, right: None}, right: None}, right: None}
# all trees: 
#  **TreeNode{val: 1, left: None, right: TreeNode{val: 2, left: None, right: TreeNode{val: 3, left: None, right: None}}}
#  *** TreeNode{val: 1, left: None, right: TreeNode{val: 3, left: TreeNode{val: 2, left: None, right: None}, right: None}}
#  *** TreeNode{val: 2, left: TreeNode{val: 1, left: None, right: None}, right: TreeNode{val: 3, left: None, right: None}}
#  *** TreeNode{val: 3, left: TreeNode{val: 1, left: None, right: TreeNode{val: 2, left: None, right: None}}, right: None}
#  *** TreeNode{val: 3, left: TreeNode{val: 2, left: TreeNode{val: 1, left: None, right: None}, right: None}, right: None}

# --------




# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution(object):
  def generateTrees(self, n):
      if n == 0:
          return []
      return self.helper(1, n, 1)


  def helper(self, start, end, level):
      if start > end:
          return [None]

      all_trees = []
      for curRootVal in range(start, end+1):
          all_left_subtrees = self.helper(start, curRootVal-1, level+1)

          all_right_subtrees = self.helper(curRootVal+1, end, level+1) 

        #   print('right trees: ' + ' '.join(map(str, all_right_subtrees)))
        #   print('left trees: ' + ' '.join(map(str, all_left_subtrees)))
          for left_subtree in all_left_subtrees:   # get each possible left subtree
              for right_subtree in all_right_subtrees: # get each possible right subtree
                  curRoot = TreeNode(curRootVal) 
                  curRoot.left = left_subtree
                  curRoot.right = right_subtree

                  all_trees.append(curRoot)
          print('level: ' + str(level))
          print('current root: ' + str(curRoot))
          print("all trees: \r **" + "\r *** ".join(map(str, all_trees)))
          print("\r--------\r")
      return all_trees
