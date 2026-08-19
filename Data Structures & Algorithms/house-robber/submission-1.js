class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (!nums.length) return 0;
        if (nums.length === 1) return nums[0];
        let prev1 = 0,prev2=0
        for(let money of nums){
            let current = Math.max(prev1,prev2+money)
            prev2 = prev1
            prev1 = current
        }
        return prev1
    }
}
