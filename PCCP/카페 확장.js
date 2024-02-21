class Node {
    constructor(value){
        this.value =value
        this.next = null
    }
}
class Queue {
    constructor(){
        this.head = null
        this.tail = null
        this.length=0
    }
    push(v){
        const tmp = new Node(v)

        if(this.length===0){
            this.head = tmp
        }else{
            this.tail.next = tmp
        }
        this.tail =tmp
        this.length++
    }
    shift(){
        if(this.length===0) return
        this.head = this.head.next
        this.length--
    }
}
function solution(menu, order, k) {
    let max = 0
    const queue =new Queue()
    queue.push(menu[order[0]])
    for(let i=1;i<order.length;i++){
        let time = k
        while(time!==0 ){
            if(queue.head===null) break

            queue.head.value -= time
            if(queue.head.value>0){
                break
            }
            time = Math.abs(queue.head.value)
            queue.shift() 
        }
        queue.push(menu[order[i]])
        max = Math.max(max,queue.length)
    }
    return max;
}
