function solution(tickets) {
    var answer = [];
    const map =new Map()
    const n = tickets.length
    const visited = new Array(n).fill(0)
    tickets.sort()
    
    const dfs = (l,city)=>{
        answer.push(city)
        if(l === n){
            return true
        }
        
        for(let i=0;i<n;i++){
            if(!visited[i] && tickets[i][0]===city){
                visited[i]=true
                if(dfs(l+1,tickets[i][1])){
                    return true
                }
                visited[i]=false
            }
        }
        answer.pop()
        return false
    }
    dfs(0,'ICN')
    return answer
}
