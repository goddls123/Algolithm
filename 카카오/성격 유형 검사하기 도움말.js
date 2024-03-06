function solution(survey, choices) {
    var answer = '';
    const map ={R:0,T:0,C:0,F:0,J:0,M:0,A:0,N:0}
    const score=[0,3,2,1,0,1,2,3]
    survey.forEach((s,i)=>{
        const [first,second]= s.split("")
        
        if(choices[i]>4){
            map[second]+=score[choices[i]]
        }else if(choices[i]<4){
             map[first]+=score[choices[i]]
        }
    })
    console.log(map)
    answer +=`${map.R ===map.T ? 'R' : map.R > map.T ? 'R': 'T'}`
    answer +=`${map.C ===map.F ? 'C' : map.C > map.F ? 'C': 'F'}`
    answer +=`${map.J ===map.M ? 'J' : map.J > map.M ? 'J': 'M'}`
    answer +=`${map.A ===map.N ? 'A' : map.A > map.N ? 'A': 'N'}`
    return answer;
}
