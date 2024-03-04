function solution(n, costs) {
    const dp = new Array(n).fill(0).map((a,i)=>i)
    let total =0
    
    const getParent=(node)=>{
        if(dp[node]===node){
            return node
        }
        dp[node] = getParent(dp[node])
        return dp[node]
    }
    
    const union=(a,b)=>{
        if(a>b){
            dp[a]=b
        }else{
            dp[b]=a
        }
    }
    
    costs.sort((a,b)=>a[2]-b[2])
        .forEach(([from,to,cost])=>{
        const parentA = getParent(from)
        const parentB = getParent(to)
        if(parentA !== parentB){
            union(parentA,parentB)   
            total+=cost
        }
    })
    return total;
}
