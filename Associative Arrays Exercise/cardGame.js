function cardGame(input){
    let typeOfCards={
        'S':4,
        'H':3,
        'D':2,
        'C':1,
    };
    let specialPowers={
        'J':11,
        'Q':12,
        'K':13,
        'A':14,
    };

    let deck = {};
    let currentDeck = input.shift();
    input.push('FLAG');
    while(currentDeck!='FLAG'){
        let [currentPlayer,allCards] = currentDeck.split(': ')
        let cardsArray = allCards.split(', ');
        if(!deck.hasOwnProperty(currentPlayer)){
            deck[currentPlayer] = [];
        }
        cardsArray.forEach(card => {
            if(!deck[currentPlayer].includes(card)){
                deck[currentPlayer].push(card)
            }
        });
        currentDeck = input.shift();
    }
    
    let scores = {}
    let kvp = Object.entries(deck);
    kvp.forEach(currDeck =>{
        let currentName = currDeck[0];
        let currentCards = currDeck[1];
        if(!scores.hasOwnProperty(currentName)){
            scores[currentName] = 0;
        }
            currentCards.forEach(card => {
                let power = 0;
                let type = 0;
                if(card.length===2){
                    power = card[0];
                    type = card[1];
                } else if(card.length===3){
                    power = card[0]+card[1];
                    type = card[2];
                }

                if(isNaN(power)){
                    scores[currentName]+=Number(specialPowers[power])*Number(typeOfCards[type]);
                } else{
                    scores[currentName]+=Number(power)*Number(typeOfCards[type]);
                }
            });
    });
    for (const player in scores) {
        console.log(`${player}: ${scores[player]}`);
    }
}
cardGame([

'Peter: 2C, 4H, 9H, AS, QS',

'Tomas: 3H, 10S, JC, KD, 5S, 10S',

'Andrea: QH, QC, QS, QD',

'Tomas: 6H, 7S, KC, KD, 5S, 10C',

'Andrea: QH, QC, JS, JD, JC',

'Peter: JD, JD, JD, JD, JD, JD'

])