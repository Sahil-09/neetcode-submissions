class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!=t.length){
            return false
        }
        let sMap={}
        for(let el of s){
            sMap[el] =  sMap[el] ?  sMap[el]+1 : 1
        }
        for(let c of t){
            if(!sMap[c]){
                return false
            }
            sMap[c]--
        }
        return !Object.values(sMap).filter(el=>el).length
    }
}
