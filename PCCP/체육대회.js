function solution(ability) {
    var answer = 0;
    let max =0
    const m = ability[0].length
    const n = ability.length
    const visited = new Array(m).fill(0)
    
    const dfs=(L,index,sum)=>{
        if(L===m) {
            max =Math.max(max,sum)
            return
        }
        for(let i=index;i<n;i++){
            for(let j=0;j<m;j++){
                if(!visited[j]){
                    visited[j]=true
                    dfs(L+1,i+1, sum+ability[i][j])
                    visited[j]=false
                }
            }
        }
    }
    dfs(0,0,0)
    
    return max;
}
