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

        function getMaxMoney(arr){
            let prev1=0,prev2=0
            for(let money of arr){
                let current = Math.max(prev1,prev2+money)
                prev2 = prev1
                prev1 = current
            }
            return prev1
        }

        
        return Math.max(getMaxMoney(first),getMaxMoney(last))
    }
}
