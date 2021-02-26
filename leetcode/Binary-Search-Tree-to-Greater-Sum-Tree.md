```C++
class Solution {
public:
    int pre;
    TreeNode* bstToGst(TreeNode* root) {
        pre = 0;
        helper(root);
        return root;
    }
    void helper(TreeNode* root){
        if(!root)
            return ;
        helper(root->right);
        pre += root->val;
        root->val = pre;
        helper(root->left);
    }
};
```