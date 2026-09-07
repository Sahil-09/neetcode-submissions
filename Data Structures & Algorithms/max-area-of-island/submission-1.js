class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let row = grid.length
        let col = grid[0].length
        let max=0
        function dfs(r,c){
            if(r<0 || c<0 || r>=row || c>=col || grid[r][c]!==1){
                return 0
            }
            grid[r][c]=0
            return 1+ 
                dfs(r+1,c)+
                dfs(r-1,c)+
                dfs(r,c+1)+
                dfs(r,c-1)
                
        }

        for(let r=0;r<grid.length;r++){
            for(let c=0;c<grid[r].length;c++){
                if(grid[r][c]==1){
                    let area = dfs(r,c)
                    max = Math.max(area,max)
                }
            }
        }
        return max
    }
}
