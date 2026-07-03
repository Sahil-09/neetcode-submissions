class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {}
        nums.forEach(el=>{
            map[el] = map[el] || {num:el,count:0}
            map[el].count+=1
        })
        let arr = Object.values(map)
        let sortArr = arr.sort((a,b)=>b.count-a.count).map(el=>el.num)
        return sortArr.slice(0,k)
    }
}
