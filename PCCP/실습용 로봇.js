function solution(command) {
    var answer = [0,0];
    let dir =0
    const dx = [0,1,0,-1]
    const dy = [1,0,-1,0]

    for(let i=0;i<command.length;i++){
        if(command[i]==='R'){
            dir = dir ===3 ? 0 : dir+1
        }else if(command[i]==='L'){
            dir = dir ===0 ? 3: dir-1
        }else if(command[i]==='G'){
            answer[0] +=dx[dir]
            answer[1] += dy[dir]
        }else{
            answer[0] -=dx[dir]
            answer[1] -=dy[dir]
        }
    }
  
    return answer;
}
