function makeDictionary(list){
    let dictionary = {};
    list.forEach(line => {
        let currentLine = JSON.parse(line);
        let terms = Object.keys(currentLine);
        let definitions = Object.values(currentLine);
        dictionary[terms[0]] = definitions[0];
    });
    Object.keys(dictionary)
      .sort()
      .forEach(function(v, i) {
        console.log(`Term: ${v} => Definition: ${dictionary[v]}`);
       });
}
makeDictionary(['{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',

'{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',

'{"Boiler":"A fuel-burning apparatus or container for heating water."}',

'{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',

'{"Microphone":"An instrument for converting sound waves into electrical energy variationswhich may then be amplified, transmitted, or recorded."}'
]);