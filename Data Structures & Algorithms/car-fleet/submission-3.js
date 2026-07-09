class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let res=0
        let map = {}
        let stack= []
        position.forEach((el,i)=>{
            map[el] = speed[i]
        })
        let revPosition = position.sort((a,b)=>b-a)
        for(let i = 0;i<revPosition.length;i++){
            let s = (target-revPosition[i])/map[revPosition[i]]
            stack.push(s)
            if(stack.length>=2 && stack[stack.length-1]<=stack[stack.length-2]){
                stack.pop()
            }
        }
        return stack.length
    }
}
