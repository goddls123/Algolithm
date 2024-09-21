def solution(prices):
    n = len(prices)
    answer = [0]*n
    stack=[[prices[0],0]]
    
    for i in range(1,n):
        while(len(stack) and stack[-1][0] >prices[i]):
            price,index=stack.pop()
            answer[index]=i-index
        stack.append([prices[i],i])
    
    for price,index in stack:
        answer[index]=n-1-index
    return answer
