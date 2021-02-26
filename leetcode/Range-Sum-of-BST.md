```C++
class Solution {
public:
    int rangeSumBST(TreeNode* root, int low, int high) {
        if(!root)
            return 0;
        int temp = 0;
        if(root->val >= low && root->val <= high)
            temp = root->val;
        return temp + rangeSumBST(root->left,low,high) + rangeSumBST(root->right,low,high);
    }
};
```