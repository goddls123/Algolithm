function solution(numbers, target) {
    var answer = 0;
    let list =[numbers[0],-numbers[0]]
    for(let i=1;i<numbers.length;i++){
        let tmp = new Array((i+1)*2).fill(0)
        for(let j=0;j<list.length;j++){
            tmp[j*2] = list[j]+numbers[i]
            tmp[j*2+1] = list[j]-numbers[i]
        }
        list = tmp
    }
    
    
    answer = list.filter(l => l===target).length
    
    return answer;
}
