function solve(numbers){
    let sum=0;
    for (let txtNumber of numbers){
        let number = Number(txtNumber);

        if(number%2==0){
            sum+=number;
        }
    }
    console.log(sum);
}