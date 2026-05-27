class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let map={}
        let str=''
        let max=0;
        let starIndex=0
        for (let i=0;i<s.length;i++){
            if(map[s.charAt(i)]){
                str = ''
                map={}
                i=starIndex
                starIndex++
            }else{
                str+=s.charAt(i)
                map[s.charAt(i)] = true
                max = Math.max(max,str.length)
            }
        }
        return max
    }
}
