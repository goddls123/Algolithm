function solution(users, emoticons) {
    const n = emoticons.length
    users =users.map(u=>[(100-u[0])/100 ,u[1]])
    const list = [0.6,0.7,0.8,0.9]
    const getPermu =(array,L)=>{
        if(L==n){
            return array.map(a=>[a])
        }
        const result =[]
        array.forEach((fixed,i,origin)=>{
            const permu = getPermu(origin,L+1)
            const attach = permu.map(p=>[fixed,...p])
            result.push(...attach)
        })
        return result
    }   
    let max = 0
    let maxSum= 0
    getPermu(list,1).forEach(p=>{
        let count =0
        let sum = 0
        for(let i=0;i<users.length;i++){
            let tmp =0
            for(let j=0;j<p.length;j++){
                if(p[j] <=users[i][0]){
                    tmp+= emoticons[j] *p[j]
                }
            }
            if(tmp >=users[i][1]){
                count++
            }else{
                sum+=tmp
            }
        }
        if(max==count){
            maxSum=Math.max(maxSum,sum)
        }else if(max<count){
            max =count
            maxSum = sum
            
        }
    })
    return [max,maxSum];
}
