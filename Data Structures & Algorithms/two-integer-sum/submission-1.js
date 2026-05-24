class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let numMap = new Map()
        for(let j=0;j<nums.length;j++){
            let val = target - nums[j]
            if(numMap.has(val)){
                return [numMap.get(val),j]
            }else{
                numMap.set(nums[j],j)
            }
        }
        return -1
    }
}
