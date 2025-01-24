from typing import Optional

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def print_list(head: Optional[ListNode]):
    while head:
        print(head.val)
        head = head.next

    print()

linked_list = ListNode(0, ListNode(1, ListNode(2, ListNode(3))))

def rec_reverseList(head: Optional[ListNode]) -> Optional[ListNode]:
    if not head:
        return None

    newHead = head
    if head.next:
        newHead = reverseList(head.next)
        head.next.next = head
    head.next = None

    return newHead

def reverseList(head: Optional[ListNode]) -> Optional[ListNode]:
    prev, curr = None, head

    while curr:
        nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt
    
    return prev

print_list(reverseList(linked_list))
