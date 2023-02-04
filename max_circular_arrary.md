# Maxium Circular Arrary

## Problem
See [here](https://leetcode.com/problems/maximum-sum-circular-subarray)

## Solution

![max_sum_subarray_kadane_algorithm](https://user-images.githubusercontent.com/6025823/216786829-09b60175-dbf9-4d9c-8cd6-692fbab30e12.png)


This solution did not pass LeeCode submission, it is not performant for some extreme long arrays.
```ruby
def max_subarray_sum_circular(nums)
  max_sum = -Float::INFINITY
  cache = {}

  nums.each_with_index do |item, idx|
    sum = item
    max_sum = [max_sum, sum].max
    cache['0'] = item if idx == 0

    # Suffix
    # Cache the max sum for each subarrary e.g. nums[0], nums[0..1], nums[0..2], ... nums[0..n]
    nums[idx+1..-1].each_with_index do |i_item, i_idx|
      sum = sum + i_item
      max_sum = [sum, max_sum].max
      if idx == 0
        cache["#{i_idx+1}"] = max_sum
      end
    end

    if idx == 0
      next
    end

    if cache["#{idx-1}"].nil?
      raise "cache could not be found!"
    end
    # Prefix
    # Use cached max sum for prefix subarrary
    max_sum = [sum + cache["#{idx-1}"], max_sum].max
  end
  max_sum
end
```

## Kadane's Algorithm


