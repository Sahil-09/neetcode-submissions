class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length==1) return nums[0]
        if(nums.length==2) return Math.max(nums[0],nums[1])
        let last=nums.slice().splice(1)
        let first=nums.slice().splice(0,nums.length-1)
        const dp = new Array(last.length).fill(0);
        dp[0] = last[0];
        dp[1] = Math.max(last[0], last[1]);
            if(dp.length>2){
            for (let i = 2; i < last.length; i++) {
                dp[i] = Math.max(dp[i - 1], dp[i - 2] + last[i]);
            }
        }

        const dp2 = new Array(first.length).fill(0);
        dp2[0] = first[0];
        dp2[1] = Math.max(first[0], first[1]);
        if(dp2.length>2){
            for (let i = 2; i < first.length; i++) {
                dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + first[i]);
            }
        }
        
        return Math.max(dp[dp.length-1],dp2[dp2.length-1])
    }
}
