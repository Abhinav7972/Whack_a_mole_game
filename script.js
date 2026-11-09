const NUM_COLS =4;
const NUM_ROWS = 4;


let gameBoard = document.querySelector('#game_board');


for(let row = 0; row< NUM_ROWS;row++)
{
const row = document.createElement('tr');
gameBoard.append(row);
    for(let col =0;col<NUM_COLS;col++)
    {
     const cell = document.createElement('td');
     cell.classList.add('hole');
     row.append(cell);
    }
}



console.log(gameBoard);