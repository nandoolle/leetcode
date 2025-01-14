import re

def isPalindrome(s: str) -> bool:
    parsed_string = re.sub(r'[^0-9A-Z]', '', s.upper())
    LEN = len(parsed_string)
    left, right = LEN//2 -1, LEN//2
    
    if LEN == 0 or LEN == 1:
        return True

    if LEN % 2 != 0:
        left = LEN//2 
        right = LEN//2

    while right < LEN:
        if parsed_string[left] != parsed_string[right]:
            print(parsed_string[left], parsed_string[right], left, right)

            return False
        left = left -1
        right = right +1

    return True

print(isPalindrome("Was it a car or a cat I saw?"))
