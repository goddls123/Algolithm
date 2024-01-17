function solution(wallpaper) {
    const x = []
    const y =[]
    for(let i=0;i<wallpaper.length;i++){
        for(let j=0; j<wallpaper[i].length;j++){
            if(wallpaper[i][j] ==='#'){
                x.push(i)
                y.push(j)
            }
        }
    }
   const lux = Math.min(...x)
   const luy = Math.min(...y)
   const rdx = Math.max(...x)
   const rdy = Math.max(...y)
   
   return [lux,luy,rdx+1,rdy+1];
}
