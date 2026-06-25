class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        if(nums.length===3 && ( nums[0] + nums[1] + nums[2]) === 0){
            return [nums]
        }
        let ans = {}
        let map={}
        nums.forEach((el,i)=>{
            if(map[el]){
                map[el].push(i)
            }else{
                map[el] = [i]
            }
        })
        for(let i=0;i<nums.length;i++){
            for(let j=i+1;j<nums.length;j++){
                const target = -(nums[i] + nums[j])+0
                if(map[target]){
                    const triplet = [target,nums[i],nums[j]].sort()
                    if(map[target].length==1 && !map[target].includes(i) && !map[target].includes(j)){
                         ans[triplet.join('')]=triplet
                    }else if(map[target].length>1 && (!map[target].includes(i) || !map[target].includes(j))){
                         ans[triplet.join('')]=triplet
                    }else if(map[target].length>=3){
                         ans[triplet.join('')]=triplet
                    }
                }
            }
        }
        return Object.values(ans)
    }
}
