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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if(!subRoot) return true
        if(!root) return false

        if(sameTree(root,subRoot)){
            return true
        }else{
            return this.isSubtree(root.left,subRoot) || this.isSubtree(root.right,subRoot)
        }
        function sameTree(s,t){
            if(!s && !t){
                return true
            }
            if(s?.val == t?.val){
                return sameTree(s.left,t.left) && sameTree(s.right,t.right)
            }
            return false
        }
    }
}
