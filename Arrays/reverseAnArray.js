function solve(n,input){
    let arr=[];
    for (let i = 0; i<n; i++){
        arr[n-i-1] = input[i];
    }
    
    console.log(arr.join(' '));
}