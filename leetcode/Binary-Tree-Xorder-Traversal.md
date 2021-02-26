```C++
class Solution {
public:
    vector<int> ans;
    vector<int> preorderTraversal(TreeNode* root) {
        helper(root);
        return ans;
    }
    void helper(TreeNode* root){
        if(!root)
            return ;
        ans.push_back(root->val);
        helper(root->left);
        helper(root->right);
    }
};
```
```C++
class Solution {
public:
    vector<int> ans;
    vector<int> inorderTraversal(TreeNode* root) {
        helper(root);
        return ans;
    }
    void helper(TreeNode* root){
            if(!root)
                return ;
            helper(root->left);
            ans.push_back(root->val);
            helper(root->right);
    }
};
```