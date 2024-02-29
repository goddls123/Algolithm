function solution(lottos, win_nums) {
    let zero =0
    let count =0
    
    for(let i=0;i<6;i++){
        if(lottos[i]===0){
            zero++
            continue
        }
        if(win_nums.includes(lottos[i])){
            count++
            continue
        }
    }
    const rank = (num)=>{
        switch(num){
            case 6:
                return 1
            case 5:
                return 2
            case 4:
                return 3
            case 3:
                return 4
            case 2:
                return 5
            default:
                return 6
        }
    }
    return [rank(zero+count), rank(count)];
}
