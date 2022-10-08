function solve(arr1,arr2){
    let resultArr = [];
    for (let i = 0; i<arr1.length; i++){
        if(i%2===0){
            resultArr.push(Number(arr1[i]) + Number(arr2[i]));
        } else {
            resultArr.push(arr1[i]+arr2[i]);
        }
    }
    console.log(resultArr.join(" - "));
}