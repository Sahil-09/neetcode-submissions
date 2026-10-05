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
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        if(!intervals.length){
            return 0
        }
        intervals.sort((a,b)=>a.start-b.start)
        let room=[]
        for(let int of intervals){
            if(!room.length){
                room.push(int.end)
            }else{
                let added = false
                for(let i=0;i<room.length;i++){
                    if(room[i]<=int.start){
                        room[i]=int.end
                        added=true
                        break;
                    }
                }
                if(!added){
                    room.push(int.end)
                }
            }
        }
        return room.length
    }
}
