function solution(ability) {
    var answer = 0;
    const n =ability.length
    const m = ability[0].length
    const used = new Array(m).fill(0)
    const min = Math.min(...[].concat(...ability))
    let max = min*m
    const dfs = (L,index,score)=>{
        if(L===m){
            max = Math.max(max,score)
            return 
        }
        
        for(let i =index;i<n;i++){
            for(let j=0;j<m;j++){
                if(!used[j]){
                    used[j] = true
                    dfs(L+1, i+1,ability[i][j]+score)
                    used[j] =false
                }
            }    
        }
    }
    dfs(0,0,0)    
    return max;
}
