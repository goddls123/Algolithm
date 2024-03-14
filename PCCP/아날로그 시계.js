function solution(h1, m1, s1, h2, m2, s2) {
    var answer = 0;

    const getCount = (h,m,s)=>{
        const hDegree = (h*30+ m*0.5 + s/120)%360
        const mDegree = m*6 + s*0.1
        const sDegree = 6*s
        let count = 120*h -h +m*2 -1
        if(sDegree >=mDegree){
            count++
        }
        if(sDegree>=hDegree){
            count++
        }
        if(h>=12){
            count-=2
        }

        return count 
    }

    answer = getCount(h2,m2,s2)-getCount(h1,m1,s1)
    if(m1==0 && s1==0 && (h1==0||h1==12)){
        answer++
    }
    return answer;
}
