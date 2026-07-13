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
            let left = trav(curr.left) + 1
            let right = trav(curr.right) + 1
            if(Math.abs(left-right)>1){
                res = false
            }
            return Math.max(left,right) 
        }
        trav(root)
        return res
    }
}
