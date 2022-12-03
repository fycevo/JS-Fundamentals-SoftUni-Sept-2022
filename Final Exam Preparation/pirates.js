function pirates(input){
    let cities = {};
    let arr = [];

    while(input[0] !== 'Sail'){
        let command = input.shift().split('||');
        
        let city = command[0];
        let population = Number(command[1]);
        let gold = Number(command[2]);

        let result = arr.find((x)=>x.city === city);
        let index = arr.indexOf(result);

        if(result){
            arr[index].population +=population;
            arr[index].gold += gold;
        } else {
            cities = {city,population,gold};
            arr.push(cities);
        }
    }
    while(input[0]!=='End'){
        let commands = input.shift().split('=>');
        let currCommand = commands.shift();
        
        switch(currCommand){
            case 'Plunder':
                let cityName = commands[0];
                let people = +commands[1];
                let gold = +commands[2];

                console.log(`${cityName} plundered! ${gold} gold stolen, ${people} citizens killed.`);

                let result = arr.find((x)=>x.city === cityName);
                let index = arr.indexOf(result);
                arr[index].population -= people;
                arr[index].gold -= gold;

                if(arr[index].population<=0 || arr[index].gold <= 0){
                    console.log(`${cityName} has been wiped off the map!`);
                    arr.splice(index,1);
                }
                break;
            case 'Prosper':
                let town = commands[0];
                let treasure = +commands[1];

                if(treasure<0){
                    console.log('Gold added cannot be a negative number!');
                } else{
                    let result = arr.find((x)=>x.city === town);
                    let index = arr.indexOf(result);

                    arr[index].gold += treasure;
                    console.log(`${treasure} gold added to the city treasury. ${town} now has ${arr[index].gold} gold.`);
                }
                break;
        }
    }
    if(arr.length !== 0){
        console.log(`Ahoy, Captain! There are ${arr.length} wealthy settlements to go to:`);
        arr.forEach(t =>console.log(`${t.city} -> Population: ${t.population} citizens, Gold: ${t.gold} kg`));
    } else{
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }
}
pirates((["Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"]));