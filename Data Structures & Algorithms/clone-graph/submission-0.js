/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        const copyMap= {}
        function clone(node){
            if(copyMap[node.val]){
                return copyMap[node.val]
            }
            const copy = new Node(node.val)
            copyMap[node.val]=copy
            for(let n of node.neighbors){
                copy.neighbors.push(clone(n))
            }
            return copy
        }
        return node !== null ? clone(node) : null 
    }
}
