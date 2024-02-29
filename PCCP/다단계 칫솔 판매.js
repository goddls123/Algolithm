function solution(enroll, referral, seller, amount) {
    const map = new Map()
    const n = enroll.length
    const answer = new Array(n).fill(0)
    const graph= Array.from(new Array(n),()=>[])
    const people = new Array(n).fill(0)
    for(let i=0;i<n;i++){
        map.set(enroll[i],i)
    }
    for(let i=0;i<n;i++){
        if(referral[i]==="-") continue
        graph[i].push(map.get(referral[i]))
    }
    
    const dfs=(node,amount)=>{
        const profit = Math.floor(amount/10)
        answer[node] += amount-profit
        if(!profit)return
        
        for(let i =0;i<graph[node].length;i++){
            dfs(graph[node][i], profit)    
        }
    }
    
    for(let i=0;i<seller.length;i++){
        dfs(map.get(seller[i]),amount[i]*100)
    }
    return answer;
}
