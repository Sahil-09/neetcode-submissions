class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let res=[]
        let subSetArr = []
        let ansMap={}
        function dfs(i,val){
            if(i>=nums.length || val>=target){
                let elm = subSetArr.join('')
                if(ansMap[elm]){
                    console.log(elm)
                }
                if(val==target && !ansMap[elm]){
                    res.push(subSetArr.slice())
                    ansMap[elm] = true
                }
                return
            }
            subSetArr.push(nums[i])
            val+=nums[i]
            dfs(i+1,val)
            if(val<=target){
                dfs(i,val)
            }
            val-=nums[i]
            subSetArr.pop()
            if(val<=target){
                dfs(i+1,val)
            }
        }
        dfs(0,0)
        return res
    }
}
