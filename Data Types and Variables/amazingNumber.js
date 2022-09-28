function solve(number){
    let strNumber = number.toString();
    let sum = 0;
    let isAmazing = false;

    for (let i = 0; i< strNumber.length; i++){
        let currentNumber = Number(strNumber[i]);
        sum+=currentNumber;
    }

    let strSum = sum.toString();
    for (let i = 0; i<strSum.length; i++){
        let currentDigit = strSum[i];
        if(currentDigit == '9'){
            isAmazing=true;
            break;
        }
    }
    console.log(`${number} Amazing? ${isAmazing ? 'True':'False'}`);
}