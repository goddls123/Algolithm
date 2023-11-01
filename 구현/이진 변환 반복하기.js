function solution(s) {
    let zeroCount =0
    let totalCount =0
    while(s!=='1'){
        const tmp = s.replaceAll('0','').length
        zeroCount+= s.length -tmp
        
        s=tmp.toString(2)
        
        totalCount++
     
    }
    return [totalCount,zeroCount];
}
