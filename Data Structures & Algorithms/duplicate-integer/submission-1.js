class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        nums.sort()
        let i=0
        let res = false
        while(i<nums.length){
            if(nums[i]==nums[i+1]){
                res = true
            }
            i++
        }
        return res
    }
}
