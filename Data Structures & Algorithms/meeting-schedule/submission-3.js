/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        intervals.sort((a,b)=>a.start-b.start)
        let prevEnd = intervals[0]?.end
        console.log(prevEnd)
        for(let int of intervals.slice(1)){
            if(prevEnd>int.start){
                return false
            }
            prevEnd=int.end
        }
        return true
    }
}
