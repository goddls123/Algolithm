function solution(s) {
    var answer = '';
    const list  =s.split(' ')
    for(let i=0;i<list.length;i++){
        list[i]=list[i].charAt(0).toUpperCase()+ list[i].slice(1).toLowerCase()
    }
    return list.join(' ');
}
