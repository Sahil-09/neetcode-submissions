class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let low = 0
        let high = nums.length-1
        let result = Infinity
        while(low<=high){
            let mid = Math.floor((low+high)/2)
            result = Math.min(result,nums[mid])
            if(nums[mid]>=nums[low] && nums[mid]>=nums[high]){
                if(nums[high]>nums[low]){
                    high=mid-1
                }else{
                    low=mid+1
                }
            }else if(nums[mid]>=nums[low] && nums[mid]<=nums[high]){
                high=mid-1
            }else{
                low++
                high--
            }
        }
        return result
    }
}
