function solution(n, results) {
    var answer = 0;
    const board = Array.from(new Array(n),()=>new Array(n).fill(100))
    const noRoute =100
    
    results.forEach(([from,to])=>{
        board[from-1][to-1] =1
        board[to-1][from-1] = -1
    })
    for(let i=0;i<n;i++){
        board[i][i]=0
    }
    
    for(let k=0;k<n;k++){
        for(let i=0;i<n;i++){
            if(i===k || board[i][k]===noRoute) continue
            for(let j=0;j<n;j++){
                if(i===j  || k===j)continue
                
                if(board[i][k]===board[k][j]){
                    board[i][j]=board[i][k]
                }
            }
        }
    }
    for(let i=0;i<n;i++){
        if(board[i].includes(noRoute))continue
        answer++
    }
    return answer;
}
