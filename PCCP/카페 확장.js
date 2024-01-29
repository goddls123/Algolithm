function solution(menu, order, k) {
    var answer = 0;
    let queue = [menu[order[0]]]
    
    for(let i=1;i<order.length;i++){
       
        let time =k
        let j =0
        while(time){
            if(queue[0]>=time){
                queue[0]-=time
                if(queue[0]===0)queue.shift()
                break
            }else{
                time-=queue[0]
                queue.shift()
            }
        }
        queue.push(menu[order[i]])
        answer =Math.max(answer,queue.length)
    }
    
    return answer;
}
