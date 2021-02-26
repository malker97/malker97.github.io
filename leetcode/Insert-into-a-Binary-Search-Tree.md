```C++
class Solution {
public:
    TreeNode* insertIntoBST(TreeNode* root, int val) {
        helper(root,val);
        return root;
    }
    void helper(TreeNode*& root, int val){
        if(!root){
            root = new TreeNode;
            root->val = val;
            root->left = nullptr;
            root->right = nullptr;
            return ;
        }
        if(root->val > val)
            return helper(root->left, val);
        else
            return helper(root->right, val);
    }
};
```