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
     * @return {boolean}
     */
    isBalanced(root) {
        let res = true
        if(!root){
            return true
        }
        function trav(curr){
            if(!curr){
                return 0
            }
            let left = trav(curr.left)
            let right = trav(curr.right)
            if(Math.abs(left-right)>1){
                res = false
            }
            return Math.max(left,right) + 1
        }
        trav(root)
        return res
    }
}
