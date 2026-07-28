class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let path = new Set()
        let ROW = board.length
        let COL = board[0].length
        function backTrack(r,c,i){
            if(i==word.length){
                return true
            }
            if(r<0 || c <0 || c>=COL || r>=ROW || word[i] !== board[r][c] || path.has(`${r}${c}`)){
                return false
            }
            path.add(`${r}${c}`)
            let res = (backTrack(r+1,c,i+1) || backTrack(r-1,c,i+1) || backTrack(r,c+1,i+1) || backTrack(r,c-1,i+1))
            path.delete(`${r}${c}`)
            return res
        }
        for(let i=0;i<ROW;i++){
            for(let j=0;j<COL;j++){
                if(backTrack(i,j,0))
                    return true
            }
        }
        return false
    }
}
