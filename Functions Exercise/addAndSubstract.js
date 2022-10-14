function addAndSubstract(fisrtNum, secondNum, thirdNum){
    let sumOfFirstTwo = add(fisrtNum, secondNum);
    let substrResAndThird = substract(sumOfFirstTwo, thirdNum);
    
    console.log(substrResAndThird);

    function add(fisrtNum, secondNum){
        return fisrtNum + secondNum;
    }
    function substract(){
        return sumOfFirstTwo - thirdNum;
    }
}
addAndSubstract(23,6,10);