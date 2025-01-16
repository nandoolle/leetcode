from typing import List

def search(nums: List[int], target: int) -> int:
    l, r = 0, len(nums) -1
    # (l + r) // 2 can lead to overflow use `l +(r -l) //2` instead
    while l <= r:
        mid = (l +r) //2
        if nums[mid] < target:
            l = mid +1                
        elif nums[mid] > target:
            r = mid -1
        else:
            return mid

    return mid if nums[mid] == target else -1

def search_upper_bound(nums: List[int], target: int) -> int:
    l, r = 0, len(nums)

    while l < r:
        m = l + ((r - l) // 2)  
        if nums[m] > target:
            r = m
        elif nums[m] <= target:
            l = m + 1
    return l - 1 if (l and nums[l - 1] == target) else -1

def search_lower_bound(nums: List[int], target: int) -> int:
        l, r = 0, len(nums)

        while l < r:
            m = l + ((r - l) // 2)  
            if nums[m] >= target:
                r = m
            elif nums[m] < target:
                l = m + 1
        return l if (l < len(nums) and nums[l] == target) else -1

def search_recusive(nums: List[int], target: int) -> int:
    def binary_search(l: int, r: int, nums: List[int], target: int) -> int:
        if l > r:
            return -1
        m = l + (r - l) // 2
        
        if nums[m] == target:
            return m
        if nums[m] < target:
            return binary_search(m + 1, r, nums, target)
        return binary_search(l, m - 1, nums, target)

    return binary_search(0, len(nums) - 1, nums, target)

print(search([-1,0,2,4,6,8], 4))

print(search_upper_bound([-1,0,2,4,6,8], 4))

print(search_lower_bound([-1,0,2,4,6,8], 4))

print(search_recusive([-1,0,2,4,6,8], 4))

