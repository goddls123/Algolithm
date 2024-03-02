function solution(key, lock) {
    var answer = true;
    const n = lock.length
    const m = key.length
    const board= Array.from(new Array(n+m*2),()=>new Array(n+m*2).fill(2))
    let left =0
    
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            board[m+i][m+j] = lock[i][j]
            if(lock[i][j]==0){
                left++
            }
        }
    }
    
    const rotate = (array)=>{
        const tmp = Array.from(new Array(m),()=>new Array(m).fill(0))
        for(let i=0;i<m;i++){
            for(let j=0;j<m;j++){
                tmp[j][m-i-1] = array[i][j]
            }
        }
        return tmp
    }
    const check=(array,[x,y])=>{
        let count = left
        for(let i =0 ;i<m;i++){
            for(let j=0;j<m;j++){
                if(board[x-m+i+1][y-m+j+1]===2)continue
                 if (array[i][j]===1 && board[x-m+i+1][y-m+j+1]===1){
                    return false
                }else if(array[i][j]=== 1 && board[x-m+i+1][y-m+j+1]===0){
                    count--
                }
            }
        }
        return count ==0 ? true : false
    }
    
    for(let i=0;i<4;i++){
        key =rotate(key)
        for(let j =m;j<n+m*2;j++){
            for(let k=m;k<n+m*2;k++){
                if(check(key, [j,k])){
                    return true
                }
            }
        }
    }
    return false;
}
