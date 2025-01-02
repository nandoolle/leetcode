/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let count = 0;

var swapPairs = function (head) {

  if (head === null || head.next === null) {
    return head;
  }

  const headVal = head.val;

  head.val = head.next.val;
  head.next.val = headVal;

  if (head.next.next !== null) {
    swapPairs(head.next.next);
  }

  return head;


};
