function solution(edges) {
    var answer = new Array(4).fill(0);
    const graph = new Map()

    
    edges.forEach(([from,to])=>{
        if(!graph.has(from)){
            graph.set(from,[0,0])
        }
        if(!graph.has(to)){
            graph.set(to,[0,0])
        }
        graph.get(from)[0]++
        graph.get(to)[1]++
    })
    
    let total =0
    for(let key of graph.keys()){
        if(graph.get(key)[0] >=2 && graph.get(key)[1]===0){
            answer[0] =key
            total = graph.get(key)[0]
            break
        }
    }
    
    edges.forEach(([from,to])=>{
        if(from===answer[0]){
            graph.get(to)[1]--
        }
    })
    
    
    for(let key of graph.keys()){
        if(graph.get(key)[0]===0 && graph.get(key)[1]>=0){
            answer[2]++
        }
        else if(graph.get(key)[0]==2 && graph.get(key)[1]==2){
            answer[3]++
        }
    }
    answer[1]=total - answer[2]-answer[3]

 
    return answer;
}
