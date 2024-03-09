function solution(dice) {
    var answer = [];
    const n= dice.length
    const list = new Array(n).fill(0).map((a,i)=>i)
    
    const getComb = (array,L,N)=>{
        if(L===N){
            return array.map(a=>[a])
        }
        
        const result =[]
        
        array.forEach((fixed,index,origin)=>{
            const rest = origin.slice(index+1)
            const comb = getComb(rest,L+1,N)
            const attach = comb.map(c=>[fixed,...c])
            result.push(...attach)
        })
        
        return result 
    }
    const getList = (array,L,N)=>{
        if(L===N-1){
            return dice[array[L]]
        }
        const tmp = getList(array,L+1,N)
        const result =[]
        for(let i=0;i<tmp.length;i++){
            for(let j=0;j<6;j++){
                result.push(tmp[i] + dice[array[L]][j])
            }
        }
        return result
    }
    const binarySearch=(array,num)=>{
        if(array[array.length-1] <num){
            return array.length
        }
        if(array[0]>=num){
            return 0
        }
        
        let left =0
        let right = array.length-1
        
        while(left<right){
            let mid = Math.floor((left+right)/2)
            
            if(array[mid]<num){
                left = mid+1
            }else{
                right =mid
            }
        }
        return right
    }
    let max = 0
    getComb(list,1,n/2).forEach(dice1=>{
        const dice2 = list.filter(l=>!dice1.includes(l))
        const diceList1 = getList(dice1,0,n/2)
        const diceList2 = getList(dice2,0,n/2).sort((a,b)=>a-b)
        
        let count=0
        for(let i=0;i<diceList1.length;i++){
            count += binarySearch(diceList2, diceList1[i])
        }
        
        if(count > max){
            answer = dice1
            max = count
        }
    })
    return answer.map(a=>a+1);
}
