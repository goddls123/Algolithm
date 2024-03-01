function solution(n, tops) {
    var answer = 0;
    const dp = new Array(n).fill(0)
    const tDp = new Array(n).fill(0)
    if(tops[0]===1){
        dp[0]=4
        tDp[0]=3
    }else{
        dp[0]=3
        tDp[0]=2
    }
    
    for(let i=1;i<n;i++){
        if(tops[i]===1){
            dp[i] = (dp[i-1]*3 +tDp[i-1]) %10007
            tDp[i]= (dp[i-1]*2 + tDp[i-1])%10007
        }else{
            dp[i] = (dp[i-1]*2 +tDp[i-1]) %10007
            tDp[i]= (dp[i-1] + tDp[i-1])%10007
        }
    }
    return dp[n-1];
}
