function solution(input_string) {
    var answer = '';
    const alphabet={a:0,b:0,c:0,d:0,e:0,f:0,g:0,h:0,i:0,j:0,k:0,l:0,m:0,n:0,o:0,p:0,q:0,r:0,s:0,t:0,u:0,v:0,w:0,x:0,y:0,z:0}
    let end=''
    const stack =[]
    for(let i=0;i<input_string.length;i++){
        if(end !==input_string[i]){
            end = input_string[i]
           alphabet[end]++
        }
    }
   
    for(let [key,value] of Object.entries(alphabet)){
        if(value>1){
            answer+=key
        }
    }
    return answer==='' ? 'N':answer;
}
