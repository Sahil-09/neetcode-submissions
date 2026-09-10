class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let row = grid.length;
        let col= grid[0].length;

        let visited = new Set()
        let q = new Queue()


        for(let r = 0 ; r < row ; r++){
            for(let c = 0 ; c < col ; c++){
                if(grid[r][c]==0){
                    q.enqueue([r,c])
                    visited.add(`${r},${c}`)
                }
            }
        }

        function addRoom(r,c){
            if(r<0 || r==row || c<0 || c==col || grid[r][c]==-1 || visited.has(`${r},${c}`)){ 
                return
            };
            visited.add(`${r},${c}`)
            q.enqueue([r,c])
        }
        let dist=0
        while(!q.isEmpty()){
            const len  = q.size()
            for(let i=0; i<len;i++){
                const [r,c] = q.dequeue()
                grid[r][c]=dist
                addRoom(r+1,c)
                addRoom(r-1,c)
                addRoom(r,c+1)
                addRoom(r,c-1)
            }
            dist++
        }
        //console.table(grid)
    }
}
