class minHeap{
    constructor(){
        this.heap=[]
    }
    getLength(){
        return this.heap.length
    }
    swap(a,b){
        const tmp = this.heap[a]
        this.heap[a]= this.heap[b]
        this.heap[b]=tmp
    }
    push(v){
        this.heap.push(v)
        if(this.heap.length===1)return
        let i=this.heap.length-1
        let parentI = Math.floor((i-1)/2)
        
        while(i){
            if((this.heap[parentI][0] <this.heap[i][0])
              || (this.heap[parentI][0]===this.heap[i][0] && this.heap[parentI][1]<this.heap[i][1])){
                break
            }
                
            this.swap(i,parentI)
            i=parentI
            parentI = Math.floor((i-1)/2)
        }
    }
    pop(){
        if(this.heap.length===1)return this.heap.pop()
        
        const tmp = this.heap[0]
        this.heap[0]=this.heap.pop()
        
        let i=0
        let nextI=0
        
        while(1){
            let leftI = i*2+1
            let rightI = i*2+2
            
            if(leftI>=this.heap.length)break
            
            if((this.heap[leftI][0] <this.heap[nextI][0])
                || (this.heap[leftI][0]===this.heap[nextI][0] && this.heap[leftI][1]<this.heap[nextI][1])){
                nextI = leftI
            }
            if(rightI <this.heap.length && 
              ((this.heap[rightI][0] <this.heap[nextI][0])
                || (this.heap[rightI][0]===this.heap[nextI][0] && this.heap[rightI][1]<this.heap[nextI][1]))){
                nextI = rightI   
            }
            
            if(i===nextI) break
            
            this.swap(i,nextI)
            
            i=nextI
        }
        return tmp
    }
}

function solution(program) {
    var answer = new Array(11).fill(0);
    const queue = new minHeap()
    
    program.sort((a,b)=>a[1]===b[1] ? b[0]-a[0] : b[1]-a[1])
    let end = 0
    while(program.length || queue.getLength()>0){
        while(program.length && program[program.length-1][1]<=end){
            queue.push(program.pop())
        }
        
        if(program.length && queue.getLength()===0){
            end = program[program.length-1][1]
            queue.push(program.pop())
        }
        
        const [score,start,time] =queue.pop()
        answer[score] += end-start
        end += time
    }
    answer[0]=end
    return answer;
}
