function solution(n, weak, dist) {
    var answer = 0;
    const m = weak.length
    const nWeak = [...weak,...weak.map(a=>a+n)]
    dist.sort((a,b) => b-a)
    let min = 100
    
    const recursion=(L,array)=>{

        if(L>min) return
        if(array.length ===0){
            min = L
            return 
        }
        if(L===dist.length) return
        
        for(let i=0;i<array.length;i++){
            const tmp = [...array]
          
            for(let j=i+1;j<tmp.length;j++){
            
                if(dist[L]+tmp[i] >=tmp[j]){
                    tmp[j]=0
                }else{
                    break
                }
            }
            tmp[i] =0
            recursion(L+1, tmp.filter(t=>t!==0))
        }
    }
    for(let i=0;i<m;i++){
        const tmp = nWeak.slice(i,i+m)
        for(let j=1;j<tmp.length;j++){
                if(dist[0]+tmp[0] >=tmp[j]){
                    tmp[j]=0
                }else{
                    break
                }
            }
        tmp[0]=0
        recursion(1,tmp.filter(t=>t!==0))
    }
    return min === 100 ? -1 :min ;
}
