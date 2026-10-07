class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let res=0
        while(n>=1){
            if(n%2==1){
                res++
            }
            n=Math.floor(n/2)
        }
        return res
    }
}
