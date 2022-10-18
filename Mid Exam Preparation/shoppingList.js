function buildShoppingList(input){
    let shoppingList = input.shift().split('!');
    let commands = input;
    let currentLine = commands.shift();

    while(currentLine!=="Go Shopping!"){
        let lineArgs = currentLine.split(' ');
        let currentCommand = lineArgs[0];
        let firstArg = lineArgs[1];
        let secondArg = lineArgs[2];
        switch(currentCommand){
            case 'Urgent': 
                if(!shoppingList.includes(firstArg)){
                    shoppingList.unshift(firstArg);
                }
                break;
            case 'Unnecessary': 
                shoppingList = shoppingList.filter(x => x!=firstArg);
                break;
            case 'Correct': 
                if(shoppingList.includes(firstArg)){
                    let index = shoppingList.indexOf(firstArg);
                    shoppingList.splice(index,1,secondArg);
                }
                break;
            case 'Rearrange':
                if(shoppingList.includes(firstArg)){
                    shoppingList = shoppingList.filter(x => x!=firstArg);
                    shoppingList.push(firstArg);
                }
                break;
        }

        currentLine = commands.shift();
    }
    console.log(shoppingList.join(' '));
}
buildShoppingList(["Tomatoes!Potatoes!Bread","Unnecessary Milk","Urgent Tomatoes","Go Shopping!"]);
buildShoppingList(["Milk!Pepper!Salt!Water!Banana","Urgent Salt","Unnecessary Grapes","Correct Pepper Onion","Go Shopping!"]);