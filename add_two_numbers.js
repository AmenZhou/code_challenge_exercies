/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// LeetCode
// https://leetcode.com/problems/add-two-numbers/

// Notes
// The challenge is to figure out how the pre-defined class ListNode behaves
// The secondary challenge, how to cut the trailing node after jumping out of the loop

var addTwoNumbers = function (l1, l2) {
  const result = new ListNode(0);
  let cursor = result;
  let preCursor = result;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    if (l1 === null)
      l1 = new ListNode(0);

    if (l2 === null)
      l2 = new ListNode(0);

    cursor.val = (l1.val + l2.val + carry) % 10;
    carry = Math.floor((l1.val + l2.val + carry) / 10);
    console.log(carry);

    l1 = l1.next;
    l2 = l2.next;

    cursor.next = new ListNode(0);
    preCursor = cursor;
    cursor = cursor.next;
  };

  // Clean up the last node
  preCursor.next = null;
  return result;
};
