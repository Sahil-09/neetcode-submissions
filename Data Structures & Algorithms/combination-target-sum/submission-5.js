class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let res=[]
        let subSetArr = []
        let numMap={}
        let ansMap={}
        nums.forEach((el)=>{
            numMap[el] = true
        })
        function dfs(i,val){
            if(i>=nums.length || val>=target){
                let elm = subSetArr.join('')
                if(val==target && !ansMap[elm]){
                    res.push(subSetArr.slice())
                    ansMap[elm] = true
                }
                return
            }
            let elmt = subSetArr.join('')+nums[i]
            if(ansMap[elmt]){
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
