function solution(command) {
    var answer = [];
    const dx =[0,1,0,-1]
    const dy = [1,0,-1,0]
    let dir =0
    let start=[0,0]
    
    for(let i =0 ;i<command.length;i++){
        if(command[i]==='G'){
            start[0] += dx[dir]
            start[1] += dy[dir]
        }else if(command[i]==='B'){
            start[0] -= dx[dir]
            start[1] -= dy[dir]
        }else if(command[i]==='R'){
            dir++
        }else{
            dir--
        }
        
        dir = (dir+4)%4
    }
    return start;
}
