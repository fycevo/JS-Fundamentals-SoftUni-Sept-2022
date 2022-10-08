function solve(input){
    let resultArray = [];
    let inputArrSum = 0;
    let resultArrSum = 0;
    for (let i = 0; i<input.length; i++){
        let currNum = input[i];

        let odd = currNum - i;
        let even = currNum + i;

        if(currNum % 2 === 0){
            resultArray.push(even);
        } else {
            resultArray.push(odd);
        }
        inputArrSum += currNum;
        resultArrSum += resultArray[i];
    }
    console.log(resultArray);
    console.log(inputArrSum);
    console.log(resultArrSum);
}
solve([5, 15, 23, 56, 35])