class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let lastSum=Infinity
        let res
        nums.sort()
        let allSum = nums.reduce((a,acc)=>a+acc,0)
        nums.forEach((el)=>{
            let currSum = allSum-el
            if(lastSum===currSum){
                res = el
                return res
            }
            lastSum = currSum
        })
        return res
    }
}
