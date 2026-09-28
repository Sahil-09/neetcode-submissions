class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if(!n) return true
        let adj={}
        let visit = new Set()
        for(let i=0;i<n;i++){
            adj[i]=[]
        }
        for(let [a,b] of edges){
            adj[a].push(b)
            adj[b].push(a)
        }

        console.log(adj)

        function dfs(i,prev){
            if(visit.has(i)){
                return false
            }

            visit.add(i)
            for(let j of adj[i]){
                console.log(j,prev)
                if(j==prev){
                    continue
                }
                if(!dfs(j,i)){
                    return false
                }
            }
            return true
        }

        return dfs(0,-1) && n == visit.size
    }
}
