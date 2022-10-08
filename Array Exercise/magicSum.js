function solve(arr,num){
    for(let i = 0; i<arr.length-1; i++){
        let currNum = arr[i];
        for(let j = i+1; j<arr.length; j++){
            if(currNum + Number(arr[j]) === num){
                console.log(currNum+' '+arr[j]);
            }
        }
    }
}
solve([1, 7, 6, 2, 19, 23],8)