class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let res=[]
        let stack = []
        function backTrack(o,c){
            if(o==n && c==n){
                res.push(stack.slice().join(''))
                return
            }
            if(o<n){
                stack.push('(')
                backTrack(o+1,c)
                stack.pop()
            }
            if(c<o){
                stack.push(')')
                backTrack(o,c+1)
                stack.pop()
            }
        }
        backTrack(0,0)
        return res

    }
}
