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

const reverseList = (head) => rec_reverse(null, head);


const rec_reverse = (prev, curr) => {
  if (!curr) {
    return prev;
  }

  const next = curr.next;
  curr.next = prev;

  return rec_reverse(curr, next);
}

