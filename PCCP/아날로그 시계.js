function solution(h1, m1, s1, h2, m2, s2) {
    var answer = -1;
    
    const getCount=(h,m,s)=>{
        const [hDegree,mDegree,sDegree]=[(h*30+0.5*m+s/120)%360,6*m+0.1*s,6*s]
        let count = -1
        
        if(hDegree<=sDegree)count++
        if(mDegree<=sDegree)count++
        
        count += h*120+2*m
        count -=h
        if(h>=12){
            count-=2
        }
        return count
    }
    answer = getCount(h2,m2,s2) - getCount(h1,m1,s1)
    
    if((h1===0 && m1===0 &&s1===0)||(h1===12&&m1===0&&s1===0)) answer++
    
    return answer;
}
