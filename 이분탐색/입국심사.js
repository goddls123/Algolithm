function solution(n, times) {
    let right = 10**18;
    let left = 1
    
    const isPossible=(mid)=>{
        const number = times.reduce((accu,cur)=>
                                    accu+Math.floor((mid/cur)),0)
        return n<=number
    }
    while(left<right){
        let mid = Math.floor((left+right)/2)
        
        if(isPossible(mid)){
            right = mid
        }else{
            left = mid+1
        }
    }
    
    return right;
}
