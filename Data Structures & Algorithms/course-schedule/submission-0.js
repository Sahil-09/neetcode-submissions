class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let preMap={}
        let visited = new Set()
        for(let i=0;i<numCourses;i++){
            preMap[i]=[]
        }

        for(let [a,b] of prerequisites){
            preMap[a].push(b)
        }

        function dfs(n){
            if(visited.has(n)){
                return false
            }
            if(preMap[n]==[]){
                return true
            }
            visited.add(n)
            for(let a of preMap[n]){
                if(!dfs(a)) return false
            }
            visited.delete(n)
            preMap[n] = []
            return true
        }

        for(let i=0;i<numCourses;i++){
            if(!dfs(i)) return false
        }
        return true
    }
}
