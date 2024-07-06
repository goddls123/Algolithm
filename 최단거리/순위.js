function solution(n, results) {
    var answer = 0;
    const board = Array.from(new Array(n),()=>new Array(n).fill(Infinity))
    
    results.forEach(([win,loose])=>{
        board[win-1][loose-1] =1
        board[loose-1][win-1] = -1
    })
    for(let i=0;i<n;i++){
        board[i][i]=0
    }
    
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(board[i][j]!==Infinity)continue
            for(let k=0;k<n;k++){
                if(board[i][k]!==Infinity && board[i][k]===board[k][j]){
                    board[i][j] = board[i][k]
                    board[j][i] = board[k][i]
                }
            }
        }
    }
  
    return board.filter(b=>!b.includes(Infinity)).length
}
