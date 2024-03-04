function solution(n, build_frame) {
    var answer = [];
    const board= Array.from(new Array(n+1),()=>new Array(n+1).fill(0))
    const maze= Array.from(new Array(n+1),()=>new Array(n+1).fill(0))
    
    const checkC=(x,y)=>{
        if(y===0 || board[x][y-1])return true
        if(maze[x][y] || (x>0 &&maze[x-1][y])) return true
        return false
    }
 
        
    const checkG=(x,y)=>{
        if(board[x][y-1] || board[x+1][y-1]) return true
        if(x>0 && maze[x-1][y] && maze[x+1][y])return true
        return false
    }
    
   const enableDelete=()=>{
        for(let i=0;i<=n;i++){
            for(let j=0;j<=n;j++){
                if(!board[i][j]) continue;
                if(!checkC(i,j)) return false;
            }
        }
        for(let i=0;i<=n;i++){
            for(let j=0;j<n;j++){
                if(!maze[i][j]) continue;
                if(!checkG(i,j)) return false;
            }
        }
        return true;
    }
    
    build_frame.forEach(([x,y,a,b])=>{
        if(b){
            if(a && checkG(x,y)){
                maze[x][y]=1
            }else if(a===0 && checkC(x,y)){
                board[x][y]=1
            }
        }else{
            if(a){
                maze[x][y]=0
                if(!enableDelete()){
                    maze[x][y]=1
                }
            }else {
                board[x][y]=0
                if(!enableDelete()){
                    board[x][y]=1
                }
            }
        }
    })
    for(let i=0;i<n+1;i++){
        for(let j=0;j<n+1;j++){
            if(board[i][j]){
                answer.push([i,j,0])
            }
            if(maze[i][j]){
                answer.push([i,j,1])
            }
        }
    }
    return answer;
}
