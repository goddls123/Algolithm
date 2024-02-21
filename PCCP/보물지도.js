function solution(n, m, hole) {
    const board = Array.from(new Array(m), ()=> new Array(n).fill(0))

    hole.forEach(([y,x])=>{
        board[x-1][y-1] =2
    })

    const bfs =()=>{
        const dx =[0,-1,0,1]
        const dy = [-1,0,1,0]
        const queue = [[0,0,0,0]]
        const visited = Array.from(new Array(m), ()=> Array.from( new Array(n),()=>new Array(2).fill(0)))
        visited[0][0][0]=true

        while(queue.length){
            const [x,y,flag,count] =queue.shift()
            if(x===m-1 && y===n-1){
                return count
            }
            for(let i=0;i<4;i++){
                const ax = dx[i]+x
                const ay = dy[i]+y

                if(ax>=0&&ay>=0 &&ax<m && ay<n){
                    if(!visited[ax][ay][flag] && !board[ax][ay]){
                        visited[ax][ay][flag]=true
                        queue.push([ax,ay,flag,count+1])
                    }
                }
            }

            if(!flag){
                for(let i=0;i<4;i++){
                    const ax = dx[i]*2+x
                    const ay = dy[i]*2+y

                    if(ax>=0&&ay>=0 &&ax<m && ay<n){
                        if(!visited[ax][ay][!flag] && !board[ax][ay]){
                            visited[ax][ay][!flag]=true
                            queue.push([ax,ay,!flag,count+1])
                        }
                    }
                }
            }
        }

        return -1
    }

    return bfs();
}
