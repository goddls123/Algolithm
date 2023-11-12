function solution(routes) {
    var answer = 1;
    routes = routes.sort((a,b)=> a[1]===b[1] ? a[0]-b[0] : a[1]-b[1])
    let endPoint=routes[0][1]
    for(const[start, end] of routes){
        if(start > endPoint){
            endPoint = end
            answer++
            
        }
    }
    return answer;
}
