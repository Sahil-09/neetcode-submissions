class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let compare = (a,b)=>{
            return Math.sqrt(((a[0]-b[0])**2+(a[1]-b[1])**2))
        }
        let heapDistance = []
        points.forEach((point)=>{
            let d = compare(point,[0,0])
            heapDistance.push([point,d])
        })
        return heapDistance.sort((a,b)=>a[1]-b[1]).map(el=>el[0]).slice(0,k)
    }
}
