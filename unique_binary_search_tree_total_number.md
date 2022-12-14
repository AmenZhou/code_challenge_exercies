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
![Diagram](https://github.com/AmenZhou/code_challenge_exercies/blob/main/pic/unique_binary_tree.png)

### How the above solution works?

The total number of each G(x) is aways static
```
G(0) = 1
G(1) = 1
G(2) = G(0)*G(1) + G(1)*G(0) = 1 + 1 = 2
G(3) = G(0)*G(2) + G(1)*G(1) + G(2)*G(0) = 2 + 1 + 2 = 5

G(4) = G(0)*G(3) + G(1)*G(2) + G(2)*G(1) + G(3)*G(0)
G(4) = 1*5 + 1*2 + 2*1 + 5*1 = 14
```

