```C++
class Solution {
public:
    int temp = 0;
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        helper(head, n);
        return head;
    }
    void helper(ListNode*& head,int n){
        if(!head){
            return ;
        }
        helper(head->next, n);
        temp++;
        if(n == temp)
            head = head->next;
        // cout<<"node ->val: "<<head->val<<" temp "<< temp <<endl;
    }
};
```