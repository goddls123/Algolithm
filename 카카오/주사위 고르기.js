function solution(dice) {
    var answer = [];
    const n = dice.length
    const list = new Array(n).fill(0).map((a,i)=>i)
    const getComb = (array,L)=>{
        if(L===1){
            return array.map(a=>[a])
        }
        const result =[]
        array.forEach((fixed,index,origin)=>{
            const rest = origin.slice(index+1)
            const comb = getComb(rest,L-1)
            const attach = comb.map(c=>[fixed,...c])
            result.push(...attach)
        })
        return result
    }
    const getDiceList =(array,L)=>{
        if(L===0){
            return dice[array[0]]
        }
        const tmp = getDiceList(array,L-1)
        const result =[]
        for(let i=0;i<tmp.length;i++){
            for(let j=0;j<6;j++){
                result.push(tmp[i]+dice[array[L]][j])
            }
        }
        return result
    }
    
    const binarySearch=(num,array)=>{
        if(num<=array[0]){
            return 0
        }
        if(num>array[array.length-1]){
            return array.length
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
    let max =0
    getComb(list,n/2).forEach(dice1=>{
        const dice2 = list.filter(l=> !dice1.includes(l))
        const dice1List = getDiceList(dice1,n/2-1)
        const dice2List = getDiceList(dice2,n/2-1).sort((a,b)=>a-b)
        
        let win=0
        for(let i=0;i<dice1List.length;i++){
            win += binarySearch(dice1List[i],dice2List)
        }
        if(max<win){
            max =win
            answer = dice1
        }
    })
    
    return answer.map(a=>a+1);
}
