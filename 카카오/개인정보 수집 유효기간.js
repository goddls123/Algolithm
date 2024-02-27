function solution(today, terms, privacies) {
    var answer = [];
    const [tYear,tMonth,tDate] = today.split('.').map(Number)
    const map = new Map()
    terms.forEach(term=>{
        const [a,t] =term.split(' ')
        map.set(a,Number(t))
    })
    for(let i=0;i<privacies.length;i++){
        const [termD, term] = privacies[i].split(' ')
        const [y,m,d] = termD.split('.').map(Number)
        let date =  tDate -d
        let month = tMonth -m
        let year = tYear-y
        if(date<0){
            date+=28
            month--    
        }
        if(month<0){
            month+=12
            year--
        }
        
        if(map.get(term)*28 <= date+month*28+year*28*12){
            answer.push(i+1)
        }
        
    }
    return answer;
}
