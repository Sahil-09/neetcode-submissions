class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let dupMap={}
        let res
        nums.forEach((el)=>{
            if(dupMap[el]){
                res=el
            }
            dupMap[el]=true
        })
        return res
    }
}
