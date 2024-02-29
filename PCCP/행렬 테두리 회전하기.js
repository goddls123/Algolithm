function solution(rows, columns, queries) {
    var answer = [];
    const board = Array.from(new Array(rows+2),()=> new Array(columns+2).fill(0))
    let index =1
    for(let i=1;i<=rows;i++){
        for(let j=1;j<=columns;j++){
            board[i][j] = index++
        }
    }
    const rotate=([x1,y1,x2,y2])=>{
        let min = Infinity
        const tBoard= board.map(b=>[...b])
        for(let i=x1;i<=x2;i++){
            for(let j=y1;j<=y2;j++){
                 if(i!==x1 && i!==x2 &&j!==y1 &&j!==y2) continue
                 min = Math.min(min, tBoard[i][j])
                if(i===x1){
                    board[i][j] = tBoard[i][j-1]
                }else if(i==x2){
                    board[i][j] = tBoard[i][j+1]
                }else if(j===y1){
                    board[i][j]=tBoard[i+1][j]
                }else if(j===y2){
                    board[i][j]=tBoard[i-1][j]
                }
            }
        }
        board[x1][y1] = tBoard[x1+1][y1]
        board[x2][y2] = tBoard[x2-1][y2]
        return min
    }
    answer = queries.map(rotate)
    return answer;
}
