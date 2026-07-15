class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rowsMap=[]
        let colMap=[]
        let sqMap=[]
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++){
                let element = board[i][j]
                let mat = `${Math.floor(i/3)},${Math.floor(j/3)}`
                if(element=='.') continue
                if(!rowsMap[i]){
                    rowsMap[i] = {}
                }
                if(!colMap[j]){
                    colMap[j] = {}
                }
                if(!sqMap[mat]){
                    sqMap[mat] = {}
                }
                if(rowsMap[i][element] || colMap[j][element] || sqMap[mat][element]){
                    return false
                }
                rowsMap[i][element] = colMap[j][element] = sqMap[mat][element] = true
            }
        }
        return true
    }
}
