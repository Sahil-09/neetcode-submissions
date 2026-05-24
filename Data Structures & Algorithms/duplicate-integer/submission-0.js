class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hasMap={}
        let result = false
        for(let a of nums){
            if(hasMap[a]){
                result = true
                break;
            }
            hasMap[a]=true
        }
        return result
    }
}
