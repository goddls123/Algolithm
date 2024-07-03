function solution(n, computers) {
    var answer = 0;
    const visited = new Array(n).fill(false)
    
    const bfs = (start)=>{
        const queue=[start]
        visited[start]=true
    
        while(queue.length){
            const node = queue.shift()
            
            for(let i =0;i<n;i++){
                if(i===node)continue
                if(!visited[i] && computers[node][i]){
                    visited[i]=true
                    queue.push(i)
                }
            }
        }
    }
    
   for(let i=0;i<n;i++){
       if(!visited[i]){
           bfs(i)
           answer++
       }
   }
    return answer;
}
