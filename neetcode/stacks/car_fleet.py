from typing import List

def carFleet(target: int, position: List[int], speed: List[int]) -> int:
    pairs = [(pos, spe) for pos, spe in zip(position, speed)]
    pairs.sort(reverse=True) # Revesed sorted order

    stack = [] # stack of "times to reach target" for the starting speed
    for p, s in pairs: 
        stack.append((target - p) / s) 

        if len(stack) >= 2 and stack[-1] <= stack[-2]: # check collision
            stack.pop() 

    return len(stack)

print(carFleet(10, [4,1,0,7], [2,2,1,1]))
