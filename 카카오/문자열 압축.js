function solution(s) {
    const n = Math.floor(s.length/2)
    let min = s.length
    for(let i=1;i<=n;i++){
        let end =s.slice(0,i)
        let tmp=''
        let count = 1
        for(let j=i;j<s.length;j+=i){
            const str2 = s.slice(j,j+i)
            if(end==str2){
                count++
            }else{
                tmp += count >1 ? count+end : end
                end =str2
                count = 1
            }
        }
        tmp += count >1 ? count+end : end
        min = Math.min(min,tmp.length)
    }
    
    return min;
}
