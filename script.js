const NUM_COLS =4;
const NUM_ROWS = 4;


let gameBoard = document.querySelector('#game_board');

//create a game board
for(let row_num = 0; row_num< NUM_ROWS;row_num++)
{
const row = document.createElement('tr');
gameBoard.append(row);
    for(let col_num =0;col_num<NUM_COLS;col_num++)
    {
     const cell = document.createElement('td');
     const cellId = 'Hole-'+row_num+col_num;
     cell.classList.add('hole');
     cell.setAttribute('id',cellId)
     row.append(cell);
    }
} 


const moleInterval = setInterval(()=>{
    const element = document.querySelector('#'+getRandomId())
    element.classList.add('needs_whack')

    //console.log(element)
},1000)


function getRandomId()
{
const randomcol = getRandomNumber(NUM_COLS);
const randomrow = getRandomNumber(NUM_ROWS);

return 'Hole-'+randomcol+randomrow;
}



function getRandomNumber(num)
{
return Math.floor(Math.random()*num)
}



console.log(gameBoard);