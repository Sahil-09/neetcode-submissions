class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack=[]
        if(tokens.length==1){
            return tokens[0]
        }
        let map = {
            '+':(a,b)=>Number(a)+Number(b),
            '-':(a,b)=>Number(a)-Number(b),
            '*':(a,b)=>Number(a)*Number(b),
            '/':(a,b)=>Math.trunc(Number(a)/Number(b)),
        }
        tokens.forEach((el)=>{
            if(map[el]){
               let first = stack.pop()
               let second = stack.pop()
               stack.push(map[el](second,first) )
            }else{
                stack.push(el)
            }
        })
        return stack.pop()
    }
}
