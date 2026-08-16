class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        stones.sort((a,b)=>a-b)
        console.log(stones)
        while(stones.length>1){
            let a = stones.pop()
            let b = stones.pop()
            if(a==b){
                continue;
            }
            if(a>b){
                stones.push(a-b)
            }else{
                stones.push(b-a)
            }
            stones.sort((a,b)=>a-b)
        }
        return stones[0] || 0
    }
}
