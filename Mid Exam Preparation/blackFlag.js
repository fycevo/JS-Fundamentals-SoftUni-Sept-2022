function blackFlag(arr){
    const days = Number(arr.shift());
    const dailyGain = Number(arr.shift());
    const target = Number(arr.shift());

    let totalPlunder = 0;

    for(let i = 1; i<=days; i++){
        totalPlunder+=dailyGain;

        if(i%3===0){
            totalPlunder+=dailyGain/2;
        }
        if(i%5===0){
            totalPlunder*=.7;
        }

    }

    if(totalPlunder>= target){
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        let percentage = (totalPlunder/target)*100; 
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}
blackFlag(["5","40","100"]);
blackFlag((["10", "20", "380"]));