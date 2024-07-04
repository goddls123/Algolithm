function solution(players, callings) {
    const map = new Map()
    for(let i=0;i<players.length;i++){
        map.set(players[i],i)
    }
    
    for(let name of callings){
        const rank = map.get(name)
        const name2 = players[rank-1]
        
        map.set(name, rank-1)
        map.set(name2, rank)
        
        const tmp = players[rank]
        players[rank] = players[rank-1]
        players[rank-1 ]= tmp
        
    }
    return players;
}
