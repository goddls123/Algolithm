let max =0
let visited=[]
function solution(k, dungeons) {
    var answer = -1;
    visited = new Array(dungeons.length).fill(false)
    DFS(k,0,dungeons)
    return max;
}

const DFS =(hp,count,dungeons)=>{
 
    
    for(let i=0 ;i<dungeons.length;i++){
        if(!visited[i] && hp >=dungeons[i][0]){
            visited[i]=true
            DFS(hp-dungeons[i][1], count+1,dungeons)
            visited[i]=false
        }
    }
    max = Math.max(max,count)
}
