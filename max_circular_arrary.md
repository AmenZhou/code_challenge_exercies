# Maxium Circular Arrary

## Problem
See [here](https://leetcode.com/problems/maximum-sum-circular-subarray)

## Solution

![max_sum_subarray](https://user-images.githubusercontent.com/6025823/216636530-877c966a-49f4-409a-9b9a-240dd5feb7a7.png)


```ruby
def max_subarray_sum_circular(nums)
  max_sum = -Float::INFINITY
  cache = {}

  nums.each_with_index do |item, idx|
    sum = item
    max_sum = [max_sum, sum].max
    cache['0'] = item if idx == 0

    # 
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
    max_sum = [sum + cache["#{idx-1}"], max_sum].max
  end
  max_sum
end
```