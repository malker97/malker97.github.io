```C++
class Solution {
public:
    vector<vector<int>> ans;
    vector<vector<int>> levelOrder(TreeNode* root) {
        // vector<vectir<int>> ans;
        if(!root)
            return ans;
        helper(root,1);
        return ans;
    }
    void helper(TreeNode* root, int currentlevel){
        if(!root)
            return ;
        if(currentlevel > ans.size()){
            ans.push_back(vector<int> ());//creat new level
        }
        ans[currentlevel-1].push_back(root->val);
        helper(root->left,currentlevel+1);
        helper(root->right,currentlevel+1);
    }
    
};
```
> 二叉树的层序递归遍历