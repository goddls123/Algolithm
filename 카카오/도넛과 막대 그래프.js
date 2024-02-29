function solution(edges) {
    let answer = new Array(4).fill(0)
    const map = new Map()
    
    edges.forEach(([from,to])=>{
        if(map.has(from)){
            map.get(from)[0]++
        }
        else{
            map.set(from,[1,0])
        }
        if(map.has(to)){
            map.get(to)[1]++
        }
        else{
            map.set(to,[0,1])
        }
    })
    for(let key of map.keys()){
        if(map.get(key)[0]===0){
            answer[2]++
        }else if(map.get(key)[0]>=2 && map.get(key)[1]===0){
            answer[0] = key
        }else if(map.get(key)[0]===2 && map.get(key)[1]>0){
            answer[3]++
        }
    }
    answer[1] = map.get(answer[0])[0] - answer[2] - answer[3]
    return answer;
}


//진입 찻수 제일 높은거
//진입 찻수가 그래프 총 갯수
//
