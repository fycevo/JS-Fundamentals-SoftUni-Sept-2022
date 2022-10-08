function solve(arr){
    let result = [];
    let temp = [];
    for(let i = 0; i< arr.length; i++){
        let currNum = arr[i];
        for(let j = i+1; j<arr.length; j++){
            if(currNum===arr[j]){
                temp.push(arr[j]);
            } else { break; }
        }
        if(temp.length>result.length){
            result=[];
            result = temp;
        }
        temp = [];
    }
    result.push(result[0]);
    console.log(result.join(' '));
}