from typing import Optional

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reorderList(head: Optional[ListNode]) -> None:
    # find second half of the list
    slow, fast = head, head.next
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next

    # reverse second half
    second_half = slow.next
    prev = slow.next = None
    while second_half:
        tmp = second_half.next
        second_half.next = prev
        prev = second_half
        second_half = tmp

    first, second = head, prev
    while second:
        temp1, temp2 = first.next, second.next
        first.next, second.next = second, first.next
        first, second = temp1, temp2
