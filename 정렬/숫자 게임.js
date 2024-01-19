function solution(A, B) {
    var answer = 0;
    
    B.sort((a,b)=>a-b)
    A.sort((a,b)=>a-b)
    
    let j=0
    let i =0
    
    while(i<A.length && j<B.length){
        if(A[i]<B[j]){
            j++
            i++
            answer++
        }else{            
            j++
        }
    }
  

    return answer;
}
