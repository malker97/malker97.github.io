```C++
class Solution {
public:
    vector<double> averageOfLevels(TreeNode* root) {
        vector<double> v_sum;
        vector<int> v_cnt;
        helper(root,0,v_sum,v_cnt);
        printf("root_level = %d",v_cnt.size());
        for(int i = 0; i < v_sum.size(); i++){
            v_sum[i] = v_sum[i]/v_cnt[i];
        }
        return v_sum;
    }
    void helper(TreeNode* root, int level, vector<double>& v_sum, vector<int>& v_cnt){
        if(root == nullptr)
            return ;
        if(v_cnt.size() <= level){
            v_sum.push_back(0);
            v_cnt.push_back(0);
        }
        v_sum[level] += root->val;
        v_cnt[level] ++;
        helper(root->left,level+1,v_sum,v_cnt);
        helper(root->right,level+1,v_sum,v_cnt);
    }
    
};
```