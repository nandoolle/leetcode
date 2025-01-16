from typing import List
from functools import reduce
from math import ceil

def minEatingSpeed(piles: List[int], h: int) -> int:
    l, r = 1, max(piles)
    res = r

    while l <= r:
        mid = l +(r -l) //2
        time_taken = reduce(lambda acc, num: acc + ceil(num / mid), piles, 0)

        if time_taken <= h:
            res = mid
            r = mid -1
        else:
            l = mid +1 

    return res

print(minEatingSpeed([25,10,23,4], 4))
print(minEatingSpeed([1,4,3,2], 9))

