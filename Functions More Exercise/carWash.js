function carWash(commands){
    let cleanPercent = 0;
    for(let i = 0; i<commands.length; i++){
        switch(commands[i]){
            case 'soap': cleanPercent = addSoap(cleanPercent);
                break;
            case 'water': cleanPercent = addWater(cleanPercent);
                break;
            case 'vacuum cleaner': cleanPercent = vacuumClean(cleanPercent);
                break;
            case 'mud': cleanPercent = addMud(cleanPercent);
                break;
        }
    }
    
    function addSoap(percent){
        return percent+=10;
    }
    function addWater(percent){
        return percent+=percent*.2;
    }
    function vacuumClean(percent){
        return percent+=percent*.25;
    }
    function addMud(percent){
        return percent-=percent*.1;
    }
    console.log(`The car is ${cleanPercent.toFixed(2)}% clean.`);
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap','water']);