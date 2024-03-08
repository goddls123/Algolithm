class minHeap{
    constructor(){
        this.heap=[]
    }
    swap(a,b){
        const tmp = this.heap[a]
        this.heap[a]=this.heap[b]
        this.heap[b]=tmp
    }
    length(){
        return this.heap.length
    }
    push(v){
        this.heap.push(v)
        if(this.heap.length===1)return
        let i = this.heap.length-1
        let parentI = Math.floor((i-1)/2)
        
        while(i && this.heap[i][0]<this.heap[parentI][0]){
            this.swap(i,parentI)
            i=parentI
            parentI = Math.floor((i-1)/2)
        }
    }
    pop(){
        if(this.heap.length==1)return this.heap.pop()
        
        const tmp = this.heap[0]
        this.heap[0]=this.heap.pop()
        
        let i= 0
        let nextI =0
        
        while(1){
            let leftI = i*2+1
            let rightI = i*2+2
            
            if(leftI >=this.heap.length) break
            if(this.heap[leftI][0]<this.heap[nextI][0]){
                nextI = leftI
            }
            if(rightI < this.heap.length &&
              this.heap[rightI][0]<this.heap[nextI][0]){
                nextI =rightI
            }
            
            if(nextI===i) break
            
            this.swap(i,nextI)
            i=nextI
        }
        return tmp
    }
}
function solution(n, paths, gates, summits) {
    var answer = [];
    const dp = new Array(n+1).fill(Infinity)
    const graph = Array.from(new Array(n+1),()=>[])
    const queue = new minHeap()
    paths.forEach(([from,to,cost])=>{
        graph[from].push([cost,to])
        graph[to].push([cost,from])
    })
    gates.forEach(g=>{
        dp[g]=0
        queue.push([0,g])
    })
    while(queue.length()>0){
        const [cost,node]=queue.pop()
        
        if(cost >dp[node])continue
        
        for(let i=0;i<graph[node].length;i++){
            const [nCost,next]= graph[node][i]
            const n = Math.max(nCost,cost)
            if(dp[next]>n){
                dp[next] = n
                if(summits.includes(next))continue
                queue.push([n,next])
            }
        }
    }
    summits.forEach(s=>{
        answer.push([s,dp[s]])
    })
    return answer.sort((a,b)=>a[1]===b[1] ? a[0]-b[0] : a[1]-b[1])[0];
}
