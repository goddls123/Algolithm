function solution(money) {
    let max =0
    const n = money.length
    const dp = new Array(n+1).fill(0)
    dp[1]=money[0]
    for(let i=2;i<=n-1;i++){
        dp[i] = Math.max(dp[i-1], dp[i-2]+money[i-1])
    }
    
    max =Math.max(max,dp[n-1])
    dp.fill(0)
    dp[2]=money[1]
    for(let i=3;i<=n;i++){
         dp[i] = Math.max(dp[i-1], dp[i-2]+money[i-1])
    }
    max =Math.max(max,dp[n])
    
    return max;
}
