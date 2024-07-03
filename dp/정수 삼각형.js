function solution(triangle) {
    var answer = 0;
    const n = triangle.length
    const dp = Array.from(new Array(n+1), ()=>new Array(n+1).fill(0))
 
    for(let i=1;i<=n;i++){
        for(let j=0;j<i;j++){
           if(j===0){
               dp[i][j] = triangle[i-1][j] + dp[i-1][j]
               continue
           }
            dp[i][j] = triangle[i-1][j] + Math.max(dp[i-1][j],dp[i-1][j-1])
        }
    }
    return Math.max(...dp[n]);
}
