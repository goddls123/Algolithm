function solution(numbers, hand) {
    let left =[3,0]
    let right =[3,2]
    hand = hand ==='left' ? 'L':'R'
    const keypad={1:[0,0], 2:[0,1],3:[0,2],4:[1,0],5:[1,1],6:[1,2],7:[2,0],8:[2,1],9:[2,2],0:[3,1]}
    const isLeft=new Set([1,4,7])
    const isRight = new Set([3,6,9])

    var answer = numbers.map(n=>{
        if(isLeft.has(n)){
            left = keypad[n]
            return 'L'
        }else if(isRight.has(n)){
            right=keypad[n]
            return 'R'
        }else{
            const key = keypad[n]
            const lD= Math.abs(key[0]-left[0])+Math.abs(key[1]-left[1])
            const rD= Math.abs(key[0]-right[0])+Math.abs(key[1]-right[1])
            if(rD>lD){
                left = key
                return 'L'
            }else if(lD>rD){
                right =key
                return 'R'
            }else{
                if(hand=='L'){
                    left=key
                }else{
                    right=key
                }
                return hand
            }
        }
    })
    return answer.join('');
}
