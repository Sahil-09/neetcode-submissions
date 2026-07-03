class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {}
        strs.forEach((s)=>{
            let str = s.split('').sort().join('')
            map[str] = map[str] || []
            map[str].push(s)
        })
        return Object.values(map)
    }
}
