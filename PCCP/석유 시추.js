function solution(land) {
    var answer = 0;
    let max =0
    const list = [0,0]
    let index =2
    const n = land.length
    const m = land[0].length
    
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(land[i][j]===1){
                let count = dfs([i,j],index,n,m,land)
                list[index++]=count
            }
        }
    }

    for(let j=0;j<m;j++){
        const set = new Set()
        for(let i=0;i<n;i++){
            set.add(land[i][j])
        }
        let sum = Array.from(set).reduce((a,c)=> a+ list[c],0 )
        max = Math.max(max,sum)
    }
    return max;
}

function dfs (start,flag,n,m,board){
    const queue = [start]
    const dx =[0,-1,0,1]
    const dy =[-1,0,1,0]
    
    board[start[0]][start[1]]=flag
    let count =1
    while(queue.length){
        const [x,y]=queue.shift()
        
        for(let i=0;i<4;i++){
            const ax = x+dx[i]
            const ay = y+dy[i]
            
            if(ax>=0 && ay>=0 &&ax<n &&ay<m){
                if(board[ax][ay]===1){
                    board[ax][ay]=flag
                    count++
                    queue.push([ax,ay])
                }
            }
        }
    }
    return count
}
