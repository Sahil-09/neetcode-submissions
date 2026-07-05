class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let l=0
        let h=s1.length
        let sortS1= s1.split('').sort().join('')
        let arr  = s2.split('')
        while(h<=arr.length){
            let str = arr.slice(l,h).sort().join('')
            if(str==sortS1){
                return true
            }
            l++
            h++
        }
        return false
    }
}
