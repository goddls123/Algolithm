function solution(maze) {
    var answer = 0;
    const n = maze.length
    const m = maze[0].length
    const rVisited=Array.from(new Array(n),()=>new Array(m).fill(0))
    const bVisited=Array.from(new Array(n),()=>new Array(m).fill(0))
    let red={}
    let blue={}
    let rEnd=[]
    let bEnd=[]
    const dx = [0,-1,0,1]
    const dy = [-1,0,1,0]
    let min = Infinity
    
    const isInside = (ax,ay)=>{
        return ax>=0 && ay>=0 &&ax<n &&ay<m
    }
    const isCollaspe = (rx,ry,bx,by)=>{
        return rx===bx &&  ry === by
    }
    
    const dfs= (rx,ry,bx,by,count)=>{
       if(count>=min) return
       if(rx===rEnd[0] && ry===rEnd[1] && bx===bEnd[0]&& by===bEnd[1]){
           min = count
           return
       }
    
        if(rx===rEnd[0] && ry===rEnd[1]){
            for(let i=0;i<4;i++){
                const ax =dx[i]+bx
                const ay = dy[i] +by
                if(isCollaspe(ax,ay,rx,ry)) continue
                if(ax>=0 && ax<n && ay>=0 && ay<m){
                    if(!bVisited[ax][ay] && maze[ax][ay]!==5){
                        bVisited[ax][ay]=1
                        dfs(rx,ry,ax,ay,count+1)
                        bVisited[ax][ay]=0
                    }
                }
            }
        }
        else if(bx===bEnd[0] && by===bEnd[1]){
            for(let i=0;i<4;i++){
                const ax =dx[i]+rx
                const ay = dy[i] +ry
                if(isCollaspe(ax,ay,bx,by)) continue
                if(ax>=0 && ax<n && ay>=0 && ay<m){
                    if(!rVisited[ax][ay] && maze[ax][ay]!==5 ){
                        rVisited[ax][ay]=1
                        dfs(ax,ay,bx,by,count+1)
                        rVisited[ax][ay]=0
                    }
                }
            }
        }else{
            for(let i=0;i<4;i++){
                const arx =dx[i]+rx
                const ary = dy[i]+ry
                for(let j=0;j<4;j++){
                    const abx=dx[j]+bx
                    const aby = dy[j]+by
                    if(isCollaspe(arx,ary,abx,aby)) continue
                    if(arx===bx&&ary===by && abx===rx && aby===ry)continue
                    if(isInside(arx,ary) && isInside(abx,aby)){
                        if(!rVisited[arx][ary] && !bVisited[abx][aby] 
                           && maze[arx][ary]!==5 &&maze[abx][aby]!==5){
                            rVisited[arx][ary]=1
                            bVisited[abx][aby]=1
                            dfs(arx,ary,abx,aby,count+1)
                            rVisited[arx][ary]=0
                            bVisited[abx][aby]=0
                        }
                    }
                }
            }
        }
    }
    
    
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(maze[i][j]===1){
                red.x=i
                red.y=j
                maze[i][j]=0
            }
            else if(maze[i][j] ===2){
                blue.x=i
                blue.y=j
                maze[i][j]=0
            }
            else if(maze[i][j] ===3){
                rEnd=[i,j]
            }
            else if(maze[i][j] ===4){
                bEnd=[i,j]
            }
        }
    }
    rVisited[red.x][red.y]=1
    bVisited[blue.x][blue.y]=1
    dfs(red.x,red.y,blue.x,blue.y,0)
    return min===Infinity ? 0  :min;
}

