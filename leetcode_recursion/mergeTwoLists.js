function ListNode(val, next) {
  val = val === undefined ? 0 : val;
  next = next === undefined ? null : next;

  return { val, next };
}

const BuildListOne = () => {
  return ListNode(1, ListNode(2, ListNode(4, null)));
};

const BuildListTwo = () => {
  return ListNode(1, ListNode(3, ListNode(4, null)));
};

var mergeTwoLists = function (list1, list2, memo = {}) {
  if (!list1 || !list2) {
    if (list1) {
      const head = { ...list1 };
      head.next = memo;
      return mergeTwoLists(list1.next, list2, head);
    }
    if (list2) {
      const head = { ...list2 };
      head.next = memo;
      return mergeTwoLists(list1, list2.next, head);
    }

    return rec_reverse(null, memo);
  }

  if (list1.val >= list2.val) {
    const head = { ...list2 };
    head.next = memo;
    return mergeTwoLists(list1, list2.next, head);
  }

  if (list1.val <= list2.val) {
    const head = { ...list1 };
    head.next = memo;
    return mergeTwoLists(list1.next, list2, head);
  }
};

const rec_reverse = (prev, curr) => {
  if (!curr) {
    return prev.next;
  }

  const next = curr.next;
  curr.next = prev;

  return rec_reverse(curr, next);
};

const result = mergeTwoLists(BuildListOne(), BuildListTwo(), {});
console.log('result: ', result);
