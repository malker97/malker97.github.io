```C++
class Solution {
public:
    int getDecimalValue(ListNode* head) {
        if(!head)
            return 0;
        int ans = 0;
        while(head){
            ans = ans<<1;
            ans += head->val;
            head = head->next;
        }
        return ans;
    }
};
```