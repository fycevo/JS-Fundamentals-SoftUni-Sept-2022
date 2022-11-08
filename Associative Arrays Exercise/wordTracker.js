function trackWords(input){
    const words = input.shift().split(' ');
    let result = {};

    for(const word of words){
        result[word] = 0;
    }
    input.forEach(word => {
        if(result.hasOwnProperty(word)){
            result[word]++;
        }
    });
    const sorted = Object.entries(result).sort((a,b)=>b[1] - a[1]);
    sorted.forEach(kvp => {
        console.log(`${kvp[0]} - ${kvp[1]}`);
    });
}
trackWords([

    'this sentence',
    
    'In', 'this', 'sentence', 'you', 'have',
    
    'to', 'count', 'the', 'occurrences', 'of',
    
    'the', 'words', 'this', 'and', 'sentence',
    
    'because', 'this', 'is', 'your', 'task'
    
    ]);