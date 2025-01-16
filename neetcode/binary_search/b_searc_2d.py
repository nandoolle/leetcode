from typing import List

def searchMatrix(matrix: List[List[int]], target: int) -> bool:
        def b_search(row: List[int], target: int) -> bool:
            l, r = 0, len(row) -1
            while l <= r:
                mid_point = l +(r -l) // 2
                if row[mid_point] < target:
                    l = mid_point +1
                elif row[mid_point] > target:
                    r = mid_point -1
                else: 
                    return True
            return False
        
        for row in matrix:
            if target <= row[-1]:
                return b_search(row, target)
        
        return False

print(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 34))
