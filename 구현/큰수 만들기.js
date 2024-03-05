function solution(number, k) {
    var answer = []
    let index =0
    let range = number.length-k
    number = number.split('').map(Number)
    for(let i=0;i<range;i++){
        let max = number[index]
        
        for(let j=index;j<=k;j++){
            if(number[j]>max){
                max = number[j]
                index =j 
            }
        }
        
        index++
        k++
        answer.push(max)
        
    }

    return answer.join("")
}
