class MinHeap{
    constructor(){
        this.heap = []
    }

    getLength(){
        return this.heap.length
    }
    push(value){
        this.heap.push(value)
        let i = this.heap.getLength() -1
        let parentI = parseInt((i-1)/2)

        while(i>0 && this.heap[parentI] > this.heap[i]){
            this.swap(i,parentI)
            i = parentI
            parentI= parseInt((i-1)/2)
        }
    }
    isEmpty(){
        return this.getLength()===0 ? true :false
    }
    pop(){
        if (this.getLength() === 1){
            return this.heap.pop()
        }

        const result = this.heap[0]
        this.heap[0] = this.heap.pop()

        let i = 0
        let nextI = 0

        while(1){
            let leftI = i*2+1
            let rightI = i*2 +2

            if (leftI >= this.getLength()){
                break
            }

            if (this.heap[leftI]< this.heap[nextI]){
                nextI = leftI
            }

            if (rightI < this.getLength && this.heap[rightI]<this.heap[nextI]){
                nextI = rightI
            }

            if(nextI === i){
                break
            }
            this.swap(i,nextI)
            i = nextI
        }

        return result
    }


    swap(a,b){
        const tmp = this.heap[a]
        this.heap[a]=this.heap[b]
        this.heap[b]=tmp
    }
}
