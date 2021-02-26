```C++
class Solution {
public:
    ListNode* swapNodes(ListNode* head, int k) {
        vector<ListNode*> record;
        ListNode* temp = head;
        while(temp){
            record.push_back(temp);
            temp = temp->next;
        }
        cout<<record[k-1]->val<<endl;
        cout<<record[record.size()-k]->val<<endl;
        swap(record[k-1]->val,record[record.size()-k]->val);
        // int t = record[k]->val
        // swap(record[k]->val,record[record.size()-1-k]);
        return head;
    }
};
```