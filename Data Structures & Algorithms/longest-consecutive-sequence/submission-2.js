class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(!nums.length){
            return 0
        }
       let sorted = nums.sort((a,b)=>a-b)
       let low = sorted[0]
       let map = {}
       let i=0
       map[i]=1
       console.log(sorted)
       sorted.forEach((el)=>{
        if(el==low+1){
            low=el
            map[i]++
        }else if(el==low){
        }else{
            i++
            low=el
            map[i]=1
        }
       })
       let arr = Object.values(map).sort((a,b)=>b-a)
       console.log(arr)
       return arr[0]
    }
}
