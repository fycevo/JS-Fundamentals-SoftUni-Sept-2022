function numberMod(number){
    let numberString = number.toString();
    let isHigherThanFive = false;

    while(!isHigherThanFive){
        let sum = 0;
        let counter = 0;
        for(let i = 0; i<numberString.length; i++){
            sum+=Number(numberString[i]);
            counter++;
        }
        if((sum/counter)>5){
            isHigherThanFive = true;
        }
        else{
            numberString+=9;
        }
    }
    console.log(numberString);
}
numberMod(101)