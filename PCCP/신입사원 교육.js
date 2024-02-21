class minHeap{
    constructor(){
        this.heap=[]
    }
    sum(){
        return this.heap.reduce((a,c)=>a+c,0)
    }
    swap(a,b){
        const tmp = this.heap[a]
        this.heap[a] = this.heap[b]
        this.heap[b]=tmp
    }
    push(v){
        this.heap.push(v)
        if(this.heap.length===1)return

        let i= this.heap.length-1
        let parentI = Math.floor((i-1)/2)

        while(i && this.heap[i]<this.heap[parentI]){
            this.swap(i,parentI)
            i=parentI
            parentI = Math.floor((i-1)/2)
        }
    }
    pop(){
        if(this.heap.length===1){
            return this.heap.pop()
        }

        const tmp =this.heap[0]
        this.heap[0] = this.heap.pop()

        let i =0
        let nextI=0
        while(1){
            let leftI = i*2+1
            let rightI = i*2+2

            if(leftI >=this.heap.length) break

            if(this.heap[leftI] <this.heap[nextI]){
                nextI = leftI
            }

            if(rightI < this.heap.length && this.heap[rightI]<this.heap[nextI]){
                nextI= rightI
            }

            if(nextI===i) break

            this.swap(nextI,i)
            i=nextI
        }
        return tmp
    }
    
}
function solution(ability, number) {
    const queue = new minHeap()

    for(let i=0;i<ability.length;i++){
        queue.push(ability[i])
    }

    for(let i=0;i<number;i++){
        const num1 = queue.pop()
        const num2 = queue.pop()

        queue.push(num1+num2)
        queue.push(num1+num2)
    }
    return queue.sum();
}
