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
     * @return {boolean}
     */
    hasCycle(head) {
        let map={}
        while(head){
            if(map[head.val] && map[head.val].val == head?.next?.val){
                return true;
            }
            map[head.val]= head.next;
            head = head.next
        }
        return false
    }
}
