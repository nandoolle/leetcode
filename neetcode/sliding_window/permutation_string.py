def checkInclusion(s1: str, s2: str) -> bool:
    S1_LEN, S2_LEN, ORD_A = len(s1), len(s2), ord('a')

    if S1_LEN > S2_LEN:
        return False

    s1_count, s2_count = [0] *26, [0] *26

    for i in range(S1_LEN):
        s1_count[ord(s1[i]) - ORD_A] += 1
        s2_count[ord(s2[i]) - ORD_A] += 1

    matches = 0
    for i in range(26):
        matches += (1 if s1_count[i] == s2_count[i] else 0)

    l = 0
    for r in range(S1_LEN, S2_LEN):
        if matches == 26:
            return True
        
        r_index = ord(s2[r]) -ORD_A
        s2_count[r_index] += 1
        if s1_count[r_index] == s2_count[r_index]:
            matches += 1
        if s1_count[r_index] +1 == s2_count[r_index]:
            matches -= 1


        l_index = ord(s2[l]) -ORD_A
        s2_count[l_index] -= 1
        if s1_count[l_index] == s2_count[l_index]:
            matches += 1
        if s1_count[l_index] -1 == s2_count[l_index]:
            matches -= 1
        
        l += 1

    return matches == 26   

print(checkInclusion("ab", "lecabee"))
