function charsToStr(char1, char2, char3){
    console.log(char1+char2+char3);
}

function townInfo(town,population,area){
    console.log(`Town ${town} has population of ${population} and area ${area} square km.`);
}

function meterToKM(meters){
    console.log((meters/100).toFixed(2));
}

function poundToDollar(pounds){
    console.log((pounds*1.31).toFixed(3));
}

function reversedChars(char1,char2,char3) {
    console.log(`${char3} ${char2} ${char1}`);
}

function lowerOrUpper(char1){
    console.log(char1 === char1.toUpperCase() ? 'upper-case':'lower-case');
}

function calc(num1, operator, num2){
    let result = 0;
    switch(operator){
        case '+': result = num1 + num2;
            break;
        case '-': result = num1 - num2;
            break;
        case '*': result = num1 * num2;
            break;
        case '/': result = num1 / num2;
            break;
    }
    console.log(result.toFixed(2));
}