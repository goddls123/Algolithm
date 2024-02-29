function solution(dice) {
    var answer = [];
    const n = dice.length;
    const list = new Array(n).fill(0).map((a,i)=>i)
    const combination = getComb(n/2,list)
    
    const getDiceList = (L,d)=>{
        if(L===1){
            return dice[d[0]]
        }
        const array = getDiceList(L-1,d)
        const tmp =[]
        for(let i=0;i<array.length;i++){
            for(let j=0;j<6;j++){
                tmp.push(array[i]+dice[d[L-1]][j])
            }
        }
        return tmp
    }
    const binarySearch=(num, array)=>{
        if(num > array[array.length-1]){
            return array.length
        }
        if(num <array[0]){
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
    let max =0
    combination.forEach((dice1)=>{
        const dice2 = list.filter(l=> !dice1.includes(l))
        const diceList1 = getDiceList(n/2,dice1)
        const diceList2 = getDiceList(n/2,dice2).sort((a,b)=>a-b)
        let win =0 
        for(let i=0;i<diceList1.length;i++){
            win += binarySearch(diceList1[i], diceList2)   
        }
        if(win > max){
            max = win
            answer = dice1
        }
    })
    return answer.map(a=>a+1);
}
function getComb(L,array){
    if(L===1){
        return array.map(a=>[a])
    }
    const result =[]
    
    array.forEach((fixed,index,origin)=>{
        const rest = origin.slice(index+1)
        const comb = getComb(L-1, rest)
        const attach = comb.map(c=>[fixed,...c])
        result.push(...attach)
    })
    return result
}



// (6^5 *2   nlogn) 10C5

//  1. 주사위 뽑고 
//  2. 가능한 경우의 모두 뽑고
//  3. 정렬하여 가능한 승 모두 합해서 가장 큰값 
