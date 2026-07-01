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
     * @return {void}
     */
    reorderList(head) {
        let curr = head
        let length = 0
        while(curr){
            length++
            curr = curr.next
        }
        let half = Math.ceil(length/2)
        curr = head
        let i = 0
        let prev = null
        while(curr){
            let next = curr.next
            if(i>=half){
                curr.next = prev
                prev = curr
            }
            i++
            curr = next
        }
        i=1
        curr=head
        while(curr){
            if(i==half){
                if(length%2 !==0) curr.next=null
                break
            }
            let next = curr.next
            let nodeN = prev ? new ListNode(prev?.val) : null
            if(nodeN && i!==0){
                nodeN.next=next
            }
            curr.next = nodeN
            prev = prev?.next
            curr=next
            i++
        }
        return curr
    }
}
