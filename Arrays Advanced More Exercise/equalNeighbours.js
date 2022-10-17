function equalNeighbours(matrix){
    let pairs = 0;
    
    for(let i = 0; i<matrix.length-1; i++){
        let currentRow = matrix[i];
        for(let j = 0; j<=currentRow.length-1; j++){
            if(currentRow[j]==currentRow[j+1]){
                pairs++;
            }
            if(matrix[i][j]==matrix[i+1][j]){
                pairs++;
            }
        }
        if(i===matrix.length-2){
            currentRow = matrix[i+1];
            for(let k = 0; k<currentRow.length; k++){
                if(currentRow[k]==currentRow[k+1]){
                    pairs++;
                }
            }
        }
    }
    console.log(pairs);
}