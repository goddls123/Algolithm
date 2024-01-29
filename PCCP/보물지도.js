function solution(n, m, hole) {
    var answer = -1
    let board = Array.from(new Array(n),()=>new Array(m).fill(1))
    const visited = Array.from(new Array(n),()=>Array.from(new Array(m),()=>new Array(2).fill(0))) 
    const dx =[0,-1,0,1]
    const dy =[-1,0,1,0]
    hole.forEach(([x,y])=>{
        board[x-1][y-1]=0
    })
    
    const bfs =()=>{
        const queue =[[0,0,0,0]]
        visited[0][0][0]=true
        
        while(queue.length){
            const [x,y,flag,count]= queue.shift()
            
            if(x===n-1 && y===m-1){
                return count
            }
            
            for(let i=0;i<4;i++){
                const ax = dx[i]+x
                const ay = dy[i]+y
                if(ax>=0 && ay>=0 && ax<n && ay<m){
                    if(!visited[ax][ay][flag] && board[ax][ay]){
                        visited[ax][ay][flag]=true
                        queue.push([ax,ay,flag,count+1])
                    }
                }
            }
            if(flag) continue
            
            for(let i=0;i<4;i++){
                const ax = dx[i]*2+x
                const ay = dy[i]*2+y
                if(ax>=0 && ay>=0 && ax<n && ay<m){
                    if(!visited[ax][ay][!flag] && board[ax][ay]){
                        visited[ax][ay][!flag]=true
                        queue.push([ax,ay,!flag,count+1])
                    }
                }
            }
            
        }
        
        return -1
        
    }
    answer = bfs()
    
    return answer;
}
