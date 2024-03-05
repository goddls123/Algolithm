function solution(prices) {
    var answer = [];
    const stack = []
    
    for(let i=0;i<prices.length;i++){
        if(stack.length){
            while(stack.length && stack[stack.length-1][0]>prices[i]) {
                const [price, index] = stack.pop()      
                answer[index]= i-index
            }
            stack.push([prices[i],i])
            
        }else{
            stack.push([prices[i],i])
        }
    }
    while(stack.length){
        const [price, index] = stack.pop()      
        answer[index]= prices.length-index-1
    }
    return answer;
}
