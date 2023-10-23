const visited={}
function solution(begin, target, words) {
    var answer = 0;
    answer = BFS(begin,target,words)
    return answer;
}

const canChange=(word1,word2)=>{
    let count = 0
    
    for(let i =0;i<word1.length;i++){
        if(word1[i]!==word2[i]){
            count++
        }
        if(count>1) return false
    }
    return count === 1 ? true : false
}

function BFS(begin,target,words){
    const queue=[[begin,0]]
    
    while(queue.length){
        const [word,count] = queue.shift()
        
        if(word===target)return count
        
        for(let i =0 ; i< words.length;i++){
            if(  canChange(word,words[i])){
                
                queue.push([words[i],count+1])
            }
        }
    }
    return 0
}

