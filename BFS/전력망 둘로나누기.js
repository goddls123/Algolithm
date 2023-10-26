function solution(n, wires) {
    var answer = [];


    for(let i = 0 ;i <wires.length;i++){
        const visited = new Array(n+1).fill(false)
        const graph = Array.from(new Array(n+1), ()=>[])

        for(let j=0;j<wires.length;j++){
            const [from,to] = wires[j]

            if(j===i){

                continue
            }

            graph[from].push(to)
            graph[to].push(from)
        }

        BFS(1, visited,graph)
        const net = visited.filter(v=>v).length
        answer.push(Math.abs(n-2*net))
    }
    return Math.min(...answer);
}


const BFS=(v,visited,graph)=>{
    const queue=[]
    queue.push(v)
    visited[v] = true
    while(queue.length){
        let node = queue.shift()

        for(n of graph[node]){
            if (!visited[n]){
                visited[n] =true
                queue.push(n)
            }
        }
    }
}
