```C++
class Solution {
public:
    vector<int> vals;
    //最后一个元素事v.back()
    int getMinimumDifference(TreeNode* root) {
        helper(root);
        int ans = INT_MAX;
        for(int i = 0; i < vals.size()-1; i++){
            ans = min(vals[i+1] - vals[i], ans);
        }
        return ans;
    }
    void helper(TreeNode* root){
        if(!root) return ;
        helper(root->left);
        vals.push_back(root->val);
        helper(root->right);
    }
};
```
> 这不是最快解，但是理论上应该有return min(func1,func2)的方法，但是也不是很确定