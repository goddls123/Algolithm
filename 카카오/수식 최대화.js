function solution(expression) {
    var answer = 0;
    const calc ={
        '+':(n1,n2)=>n1+n2,
        "*":(n1,n2)=>n1*n2,
        '-':(n1,n2)=>n1-n2
    }
    let str = ''
    const array=[]
    for(let i=0;i<expression.length;i++){
        if(calc[expression[i]]){
            array.push(Number(str))
            array.push(expression[i])
            str=''
        }else{
            str+=expression[i]
        }
    }
    array.push(Number(str))
    const operations = [
        ['*','+',"-"],['*','-',"+" ],['+','*',"-"],['+','-',"*"],
        ['-','*',"+" ],['-','+',"*" ]
      
    ]

    let max =0
    operations.forEach(oper=>{
        let tmp =[...array]
        oper.forEach(op=>{
            const stack=[tmp[0]]
            for(let i=1;i<tmp.length-1;i+=2){
                if(op==tmp[i]){
                    const num = calc[tmp[i]](stack.pop(),tmp[i+1])    
                    stack.push(num)
                }else{
                    stack.push(tmp[i])
                    stack.push(tmp[i+1])
                }
            }
            tmp = [...stack]
        })
        max = Math.max(max, Math.abs(tmp[0]))
    })
    return max;
}
