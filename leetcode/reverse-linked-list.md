```C++
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        ListNode* ans = reverse(head,nullptr);
        return ans;
    }
    ListNode* reverse(ListNode* head, ListNode* prev){
        if(!head)
            return prev;
        ListNode* next = head ->next;
        head->next = prev;
        prev = head;
        return reverse(next, prev);
    }
};
```
```C++
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        ListNode* next = nullptr;
        ListNode* prev = nullptr;
        while(head){
            next = head->next;
            head->next = prev;
            prev = head;
            head = next;
        }
        return prev;
    }
};
```