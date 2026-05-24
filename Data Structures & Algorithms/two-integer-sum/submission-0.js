class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let numMap = {}
        nums.forEach((el,i)=>{
            numMap[el]=i
        })
        for(let j=0;j<nums.length;j++){
            let val = target - nums[j]
            if(numMap[val] && numMap[val]!==j){
                return [j,numMap[val]]
            }
        }
    }
}
