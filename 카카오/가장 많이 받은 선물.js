function solution(friends, gifts) {
    const map = new Map()
    const n = friends.length
    const board= Array.from(new Array(n),()=> new Array(n).fill(0))
    const array = new Array(n).fill(0)
    
    for(let i=0;i<friends.length;i++){
        map.set(friends[i],i)
    }
    gifts.forEach(gift=>{
        const [from,to] = gift.split(' ').map(g=>map.get(g))
        
        board[from][to]++
        board[to][from]--
        array[from]++
        array[to]--
    })
    const answer =new Array(n).fill(0)
    for(let i=0;i<n-1;i++) {
        for(let j=i+1;j<n;j++){
            if(board[i][j] >board[j][i]){
                answer[i]++
            }else if(board[i][j]<board[j][i]){
                answer[j]++
            }else{
                if(array[i]>array[j]){
                    answer[i]++
                }else if(array[i]<array[j]){
                    answer[j]++
                }
            }
        }
    }
    
    return Math.max(...answer);
}


// 
// 선물지수 
// 준게 많으면 지수 높음
// 1. 많이 준사람이 2. 지수 높은 사람이
