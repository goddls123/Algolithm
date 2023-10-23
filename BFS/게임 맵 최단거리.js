function solution(maps) {
    var answer = 0;
    const n = maps.length
    const m = maps[0].length
    BFS(n,m,maps)
    answer = maps[n-1][m-1] === 1 ? -1 :maps[n-1][m-1]
    
    return answer;
}

const BFS=(n,m,maps)=>{
    const queue =[]
    const dx = [0,-1,0,1]
    const dy = [-1,0,1,0]

    queue.push([0,0,1])
    
    while(queue.length){
        const [x,y,count]= queue.shift()
        
        for(let i=0;i<4;i++){
            const ax = x+dx[i]
            const ay = y +dy[i]
            
            if(ax>=0 &&ay>=0&& ax<n && ay<m){
                if(maps[ax][ay]===1){
                    maps[ax][ay]=count +1
                    queue.push([ax,ay,count+1])
                }
            }
        }
    }
}

