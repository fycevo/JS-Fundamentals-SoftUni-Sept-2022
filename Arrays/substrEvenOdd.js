function solve(numbers){
    let sum=0;
    let sum2=0;
    for (let txtNumber of numbers){
        let number = Number(txtNumber);

        if(number%2==0){
            sum+=number;
        } else{
            sum2+=number;
        }
    }
    console.log(sum-sum2);
}