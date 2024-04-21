function solution(friends, gifts) {
    var answer = 0;
    const n = friends.length
    const map = new Map()
    const board = Array.from(new Array(n),()=> new Array(n).fill(0))
    const list = new Array(n).fill(0)
    
    friends.forEach((friend,i)=>{
        map.set(friend,i)
    })
    gifts.forEach((gift)=>{
        const [from,to]=gift.split(' ').map(g=>map.get(g))    
        board[from][to]++
        board[to][from]--
        list[from]++
        list[to]--
    })
    
    for(let i=0;i<n;i++){
        let count =0
        for(let j=0;j<n;j++){
            if(i==j)continue
            if(board[i][j]>board[j][i]){
                count++
            }else if(board[i][j]==board[j][i] && list[i]>list[j]){
                count++
            }
            
        }
        answer = Math.max(count,answer)
    }
    
    return answer;
}
