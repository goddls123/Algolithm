function solution(n, computers) {
    var answer = 0;
    const visited = new Array(n).fill(false)
    
    for(let i=0;i<n;i++){
        if(!visited[i]){
            BFS(i,visited,computers)
            answer++
        }
    }
    return answer;
}
const BFS = (start,visited,computers)=>{
    const queue=[start]
    visited[start] =true
    
    while(queue.length){
        const v =queue.shift()
        
        for(let i = 0; i<computers.length;i++){
            if(!visited[i] && computers[v][i]){
                visited[i]=true
                queue.push(i)
            }
        }
    }
}
