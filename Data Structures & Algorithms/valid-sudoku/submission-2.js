class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for(let rows = 0; rows < board.length; rows++) {
            const hashMap = {}
            const currentRow = board[rows]
            for(let col = 0; col < currentRow.length; col++) {
                if(currentRow[col] === ".") continue 
                //const currentColumn = currentRow[cols]
                hashMap[currentRow[col]] = (hashMap[currentRow[col]] || 0) + 1;
                if(hashMap[currentRow[col]] > 1) return false
                
            } 
        }
        for(let cols = 0; cols < board.length; cols++) {
            const hashMap = {};
            const currentCol = board[cols]
            for(let i = 0; i < currentCol.length; i++) {
                if(board[i][cols] === ".") continue
                hashMap[board[i][cols]] = (hashMap[board[i][cols]] || 0) + 1;
                if(hashMap[board[i][cols]] > 1) return false
            }
        }
        const hashMap = {}
        for(let rows = 0; rows < 9; rows++) {
            for(let cols = 0; cols < 9; cols++) {
                const value = board[rows][cols]
                const boxKey = Math.floor(rows / 3) + "," + Math.floor(cols / 3);
                if(board[rows][cols] === ".") continue
                hashMap[boxKey] = hashMap[boxKey] || {};
                hashMap[boxKey][value] = (hashMap[boxKey][value] || 0) + 1;
                if(hashMap[boxKey][value] > 1) return false
            }
        }
        return true
    }
}
