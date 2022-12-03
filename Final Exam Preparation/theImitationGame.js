function imitationGame(input){
    let inputCopy = input.slice();
    let message = inputCopy.shift();
    let tempMsg = '';
    let line = inputCopy.shift();

    while(line!=='Decode'){
        let tokens = line.split('|');
        let command = tokens[0];
        
        switch(command){
            case 'Move':
                let lettersCount = Number(tokens[1]);
                let lettersToMove = message.substring(0,lettersCount);
                tempMsg = message.replace(lettersToMove,'');
                tempMsg+=lettersToMove;
                message = tempMsg;
                break;
            case 'Insert':
                let index = +tokens[1];
                let value = tokens[2];
                tempMsg = message.split('');
                tempMsg.splice(index,0,value);
                message = tempMsg.join('');
                break;
            case 'ChangeAll':
                let lettersToMod = tokens[1];
                let modLetters = tokens[2];
                tempMsg = message.split('');
                tempMsg = tempMsg.map(letter=>{
                    if(letter===lettersToMod){
                        letter=modLetters;
                        return letter;
                    }
                    else {return letter;}
                })
                message = tempMsg.join('');

                //↓↓↓ method 2 ↓↓↓
                // let res = new RegExp(`${lettersToMod}`,'g');
                // message = message.replace(res,modLetters);
                break;
        }
        line = inputCopy.shift();
    }
    console.log(`The decrypted message is: ${message}`);
}
imitationGame([
'zzHe',
'ChangeAll|z|l',
'Insert|2|o',
'Move|3',
'Decode']);