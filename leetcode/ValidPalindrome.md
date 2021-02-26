```Python3
class Solution:
    def isPalindrome(self, s: str) -> bool:
        if len(s) == 1:
            return True
        str_ans = ''
        for i in range(len(s)):
            # if s[i].islower() or s[i].isupper() or s[i].isdigit():
            if s[i].isalnum():
                str_ans += s[i].lower()
        for i in range(len(str_ans)):
            if str_ans[i] is not str_ans[-i-1]:
                return False
        return True
```
```Python3
class Solution:
    def isPalindrome(self, s: str) -> bool:
        if len(s) == 1:
            return True
        str_ans = ''
        for i in range(len(s)):
            if s[i].islower() or s[i].isupper() or s[i].isdigit():
                str_ans += s[i]
        print(str_ans)
        str_ans = str_ans.lower()
        print(str_ans)
        # flag = True
        n_str = ''
        for i in range(len(str_ans)):
            n_str += str_ans[-i-1]
        print(n_str)
        if n_str == str_ans:
            return True
        else:
            return False
```

```
class Solution:
    def isPalindrome(self, s: str) -> bool:
        if len(s) == 1:
            return True
        str_ans = ''
        for i in range(len(s)):
            if s[i].islower() or s[i].isupper() or s[i].isdigit():
                str_ans += s[i]
        print(str_ans)
        str_ans = str_ans.lower()
        print(str_ans)
        flag = True
        n_str = ''
        for i in range(len(str_ans)):
            if str_ans[i] is not str_ans[-i-1]:
                return False
        return True
```