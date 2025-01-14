def maxArea(heights: List[int]) -> int:
    l, r = 0, len(heights) -1
    res = 0
    while l < r:
        curr = min(heights[l], heights[r]) * (r - l)
        if curr > res:
            res = curr

        if heights[l] < heights[r]:
            l += 1
        else: 
            r -= 1
    return res

print(maxArea([1,7,2,5,4,7,3,6]))
