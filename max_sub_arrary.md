# Max Sub Arrary

## Question
Here is the [link](https://leetcode.com/problems/maximum-subarray/)

## Solution
Here is the [link](https://leetcode.com/problems/maximum-subarray/solutions/1595195/c-python-7-simple-solutions-w-explanation-brute-force-dp-kadane-divide-conquer/)

## Dive into the recursive solution
```python
class Solution:
    def maxSubArray(self, nums):
        def solve(i, must_pick):
            
            if i >= len(nums): return 0 if must_pick else float("-infinity")
     
            result = max(nums[i] + solve(i+1, True), 0 if must_pick else solve(i+1, False))
            print("i=" + str(i))
            print("must_pick " + str(must_pick))
            print("result " + str(result))
            return result
        return solve(0, False)
```

## Debug Output
<details>
  <summary>Output</summary>
  
```ruby
i=8
must_pick True
result 4
i=7
must_pick True
result 0
i=6
must_pick True
result 1
i=5
must_pick True
result 3
i=4
must_pick True
result 2
i=3
must_pick True
result 6
i=2
must_pick True
result 3
i=1
must_pick True
result 4
i=8
must_pick True
result 4
i=7
must_pick True
result 0
i=6
must_pick True
result 1
i=5
must_pick True
result 3
i=4
must_pick True
result 2
i=3
must_pick True
result 6
i=2
must_pick True
result 3
i=8
must_pick True
result 4
i=7
must_pick True
result 0
i=6
must_pick True
result 1
i=5
must_pick True
result 3
i=4
must_pick True
result 2
i=3
must_pick True
result 6
i=8
must_pick True
result 4
i=7
must_pick True
result 0
i=6
must_pick True
result 1
i=5
must_pick True
result 3
i=4
must_pick True
result 2
i=8
must_pick True
result 4
i=7
must_pick True
result 0
i=6
must_pick True
result 1
i=5
must_pick True
result 3
i=8
must_pick True
result 4
i=7
must_pick True
result 0
i=6
must_pick True
result 1
i=8
must_pick True
result 4
i=7
must_pick True
result 0
i=8
must_pick True
result 4
i=8
must_pick False
result 4
i=7
must_pick False
result 4
i=6
must_pick False
result 4
i=5
must_pick False
result 4
i=4
must_pick False
result 4
i=3
must_pick False
result 6
i=2
must_pick False
result 6
i=1
must_pick False
result 6
i=0
must_pick False
result 6
```
</details>

  
