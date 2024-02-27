function solution(k, tangerine) {
    var answer = 0;
    const map = new Map()
    
    tangerine.forEach((t)=>{
        if(map.has(t)){
            map.set(t, map.get(t)+1)
        }else{
            map.set(t,1)
        }
    })
    const array = Array.from(map).sort((a,b)=>b[1]-a[1])
    
    for(let i=0;i<array.length;i++){
        k-=array[i][1]
        if(k<=0){
            answer =i+1
            break
        }
    }
    return answer;
}
