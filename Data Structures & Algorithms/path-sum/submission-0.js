/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root, targetSum) {
        function dfs(node,sum){
            if(!node){
                return false
            }
            sum+=node.val
            if(!node.left && !node.right){
                return sum==targetSum
            }
            let left = dfs(node.left,sum)
            let right = dfs(node.right,sum)
            return left || right
        }
        return dfs(root,0)
    }
}
