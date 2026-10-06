class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        nums.sort()
        let prev
        for(let a of nums){
            if(prev==a){
                return true
            }
            prev=a
        }
        return false
    }
}
