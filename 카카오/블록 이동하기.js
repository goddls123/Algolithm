function solution(board) {
    var answer = 0;
    const n =board.length
    const newBoard = Array.from(new Array(n+2),()=>new Array(n+2).fill(1))
    const map = new Map()
    const end = `${n}${n}`
    
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            newBoard[i+1][j+1] = board[i][j]
        }
    }
    const getNext=(left,right)=>{
        const dx=[0,-1,0,1]
        const dy=[-1,0,1,0]
        const tmp = []
        for(let i=0;i<4;i++){
            const ax1 = dx[i]+left[0]
            const ay1 = dy[i]+left[1]
            const ax2 = dx[i]+right[0]
            const ay2 = dy[i]+right[1]
            if(newBoard[ax1][ay1] ===0 && newBoard[ax2][ay2]===0){
                tmp.push([ax1,ay1,ax2,ay2])
            }
        }
        if(left[0]===right[0]){
            if(newBoard[left[0]+1][left[1]]===0 && newBoard[right[0]+1][right[1]]===0){
                tmp.push([...left,left[0]+1,left[1]])
                tmp.push([right[0]+1,right[1], ...right])
            }
            if(newBoard[left[0]-1][left[1]]===0 && newBoard[right[0]-1][right[1]]===0){
                tmp.push([...left,left[0]-1,left[1]])
                tmp.push([right[0]-1,right[1], ...right])
            }
        }
        if(left[1]===right[1]){
            if(newBoard[left[0]][left[1]+1]===0 && newBoard[right[0]][right[1]+1]===0){
                tmp.push([...left,left[0],left[1]+1])
                tmp.push([right[0],right[1]+1, ...right])
            }
            if(newBoard[left[0]][left[1]-1]===0 && newBoard[right[0]][right[1]-1]===0){
                tmp.push([...left,left[0],left[1]-1])
                tmp.push([right[0],right[1]-1, ...right])
            }
        }
        return tmp
    }
    
    const bfs =()=>{
        const queue=[[[1,1],[1,2],0]]
        map.set('1112',true)
        while(queue.length){
            const [left,right,count] = queue.shift()
            if(left.join('')==end || right.join('')==end){
                return count
            }
            const next = getNext(left,right)
            for(let i=0;i<next.length;i++){
                if(!map.has(next[i].join(''))){
                    map.set(next[i].join(''),true)
                    queue.push([[next[i][0],next[i][1]],[next[i][2],next[i][3]],count+1])
                }
            }
        }
        return 0
    }
    answer = bfs()
    return answer;
}
