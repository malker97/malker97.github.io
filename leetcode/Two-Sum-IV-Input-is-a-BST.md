```C++
class Solution {
public:
    vector<int> nums;
    // vector
    bool findTarget(TreeNode* root, int k) {
        int flag = true;
        helper(root);
        for(int i = 0;i < nums.size(); i++){
            for(int j = 0; j< nums.size(); j++){
                if(nums[i] + nums[j] == k && i != j){
                    return true;
                    // ans.push_back(i);
                    // ans.push_back(j);
                    // flag = false;
                    // break;
                }
            }
            if(flag == false)
                break;
        }
        return false;
    }
    void helper(TreeNode* root){
        if(!root)
            return ;
        nums.push_back(root->val);
        helper(root->left);
        helper(root->right);
    }
};
```
> 这都不是标准解，这就是个合成解，待会看看有没有两个指针一起便利的方法
```C++
class Solution {
public:
    unordered_set<int> vals;
    bool findTarget(TreeNode* root, int k) {
        if(!root)
            return false;
        if(vals.count(k - root->val))
            return true;
        vals.insert(root->val);
        return findTarget(root->left,k) || findTarget(root->right,k);
    }
};
```
> 这是一个HashSet的解法，但是我至今理解还是Bucket Sort，感觉逻辑是一样的