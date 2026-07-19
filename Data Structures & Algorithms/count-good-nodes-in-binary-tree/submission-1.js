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
     * @return {number}
     */
    goodNodes(root) {
        let res=1
        function dfs(node,lowest){
            if(!node) return
            if(lowest<=node.val){
                lowest=node.val
                res++
            }
            dfs(node.left,lowest)
            dfs(node.right,lowest)
        }
        dfs(root.left,root.val)
        dfs(root.right,root.val)
        return res
    }
}
