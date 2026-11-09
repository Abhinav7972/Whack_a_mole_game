const NUM_COLS =4;
const NUM_ROWS = 4;


let currentScore = 0;
updateScore(currentScore);



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

     cell.addEventListener('click',()=>{
        if(cell.classList.contains('needs_whack'))
        {
            cell.classList.remove('needs_whack')
            currentScore+=1;
            updateScore(currentScore);
        }
        else 
        {
            currentScore-=1;
            updateScore(currentScore)
        }

     })
    }
} 

//genrate mole every one second
const moleInterval = setInterval(()=>{
    const element = document.querySelector('#'+getRandomId())
    element.classList.add('needs_whack')

    //console.log(element)
},1000)


//give us random cell ID
function getRandomId()
{
const randomcol = getRandomNumber(NUM_COLS);
const randomrow = getRandomNumber(NUM_ROWS);

return 'Hole-'+randomcol+randomrow;
}


//give us random number from 0 to num-1
function getRandomNumber(num)
{
return Math.floor(Math.random()*num)
}



function updateScore(currentScore)
{
    let score = document.querySelector('#score');

    score.textContent = `Score : ${currentScore}`;

}



console.log(gameBoard);