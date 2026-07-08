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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let node = new ListNode()
        let carry = 0
        let nCurr = node
        while(l1 || l2 || carry){
            let val = (l1?.val || 0)+ (l2?.val || 0) + carry
            carry = Math.floor(val>=10 ? val/10 : 0)
            val = val>=10 ? val%10 : val
            let n = new ListNode(val)
            nCurr.next = n
            nCurr = nCurr.next
            l1=l1?.next
            l2=l2?.next
        }
        return node.next
    }
}
