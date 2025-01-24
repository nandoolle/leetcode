def findMedianSortedArrays(nums1: List[int], nums2: List[int]) -> float:
    A, B = nums1, nums2
    total = len(A) +len(B)
    half = total //2

    if len(B) < len(A):
        B, A = A, B

    l, r = 0, len(A) -1
    while True:
        a_mid_point = (l + r) //2
        b_mid_point = half -a_mid_point -2 # `-2` is need to correct `off-by-one` from both arrays

        a_left = A[a_mid_point] if a_mid_point >= 0 else float("-infinity")
        a_right = A[a_mid_point +1] if (a_mid_point +1) < len(A) else float("infinity")
        b_left = B[b_mid_point] if b_mid_point >= 0 else float("-infinity")
        b_right = B[b_mid_point +1] if (b_mid_point +1) < len(B) else float("infinity")

        if a_left <= b_right and b_left <= a_right:
            if total %2:
                return min(a_right, b_right)

            return (max(a_left, b_left) + min(a_right, b_right)) /2
        elif a_left > b_right:
            r = a_mid_point -1
        else:
            l = a_mid_point +1

print(findMedianSortedArrays([1,3], [2,4]))

