def twoSum(numbers: List[int], target: int) -> List[int]:
    l, r = 0, len(numbers) -1

    while r >= 0 and l <= len(numbers) -1:
        if numbers[l] + numbers[r] == target:
            return [min(l +1, r +1), max(l +1, r +1)]

        if numbers[l] + numbers[r] > target:
            r -= 1

        else:
            l += 1

print(twoSum([1,2,3,4]))
