function solution(n, tops) {
    var answer = 0;
    const dp=new Array(n).fill(0)
    const dp1 =new Array(n).fill(0)

    if(tops[0]){
        dp[0]= 4
        dp1[0]=3
    }else{
        dp[0]= 3
        dp1[0]=2
    }
    
    for(let i=1;i<n;i++){
        if(tops[i]){
            dp[i] = (dp[i-1]*3+dp1[i-1]) %10007
            dp1[i] = (dp[i-1]*2+dp1[i-1]) %10007
        }else{
            dp[i]=(dp[i-1]*2+dp1[i-1]) %10007
            dp1[i]=(dp[i-1]+dp1[i-1]) %10007
        }
    }
  
    return dp[n-1];
}
