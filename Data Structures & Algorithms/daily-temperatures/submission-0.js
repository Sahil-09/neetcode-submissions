class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
       let res = Array(temperatures.length).fill(0)
       let stack = []
       temperatures.forEach((e,i)=>{
        while(stack?.length &&  e > stack[stack?.length-1][0]){
            const [stackT, stackInd] = stack.pop()
            res[stackInd]= i - stackInd
        }
        stack.push([e,i])
       })
        return res
    }
}
