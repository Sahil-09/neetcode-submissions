class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sMap={}
        s.split('').forEach((el)=>{
            if(!sMap[el]){
                sMap[el]=1
            }else{
                sMap[el]++
            }
        })
        for(let a  of t.split('')){
            if(!sMap[a]){
                return false;
            }
            sMap[a]--
        }
        return !Object.values(sMap).filter(el=>el).length
    }
}
