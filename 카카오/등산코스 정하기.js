function solution(n, paths, gates, summits) {
    var answer = [];
    paths.sort((a,b)=>a[2]-b[2])
    const gMap = new Map()
    const sMap = new Map()
    const dp = new Array(n+1).fill(0).map((a,i)=>i)
    gates.forEach((g)=>{
        gMap.set(g,true)
    })
    summits.forEach(s=>{
        sMap.set(s,true)
    })
    const union=(a,b)=>{
        if(
            (gMap.has(a) && gMap.has(b)) || 
            (sMap.has(a) && sMap.has(b))
        ) return
        
       if( (sMap.has(a)^sMap.has(b)) || (gMap.has(b) ^ gMap.has(a))){
           if(sMap.has(a)||gMap.has(a)){
               dp[b]=a
           }else{
               dp[a]=b
           }
           return
       }
        if(a>b){
            dp[a]=b
        }else{
            dp[b] =a
        }
    }
    const getParent =(a)=>{
        if(dp[a]===a){
            return dp[a]
        }
        dp[a]= getParent(dp[a])
        return dp[a]
    }
    
    const isPossible=(a,b)=>{
        return (gMap.has(a) && sMap.has(b)) || (sMap.has(a) && gMap.has(b))
    }
    let min = Infinity
    for(let i=0;i<paths.length;i++){
        const [a,b,cost] = paths[i]
        const parentA =getParent(a)
        const parentB= getParent(b)
        
        if(min<cost){
            break
        }
        
        if(parentA===parentB) continue
        if(isPossible(parentA,parentB)){
            min = cost
            if(sMap.has(parentA)){
                answer.push([parentA,cost])
            }else{
                answer.push([parentB,cost])
            }
        }else{
            union(parentA,parentB)
        }
    }
    return answer.sort((a,b)=>a[0]-b[0])[0];
}
