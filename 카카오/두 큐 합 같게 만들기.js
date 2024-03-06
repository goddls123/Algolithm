function solution(queue1, queue2) {
    let min = Infinity
  
    const n = queue1.length
    let num1 = queue1.reduce((acc,cur)=>acc+cur,0)
    let num2 = queue2.reduce((acc,cur)=>acc+cur,0)
    let num = (num1+num2)
    if(num%2 !==0) return -1
    num/=2
    
    let count = 0
    let tmp = [...queue1,...queue2]
    let left =0 
    let right =n
    while(left<=right && right<2*n){
        if(num1===num){
            min = count
            break
        }else if(num1>num){
            num1 -=tmp[left]
            left++
        }else{
            num1+=tmp[right]
            right++
        }
        count++
    }
    
    left=0
    right=0
    count = 0
    tmp = [...queue2,...queue1]
    
    while(left<=right && right<2*n){
        if(num2===num){
            min = Math.min(min,count)
            break
        }else if(num1>num){
            num2 -=tmp[left]
            left++
        }else{
            num2+=tmp[right]
            right++
        }
        count++
    }
    
    return min === Infinity ? -1:min;
}
