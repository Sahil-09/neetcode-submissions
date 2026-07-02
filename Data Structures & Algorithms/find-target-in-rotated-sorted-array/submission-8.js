class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0
        let h = nums.length-1
        while(l<=h){
            let mid = Math.floor((l+h)/2)
            if(nums[mid]==target){
                return mid;
            }
            if(nums[l]==target){
                return l;
            }
            if(nums[h]==target){
                return h;
            }
            if(nums[l]<=nums[mid]){
                if(target<nums[l] || target>nums[mid]){
                    l =  mid + 1 
                }else{
                    h = mid -1
                }
            }else{
                if(target>nums[h] || target<nums[mid]){
                    h = mid -1 
                }else{
                    l = mid + 1
                }
            }
        }
        return -1
    }
}
