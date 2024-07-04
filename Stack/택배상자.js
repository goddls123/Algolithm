function solution(order) {
    const stack = [];
    let index =0 ;
    const array = new Array(order.length).fill(0)
    
    for(let i=0;i<order.length;i++){
        array[order[i]-1] = i+1
    }
    
    for(let i=0;i<array.length;i++){
        if(index + 1 === array[i]){
            index++
        }else if(index+1 === stack[stack.length-1]){
           index++
            i--
            stack.pop()
        }else{
             stack.push(array[i])
        }
    }
    while(stack.length && index+1 === stack[stack.length-1]){
        stack.pop()
        index++
    }
    return index;
}
