//프로그래머스 레벨 1

function solution(s) {
    var answer = [];
    const numbers={
        'zero':0,
        'one':1,
        'two':2,
        'three':3,
        'four':4,
        'five':5,
        'six':6,
        'seven':7,
        'eight':8,
        'nine':9
    }
    
    for(let [key,value]of Object.entries(numbers)){
        s=s.replaceAll(key,value)
    }
    return +s;
}
