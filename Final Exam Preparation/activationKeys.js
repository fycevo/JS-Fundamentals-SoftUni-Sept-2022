function keys(input){
    let activationKey = input.shift();
    let instructions = input.slice();

    let instruction = instructions.shift();
    while(instruction!='Generate'){
        let args = instruction.split('>>>');
        let command = args.shift();
        switch(command){
            case 'Contains': {
                let subStr = args[0];
                if(activationKey.includes(subStr)){
                    console.log(`${activationKey} contains ${subStr}`);
                } else{
                    console.log('Substring not found!');
                }
                break;
            }
            case 'Flip': {
                let casing = args[0];
                let startIndex = args[1];
                let endIndex = args[2];
                
                let part = activationKey.substring(startIndex,endIndex);
                let newPart = casing == 'Upper' ? part.toUpperCase() : part.toLowerCase();
                activationKey = activationKey.replace(part,newPart);
                console.log(activationKey);
                break;
            }
            case 'Slice':{
                let startIndex = args[0];
                let endIndex = args[1];
                substring = activationKey.substring(startIndex,endIndex);
                activationKey = activationKey.replace(substring, '');
                console.log(activationKey);
                break;
            }
        }

        instruction = instructions.shift();
    }
    console.log(`Your activation key is: ${activationKey}`);
}
keys((["abcdefghijklmnopqrstuvwxyz",

"Slice>>>2>>>6",

"Flip>>>Upper>>>3>>>14",

"Flip>>>Lower>>>5>>>7",

"Contains>>>def",

"Contains>>>deF",

"Generate"]));