function solve(arr){
    let result = [];
    for(let i = 0; i<arr.length; i++){
        let isBigger = true;
        let currNum = arr[i];
        for(let j = i+1; j<arr.length; j++){
            if(currNum<=arr[j]){
                isBigger=false;
            }
        }
        if(isBigger){
            result.push(arr[i]);
        }
    }
    console.log(result.join(' '));
}
solve([14, 24, 3, 19, 15, 17]);