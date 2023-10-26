//프로그래머스 레벨 1

function solution(n) {
    var answer = n.toString(3).split('').reverse()
    let num = 0
    let log = 1
    
   for(let i=answer.length-1;i>=0;i--){
       if(answer[i]===0)break
       num += log*answer[i]
       log *=3
   }
    return num
}
