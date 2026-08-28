class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let res = nums.slice().sort((a, b) => b - a)[0];
        let currMin = 1,
            currMax = 1;
        for (let n of nums) {
            if (n == 0) {
                ((currMin = 1), (currMax = 1));
                continue;
            }
            let tmp = currMax * n;
            currMax = Math.max(tmp, n * currMin, n);
            currMin = Math.min(tmp, n * currMin, n);
            res = Math.max(res, currMax);
        }
        return res;
    }
}
