class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        let res = [];
        intervals.sort((a,b)=>b[0]-a[0])
        for (let i = 0; i < intervals.length; i++) {
            if (!res.length) {
                res.push(intervals[i]);
            } else {
                if (res[res.length - 1][1] >= intervals[i][0] ) {
                    res.push(intervals[i]);
                    let j = res.length-1
                    let k = j-1
                    while (k>=0 && res[j][0] <= res[k][1] && res[j][1] >= res[k][0]) {
                        let last = res.pop();
                        let data = [
                                Math.min(last[0], res[res.length - 1][0]),
                                Math.max(last[1], res[res.length - 1][1]),
                            ];
                        res[res.length-1]=data
                        j = res.length-1
                        k = j-1
                    }
                } else {
                    res.push(intervals[i]);
                }
            }
        }
        return res;
    }
}
