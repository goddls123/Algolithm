function solution(prices) {
    const n = prices.length
    var answer = new Array(n).fill(0);
    const stack =[]
    
    for(let i = 0 ; i< n;i++){
        while(stack.length && stack[stack.length-1][0]>prices[i]){
            const [t,index] = stack.pop()
            answer[index]=i-index
        }
        stack.push([prices[i],i])
    }
    
    while(stack.length){
          const [t,index] = stack.pop()
          answer[index]=n-1-index
    }
    return answer;
}
