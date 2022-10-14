function printLoadingBar(percentage){
    let percentCount = '%'.repeat(percentage/10);
    let dotsCount = '.'.repeat(10 - (percentage/10));
    
    if(percentage === 100){
        console.log('100% Complete!');
    } else if(percentage<100){
        console.log(`${percentage}% [${percentCount}${dotsCount}]`);
        console.log(`Still loading...`);
    }
}