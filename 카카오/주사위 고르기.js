function solution(dice) {
    var answer = [];
    const n = dice.length
    const list = new Array(n).fill(0).map((a,i)=>i)
    
    const getComb =(L,array)=>{
        if(L==1){
            return array.map(a=>[a])
        }
        const result =[]
        array.forEach((fixed,index,origin)=>{
            const rest = origin.slice(index+1)
            const comb = getComb(L-1,rest)
            const attach = comb.map(c=>[fixed,...c])
            result.push(...attach)
        })
        
        return result
    }
    const getList =(array,L)=>{
        if(L===0){
            return dice[array[L]]
        }
        const tmp = getList(array,L-1)
        const result =[ ]
        for(let i=0;i<tmp.length;i++){
            for(let j=0;j<6;j++){
                result.push(tmp[i]+dice[array[L]][j])
            }
        }
        return result
    }
    
    const binarySearch=(array,num)=>{
        if(num>array[array.length-1]){
            return array.length
        }else if(num<=array[0]){
            return 0
        }
        let left = 0
        let right = array.length-1
        
        while(left<right){
            let mid = Math.floor((left+right)/2)
            
            if(num>array[mid]){
                left = mid+1
            }else{
                right = mid
            }
        }
        return right
    }
    let max =0
    getComb(n/2,list).forEach(dice1=>{
        const dice2 = list.filter(l=>!dice1.includes(l))
        const diceList1 = getList(dice1 , n/2-1)
        const diceList2 = getList(dice2 , n/2-1).sort((a,b)=>a-b)
        
        let win = 0
        for(let i=0;i<diceList1.length;i++){
            win += binarySearch(diceList2,diceList1[i])    
        }
        if(max<win){
            max =win
            answer = dice1
        }
    })
    
    return answer.map(a=>a+1);
}
