function solution(cap, n, deliveries, pickups) {
    var answer = 0;
    const untilNotZero=(array)=>{
        while(array.length && array[array.length-1] ===0){
            array.pop()
        }
    }
    while( deliveries.length|| pickups.length){
        untilNotZero(deliveries)
        untilNotZero(pickups)
        answer+= Math.max(deliveries.length,pickups.length) *2
        let dcap = cap
        let pcap = cap
        while(deliveries.length && dcap){
            let count = deliveries.pop()
            dcap-=count
            if(dcap<0){
                deliveries.push(-dcap)
                dcap = 0
            }
        }
        while(pickups.length && pcap>0){
            let count = pickups.pop()
            pcap-=count
            if(pcap<0){
                pickups.push(-pcap)
            }
        }
    }
    return answer;
}
