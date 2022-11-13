function substring(word,text){
    const tokens = text.split(' ');
    for (const token of tokens) {
        if(token.toLowerCase() === word.toLowerCase()){
         return console.log(word);   
        }
    }
    console.log(`${word} not found!`);
}
substring('javascript','JavaScript is the best programming language');