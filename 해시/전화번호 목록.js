function solution(phone_book) {
    var answer = true;
    phone_book.sort()
    for(let i =0;i<phone_book.length-1;i++){
        let isSame = true;
        for(let j=0;j<phone_book[i].length;j++){
            if(phone_book[i][j] !== phone_book[i+1][j]){
                isSame=false
                break
            }
        }
        if(isSame){
            answer=false
            break
        }
    }
    return answer;
}
