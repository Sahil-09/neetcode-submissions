class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals.sort((a, b) => a[1] - b[1])
        let prev=intervals[0][1]
        let res=0
        for(let [start,end] of intervals.slice(1)){
            if(start>=prev){
                prev=end
            }else{
                res++
                prev = Math.min(end,prev)
            }
        }
        return res
    }
}
