function solution(coin, cards) {
    var answer = 0;
    const n = cards.length/3
    const num = cards.length+1
    let round = 0
    const map = new Map()
    const rest = new Map()
    
    for(let i=0;i<n;i++){
        if(map.has(num-cards[i])){
            round++
            map.delete(num-cards[i])
        }else{
            map.set(cards[i], true)
        }
    }
    
    let index =0
    
    for(index ;index <n ;index++){
        const num1 =cards[ n+index*2]
        const num2 =cards[ n+index*2+1]
        
        if(coin && map.has(num-num1)){
            coin--
            round++
            map.delete(num-num1)
        }else{
            rest.set(num1,true)
        }
        
        if(coin && map.has(num-num2)){
            coin--
            round++
            map.delete(num-num2)
        }else{
            rest.set(num2,true)
        }
        
        if(round){
            round--
        }else{
            let flag = false
            if(coin>=2){
                for(let key of rest.keys()){
                    if(rest.has(num-key)){
                        flag = true
                        coin-=2
                        rest.delete(key)
                        rest.delete(num-key)
                        break
                    }
                }
            }
            if(!flag){
                return index+1
            }
        }
    }    
    return n + 1;
}

// 코인0 , 코인 1, 코인 2
// 최대 라운드 n/3+1
// 1. 지갑 안에 코인0개로 만들 수 있는 갯수 구함
// 2. 라운드마다 코인1개로 만들 수 있으면 라운드 추가
// 3. 나머지 코인은 따로 저장 해둔다.
// 4. round가 0이고 코인이 2개 이상있으면 따로 저장된곳에서 코인 2개 사용해서 round를 이어간다.
