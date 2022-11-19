function barIncome(customerArr){
    const pattern = /%([A-Z][a-z]+)%[^|$%.]*<(\w+)>[^|$%.]*\|([0-9]+)\|[^|$%.]*?([0-9]+\.?[0-9]*)\$/gm; 
    let totalIncome = 0;
    let command = customerArr.shift();
    while(command!== 'end of shift'){
        let currentData = pattern.exec(command);
        if(currentData){
            let currentCustomer = currentData[1];
            let currentProduct = currentData[2];
            let currentCount = Number(currentData[3]);
            let currentPrice = Number(currentData[4]);

            let totalProductPrice = currentCount*currentPrice;
            console.log((`${currentCustomer}: ${currentProduct} - ${totalProductPrice.toFixed(2)}`));
            totalIncome+=totalProductPrice;
            command = customerArr.shift();
            currentData = pattern.exec(command);
        } else {
            command = customerArr.shift();
        }
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
barIncome(['%George%<Croissant>|2|10.3$',

'%Peter%<Gum>|1|1.3$',

'%Maria%<Cola>|1|2.4$',

'end of shift']);