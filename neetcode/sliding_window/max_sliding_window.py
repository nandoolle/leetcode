from typing import List 
from collections import deque

def maxSlidingWindow(nums: List[int], k: int) -> List[int]:
    q = deque()
    res = []

    l = r = 0
    while r < len(nums):
        while q and nums[q[-1]] < nums[r]:
            q.pop()
        q.append(r) 

        if l > q[0]:
            q.popleft()

        if (r +1) >= k:
            res.append(nums[q[0]])
            l += 1
        r += 1
    
    return res

print(maxSlidingWindow([1,2,1,0,4,2,6], 3))
