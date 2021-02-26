```C++
class Solution {
public:
    bool isSymmetric(TreeNode* root) {
        return helper(root,root);
    }
    bool helper(TreeNode* root1,TreeNode* root2){
        if(!root1 && !root2)
            return true;
        if(!root1 || !root2)
            return false;
        return  (root1->val == root2->val) && helper(root1->left,root2->right) && helper(root1->right,root2->left);
        
    }
};
```
> 这是代码稍微改一下就可以用来判断二叉树是否相同