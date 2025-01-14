import re

def isPalindrome(s: str) -> bool:
    parsed_string = re.sub(r'[^0-9A-Z]', '', s.upper())
    left, right = 0, len(parsed_string) - 1

    while right >= left:
        if parsed_string[left] != parsed_string[right]:
            return False

        left += 1
        right -= 1

    return True

print(isPalindrome("Was it a car or a cat I saw?"))
