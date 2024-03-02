function solution(p) {
    var answer = '';
    const recursion = (w) => {
        if(w.length===0)return ''
        
        let u;
        let v;
        let count =0
        let flag = true
        for(let i=0;i<w.length;i++){
            if(w[i] ==='('){
                count++
            }else {
                count--
            }
            
            if(count<0){
                flag = false
            } else if (count ===0){
                u = w.slice(0,i+1)
                v =w.slice(i+1)
                break
            }
        }
        
        if(flag){
            return u + recursion(v)
        }else{
            let tmp ='(' +recursion(v) +')'
            for(let i=1;i<u.length-1;i++){
                if(u[i]==='('){
                    tmp+=')'
                }else{
                    tmp+='('
                }
            }
            return tmp
        }
    }
    answer = recursion(p)
    
    return answer.trim();
}
