function solution(progresses, speeds) {
    var answer = [];
    progresses = progresses.map((p,i )=>  Math.ceil((100-p)/speeds[i]))
    let queue =[progresses[0]]
    for(let i=1;i<progresses.length;i++){
        if(queue[0]<progresses[i]){
            answer.push(queue.length)
            queue=[progresses[i]]
        }else{
            queue.push(progresses[i])
        }
    }
    answer.push(queue.length)
    return answer;
}
