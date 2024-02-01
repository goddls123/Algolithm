function solution(order) {
    var answer = 0;
    const stack =[]
    const n = order.length
    const array = new Array(n).fill(0)
    let end =1
    for(let i=0;i<n;i++){
        array[order[i]-1] = i+1
    }

    for(let i=0;i<n;i++){
        if(end === array[i]){
            answer++
            end++
        }else if(stack.length && stack[stack.length-1] === end){
            end++
            answer++
            stack.pop()
            i--
        }else{
            stack.push(array[i])
        }
    }
    while(stack.length && stack[stack.length-1]===end){
        stack.pop()
        end++
        answer++
    }
    return answer;
}
