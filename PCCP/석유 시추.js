function solution(land) {
    var answer = 0;
    let index =2
    const n = land.length
    const m = land[0].length
    const array = [0,0]
    
    const bfs = (start,flag)=>{
        const dx = [0,-1,0,1]
        const dy = [-1,0,1,0]    
        const queue =[start]
        let count =1
        land[start[0]][start[1]] = flag
        while(queue.length){
            const [x,y]= queue.shift()
            
            for(let i=0;i<4;i++){
                const ax = dx[i]+x
                const ay = dy[i]+y
               
                if(ax>=0&&ay>=0&&ax<n&&ay<m){
                   
                    if(land[ax][ay]===1){
                        count++
                        land[ax][ay]=flag
                        queue.push([ax,ay])
                    }
                }
            }
        }
            return count
    }
    
    
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(land[i][j]===1){
                array.push(bfs([i,j],index))
                index++
            }
        }
    }
    let max =0
    for(let i=0;i<m;i++){
        const set = new Set()
        for(let j=0;j<n;j++){
            set.add(land[j][i])
        }
        const count=Array.from(set).reduce((a,c)=>a+array[c],0)
        
        max = Math.max(max,count)
    }
    
    return max;
}
