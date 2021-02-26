``` C++
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
    int maxDepth(TreeNode* root) {
        if(!root)
            return 0;
        return max(maxDepth(root->left),maxDepth(root->right))+1;
    }
};
```
这是一个Leetcode上的一个ez level的题目
### 函数的逃出条件
这是一个递归函数，所以需要每层函数适时结束，整个函数开始收缩的条件是当他的到达这一分支的最底部的时候，函数结束。
### 函数是如何计计数的
当这一个节点不是尾部的时候，函数会开启下以节点的函数，每次加一，然后完成统计。