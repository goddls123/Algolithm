function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    const queue =new Array(bridge_length).fill(0)
    let i =0
    let num =0
    while(i<truck_weights.length){
        num-=queue.shift()
        if(num+truck_weights[i]<=weight){
            queue.push(truck_weights[i])
            num+=truck_weights[i]
            i++
        }else{
            queue.push(0)
        }
        answer++
    }
    return answer + queue.length;
}
