def minfound_window(s: str, t: str) -> str:
    S_LEN, T_LEN, INFINITY = len(s), len(t), float("infinity")
    if S_LEN < T_LEN and T_LEN == 0: return ""
    
    need_window, found_window = {}, {}
    for c in t:
        need_window[c] = 1 + need_window.get(c, 0)

    have, need = 0, len(need_window)
    res, res_len = [-1, -1], INFINITY
    l = 0
    for r in range(S_LEN):
        c = s[r]
        found_window[c] = 1 +found_window.get(c, 0)

        if c in need_window and found_window[c] == need_window[c]:
            have += 1
        
        while have == need:
            if (r -l +1) < res_len:
                res = [l, r]
                res_len = (r -l +1)
            found_window[s[l]] -= 1
            if s[l] in need_window and found_window[s[l]] < need_window[s[l]]:
                have -= 1
            l += 1
    
    l, r = res
    return s[l:r +1] if res_len != INFINITY else ""

print(minfound_window("ADOBECODEBANC", "ABC"))
