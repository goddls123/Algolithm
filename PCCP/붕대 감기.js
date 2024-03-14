function solution(bandage, health, attacks) {
    let life = health
    const [t,x,y]= bandage
    let now = 0
    for(let [time, attack] of attacks){
        life += (time-now-1)*x + Math.floor((time-now-1)/t)*y
        if(life>health){
            life = health
        }
        life -= attack
        if(life<=0){
            return -1
        }
        now = time
    }
    return life
}
