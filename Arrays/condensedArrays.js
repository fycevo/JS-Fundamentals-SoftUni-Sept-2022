function solve(input){
    let condensed = [];
    let temp = [];
    let isCondensed = false;

    while(!isCondensed){
        if(input.length==1){
            console.log(input[0]);
            break;
        }

        if(condensed[0]==undefined){
            for (let i = 0; i<input.length; i++){
                if(i==input.length-1){break;}
                condensed[i] = Number(input[i])+ Number(input[i+1]);
            }
        } else{
            let length = condensed.length;
            for(let i = 0; i<length; i++){
                if(i==length-1){break;}
                temp[i] = Number(condensed[i])+ Number(condensed[i+1]);
            }
            
            condensed = temp;
            temp = [];
        }

        if(condensed.length==1){
            isCondensed=true;
            console.log(condensed[0]);
        }
    }
}