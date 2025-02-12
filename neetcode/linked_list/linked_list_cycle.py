from typing import Optional

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def hasCycle(head: Optional[ListNode]) -> bool:
    slow, fast = head, head

    while fast and fast.next:
        fast = fast.next.next
        slow = slow.next
        if slow == fast:
            return True

    return False


linked_list = ListNode(1, ListNode(2, ListNode(3, ListNode(4))))
print(hasCycle(linked_list))

circular_list_head = ListNode(1, None)
circular_list_head.next = ListNode(2, ListNode(3, circular_list_head))
print(hasCycle(circular_list_head))

