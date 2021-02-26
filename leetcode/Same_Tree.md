```
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    bool isSameTree(TreeNode* p, TreeNode* q) {
        if(p==NULL&&q==NULL)//两个节点都为空，至少这两个空树是相同的，而且能到达这说明之前的节点也是相同的
            return true;
        if((p!=NULL&&q==NULL)||(p==NULL&&q!=NULL)||(p->val!=q->val))//这是不相同时候的可能情况
            return false;
        return isSameTree(p->left,q->left)&&isSameTree(p->right,q->right);//比较两树是否相同
    }
};
```
### Another One
```
bool isSameTree(TreeNode* p, TreeNode* q) {
        if(p==NULL&&q==NULL)
            return true;
        if(p==NULL||q==NULL)
            return false;
        return (p->val == q->val)&&isSameTree(p->left,q->left)&&isSameTree(p->right,q->right);
    }
```