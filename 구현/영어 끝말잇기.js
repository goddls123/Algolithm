function solution(n, words) {
    var answer = [];
    let prev=words[0]
    const list = new Set()
    list.add(words[0])
    for(let i=1; i<words.length;i++){
        if(list.has(words[i])  || prev[prev.length-1]!==words[i][0]){
            answer.push(i%n+1)
            answer.push(Math.floor(i/n)+1)
            break
        }
        list.add(words[i])
        prev = words[i]
    }
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다. 

    return answer.length ===0 ? [0,0] : answer;
}
