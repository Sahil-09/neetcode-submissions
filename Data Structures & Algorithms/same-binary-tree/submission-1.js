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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        let result = true
        function trav(node,q){
            if(node?.val!==q?.val){
                 result=false
                 return
            }
            if(!node){
                return
            }
            trav(node.left,q.left)
            trav(node.right,q.right)
        }
        trav(p,q)
        return result
    }
}
