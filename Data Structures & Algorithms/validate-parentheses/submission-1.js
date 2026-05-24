class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let arr = s.split('');
        let bracketMap = {
            '{':'}',
            '[':']',
            '(':')'
        }
        let stack = []
        for(let a of arr){
            if(!stack.length){
                stack.push(a)
                continue;
            }
            if(bracketMap[stack[stack.length-1]]===a){
                stack.pop()
            }else{
                stack.push(a)
            }
        }
        return !stack.length
    }
}
