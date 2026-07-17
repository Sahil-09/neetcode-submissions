// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let copyMap=new Map()
        let curr = head
        while(curr){
            let node = new Node(curr.val)
            copyMap.set(curr,node)
            curr = curr.next
        }
        curr = head
        while(curr){
            let copy = copyMap.get(curr)
            copy.next = curr?.next ? copyMap.get(curr?.next) : null
            copy.random = copyMap.get(curr?.random)
            curr = curr.next
        }
        return head ? copyMap.get(head) : null
    }
}
