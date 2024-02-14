function solution(keymap, targets) {
    var answer = [];
    const alphabet={}
    for(let i=65 ; i<65+26;i++){
        alphabet[String.fromCharCode(i)]=200
    }
    keymap.forEach(key=>{
        for(let i=0;i<key.length;i++){
            alphabet[key[i]] = Math.min (alphabet[key[i]],i+1)
        }
    })
    targets.forEach(target=>{
        let count =0
        let flag =false
        for(let i=0;i<target.length;i++){
           if( alphabet[target[i]]===200){
               flag=true
               break
           }
            count+=alphabet[target[i]]
        }
        answer.push(flag ? -1 :count)
    })
    return answer;
}
