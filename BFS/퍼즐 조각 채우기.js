function solution(game_board, table) {
    var answer = 0;
    const n = table.length
    let visited = Array.from(new Array(n),()=>new Array(n).fill(0))
    const blanks=[]
    const puzzles=[]
    
    const bfs =(start,board,flag)=>{
        const tmp =[start]
        const queue=[start]
        const dx=[0,-1,0,1]
        const dy =[-1,0,1,0]
        visited[start[0]][start[1]]=1
        
        while(queue.length){
            const [x,y] =queue.shift()
            for(let i=0;i<4;i++){
                const ax = dx[i]+x
                const ay =dy[i]+y
                if(ax>=0&&ay>=0 &&ax<n&&ay<n){
                    if(!visited[ax][ay]&&board[ax][ay]===flag){
                        visited[ax][ay]=true
                        tmp.push([ax,ay])
                        queue.push([ax,ay])
                    }
                }
            }
        }
        return moveToZero(tmp)
    }
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(!visited[i][j] && game_board[i][j]===0){
                blanks.push(bfs([i,j],game_board,0))
            }
        }
    }
    
    visited = Array.from(new Array(n),()=>new Array(n).fill(0))
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(!visited[i][j] && table[i][j]===1){
                puzzles.push(bfs([i,j],table,1))
            }
        }
    }
    const used = new Array(puzzles).fill(0)
    console.log(blanks,puzzles)
    blanks.forEach(blank=>{
        for(let i=0;i<puzzles.length;i++){
            if(used[i] || blank.length!==puzzles[i].length) continue
            let tmp = puzzles[i]
            let flag = false
            for(let j=0;j<4;j++){
                tmp = rotate(tmp)
                if(JSON.stringify(tmp) == JSON.stringify(blank)){
                    used[i]=true
                    answer+= tmp.length
                    flag =true
                    break
                }
            }
            if(flag) break
        }
    })
    
    
    return answer;
}
function moveToZero(array){
    const minX = Math.min(...array.map(a=>a[0]))
    const minY = Math.min(...array.map(a=>a[1]))
    return array.map(a=>[a[0]-minX,a[1]-minY]).sort()
}

function rotate(array){
    const max =Math.max(...[].concat(...array))
    return moveToZero(array.map(a=>[a[1],max-a[0]]))
}
