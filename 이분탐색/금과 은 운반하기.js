function solution(a, b, g, s, w, t) {
    var answer = -1;
    
    let left = 0
    let right = 5*1e14
    
    const n = g.length
    
    const isPossible=(time)=>{
        let gold =0
        let silver=0
        let total=0
        for(let i=0;i<n;i++){
            let set = 2*t[i]
            let count = Math.floor(time/set)
            
            if(time%set >= t[i]) count++
            const take = count*w[i]
            gold += Math.min(g[i], take)
            silver+= Math.min(s[i],take)
            total += Math.min(s[i]+g[i], take)
        }
        return gold>=a && silver>=b && total >=a+b
    }
    while(left<=right){
        let mid =Math.floor((left+right)/2)
        
        if(isPossible(mid)){
            right = mid-1
            answer =mid
        }else{
            left = mid+1
        }
    }
    
    return answer;
}
