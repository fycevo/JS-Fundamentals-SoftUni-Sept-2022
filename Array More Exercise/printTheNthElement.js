function solve(arr){
    let nStep = Number(arr[arr.length-1]);
    let result = [];
    
    for(let i = 0; i<arr.length-1; i+=nStep){
        result.push(arr[i]);
    }
    console.log(result.join(' '));
}