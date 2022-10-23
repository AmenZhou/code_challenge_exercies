# Deep Dive - Calculate the Total Number of Unique Binary Search Tree

## Question
Here is the [link](https://leetcode.com/problems/unique-binary-search-trees/)

## Solution
Here is the [link](https://leetcode.com/problems/unique-binary-search-trees/discuss/31666/DP-Solution-in-6-lines-with-explanation.-F(i-n)-G(i-1)-*-G(n-i))

```java
public int numTrees(int n) {
  int [] G = new int[n+1];
  G[0] = G[1] = 1;
    
  for(int i=2; i<=n; ++i) {
    for(int j=1; j<=i; ++j) {
      G[i] += G[j-1] * G[i-j];
    }
  }
  return G[n];
}
```

## Dive into the solution
![alt text]([http://url/to/img.png](https://github.com/AmenZhou/code_challenge_exercies/blob/main/pic/unique_binary_tree.png))


