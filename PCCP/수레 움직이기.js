function solution(maze) {
    let rStart =[]
    let bStart =[]
    let rEnd =[]
    let bEnd =[]
    const n = maze.length
    const m = maze[0].length
    const rVisited= Array.from(new Array(n),()=>new Array(m).fill(0))
    const bVisited= Array.from(new Array(n),()=>new Array(m).fill(0))

    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(maze[i][j]==1){
                rStart=[i,j]
            }else if(maze[i][j]==2){
                bStart=[i,j]
            }else if(maze[i][j]==3){
                rEnd=[i,j]
            }else if(maze[i][j]==4){
                bEnd=[i,j]
            }
        }
    }
    let min = Infinity
    const dx =[0,-1,0,1]
    const dy =[-1,0,1,0]

    const isInside=(x,y)=>{
        return x>=0 && y>=0 &&x<n && y<m
    }
    const isCollaspe=(x1,y1,x2,y2)=>{
        return x1===x2 && y1===y2
    }

    const dfs =(red,blue,count)=>{
        if(count>min)return
        if(red.join('')==rEnd.join('') && blue.join('') == bEnd.join('')){
            min=count
            return 
        }

        if(red.join('')==rEnd.join('')){
            for(let i=0;i<4;i++){
                const ax = dx[i]+blue[0]
                const ay = dy[i]+blue[1]
                if(isCollaspe(ax,ay,...red))continue
                if(isInside(ax,ay) &&!bVisited[ax][ay] && maze[ax][ay]!==5){
                    bVisited[ax][ay]=true
                    dfs(red,[ax,ay],count+1)
                    bVisited[ax][ay]=false
                }
            }
        }else if(blue.join('')==bEnd.join('')){
            for(let i=0;i<4;i++){
                const ax = dx[i]+red[0]
                const ay = dy[i]+red[1]
                if(isCollaspe(ax,ay,...blue))continue
                if(isInside(ax,ay) && !rVisited[ax][ay] &&maze[ax][ay]!==5){
                    rVisited[ax][ay]=true
                    dfs([ax,ay],blue,count+1)
                    rVisited[ax][ay]=false
                }
            }
        }else{
            for(let i=0;i<4;i++){
                const rax = dx[i]+red[0]
                const ray = dy[i]+red[1]

                for(let j=0;j<4;j++){
                    const bax = dx[j]+blue[0]
                    const bay = dy[j]+blue[1]

                    if(isCollaspe(rax,ray,bax,bay))continue
                    if(rax==blue[0] && ray==blue[1] && bax ==red[0] && bay == red[1])continue

                    if(isInside(rax,ray) && isInside(bax,bay) && 
                        !rVisited[rax][ray] && !bVisited[bax][bay] &&
                        maze[rax][ray]!==5 && maze[bax][bay]!==5){

                        rVisited[rax][ray]=true
                        bVisited[bax][bay]=true
                        dfs([rax,ray],[bax,bay],count+1)
                        rVisited[rax][ray]=false
                        bVisited[bax][bay]=false
                    }
                }
            }
        }
    }
    rVisited[rStart[0]][rStart[1]]=true
    bVisited[bStart[0]][bStart[1]]=true

    dfs(rStart,bStart,0)

    return min===Infinity ? 0 :min;
}
