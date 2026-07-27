class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let res=[]
        function backTrack(i,subSet){
            if(i>=nums.length){
                res.push(subSet.slice())
                return
            }
            subSet.push(nums[i])
            backTrack(i+1,subSet)
            subSet.pop()
            backTrack(i+1,subSet)
        }
        backTrack(0,[])
        return res
    }
}
