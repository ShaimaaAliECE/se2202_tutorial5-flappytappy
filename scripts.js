let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns
let nextPlayerLabel = document.getElementById('next-lbl');
nextPlayerLabel.innerText = " "+ nextPlayer;
//initialize the game
// use the value stored in the nextPlayer variable to indicate who the next player is


//This call will create the buttons needed for the gameboard.
createGameBoard()
function createGameBoard(){
    let gameboardPlace = document.getElementsByTagName('td')
        
        for(let i=0; i<gameboardPlace.length;i++){
        let button = document.createElement('button');
    button.innerHTML= "[ ]";
    
    gameboardPlace.appendChild(button);
    }  
}
    
    
    
    
    
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
   

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    
   event.target.innerText ="[" + nextPlayer + "]";
    event.target.disabled = true;
    if (nextPlayer == 'X') nextPlayer ='0';
    else nextPlayer = 'X';
    nextPlaterLabel.innerText = " " + nextPlayer;
   
    
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )
    btn.disabled = true;
    // Check if the game is over
    if (isGameOver()){
        let h1 = document.createElement("h1");
        let textNode = document.createTextNide("Game Over!")
        h1.appendChild(textNode);
        let gameOverLabel = document.getElementById('game-over-lbl');
        gameOverLabel.appendChild(h1);
    }
}
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
  

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 

function isGameOver()
{
    let disabled =0;
    for(let i=0; i<btns.length;i++){
        if(btns[i].disabled){
            disabled++;
    }
    }
    if (disabled ==9){
        return true;
    }
    return false;
    // This function returns true if all the buttons are disabled and false otherwise 
   
}
