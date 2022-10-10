function solve(arr){
    let res = [];
    let num = 1;
    for(let i = 0; i<arr.length; i++){
        if(arr[i]==='add'){
            res.push(num);
        } else if(arr[i]==='remove') {
            res.pop();
        }
        num++;
    }
    if(res.length>=1){
        console.log(res.join(' '));
    } else {
        console.log('Empty');
    }
}