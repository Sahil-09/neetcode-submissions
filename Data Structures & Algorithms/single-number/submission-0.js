class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let res = 0
        for(let a of nums){
            res = a ^ res
        }
        return res
    }
}
