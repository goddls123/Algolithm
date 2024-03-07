function solution(gems) {
    var answer = [];
    const n = gems.length
    const set = new Set([...gems])
    const size = set.size
    let right =0
    let left=0
    const map = new Map()
    let min =Infinity
    for(left; left<n;left++){
        while(right<n && map.size<size){
            if(map.has(gems[right])){
                map.set(gems[right], map.get(gems[right])+1)               
            }else{
                 map.set(gems[right], 1)
            }
            right++
        }
        if(map.size==size){
            
            if(min>right-left){
                min=right-left
                answer=[left+1,right]
            }
        }
        if(map.get(gems[left])==1){
            map.delete(gems[left])
        }else{
            map.set(gems[left], map.get(gems[left])-1)
        }
    }
    return answer;
}
