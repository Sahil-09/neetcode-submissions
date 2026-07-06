class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i=0;
        let j=heights.length-1;
        let max=-Infinity
        while(i<=j){
            let area = Math.min(heights[i],heights[j])*(j-i)
            max = Math.max(area,max)
            if(heights[i]<=heights[j]){
                i++
            }else{
                j--
            }
        }
        return max
    }
}
