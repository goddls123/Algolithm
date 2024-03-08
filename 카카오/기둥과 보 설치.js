function solution(n, build_frame) {
    var answer = [];
    const gBoard = Array.from(new Array(n+1),()=>new Array(n+1).fill(0))
    const bBoard = Array.from(new Array(n+1),()=>new Array(n+1).fill(0))
    
    const checkG=(x,y)=>{
        if(y===0 || gBoard[x][y-1]) return true
        if(bBoard[x][y])return true
        if(x>0 && bBoard[x-1][y])return true
        
        return false
    }
    const checkB = (x,y)=>{
        if(y===0 || x===n) return false
        if(gBoard[x][y-1] || gBoard[x+1][y-1])return true
        if(x>0 && bBoard[x-1][y] && bBoard[x+1][y])return true
        
        return false
    }
    const checkAll=()=>{
        for(let i=0;i<=n;i++){
            for(let j=0;j<=n;j++){
                if(!gBoard[i][j] && !bBoard[i][j])continue
                
                if(gBoard[i][j]){
                    if(!checkG(i,j)){
                        return false
                    }
                }
                if(bBoard[i][j]){
                    if(!checkB(i,j)){
                        return false
                    }
                }
            }
        }
        return true
    }    
    build_frame.forEach(([x,y,a,flag])=>{
        if(flag){
            if(a){
                if(checkB(x,y))
                    bBoard[x][y]=1
            }else{
                if(checkG(x,y)){
                    gBoard[x][y]=1
                }
            }
        }else{
            if(a){
                bBoard[x][y]=0
                if(!checkAll()){
                    bBoard[x][y]=1
                }
            }else{
                gBoard[x][y]=0
                if(!checkAll()){
                    gBoard[x][y]=1
                }
            }
        }
    })
    for(let i=0;i<=n;i++){
        for(let j=0;j<=n;j++){
            if(gBoard[i][j]){
                answer.push([i,j,0])
            }
            if(bBoard[i][j]){
                answer.push([i,j,1])
            }
        }
    }
    return answer;
}
