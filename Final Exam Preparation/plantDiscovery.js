function plantDiscovery(input){
    let plantCount = Number(input.shift());
    let plants = {};

    for(let i = 0; i<plantCount; i++){
        let plant = input.shift();
        let [plantName,rarity] = plant.split('<->');
        plants[plantName] = {
            rarity: Number(rarity),
            ratings: [],
        };
    }

    let command = input.shift();
    while(command!=='Exhibition'){
        let [commandName, args] = command.split(': ');
        let [plantName,arg] = args.split(' - ');

        if(plants[plantName]){
            switch(commandName){
                case 'Rate':
                    let rating = Number(arg);
                    plants[plantName].ratings.push(rating);
                    break;
                case 'Update':
                    let rarity = Number(arg);
                    plants[plantName].rarity = rarity;        
                    break;
                case 'Reset':
                    plants[plantName].ratings = [];
                    break;
            }
        } else{
            console.log('error');
        }

        command = input.shift();
    }
    console.log('Plants for the exhibition: ');
    for (const plant in plants) {
        let sum = 0;
        let ratingCount = plants[plant].ratings.length;
        for (const rating of plants[plant].ratings) {
            sum+=rating;
        }
        let avgRating = sum/ratingCount;
        if(!avgRating){
            avgRating=0;
        }
        console.log(`- ${plant}; Rarity: ${plants[plant].rarity}; Rating: ${avgRating.toFixed(2)}`);
    }
}
plantDiscovery((["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"]));