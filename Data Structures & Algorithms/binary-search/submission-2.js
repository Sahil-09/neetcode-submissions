class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left=0;
        let right=nums.length-1
        if(nums.length==1){
            return nums[0]==target ? 0 : -1
        }
        while(left<right){
            if(nums[left]==target){
                return left
            }
            if(nums[right]==target){
                return right
            }
            if(nums[left]<target){
                left++
                continue
            }
            if(nums[right]>target){
                right--
                continue
            }
        }
        return -1
    }
}
