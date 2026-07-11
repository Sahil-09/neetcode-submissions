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
    maxDepth(root) {
        if(!root){
            return 0
        }
        let leftDepth = this.depth(root.left)
        let rightDepth = this.depth(root.right)
        return Math.max(leftDepth,rightDepth)
    }

    depth(root){
        if(!root){
            return 1
        }
        return Math.max(this.depth(root.left)+1,this.depth(root.right)+1)
    }
}
