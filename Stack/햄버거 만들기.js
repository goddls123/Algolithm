function solution(ingredient) {
    var answer = 0
    const stack =[]
    for(let i=0;i<ingredient.length;i++){
        if(ingredient[i]===1 && 
           stack[stack.length-1]===3&&stack[stack.length-2]===2&&stack[stack.length-3]===1){
           stack.pop()
           stack.pop()
           stack.pop()
           answer++
         }else {
             stack.push(ingredient[i])
         }
    }
    return answer;
}
