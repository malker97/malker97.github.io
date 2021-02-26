```C++
class Solution {
public:
    vector<int> orglist;
    bool isPalindrome(ListNode* head) {
        
        ListNode* revhead = reverse(head);
        // while(head){
        //     printf("%d",head->val);
        //     head = head->next;
        // }
        int i = 0;
        while(revhead){
            if(orglist[i] != revhead->val)
                return false;
            revhead = revhead->next;
            i++;
        }
        return true;
    }
    ListNode* reverse(ListNode* head){
        ListNode* prev = nullptr;
        ListNode* next = nullptr;
        while(head){
            orglist.push_back(head->val);
            next = head -> next;
            head -> next = prev;
            prev = head;
            head = next;
        }
        return prev;
    }
};
```
```Python3
class Solution:
    def isPalindrome(self, head: ListNode) -> bool:
        elim = []
        while head:
            elim.append(head.val)
            head = head.next
        return elim == elim[::-1]
```
> 这些目前都不是最优解