function solve([string]) {
    let health = 100;
    let coins = 0;
    let rooms = string.split('|');
    for (let i = 0; i < rooms.length; i++) {
        let [command, number] = rooms[i].split(' ');
        number = Number(number);
        switch (command) {
            case 'potion':
                healed = health + number > 100 ? 100 - health : number;
                health += healed;
                console.log(`You healed for ${healed} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case 'chest':
                coins += number;
                console.log(`You found ${number} coins.`);
                break;
            default:
                health -= number;
                if (health <= 0) {
                    console.log(`You died! Killed by ${command}.`);
                    console.log(`Best room: ${i + 1}`);
                    return;
                } else {
                    console.log(`You slayed ${command}.`);
                }
                break;
        }
    }
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}