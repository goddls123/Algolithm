function solution(n, money) {
    var answer = 0;
    const dp = new Array(n+1).fill(0)
    dp[0]=1
    
    for(let i=0;i<money.length;i++){
        const coin = money[i]
        for(let j=coin;j<=n;j++){
            dp[j]= (dp[j]+dp[j-coin])%1000000007
        }
    }
    return dp[n];
}
