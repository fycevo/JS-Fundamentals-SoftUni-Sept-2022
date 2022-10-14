function palindromeIntegers(numArr){
    for(let i =0; i<numArr.length; i++){
        let numAsString = numArr[i].toString();
        let reversedString = numAsString.split('').reverse().join('');
        
        if(numAsString===reversedString){
            console.log(true);
        } else {
            console.log(false);
        }
    }
}