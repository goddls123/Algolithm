//프로그래멋 2 , 완전탐색

const set = new Set()
const array = ['', 'A','E','I','O','U']
function solution(word) {
    var answer = 0;
    DFS(0,'')
    answer =  Array.from(set).sort().indexOf(word)
    return answer;
}

const DFS=(count,s)=>{
    if(count===5){
        set.add(s.trim())
        return
    }

    for(let i=0;i<6;i++){
        DFS(count+1,s+array[i])
    }
}
