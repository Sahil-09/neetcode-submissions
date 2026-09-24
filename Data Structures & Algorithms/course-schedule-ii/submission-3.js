class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        let preMap={}
        let visited = new Set()
        let cycle = new Set()
        for(let i=0;i<numCourses;i++){
            preMap[i]=[]
        }

        for(let [a,b] of prerequisites){
            preMap[a].push(b)
        }


        function dfs(n){
            if(cycle.has(n)){
                return false
            }
            if(visited.has(n)){
                return true
            }
            cycle.add(n)
            for(let a of preMap[n]){
                if(!dfs(a)) return false
            }
            cycle.delete(n)
            visited.add(n)
            preMap[n] = []
            ans.push(n)
            return true
        }
        let ans=[]
        for(let i=0;i<numCourses;i++){
            if(!dfs(i)){
                return []
            }
        }
        return ans
    }
}
