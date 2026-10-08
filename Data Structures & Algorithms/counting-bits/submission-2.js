class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let res = [0];
        if (n == 0) {
            return res;
        }

        let dp = [0];
        function getOnes(n) {
            let i = 0;
            while (n > 0) {
                let res = n % 2;
                if (!dp[n]) {
                    res = n % 2;
                    dp[n] = res;
                } else {
                    //res = dp[n];
                }
                if (res == 1) {
                    i++;
                }
                n = Math.floor(n / 2);
            }
            return i;
        }

        for(let i=1;i<=n;i++){
            res.push(getOnes(i))
        }
        return res
    }
}
