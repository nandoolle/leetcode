from typing import Optional

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def mergeTwoLists(list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
    dummy = ListNode()
    tail = dummy

    while list1 and list2:
        if list1.val < list2.val:
            tail.next = list1
            list1 = list1.next
        else:
            tail.next = list2
            list2 = list2.next
        tail = tail.next

    if list1:
        tail.next = list1
    elif list2:
        tail.next = list2 

    return dummy.next

def print_list(list: ListNode):
    while list:
        print(list.val)
        list = list.next

list1 = ListNode(
    1, ListNode(
        2, ListNode(
            3, None
        )
    )
)

list2 = ListNode(
    1, ListNode(
        2, ListNode(
            4, None
        )
    )
)

print_list(mergeTwoLists(list1, list2))
