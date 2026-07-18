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
     * @return {number[]}
     */
    rightSideView(root) {
        let result=[]
        if(!root){
            return result
        }
        let que=[root]
        while(que.length){
            let len = que.length
            let level=[]
            for(let i=0;i<len;i++){
                let node = que.shift()
                level.push(node.val)
                if(node.left) que.push(node.left)
                if(node.right) que.push(node.right)
            }
            result.push(level[level.length-1])
        }
        return result
    }
}
