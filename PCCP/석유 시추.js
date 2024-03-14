function solution(land) {
    let array = [0,0]
    let index =2
    const n = land.length
    const m = land[0].length

    const dx =[0,-1,0,1]
    const dy =[-1,0,1,0]

    const bfs=(start,flag)=>{
        const queue = [start]
        land[start[0]][start[1]] = flag
        let count = 1

        while(queue.length){
            const [x,y]=queue.shift()

            for(let i=0;i<4;i++){
                const ax = dx[i]+x
                const ay =dy[i]+y

                if(ax>=0&&ay>=0&&ax<n&&ay<m){
                    if(land[ax][ay]===1){
                        land[ax][ay]=flag
                        count++
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
                const count = bfs([i,j],index)
                array[index++]= count
            }
        }
    }
    let max =0
    for(let j=0;j<m;j++){
        const set =new Set()
        for(let i=0;i<n;i++){
            set.add(land[i][j])
        }
        let count =0
        set.forEach(a=>{
            count+=array[a]
        })
        max = Math.max(count,max)
    }
    return max;
}
