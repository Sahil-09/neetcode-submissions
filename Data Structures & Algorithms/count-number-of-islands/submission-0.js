class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let row = grid.length
        let col = grid[0].length
        let island =0
        function dfs(r,c){
            if(r<0 || c<0 || r>=row || c>=col || grid[r][c]!=='1') return
            grid[r][c] = '0'
            dfs(r+1,c)
            dfs(r-1,c)
            dfs(r,c+1)
            dfs(r,c-1)
        }

        for(let r=0;r<grid.length;r++){
            for(let c=0;c<grid[r].length;c++){
                if(grid[r][c]=='1'){
                   island++
                   dfs(r,c)
                }
            }
        }
        return island
    }
}
