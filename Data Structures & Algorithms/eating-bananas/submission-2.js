class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        piles.sort((a,b)=>a-b)
        let l = 1
        let m = piles[piles.length-1]
        let result = Infinity
        while(l<=m){
            let mid = Math.floor((l+m)/2)
            let mh=0
            for(let i=0;i<piles.length;i++){
                mh+=Math.ceil(piles[i]/mid)
            }
            if(mh<=h){
                result = Math.min(mid,result)
                m=mid-1
            }else if(mh>h){
                l=mid+1
            }else{
                l++
            }
        }
        return result
    }
}
