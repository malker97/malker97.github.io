```C++
class Solution {
public:
    int temp;
    ListNode* rotateRight(ListNode* head, int k) {
        if(!head)
            return nullptr;
        temp = 0;
        k = k % getsize(head);
        if(k)
            helper(head, head, k);
        return head;
    }
    int getsize(ListNode* head){
        if(!head)
            return 0;
        return 1 + getsize(head->next);
    }
    void helper(ListNode*& head ,ListNode*& mover, int k){
        if(!mover)
            return ;
        helper(head , mover->next,k);
        temp++;
        if(temp <= k){
            mover-> next = head;
            head = mover;
            mover = nullptr;
        }
    }
};
```