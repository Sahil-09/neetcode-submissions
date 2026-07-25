class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let res=[]
        let subSet=[]
        function backTrack(i){
            if(i>=nums.length){
                res.push(subSet.slice())
                return
            }
            subSet.push(nums[i])
            backTrack(i+1)
            subSet.pop()
            backTrack(i+1)
        }
        backTrack(0)
        return res
    }
}
