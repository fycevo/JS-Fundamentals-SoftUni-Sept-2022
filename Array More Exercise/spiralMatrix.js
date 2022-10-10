function solve(x,y){
    let n = x;
    const arr = Array.from({ length: n }, () => []);

    let row = 0;
    let col = 0;

    let colEnd = x-1;
    let rowEnd = y-1;
    let counter = 1;

    while(col <= colEnd && row <= rowEnd){

        for(let i = col; i<=colEnd; i++){
            arr[row][i] = counter;
            counter++;
        }
        row++;

        for(let i = row; i<=rowEnd; i++){
            arr[i][colEnd] = counter;
            counter++
        }
        colEnd--;

        for(let i = colEnd; i>=col; i--){
            arr[rowEnd][i] = counter;
            counter++;
        }
        rowEnd--;

        for(let i = rowEnd; i>=row; i--){
            arr[i][col] = counter;
            counter++;
        }
        col++;
    }
    arr.forEach(row => console.log(row.join(' ')));
}