class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i=0;
        let j=i+1;
        let max=-Infinity
        for(let i = 0;i<heights.length;i++){
            for(let j=i+1;j<heights.length;j++){
                let min = Math.min(heights[i],heights[j])
                max = Math.max((min * (j-i)),max)
            }
        }
        return max
    }
}
