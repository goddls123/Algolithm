function solution(triangle) {
    var answer = 0;
    const n = triangle.length
    const dp = new Array(n+1)
    for(let i=0;i<=n;i++){
        dp[i]=new Array(i+2).fill(0)
    }
    dp[1][1] = triangle[0][0]
    
    
    for(let i =2 ;i<=n;i++){
        for(let j=1;j<=i;j++){
            dp[i][j] = triangle[i-1][j-1] + Math.max(dp[i-1][j],dp[i-1][j-1])
        }
    }
    return Math.max(...dp[n]);
}
