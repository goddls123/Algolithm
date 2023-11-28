function solution(n, times) {
    var answer = 0;
    let start =0
    let end = 1e20
    let min =Infinity
    
    while(start<=end){
        let mid = Math.floor((start+end)/2)
       
        if(isPossible(n,times,mid)){
            min = Math.min(min,mid)
            end = mid-1
        }else{
            start = mid+1
        }
    }
    return min;
}
function isPossible(n,times,target){
    
    let sum = times.reduce((a,c)=>a+ Math.floor(target/c),0)
    
    return sum>=n
}
