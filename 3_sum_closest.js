/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// https://leetcode.com/problems/3sum-closest/
// This solution uses recursive functions, it works.
// But it is not accepted by Leetcode because it is very slow and inefficient.


const threeSum = ({ first, second, third, nums, target, closestToTarget }) => {
  if (first > nums.length - 3) {
    closestToTarget.stop = true;
    return;
  }

  if (second > nums.length - 2)
    return;

  if (third > nums.length - 1)
    return;

  sum = nums[first] + nums[second] + nums[third];
  console.log('first ' + first);
  console.log('second ' + second);
  console.log('third ' + third);
  // console.log('closestToTarget ' + closestToTarget);
  // console.log('sum ' + sum);
  // console.log('target ' + target);
  if (Math.abs(sum - target) < Math.abs(closestToTarget.sum - target)) {
    closestToTarget.sum = sum;
  }

  if (closestToTarget.sum - target === 0)
    closestToTarget.stop = true;

  if (closestToTarget.stop)
    return;
  threeSum({ first, second, third: third + 1, nums, target, closestToTarget });

  if (closestToTarget.stop)
    return;
  threeSum({ first, second: second + 1, third: second + 2, nums, target, closestToTarget });

  if (closestToTarget.stop)
    return;
  threeSum({ first: first + 1, second: first + 2, third: first + 3, nums, target, closestToTarget });
};

var threeSumClosest = function (nums, target) {
  let closestToTarget = { sum: Infinity, stop: false };

  threeSum({ first: 0, second: 1, third: 2, nums, target, closestToTarget });
  return closestToTarget.sum;
};
