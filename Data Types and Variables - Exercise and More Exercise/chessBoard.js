function solve(n){
    let currColor = 'black';
    let prevColor = '';
    console.log('<div class="chessboard">');
    for (let i = 0; i < n; i++) {
        console.log('   <div>');
        for (let j = 0; j<n; j++){
            console.log(`       <span class="${currColor}"></span>`);
            prevColor = currColor
            currColor = prevColor === 'black' ? 'white' : 'black'
        }
        console.log('   </div>');
        if(n%2==0){
            prevColor = currColor
            currColor = prevColor === 'black' ? 'white' : 'black'
        }
    }
    console.log('</div>');
}
