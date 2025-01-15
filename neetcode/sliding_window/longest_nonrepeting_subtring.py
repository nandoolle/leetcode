def lengthOfLongestSubstring(s: str) -> int:
    s_len = len(s)
    char_set = set()
    l, result = 0, 0

    for r in range(s_len):
        while s[r] in char_set:
            char_set.remove(s[l])
            l += 1
        char_set.add(s[r])
        result = max(result, r -l +1)

    return result

print(lengthOfLongestSubstring("abcabcbb"))
