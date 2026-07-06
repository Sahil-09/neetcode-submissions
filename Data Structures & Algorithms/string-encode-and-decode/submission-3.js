class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let mstr = strs.map((el)=>{
            return el.length+'#'+el
        })
        return mstr.join('')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
       let result = []
       let i=0
       while(i<str.length){
        let j=i
        while(str.charAt(j)!='#'){
            j++
        }
        let length = Number(str.substring(i,j))
        result.push(str.substring(j+1,j+1+length))
        i = j+1+length
       }
       return result
    }
}
