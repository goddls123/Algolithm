function solution(key, lock) {
    var answer = false;
    const m = key.length
    const n = lock.length
    const board= Array.from(new Array(n+2*m) , ()=>new Array(n+2*m).fill(2))
    let count =0
    
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            board[i+m][j+m]=lock[i][j]
            if(lock[i][j]===0){
                count++
            }
        }
    }
    
    
    const rotate = (array)=>{
        const tmp = Array.from(new Array(m),()=>new Array(m).fill(0))
        for(let i=0;i<m;i++){
            for(let j=0;j<m;j++){
                tmp[i][j] = array[j][m-i-1]
            }
        }
        return tmp
   }
    const check=(x,y)=>{
        let cnt = count 
        
        for(let i=0;i<m;i++){
            for(let j=0;j<m;j++){
                if(key[i][j] && board[x-m+1+i][y-m+1+j]===1) return false
                
                if(key[i][j] && board[x-m+1+i][y-m+1+j]===0){
                    cnt--
                }
            }
        }
        return cnt == 0? true:false
    }

    for(let i=0;i<4;i++){
        key = rotate(key)
        for(let i=m;i<n+2*m;i++){
            for(let j=m;j<n+2*m;j++){
                if(check(i,j)){
                    return true
                }
            }
        }
    }
    
    return answer;
}
