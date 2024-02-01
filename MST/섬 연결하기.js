function solution(n, costs) {
    var answer = 0;
    const dp = new Array(n).fill(0).map((a,i)=>i)
    
    
    const getParent = (a)=>{
        if(a===dp[a]){
            return a
        }
        dp[a] = getParent(dp[a])
        return dp[a]
    }
    const union =(a,b)=>{
        if(a < b){
            dp[b] = a
        }else{
            dp[a] = b
        }
        
    }
    costs.sort((a,b)=>a[2]-b[2])
    
    for(let i=0;i<costs.length;i++){
        const parentA = getParent(costs[i][0])
        const parentB = getParent(costs[i][1])
        
        if(parentA === parentB) continue
        
        union(parentA,parentB)
        answer+=costs[i][2]
        n--
        
        if(n===1)break
    }
    return answer;
}
