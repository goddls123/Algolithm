function solution(k, tangerine) {
    var answer = 0;
    const map = new Map()
    
    for(let i=0; i<tangerine.length;i++){
        if(map.has(tangerine[i])){
            map.set(tangerine[i], map.get(tangerine[i])+1)
        }else {
            map.set(tangerine[i],1)
        }
    }
    const array = Array.from(Object(map).values()).sort((a,b)=>b-a)
    for(let i=0;i<array.length;i++){
        if(k<=array[i]){
            return i +1
        }
        k-=array[i]
    }
    return array.length;
}
