class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
       let rows = heights.length //3
       let col = heights[0].length //5
        let atl = new Set()
        let pcf = new Set()
        //atlantic -> rows<r || cols<c
        //pacific  -> rows>r || cols>c

        function dfs(r,c,visit,prevH){
            if(r<0 || r>=rows || c<0 || c>=col || visit.has(`${r},${c}`) || heights[r][c]<prevH){
                return
            }
            visit.add(`${r},${c}`)
            dfs(r+1,c,visit,heights[r][c])
            dfs(r-1,c,visit,heights[r][c])
            dfs(r,c+1,visit,heights[r][c])
            dfs(r,c-1,visit,heights[r][c])
        }

        for(let c=0;c<col;c++){
            dfs(0,c,atl,heights[0][c])
            dfs(rows-1,c,pcf,heights[rows-1][c])
        }

        for(let r=0;r<rows;r++){
            dfs(r,0,atl,heights[r][0])
            dfs(r,col-1,pcf,heights[r][col-1])
        }
        let ans = []
        for(let r=0;r<rows;r++){
            for(let c=0;c<col;c++){
                if(pcf.has(`${r},${c}`) && atl.has(`${r},${c}`)){
                        ans.push([r,c])
                }
            }

        }

        return ans

    }
}
