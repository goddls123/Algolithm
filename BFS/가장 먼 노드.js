function solution(n, edge) {
    let max = 0
    let count =0
    const graph = Array.from(new Array(n+1),()=> [])
    const visited = new Array(n+1).fill(false)
    
    edge.forEach(([start,end])=>{
        graph[start].push(end)
        graph[end].push(start)
    })
    
    const bfs = (start)=>{
        const queue=[[start,0]]
        visited[start]=true
        
        while(queue.length){
            const [node,cnt]=queue.shift()
            
            if(cnt>max){
                count=1
                max = cnt
            }else if(cnt ===max){
                count++
            }
            
            for(let i=0;i<graph[node].length;i++){
                const next = graph[node][i]
                if(!visited[next]){
                    visited[next]=true
                    queue.push([next,cnt+1])
                }
            }
            
        }
    }
    bfs(1)
    return count;
}
