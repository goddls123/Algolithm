function solution(players, callings) {
    const map = new Map()
    players.forEach((p,i)=>{
        map.set(p,i)
    })
    callings.forEach(c=>{
        const index = map.get(c)
        const front = players[index-1]
        map.set(c,index-1)
        map.set(front,index)
        players[index-1]=c
        players[index]=front
        
    })
    return players
}
