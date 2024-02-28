function solution(queries) {
    var answer = [];
    const beans =['RR','Rr','Rr','rr']
    
    const recursion = (n,p)=>{
        if(n===1){
            return 'Rr'
        }
        const parent = recursion(n-1, Math.floor(p/4))
        
        if(parent ==='Rr'){
            return beans[p%4]
        }else{
            return parent
        }
    }
    return queries.map(([n,p])=>recursion(n,p-1))
}
