function charactersInRange(char1,char2){
    let rangeStart = Math.min(char1.charCodeAt(),char2.charCodeAt());
    let rangeEnd = Math.max(char1.charCodeAt(),char2.charCodeAt());
    console.log(findCharachters(rangeStart,rangeEnd));
    
    function findCharachters(rangeStart,rangeEnd){
        let result = "";
        for(let i = rangeStart + 1; i<rangeEnd; i++){
            result+=String.fromCharCode(i)+" ";
        }
        return result;
    }
}
charactersInRange('#',':');