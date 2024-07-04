function solution(prices) {
    const n = prices.length
    var answer = new Array(n).fill(0);
    const stack =[]
    let end = prices[0]
    
    for(let i=0;i<n;i++){
        if(prices[i] < end){
            while(stack.length && prices[i] < stack[stack.length-1][0]){
                const [price, start] =stack.pop()
                answer[start] = i-start
            }
        }
        end = prices[i]
        stack.push([prices[i], i])
    }
    
    while(stack.length){
        const [price,start]=stack.pop()
        answer[start] = n-1 - start
    }
    
    return answer;
}
