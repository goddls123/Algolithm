function solution(n, edge) {
    var answer = 0;
    const graph = Array.from(new Array(n+1),()=>[])
    const visited= new Array(n+1).fill(0)
    
    edge.forEach(([from,to])=>{
        graph[from].push(to)
        graph[to].push(from)
    })
    
    const bfs = ()=>{
        const queue=[[1,0]]
        visited[1]=true
        let max=0
        let c =0
        while(queue.length){
            const [node,count]=queue.shift()
            
            if(count>max){
                max =count
                c=1
            }else if(count ===max){
                c++
            }
            
            for(let i=0;i<graph[node].length;i++){
                const next=graph[node][i]
                
                if(!visited[next]){
                    visited[next]=true
                    queue.push([next,count+1])
                }
            }
        }
        return c
    }
    answer = bfs()
    return answer;
}
