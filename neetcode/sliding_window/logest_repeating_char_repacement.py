def characterReplacement(s: str, k: int) -> int:
    S_LEN = len(s)

    char_count = {}
    res = 0

    most_common, l = 0, 0
    for r in range(S_LEN):
        char_count[s[r]] = 1 +char_count.get(s[r], 0)
        most_common = max(most_common, char_count[s[r]]) 

        while (r -l +1) -most_common > k:
            char_count[s[l]] -= 1
            l += 1

        res = max(res, r -l +1)

    return res

print(characterReplacement("AAABABB"))
