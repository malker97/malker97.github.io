```C++
class Solution {
public:
    ListNode *detectCycle(ListNode *head) {
        unordered_set<ListNode*> addr;
        while(head){
            if(addr.count(head))
                return head;
            addr.insert(head);
            head = head->next;
        }
        return nullptr;
    }
};
```