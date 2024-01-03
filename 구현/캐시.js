function solution(cacheSize, cities) {
    var answer = 0;
    let queue=[]
    
    cities.map(c=>c.toUpperCase()).forEach(city=>{
       const index = queue.indexOf(city) 
       if(index>=0){
           queue.splice(index,1)
           queue.push(city)
           answer++
       }else{
           queue.push(city)
           if(queue.length > cacheSize){
               queue.shift()
            }
           answer+=5
       }
       
        
    })
    return answer;
}
