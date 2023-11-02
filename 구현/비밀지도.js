function solution(n, arr1, arr2) {
    var answer = Array.from(new Array(n),()=>new Array(n));
    
    for(let i=0;i<n;i++){
        let array1 = arr1[i].toString(2).split('')
        let array2 = arr2[i].toString(2).split('')
        array1 = [...new Array(n-array1.length).fill('0'),...array1]
        array2 = [...new Array(n-array2.length).fill('0'),...array2]
        for(let j=0;j<n;j++){
            if(array1[j]==='1' || array2[j]==='1'){
                answer[i][j]='#'
            }
            else{
                answer[i][j]=' '
            }
        }
    }
    
    return answer.map(a=>a.join(""));
}
