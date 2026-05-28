class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left=0;
        let map={}
        let ans = 0;
        let maxFreq=0;
        for(let right=0;right<s.length;right++){
            const char = s[right];
            map[char]=(map[char] || 0) + 1
            maxFreq = Math.max(maxFreq,map[char])
            while((right-left+1)-maxFreq>k){
                map[s[left]]--;
                left++
            }
            ans = Math.max((right-left+1),ans)
        }
        return ans
    }
}
