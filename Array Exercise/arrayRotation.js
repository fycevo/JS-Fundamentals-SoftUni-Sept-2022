function solve(arr, rotations){
    for(let i = 0; i<2;i++){
        let number = arr.shift();
        arr.push(number);
    }
    console.log(arr.join(' '));
}