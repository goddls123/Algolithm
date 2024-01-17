function solution(maps) {
    var answer = [];
    maps = maps.map(m=>m.split(''))
    const n = maps.length
    const m = maps[0].length
    const visited = Array.from(new Array(n),()=>new Array(m).fill(0))
    const dx =[0,-1,0,1]
    const dy =[-1,0,1,0]
    
    const bfs = (start)=>{
        const queue = [start]
        visited[start[0]][start[1]] =1
        let count = Number(maps[start[0]][start[1]])
        
        while(queue.length){
            const [x,y]=queue.shift()
            
            for(let i=0;i<4;i++){
                const ax =dx[i]+x
                const ay =dy[i]+y
                if(ax>=0&&ay>=0&&ax<n&&ay<m){
                    if(!visited[ax][ay] && maps[ax][ay] !=='X'){
                        visited[ax][ay]=1
                        count+= Number(maps[ax][ay])
                        queue.push([ax,ay])
                    }
                }
            }
        }
        return count
    }
    
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(!visited[i][j] && maps[i][j]!=='X'){
                answer.push(bfs([i,j]))
            }
        }
    }
    return answer.length ? answer.sort((a,b)=>a-b):[-1];
}
