function drawChristmasTreeV1(){
    let line ='';
    let length = 10;
    for (let i = 1; i <= length; i++) {
        for(let j = length; j>i; j--){
            line+=' ';
        }
        for(let k = 1; k<=i; k++){
            line+='* ';
        }
        console.log(line);
        line='';
    }
}
drawChristmasTreeV1();

function drawChristmasTreeV2(){
    let line ='';
    let length = 10;
    for (let i = 0; i < length; i++) {
        for(let j = length; j>i; j--){
            line+=' ';
        }
        for(let k = 0; k<(2*i+1); k++){
            line+='*';
        }
        console.log(line);
        line='';
    }
}
drawChristmasTreeV2();