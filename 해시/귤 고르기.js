function solution(k, tangerine) {
    var answer = 0;
    
    const max = Math.max(...tangerine)
    let map = new Map()
    
    tangerine.forEach((t)=>{
       if(map.has(t)){
          map.set(t, map.get(t)+1)
       }else{
        map.set(t, 1)    
        }
    })
    let array = Array.from(map.values()).sort((a,b)=>a-b)
    let n = tangerine.length -k
    let j=0
    while(n){
        if(array[j]>n){
            break
        }
        
        n -= array[j]
        array[j]=0
        j++
    }
    return array.filter(a=>a!==0).length
}
