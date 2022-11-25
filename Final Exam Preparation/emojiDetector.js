function detectEmojis(input){
    let text = input.shift();
    let emojiCount = 0;
    let threshold = 1;
    let coolEmojis = [];

    let digitsResult = text.matchAll(/\d/g);
    for (const digit of digitsResult) {
        let digitToNum = Number(digit[0]);
        threshold*=digit;
    }
    
    let emojiMatches = text.matchAll(/(:{2}|\*{2})(?<name>[A-Z][a-z]{2,})\1/g);
    for (const emojiMatch of emojiMatches) {
        emojiCount++;
        let emoji = emojiMatch[0];
        let emojiName = emojiMatch.groups.name;
        let emojiCoolnes = 0;
        for(let i = 0; i<emojiName.length;i++){
            emojiCoolnes+=emojiName.charCodeAt(i);
        }
        if(emojiCoolnes>=threshold){
            coolEmojis.push(emoji);
        }
    }

    console.log(`Cool threshold: ${threshold}`);
    console.log(`${emojiCount} emojis found in the text. The cool ones are:`);
    for (const coolEmoji of coolEmojis) {
        console.log(coolEmoji);
    }
}
detectEmojis(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);