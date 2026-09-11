class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let row = grid.length;
        let col = grid[0].length;

        const q = new Queue();
        const visited = new Set();

        let isHaveRotten = false;
        let isHaveOrange = false;
        for (let r = 0; r < row; r++) {
            for (let c = 0; c < col; c++) {
                if (grid[r][c] === 2) {
                    isHaveRotten = true;
                    q.enqueue([r, c]);
                    visited.add(`${r},${c}`);
                }
                if (grid[r][c] === 1) {
                    isHaveOrange = true;
                }
            }
        }

        function addOrange(r, c) {
            if (
                r < 0 ||
                r >= row ||
                c < 0 ||
                c >= col ||
                visited.has(`${r},${c}`) ||
                grid[r][c] === 2 ||
                grid[r][c] === 0
            )
                return;
            grid[r][c] = 2;
            q.enqueue([r, c]);
            visited.add(`${r},${c}`);
        }

        let time = -1;
        while (!q.isEmpty()) {
            let size = q.size();
            for (let i = 0; i < size; i++) {
                let [r, c] = q.dequeue();
                addOrange(r + 1, c);
                addOrange(r - 1, c);
                addOrange(r, c + 1);
                addOrange(r, c - 1);
            }
            time++;
        }
        let isCompletelyRotten = true;
        for (let r = 0; r < row; r++) {
            for (let c = 0; c < col; c++) {
                if (grid[r][c] === 1) {
                    isCompletelyRotten = false;
                    break;
                }
            }
        }
        return isHaveRotten || isHaveOrange ? (isCompletelyRotten ? time : -1) : 0;
    }
}
