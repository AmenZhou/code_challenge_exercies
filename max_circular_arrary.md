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

### Max Subarray Sum
```ruby
def max_sub_array(nums)
  left = nil
  max_sum = -Float::INFINITY

  nums.each_with_index.each do |right, idx|
    if left.nil?
      left = right
      next
    end

    max_sum = [left, max_sum].max
    left = [left + right, right].max
  end

  max_sum = [left, max_sum].max
  max_sum
end
```

### Max Circular Sum
Not performant, need to add cache
```ruby
def max_subarray_sum_circular(nums)
  max_sum = -Float::INFINITY

  (0..nums.length-1).each do |i|
    if i == 0
      max_sum = max_sub_array(nums)
      next
    end
    max_sum = [max_sum, max_sub_array(nums[i..-1] + nums[0..i-1])].max
  end

  max_sum
end


def max_sub_array(nums)
  left = nil
  max_sum = -Float::INFINITY

  nums.each_with_index.each do |right, idx|
    if left.nil?
      left = right
      next
    end

    max_sum = [left, max_sum].max
    left = [left + right, right].max
  end

  max_sum = [left, max_sum].max
  max_sum
end
```

## Ask ChatGPT to optimze the above code for more performant

Here it is

```ruby
def max_subarray_sum_circular(nums)
  n = nums.length
  max_sum = max_sub_array(nums)

  # Compute the maximum sum for circular subarrays
  total_sum = nums.sum
  max_left = [0] * n
  max_right = [0] * n
  curr_sum = 0
  for i in 0...n
    curr_sum += nums[i]
    max_left[i] = [max_left[i-1], curr_sum].max
  end
  curr_sum = 0
  for i in (n-1).downto(0)
    curr_sum += nums[i]
    max_right[i] = [max_right[i+1], curr_sum].max
  end
  for i in 0...n
    circular_sum = total_sum - nums[i] + [0, max_left[i-1]].max + [0, max_right[(i+1) % n]].max
    max_sum = [max_sum, circular_sum].max
  end

  max_sum
end

def max_sub_array(nums)
  max_sum = -Float::INFINITY
  curr_sum = 0
  start_idx = 0
  end_idx = -1
  curr_start_idx = 0

  for i in 0...nums.length
    if curr_sum <= 0
      curr_start_idx = i
      curr_sum = nums[i]
    else
      curr_sum += nums[i]
    end

    if curr_sum > max_sum
      max_sum = curr_sum
      start_idx = curr_start_idx
      end_idx = i
    end
  end

  return max_sum
end
```
