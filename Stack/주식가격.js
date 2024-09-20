function solution(prices) {
    const stack = [[prices[0],0]];
    const answer= new Array(prices.length).fill(0)
    for(let i=1;i<prices.length;i++){
        while(stack.length && stack[stack.length-1][0]>prices[i]){
            const [price, index] = stack.pop()
            answer[index] = i-index
        }
        stack.push([prices[i],i])
    }
    const n = prices.length -1
    while(stack.length ){
        const [price, index] = stack.pop()
        answer[index] = n-index
    }

    return answer;
}
