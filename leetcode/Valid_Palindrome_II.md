```Python3
    def validPalindrome(self, s: str) -> bool:
        # def helper(s):
        #     if len(s) ==1:
        #         return True
        #     for i in range(len(s)):
        #         if s[i] != s[~i]:
        #             return False
        #     return True
        # if len(s) == 1 or helper(s):
        #     return True
        # # str_saved = s
        # temp_s =''
        flag = False
        for i in range(len(s)):
            # print(s.replace(s[i],'',1))
            temp_s = s[:i] + s[i+1:]
            # print(temp_s)
            if temp_s == temp_s[::-1]:
                flag = True
                break
        return flag
```
> 这个代码TLE了