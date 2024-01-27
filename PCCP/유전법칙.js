function solution(queries) {
    let answer = [];
    const gen = ['RR','Rr','Rr','rr']
    const recursion = (L,m)=>{
        if(L===2){
            return gen[m]
        }
        const parent = recursion(L-1, Math.floor(m/4))
        
        if(parent ==='Rr'){
            return gen[m%4]
        }else {
            return parent
        }
    }
    answer = queries.map(([n,p])=>{
        if(n===1){
            return 'Rr'
        }else{
           return recursion(n,p-1)
        }
    })
    return answer;
}
