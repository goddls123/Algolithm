function solution(people, limit) {
    let answer = 0;
    let left = 0
    let right = people.length-1

    people.sort((a,b)=>b-a)

    while(left<=right){
        let num = people[left]
        if(num+people[right] <=limit){
            num+=people[right]
            right--
        }
        left++
        answer++
    }


    return answer;
}
