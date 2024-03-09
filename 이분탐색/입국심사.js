function solution(n, times) {
    var answer = 0;
    let left =0
    let right = 10**20
    
    const isPossible=(time)=>{
        let count =0
        for(let i=0;i<times.length;i++){
            count+= Math.floor(time/times[i])
        }
        return n <= count
    }
    
    let min = Infinity
    while(left<=right){
        let mid = Math.floor((left+right)/2)
        
        if(isPossible(mid)){
            right = mid -1
            min = Math.min(min,mid)
        }else{
            left = mid+1
        }
    }
    return min;
}
