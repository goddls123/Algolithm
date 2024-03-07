function solution(n, path, order) {
    const graph = Array.from(new Array(n),()=>[])
    const visited =new Array(n).fill(false)
    const inDegree = new Array(n).fill(0)
    const outDegree = Array.from(new Array(n),()=>[])
    path.forEach(([from,to])=>{
        graph[from].push(to)
        graph[to].push(from)
    })
    order.forEach(([from,to])=>{
        inDegree[to]++
        outDegree[from].push(to)
    })
    const bfs = (start)=>{
        const queue =[start]
        const lock =new Map()
        while(queue.length){
            let node = queue.shift()
            for(let i=0;i<outDegree[node].length;i++){
                const next = outDegree[node][i]
                inDegree[next]--
                if(!inDegree[next] && lock.has(next)){
                    queue.push(next)
                    visited[next]=true
                    lock.delete(next)
                }
            }
            for(let i=0;i<graph[node].length;i++){
                const next = graph[node][i]
                if(!visited[next]){
                    if(!inDegree[next]){
                        queue.push(next)
                        visited[next]=true
                    }else{
                        lock.set(next,true)
                    }

                }
            }
        } 
    }
    
    if(!inDegree[0]){
        visited[0]=true
        bfs(0)
    }else{
        return false
    }
   
    
    return !visited.includes(false)
}
