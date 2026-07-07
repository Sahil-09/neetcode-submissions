/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let i = 0
        let curr = head
        let prev = null
        let len = 0
        while(curr){
            len++
            curr=curr.next
        }
        curr = head
        let res = new ListNode(null,head)
        prev = res
        while(curr){
            let next = curr.next
            if(len-i==n){
                prev.next = curr.next;
            }else{
                prev = curr
            }
            curr = next
            i++
        }
        return res.next
    }
}
