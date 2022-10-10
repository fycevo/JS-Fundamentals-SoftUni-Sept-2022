function solve(arr){
    let rotations = arr.pop();
    arr.reverse();
    for(let i = 0; i<rotations;i++){
        let number = arr.shift();
        arr.push(number);
    }
    arr.reverse();
    console.log(arr.join(' '));
}
