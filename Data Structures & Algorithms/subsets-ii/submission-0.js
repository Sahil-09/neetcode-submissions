class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        let res = []
        nums.sort()
        function bckT(i,path){
            if(i>=nums.length){
                res.push(path.slice())
                return
            }
            path.push(nums[i])
            bckT(i+1,path)
            path.pop()
            while(i+1<=nums.length && nums[i] == nums[i+1]){
                i++
            }
            bckT(i+1,path)
        }
        bckT(0,[])
        return res
    }
}
