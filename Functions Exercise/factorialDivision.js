function factorialDivison(num1, num2){
    let divisonResult = findFactorial(num1)/findFactorial(num2);
    console.log(divisonResult.toFixed(2));

    function findFactorial(number){
        let result = 1;
        for(let i = number; i>0; i--){
            result*=i;
        }
        return result;
    }
}